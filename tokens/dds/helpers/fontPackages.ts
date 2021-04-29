import { ddsStyles } from "../build/js/fontObject";

const fontPackageFormatter = (font: any) => {
  return {
    base: {
      lineHeight: font.lineHeight.value,
      fontSize: `${font.fontSize.value}px`,
      letterSpacing: font.letterSpacing.value,
      fontFamily: font.fontFamily.value,
      fontWeight: font.fontWeight.value,
      fontStyle: font.fontStyle.value,
    },
    numbers: {
      lineHeightNumber: font.lineHeight.original.value,
      fontSizeNumber: font.fontSize.value,
      letterSpacingNumber: font.letterSpacing.original.value,
    },
    paragraph: {
      paragraphSpacing: `${font.paragraphSpacing.value}px`,
    },
  };
};

export const fontPackages = {
  sansLightx2_5: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["light"]["x2_5"]
  ),
  sansLightx3: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["light"]["x3"]
  ),
  sansLightx4: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["light"]["x4"]
  ),
  sansLightx5: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["light"]["x5"]
  ),
  sansRegularx2: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["x2"]
  ),
  sansRegularx1_5: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["x1_5"]
  ),
  sansRegularx1_25: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["x1_25"]
  ),
  sansRegularx1_125: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["x1_125"]
  ),
  sansRegularx1: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["x1"]
  ),
  sansRegularx0_875: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["x0_875"]
  ),
  sansRegularx0_75: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["x0_75"]
  ),
  sansItalicx1_5: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["italics"]["x1_5"]
  ),
  sansItalicx1_25: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["italics"]["x1_25"]
  ),
  sansItalicx1_125: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["italics"]["x1_125"]
  ),
  sansItalicx1: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["italics"]["x1"]
  ),
  sansItalicx0_875: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["italics"]["x0_875"]
  ),
  sansItalicx0_75: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["regular"]["italics"]["x0_75"]
  ),
  sansBoldx1_5: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["x1_5"]
  ),
  sansBoldx1_25: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["x1_25"]
  ),
  sansBoldx1_125: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["x1_125"]
  ),
  sansBoldx1: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["x1"]
  ),
  sansBoldx0_875: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["x0_875"]
  ),
  sansBoldx0_75: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["x0_75"]
  ),
  sansBoldItalicx1_5: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["italics"]["x1_5"]
  ),
  sansBoldItalicx1_25: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["italics"]["x1_25"]
  ),
  sansBoldItalicx1_125: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["italics"]["x1_125"]
  ),
  sansBoldItalicx1: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["italics"]["x1"]
  ),
  sansBoldItalicx0_875: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["italics"]["x0_875"]
  ),
  sansBoldItalicx0_75: fontPackageFormatter(
    ddsStyles["$dds-font"]["sans"]["bold"]["italics"]["x0_75"]
  ),
  serifx5: fontPackageFormatter(ddsStyles["$dds-font"]["serif"]["x5"]),
  serifx4: fontPackageFormatter(ddsStyles["$dds-font"]["serif"]["x4"]),
  serifx3: fontPackageFormatter(ddsStyles["$dds-font"]["serif"]["x3"]),
  serifx2_5: fontPackageFormatter(ddsStyles["$dds-font"]["serif"]["x2_5"]),
  serifx2: fontPackageFormatter(ddsStyles["$dds-font"]["serif"]["x2"]),
  serifx1_5: fontPackageFormatter(ddsStyles["$dds-font"]["serif"]["x1_5"]),
  serifx1_25: fontPackageFormatter(ddsStyles["$dds-font"]["serif"]["x1_25"]),
};
