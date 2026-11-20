import {
  globSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, posix } from 'node:path';

import { createApi, packages } from './docs-api.mjs';
import { convertMdx, github, markdown } from './docs-markdown.mjs';

const origin = 'https://design.domstol.no';
const output = 'docs-static';
const read = file => readFileSync(file, 'utf8');
const files = new Map();
const groups = new Map();
const add = (path, content, group, title) => {
  if (files.has(path)) throw new Error(`To kilder bruker samme sti: ${path}`);
  files.set(path, content.trim() + '\n');
  if (group) {
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push([title, `${origin}/${path}`]);
  }
};

const docs = globSync([
  'packages/*/src/**/*.mdx',
  'packages/dds-components/stories/patterns/*/*.mdx',
])
  .sort()
  .map(file => {
    const [, pkg] = file.split('/');
    const name = posix.basename(file, '.mdx');
    const group = file.includes('/patterns/')
      ? 'Mønstre'
      : name.startsWith('use')
        ? 'Hooks'
        : pkg === 'development-utils'
          ? 'Pakker og oppslagsverk'
          : 'Komponenter';
    const folder = {
      Mønstre: 'monstre',
      Hooks: 'hooks',
      Komponenter: 'komponenter',
      'Pakker og oppslagsverk': 'pakker',
    }[group];
    return {
      file,
      pkg,
      name,
      group,
      path: `ki/${folder}/${name.toLowerCase()}.md`,
      source: read(file),
    };
  });

const api = createApi();
const pathsByTitle = new Map(
  docs
    .map(({ file, source, path }) => [convertMdx(file, source), path])
    .filter(([title]) => title),
);
for (const { file, pkg, name, group, path, source } of docs) {
  const content = convertMdx(file, source, pathsByTitle, {
    path,
    symbol: symbol => api.render(pkg, symbol),
  });
  add(path, content, group, content.match(/^# (.+)$/m)?.[1] ?? name);
}

for (const pkg of packages) {
  const name = JSON.parse(read(`packages/${pkg}/package.json`)).name;
  for (const [file, suffix, group] of [
    ['README.md', '', 'Pakker og oppslagsverk'],
    ['CHANGELOG.md', '-endringer', 'Endringslogger'],
  ]) {
    const source = `packages/${pkg}/${file}`;
    const title = suffix ? `Endringslogg: ${name}` : name;
    const tree = markdown.parse(read(source));
    const rewrite = node => {
      if (
        node.type === 'image' &&
        node.url.startsWith('https://img.shields.io/')
      )
        return [];
      if (
        ['link', 'definition', 'image'].includes(node.type) &&
        !/^(?:[a-z]+:|#)/i.test(node.url)
      )
        node.url = `${github}${posix.join(posix.dirname(source), node.url)}`;
      if (node.children) node.children = node.children.flatMap(rewrite);
      if (
        node.type === 'paragraph' &&
        !node.children.some(n => n.type !== 'text' || n.value.trim())
      )
        return [];
      if (node.type === 'link' && !node.children.length) return [];
      return [node];
    };
    rewrite(tree);
    if (suffix) tree.children[0] = markdown.parse(`# ${title}`).children[0];
    const references =
      pkg === 'dds-formatting' && !suffix
        ? api
            .names(pkg)
            .map(symbol => api.render(pkg, symbol))
            .filter(Boolean)
            .join('\n\n')
        : '';
    add(
      `ki/pakker/${name.split('/')[1]}${suffix}.md`,
      [markdown.stringify(tree), references].filter(Boolean).join('\n'),
      group,
      title,
    );
  }
}

const tokens = 'packages/dds-tokens/generated-tokens/css';
for (const file of globSync(`${tokens}/ddsTokens-*.css`).sort()) {
  const theme = posix.basename(file, '.css').replace('ddsTokens-', '');
  const rows = [...read(file).matchAll(/^\s*(--dds-[\w-]+):\s*([^;]+);/gm)];
  if (!rows.length) throw new Error(`Fant ingen tokens i ${file}`);
  const code = value =>
    `\`${value.replace(/\s+/g, ' ').replaceAll('|', '\\|')}\``;
  const content = [
    `# CSS-tokens: ${theme}`,
    `[Bruk av designtokens](./dds-design-tokens.md) · [Kilde](${github}${file})`,
    '| CSS-variabel | Verdi |\n| --- | --- |',
    ...rows.map(([, key, value]) => `| ${code(key)} | ${code(value)} |`),
  ].join('\n');
  add(
    `ki/pakker/tokens-${theme}.md`,
    content.replace(/\n(?=\[|\| CSS)/g, '\n\n'),
    'Designtokens per tema',
    `CSS-tokens: ${theme}`,
  );
}

const iconEntries = api.icons();
if (!iconEntries.length)
  throw new Error('Fant ingen eksporterte ikoner med kildefil');
add(
  'ki/ikoner.md',
  [
    '# Ikoner',
    'Importer ikonene fra `@norges-domstoler/dds-components`. Se [Icon](./komponenter/icon.md) for bruk.',
    ...iconEntries.map(
      ([name, description]) =>
        `- \`${name}\`${description ? `: ${description.replace(/\n+/g, ' ')}` : ''}`,
    ),
  ].join('\n\n'),
  'Pakker og oppslagsverk',
  'Ikoner',
);

const themeApi = api.render('dds-components', 'useTheme');
if (!themeApi) throw new Error('Fant ikke eksportert API for useTheme');
add(
  'ki/hooks/usetheme.md',
  `# useTheme\n\nLes aktivt tema fra [DdsProvider](../komponenter/ddsprovider.md).\n\n${themeApi}`,
  'Hooks',
  'useTheme',
);

const overview = read('docs/ki/oversikt.md');
for (const file of globSync('docs/ki/**/*.md').sort()) {
  if (file === 'docs/ki/oversikt.md') continue;
  const content = read(file);
  const title = content.match(/^# (.+)$/m)?.[1];
  if (!title) throw new Error(`${file}: mangler tittel`);
  add(
    file.replace(/^docs\//, ''),
    content,
    'Retningslinjer og veiledning',
    title,
  );
}

add(
  'ki/oversikt.md',
  `${overview.trim()}\n\n${[...groups].map(([group, entries]) => `## ${group}\n\n${entries.map(([title, url]) => `- [${title}](${new URL(url).pathname.replace('/ki/', './')})`).join('\n')}`).join('\n\n')}`,
);
const index = read('llms.txt').trim();
add(
  'llms.txt',
  `${index}\n\n${[...groups].map(([group, entries]) => `## ${group}\n\n${entries.map(([title, url]) => `- [${title}](${url})`).join('\n')}`).join('\n\n')}`,
);

function checkLinks(tree, path) {
  function visit(node) {
    if (['link', 'definition', 'image'].includes(node.type)) {
      const { origin: host, pathname } = new URL(node.url, `${origin}/${path}`);
      if (
        host === origin &&
        pathname.startsWith('/ki/') &&
        !files.has(pathname.slice(1))
      )
        throw new Error(`${path}: mangler mål for ${node.url}`);
    }
    node.children?.forEach(visit);
  }
  visit(tree);
}

for (const [path, content] of files) checkLinks(markdown.parse(content), path);
rmSync(output, { recursive: true, force: true });
for (const [path, content] of files) {
  const target = `${output}/${path}`;
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content);
}
console.log(
  `Bygde og sjekket ${files.size - 1} Markdown-sider og llms.txt i ${output}/.`,
);
