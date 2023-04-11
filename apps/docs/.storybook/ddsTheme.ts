import { create } from "@storybook/theming";
import elsaLogoHigh from "./images/Elsa-logo-hoy.png";
import { ddsBaseTokens } from "@norges-domstoler/dds-design-tokens";

const { colors, borderRadius, font } = ddsBaseTokens;

export default create({
  base: "light",

  brandTitle: "Elsa - Domstolenes Designsystem",
  brandUrl: "https://design.domstol.no",
  brandImage: elsaLogoHigh,

  // Interaction color
  colorSecondary: colors.DdsColorInteractiveBase,

  // Typography
  fontBase: `${font.DdsFontBodySans02FontFamily}, 'Trebuchet MS', sans-serif`,
  fontCode: `${font.DdsFontCodeMonospace02FontFamily}, monospace`,
  textMutedColor: colors.DdsColorNeutralsGray7,
  textColor: colors.DdsColorNeutralsGray9,

  //UI
  appBorderRadius: borderRadius.RadiiDdsBorderRadius1RadiusNumberPx,
});
