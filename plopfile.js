const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setHelper("capitalize", (text) => {
    return capitalize(camelCase(text));
  });

  plop.setGenerator("component", {
    description: "Generer en komponentpakke",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Komponentnavnet:",
      },
      {
        type: "input",
        name: "description",
        message: "Kort beskrivelse av komponenten (på norsk):",
      },
    ],
    actions(answers) {
      const actions = [];

      if (!answers) return actions;

      const { componentName, description } = answers;

      actions.push({
        type: "addMany",
        templateFiles: "plop/component/**",
        destination: `./packages/{{dashCase componentName}}`,
        base: "plop/component",
        data: { description, componentName },
        abortOnFail: true,
      });

      return actions;
    },
  });
};
