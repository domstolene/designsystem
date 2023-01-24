import { Link, Typography } from '../../components/Typography';

type props = { href?: string };

export const LinkToInteractiveStory = ({ href }: props) => (
  <Typography>
    Se stories med kontrollere i{' '}
    <Link external href={href}>
      Storybook
    </Link>
    .
  </Typography>
);
