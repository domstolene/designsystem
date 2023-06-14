type props = { href?: string };

export const LinkToInteractiveStory = ({ href }: props) => (
  <p>
    Se stories med kontrollere i <a href={href}>Storybook</a>.
  </p>
);
