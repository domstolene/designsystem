interface Props {
  href?: string;
}

export const LinkToInteractiveStory = ({ href }: Props) => (
  <p>
    Se stories med kontrollere i <a href={href}>Storybook</a>.
  </p>
);
