import { relative } from 'node:path';

import ts from 'typescript';

import { github } from './docs-markdown.mjs';

export const packages = [
  'dds-components',
  'dds-tokens',
  'dds-formatting',
  'development-utils',
];

export function createApi() {
  const config = ts.readConfigFile('tsconfig.json', ts.sys.readFile);
  if (config.error)
    throw new Error(
      ts.flattenDiagnosticMessageText(config.error.messageText, '\n'),
    );
  const { options } = ts.parseJsonConfigFileContent(config.config, ts.sys, '.');
  const entries = packages.map(name => `packages/${name}/src/index.ts`);
  // Resolve workspace imports even before the npm packages have been built.
  options.paths = {
    ...options.paths,
    '@norges-domstoler/dds-design-tokens': [
      './packages/dds-tokens/src/index.ts',
    ],
  };
  const program = ts.createProgram([...entries, 'global.d.ts'], options);
  const checker = program.getTypeChecker();
  const format = ts.TypeFormatFlags.NoTruncation;
  const source = decl => relative(process.cwd(), decl.getSourceFile().fileName);
  const resolve = symbol =>
    symbol.flags & ts.SymbolFlags.Alias
      ? checker.getAliasedSymbol(symbol)
      : symbol;
  const exported = new Map(
    entries.map((file, i) => [
      packages[i],
      new Map(
        checker
          .getExportsOfModule(
            checker.getSymbolAtLocation(program.getSourceFile(file)),
          )
          .map(symbol => [symbol.name, resolve(symbol)]),
      ),
    ]),
  );
  const description = symbol =>
    ts.displayPartsToString(symbol.getDocumentationComment(checker));
  const inline = value => {
    const ticks = '`'.repeat(
      1 + Math.max(0, ...[...value.matchAll(/`+/g)].map(m => m[0].length)),
    );
    return `${ticks} ${value.replace(/\s+/g, ' ')} ${ticks}`;
  };

  function render(pkg, name) {
    const [main, member] = name.split('.');
    let symbol = exported.get(pkg)?.get(main);
    if (!symbol) return;
    if (member)
      symbol = checker.getPropertyOfType(
        checker.getTypeOfSymbol(symbol),
        member,
      );
    const decl = symbol?.valueDeclaration ?? symbol?.declarations?.[0];
    if (!decl) return;
    const type = checker.getTypeOfSymbol(symbol);
    const signatures = type.getCallSignatures();
    if (!signatures.length) return;
    const reactComponent = /^[A-Z]/.test(main);
    const props = new Map();
    if (reactComponent)
      for (const signature of signatures) {
        const param = signature.parameters[0];
        if (!param) continue;
        for (const prop of checker.getPropertiesOfType(
          checker.getTypeOfSymbolAtLocation(param, decl),
        )) {
          if (
            !prop.declarations?.some(d =>
              source(d).startsWith(`packages/${pkg}/src/`),
            )
          )
            continue;
          props.set(prop.name, prop);
        }
      }
    const docs = description(symbol);
    const returns = symbol
      .getJsDocTags(checker)
      .find(tag => ['return', 'returns'].includes(tag.name));
    const signatureText = signatures
      .map(
        signature =>
          `${name}${checker.signatureToString(signature, decl, format).replace(/\(\{[^\n]*?\}: /, '(props: ')}`,
      )
      .join('\n');
    const propertyLines = [...props.values()].map(prop => {
      const optional = prop.flags & ts.SymbolFlags.Optional ? ' (valgfri)' : '';
      const propertyType = checker
        .typeToString(
          checker.getTypeOfSymbolAtLocation(prop, decl),
          decl,
          format,
        )
        .replace(/\bimport\(["'][^"']+["']\)\./g, '');
      const details = description(prop);
      const defaultValue = prop
        .getJsDocTags(checker)
        .find(tag => ['default', 'defaultValue'].includes(tag.name));
      return `- \`${prop.name}\`${optional}: ${inline(propertyType)}${details ? ` — ${details.replace(/\n+/g, ' ')}` : ''}${defaultValue?.text ? ` Standard: ${ts.displayPartsToString(defaultValue.text)}.` : ''}`;
    });
    return [
      `**API: \`${name}\`**`,
      docs,
      returns?.text &&
        `**Returverdi:** ${ts.displayPartsToString(returns.text)}`,
      `[TypeScript-kilde](${github}${source(decl)}#L${decl.getSourceFile().getLineAndCharacterOfPosition(decl.getStart()).line + 1})`,
      signatureText.length <= 1500
        ? '```ts\n' + signatureText + '\n```'
        : 'Se TypeScript-kilden for full typesignatur.',
      propertyLines.join('\n'),
    ]
      .filter(Boolean)
      .join('\n\n');
  }

  return {
    render,
    names: pkg => [...exported.get(pkg).keys()].sort(),
    icons: () =>
      [...exported.get('dds-components')]
        .filter(
          ([name, symbol]) =>
            name.endsWith('Icon') &&
            symbol.valueDeclaration &&
            source(symbol.valueDeclaration).includes('/Icon/icons/'),
        )
        .map(([name, symbol]) => [name, description(symbol)])
        .sort(([a], [b]) => a.localeCompare(b)),
  };
}
