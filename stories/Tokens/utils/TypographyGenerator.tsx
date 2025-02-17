import jsonBase from '@norges-domstoler/dds-design-tokens/dds/tokens/Base.json';
import jsonC from '@norges-domstoler/dds-design-tokens/dds/tokens/Core.json';
import jsonP from '@norges-domstoler/dds-design-tokens/dds/tokens/Public.json';

import { copyButton } from './CopyButton';
import {
  generateTypographyBaseTable,
  isReferencedValue,
  splitReferenceKeys,
  tableStyle,
} from './functions';
import {
  type TokenTypographyBaseJsonObject,
  type TokenTypographySemanticCssFont,
  type TokenTypographySemanticJsonObject,
} from './Tokens.types';
import {
  type DdsTheme,
  Table,
} from '../../../packages/dds-components/src/index';

const baseTokens: Record<string, TokenTypographyBaseJsonObject> = {};
baseTokens['dds-font-size'] = jsonBase['dds-font-size'];
baseTokens['dds-font-family'] = jsonBase['dds-font-family'];
baseTokens['dds-font-weight'] = jsonBase['dds-font-weight'];
baseTokens['dds-font-lineheight'] = jsonBase['dds-font-lineheight'];
baseTokens['dds-font-paragraph-spacing'] =
  jsonBase['dds-font-paragraph-spacing'];
baseTokens['dds-font-letter-spacing'] = jsonBase['dds-font-letter-spacing'];
baseTokens['dds-font-style'] = jsonBase['dds-font-style'];

export const TypographyGenerator = (theme: DdsTheme) => {
  const tokenSet = theme === 'core' ? jsonC : jsonP;
  const tokens: TokenTypographySemanticJsonObject = tokenSet['dds-font'];

  function generateBodyRows() {
    const rows: Array<React.JSX.Element> = [];

    for (const key1 in tokens) {
      for (const key2 in tokens[key1]) {
        const token = tokens[key1][key2];
        const cssFontValuesObj: TokenTypographySemanticCssFont = {
          fontWeight: token.value.fontWeight,
          fontSize: token.value.fontSize,
          lineHeight: token.value.lineHeight,
          fontFamily: token.value.fontFamily,
        };
        const cssFontValuesArray = Object.values(cssFontValuesObj);

        const values = cssFontValuesArray.map(v => {
          if (!isReferencedValue(v)) {
            return v;
          }
          const referenceKeys = splitReferenceKeys(v);
          return baseTokens[referenceKeys[0]][referenceKeys[1]].value;
        });

        const tokenNameFont = `--dds-font-${key1}-${key2}`;
        rows.push(
          <Table.Row key={tokenNameFont}>
            <Table.Cell>{tokenNameFont}</Table.Cell>
            <Table.Cell>
              {values[0]} {values[1]}/{values[2]} {values[3]}
            </Table.Cell>
            <Table.Cell>
              <span
                style={{
                  font: `var(${tokenNameFont})`,
                  textTransform: 'capitalize',
                }}
              >
                {key1} {key2}
              </span>
            </Table.Cell>
            <Table.Cell>{copyButton(tokenNameFont)}</Table.Cell>
            <Table.Cell>{token.description}</Table.Cell>
            <Table.Cell>{cssFontValuesArray.join(' ')}</Table.Cell>
          </Table.Row>,
        );

        const letterSpacingKeys = splitReferenceKeys(token.value.letterSpacing);
        const letterSpacingValue =
          baseTokens[letterSpacingKeys[0]][letterSpacingKeys[1]].value;
        const tokenNameLetterSpacing = `--dds-font-${key1}-${key2}-letter-spacing`;
        rows.push(
          <Table.Row key={tokenNameLetterSpacing}>
            <Table.Cell>{tokenNameLetterSpacing}</Table.Cell>
            <Table.Cell>{letterSpacingValue}</Table.Cell>
            <Table.Cell>
              <span
                style={{
                  font: `var(${tokenNameFont})`,
                  letterSpacing: `var(${tokenNameLetterSpacing})`,
                }}
              >
                Letter spacing
              </span>
            </Table.Cell>
            <Table.Cell>{copyButton(tokenNameLetterSpacing)}</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>{token.value.letterSpacing}</Table.Cell>
          </Table.Row>,
        );

        const paragraphSpacingKeys = splitReferenceKeys(
          token.value.paragraphSpacing,
        );
        const paragraphSpacingValue =
          baseTokens[paragraphSpacingKeys[0]][paragraphSpacingKeys[1]].value;
        const tokenNameParagraphSpacing = `--dds-font-${key1}-${key2}-paragraph-spacing`;
        rows.push(
          <Table.Row key={tokenNameParagraphSpacing}>
            <Table.Cell>{tokenNameParagraphSpacing}</Table.Cell>
            <Table.Cell> {paragraphSpacingValue} </Table.Cell>
            <Table.Cell>
              <div
                style={{
                  borderBottom: '1px solid var(--dds-color-border-default)',
                  width: 'fit-content',
                }}
              >
                <div
                  style={{
                    font: `var(${tokenNameFont})`,
                    marginBottom: `var(${tokenNameParagraphSpacing})`,
                  }}
                >
                  Paragraph spacing
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>{copyButton(tokenNameParagraphSpacing)}</Table.Cell>
            <Table.Cell></Table.Cell>

            <Table.Cell>{token.value.paragraphSpacing}</Table.Cell>
          </Table.Row>,
        );
      }
    }

    return rows;
  }

  return (
    <Table style={tableStyle}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Token</Table.Cell>
          <Table.Cell>Verdi</Table.Cell>
          <Table.Cell>Eksempel</Table.Cell>
          <Table.Cell>Kopier</Table.Cell>
          <Table.Cell>Beskrivelse</Table.Cell>
          <Table.Cell>Base-token</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>{generateBodyRows()}</Table.Body>
    </Table>
  );
};

export const FontFamilyGenerator = () =>
  generateTypographyBaseTable({
    tokens: baseTokens['dds-font-family'],
    type: 'font-family',
    cssRule: 'fontFamily',
    hasDesc: true,
  });

export const FontSizeGenerator = () =>
  generateTypographyBaseTable({
    tokens: baseTokens['dds-font-size'],
    type: 'font-size',
    cssRule: 'font-size',
  });

export const FontWeightGenerator = () =>
  generateTypographyBaseTable({
    tokens: baseTokens['dds-font-weight'],
    type: 'font-weight',
    cssRule: 'fontWeight',
  });

export const FontLineheightGenerator = () =>
  generateTypographyBaseTable({
    tokens: baseTokens['dds-font-lineheight'],
    type: 'font-lineheight',
    cssRule: 'lineHeight',
    hasDesc: true,
  });

export const FontStyleGenerator = () =>
  generateTypographyBaseTable({
    tokens: baseTokens['dds-font-style'],
    type: 'font-style',
    cssRule: 'fontStyle',
  });

export const FontLetterSpacingGenerator = () =>
  generateTypographyBaseTable({
    tokens: baseTokens['dds-font-letter-spacing'],
    type: 'font-letter-spacing',
    cssRule: 'letterSpacing',
    hasDesc: true,
  });

export const FontParagraphSpacingGenerator = () =>
  generateTypographyBaseTable({
    tokens: baseTokens['dds-font-paragraph-spacing'],
    type: 'font-paragraph-spacing',
    cssRule: 'marginBottom',
    hasDesc: true,
    exampleWrapperStyle: {
      borderBottom: '1px solid var(--dds-color-border-default)',
      width: 'fit-content',
    },
  });
