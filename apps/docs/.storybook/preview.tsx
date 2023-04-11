import "@norges-domstoler/dds-design-tokens/dist/css/borderRadius.css";
import "@norges-domstoler/dds-design-tokens/dist/css/spacing.css";
import "@norges-domstoler/dds-design-tokens/dist/css/colors.css";
import "@norges-domstoler/dds-design-tokens/dist/css/font.css";
import "@norges-domstoler/dds-components/dist/styles/fontStyles.css";
import "@norges-domstoler/dds-components/dist/styles/selection.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => {
        if (a.id.includes("introduction")) return -1;
        if (b.id.includes("introduction")) return 1;
        return a.title === b.title
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
};

export default preview;
