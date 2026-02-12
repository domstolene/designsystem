export type ThemeMain = 'core' | 'public';
export type ThemeMode = 'light' | 'dark';

interface Token<T = string> {
  value: T;
  type: string;
  description?: string;
}

export type TokenNode = Token;

export type TokenGroup = Record<string, TokenNode>;

export type TokenColorJsonObject = Record<string, TokenGroup>;

export type TokenTypographyBaseJsonObject = TokenGroup;

export interface TokenTypographySemanticCssFont {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
}

export type TokenTypographySemanticJsonValue =
  TokenTypographySemanticCssFont & {
    letterSpacing: string;
    paragraphSpacing: string;
    textDecoration: string;
  };

export type TokenTypographySemanticJsonObject = Record<
  string,
  Record<string, Token<TokenTypographySemanticJsonValue>>
>;

export type TokenGridJsonObject = Record<string, TokenGroup>;

export type TokenBreakpointJsonObject = TokenGroup;

export type TokenMotionJsonObject = Record<string, TokenGroup>;

export type TokenMotionSemanticJsonObject = Record<
  string,
  TokenNode | TokenGroup
>;
export type TokenBorderRadiusJsonObject = TokenGroup;

export type TokenShadowJsonObject = Record<
  string,
  Token<{
    x: string;
    y: string;
    blur: string;
    spread: string;
    color: string;
    type: string;
  }>
>;

export type TokenShadowSemanticJsonObject = TokenGroup;

export function isTokenNode(entry: TokenNode | TokenGroup): entry is TokenNode {
  return typeof entry === 'object' && typeof entry.value === 'string';
}
