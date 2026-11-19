import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import { storyNameFromExport, toId } from 'storybook/internal/csf';

export const markdown = remark()
  .use(remarkGfm, { tablePipeAlign: false })
  .data('settings', { bullet: '-' });
const mdx = remark().use(remarkGfm).use(remarkMdx);
export const github = 'https://github.com/domstolene/designsystem/blob/main/';
export const zeroheight = 'https://design.domstol.no/987b33f71/p/';
export const storybook = 'https://domstolene.github.io/designsystem/?path=';

const text = value => ({ type: 'text', value });
const paragraph = (...children) => ({ type: 'paragraph', children });
const link = (url, ...children) => ({ type: 'link', url, children });
const attr = (node, name) => node.attributes.find(a => a.name === name)?.value;
const expression = (node, name) =>
  attr(node, name)?.data?.estree?.body[0]?.expression;
const stripIndent = value => {
  const lines = value.replace(/^(?:[ \t]*\r?\n)+|\n\s*$/g, '').split('\n');
  const indent = Math.min(
    ...lines
      .filter(line => line.trim())
      .map(line => line.match(/^ */)[0].length),
  );
  return lines
    .map(line => line.slice(indent))
    .join('\n')
    .trimEnd();
};

export function convertMdx(file, source, pathsByTitle, api) {
  const tree = mdx.parse(source);
  const imports = new Map(
    tree.children
      .filter(n => n.type === 'mdxjsEsm')
      .flatMap(n => n.data.estree.body)
      .filter(n => n.type === 'ImportDeclaration')
      .flatMap(n => n.specifiers.map(s => [s.local.name, n.source.value])),
  );
  const meta = tree.children.find(n => n.name === 'Meta');
  const getStory = reference => {
    if (!reference) return;
    const [alias, named] = reference.split('.');
    const imported = imports.get(alias);
    if (!imported?.endsWith('.stories')) return;
    const stem = join(dirname(file), imported);
    let story;
    for (const ext of ['.tsx', '.ts']) {
      if (existsSync(`${stem}${ext}`)) {
        story = readFileSync(`${stem}${ext}`, 'utf8');
        break;
      }
    }
    if (!story)
      throw new Error(`${file}: finner ikke Storybook-kilden ${imported}`);
    return {
      component: story.match(/\bcomponent:\s*(\w+)/)?.[1],
      title: story.match(/\btitle:\s*['"]([^'"]+)['"]/)?.[1],
      name: named || alias,
    };
  };
  const metaOf = meta && attr(meta, 'of')?.value;
  const defaultStory = metaOf && getStory(metaOf);
  const docsTitle = (meta && attr(meta, 'title')) || defaultStory?.title;
  if (!pathsByTitle) return docsTitle;

  const defaultName = file
    .split('/')
    .at(-1)
    .replace(/\.mdx$/, '');
  const apis = new Set();
  const fail = node => {
    throw new Error(
      `${file}:${node.position?.start.line}: støtter ikke ${node.name ?? node.type}`,
    );
  };
  const storyLink = (node, url, label) => {
    const result = link(url, text(label));
    return node.type === 'mdxJsxTextElement' ? result : paragraph(result);
  };
  const elements = node =>
    (node?.children ?? [])
      .flatMap(n => (n.type === 'paragraph' ? n.children : [n]))
      .filter(n => n.name);
  const blockTypes = new Set([
    'paragraph',
    'heading',
    'list',
    'code',
    'blockquote',
    'table',
    'thematicBreak',
  ]);

  function asBlocks(nodes) {
    const blocks = [];
    let inline = [];
    const flush = () => {
      if (inline.some(n => n.type !== 'text' || n.value.trim()))
        blocks.push(paragraph(...inline));
      inline = [];
    };
    for (const child of nodes) {
      if (blockTypes.has(child.type)) {
        flush();
        blocks.push(child);
      } else {
        inline.push(child);
      }
    }
    flush();
    return blocks;
  }

  function convert(node) {
    if (node.type === 'mdxjsEsm') return [];
    if (node.type === 'paragraph')
      return asBlocks(node.children.flatMap(convert));
    if (node.type === 'mdxTextExpression' && /^['"] ['"]$/.test(node.value))
      return [text(' ')];
    if (!node.type.startsWith('mdx'))
      return [
        {
          ...node,
          ...(node.url &&
            !/^(?:[a-z]+:|#)/i.test(node.url) && {
              url: `${github}${join(dirname(file), node.url)}`,
            }),
          ...(node.children && { children: node.children.flatMap(convert) }),
        },
      ];
    const ref = attr(node, 'of')?.value;
    const title = attr(node, 'title');
    switch (node.name) {
      case 'Meta':
      case 'style':
      case 'br':
        return [];
      case 'ComponentLinkRow': {
        const href = attr(node, 'docsHref');
        const figma = attr(node, 'figmaHref');
        return [
          paragraph(
            link(`${github}${file}`, text('Kilde')),
            ...(href
              ? [
                  text(' · '),
                  link(`${zeroheight}${href}`, text('design.domstol.no')),
                ]
              : []),
            ...(figma
              ? [
                  text(' · '),
                  link(
                    `https://www.figma.com/design/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?${figma}`,
                    text('Figma'),
                  ),
                ]
              : []),
          ),
        ];
      }
      case 'LinkTo': {
        const target = pathsByTitle.get(title);
        const story = attr(node, 'story');
        const url =
          target && (!story || story === 'docs')
            ? relative(dirname(api.path), target)
            : `${storybook}/${!story || story === 'docs' ? 'docs' : 'story'}/${toId(title, story || 'docs')}`;
        return [link(url, ...node.children.flatMap(convert))];
      }
      case 'Canvas':
      case 'Story': {
        if (!ref && node.children.length) return node.children.flatMap(convert);
        const story = getStory(ref);
        if (!story?.title) fail(node);
        const name = storyNameFromExport(story.name);
        return [
          storyLink(
            { ...node, type: 'mdxJsxFlowElement' },
            `${storybook}/story/${toId(story.title, name)}`,
            `Storybook: ${name}`,
          ),
        ];
      }
      case 'Controls':
      case 'ArgTypes': {
        const symbol =
          getStory(ref)?.component ??
          (node.name === 'ArgTypes' && ref ? ref : defaultName);
        if (apis.has(symbol)) return [];
        apis.add(symbol);
        const details = api.symbol(symbol);
        if (details) return markdown.parse(details).children;
        return [
          storyLink(
            node,
            `${storybook}/docs/${toId(docsTitle ?? defaultName, 'docs')}`,
            `API for ${symbol} i Storybook`,
          ),
        ];
      }
      case 'Source': {
        const code = expression(node, 'code');
        let value =
          code?.type === 'TemplateLiteral' && code.expressions.length === 0
            ? code.quasis[0].value.cooked
            : code?.value;
        if (typeof value !== 'string') fail(node);
        // The MDX parser can remove indentation inside JSX expressions.
        // For literal templates without escapes, recover the original line spacing.
        if (code.type === 'TemplateLiteral') {
          const original = source.slice(
            node.position.start.offset,
            node.position.end.offset,
          );
          const raw = original.match(/\bcode\s*=\s*\{\s*`([\s\S]*)`\s*\}/)?.[1];
          if (raw && !raw.includes('\\')) value = raw;
        }
        return [
          {
            type: 'code',
            lang: attr(node, 'language') ?? 'tsx',
            value: stripIndent(value),
          },
        ];
      }
      case 'Tabs': {
        const tabs = elements(
          elements(node).find(n => n.name === 'TabList'),
        ).filter(n => n.name === 'Tab');
        const panels = elements(
          elements(node).find(n => n.name === 'TabPanels'),
        ).filter(n => n.name === 'TabPanel');
        if (tabs.length !== panels.length) fail(node);
        return panels.flatMap((panel, i) => {
          const children = asBlocks(panel.children.flatMap(convert));
          if (!children.length) return [];
          // Use bold labels: tab groups can sit under headings of different levels.
          return [
            paragraph({
              type: 'strong',
              children: tabs[i].children
                .flatMap(n => (n.type === 'paragraph' ? n.children : [n]))
                .flatMap(convert),
            }),
            ...children,
          ];
        });
      }
      case 'Table.Wrapper':
      case 'CardsContainter':
        return node.children.flatMap(convert);
      case 'Table':
        return [
          {
            type: 'table',
            children: elements(node)
              .flatMap(elements)
              .map(row => ({
                type: 'tableRow',
                children: elements(row).map(cell => ({
                  type: 'tableCell',
                  children: cell.children
                    .flatMap(n => (n.type === 'paragraph' ? n.children : [n]))
                    .flatMap(convert),
                })),
              })),
          },
        ];
      case 'Divider':
        return [{ type: 'thematicBreak' }];
      case 'CardLink':
        return [
          paragraph(
            link(attr(node, 'href'), text(title)),
            text(`: ${attr(node, 'body')}`),
          ),
        ];
      case 'Link':
        return [link(attr(node, 'href'), ...node.children.flatMap(convert))];
      case 'LocalMessage':
      case 'blockquote':
        return [
          {
            type: 'blockquote',
            children: asBlocks(node.children.flatMap(convert)),
          },
        ];
      case 'p':
        return asBlocks(node.children.flatMap(convert));
      default:
        return fail(node);
    }
  }

  tree.children = asBlocks(tree.children.flatMap(convert));
  if (
    tree.children.some(n => !blockTypes.has(n.type) && n.type !== 'definition')
  ) {
    throw new Error(
      `${file}: uventede Markdown-blokker: ${tree.children
        .filter(n => !blockTypes.has(n.type) && n.type !== 'definition')
        .map(n => `${n.type}:${n.value?.slice(0, 100)}`)
        .join(', ')}`,
    );
  }
  if (!apis.has(defaultName)) {
    const details = api.symbol(defaultName);
    if (details) tree.children.push(...markdown.parse(details).children);
  }
  if (!tree.children.some(n => n.type === 'heading' && n.depth === 1)) {
    tree.children.unshift({
      type: 'heading',
      depth: 1,
      children: [text(defaultName)],
    });
  }
  return markdown.stringify(tree);
}
