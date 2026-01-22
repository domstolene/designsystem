export type ThemeMain = 'core' | 'public';
export type ThemeMode = 'light' | 'dark';

interface Token<T> {
  value: T;
  type: string;
  description?: string;
}

export type TokenGenericJsonObject = Record<string, Token<string>>;

export type TokenColorJsonObject = Record<string, TokenGenericJsonObject>;

export type TokenTypographyBaseJsonObject = TokenGenericJsonObject;

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

export type TokenGridJsonObject = Record<string, TokenGenericJsonObject>;

export type TokenBreakpointJsonObject = TokenGenericJsonObject;

export type TokenBorderRadiusJsonObject = TokenGenericJsonObject;

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

export type TokenShadowSemanticJsonObject = TokenGenericJsonObject;
