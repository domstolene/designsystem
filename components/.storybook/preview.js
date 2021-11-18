import '../src/styles/fontStyles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) => {
      if (a[1].id === 'design-system-introduction--page') return -1;
      if (b[1].id === 'design-system-introduction--page') return 1;
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    }
  }
};
