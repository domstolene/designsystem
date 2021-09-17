import { ddsStyles } from "../../build/js/fontObject";
import { fontPackageFormatter } from "../../utils/fontPackageFormatter";

const prefix = ddsStyles["$dds-font"];

export const fontPackages = {
  heading_sans_01: fontPackageFormatter(prefix["heading"]["sans-01"]),
  heading_sans_02: fontPackageFormatter(prefix["heading"]["sans-02"]),
  heading_sans_03: fontPackageFormatter(prefix["heading"]["sans-03"]),
  heading_sans_04: fontPackageFormatter(prefix["heading"]["sans-04"]),
  heading_sans_05: fontPackageFormatter(prefix["heading"]["sans-05"]),
  heading_sans_06: fontPackageFormatter(prefix["heading"]["sans-06"]),
  heading_sans_07: fontPackageFormatter(prefix["heading"]["sans-07"]),
  heading_sans_08: fontPackageFormatter(prefix["heading"]["sans-08"]),
  body_sans_01: fontPackageFormatter(prefix["body"]["sans-01"]),
  body_sans_02: fontPackageFormatter(prefix["body"]["sans-02"]),
  body_sans_03: fontPackageFormatter(prefix["body"]["sans-03"]),
  body_sans_04: fontPackageFormatter(prefix["body"]["sans-04"]),
  body_serif_01: fontPackageFormatter(prefix["body"]["serif-01"]),
  body_serif_02: fontPackageFormatter(prefix["body"]["serif-02"]),
  body_serif_03: fontPackageFormatter(prefix["body"]["serif-03"]),
  body_serif_04: fontPackageFormatter(prefix["body"]["serif-04"]),
  lead_sans_01: fontPackageFormatter(prefix["lead"]["sans-01"]),
  lead_sans_02: fontPackageFormatter(prefix["lead"]["sans-02"]),
  lead_sans_03: fontPackageFormatter(prefix["lead"]["sans-03"]),
  lead_sans_04: fontPackageFormatter(prefix["lead"]["sans-04"]),
  lead_sans_05: fontPackageFormatter(prefix["lead"]["sans-05"]),
  supportingStyle_label_01: fontPackageFormatter(
    prefix["supporting-style"]["label-01"]
  ),
  supportingStyle_helpertext_01: fontPackageFormatter(
    prefix["supporting-style"]["helpertext-01"]
  ),
  supportingStyle_inputtext_01: fontPackageFormatter(
    prefix["supporting-style"]["inputtext-01"]
  ),
  supportingStyle_inputtext_02: fontPackageFormatter(
    prefix["supporting-style"]["inputtext-02"]
  ),
  supportingStyle_inputtext_03: fontPackageFormatter(
    prefix["supporting-style"]["inputtext-03"]
  ),
  supportingStyle_placeholdertext_01: fontPackageFormatter(
    prefix["supporting-style"]["placeholdertext-01"]
  ),
  supportingStyle_tiny_01: fontPackageFormatter(
    prefix["supporting-style"]["tiny-01"]
  ),
};
