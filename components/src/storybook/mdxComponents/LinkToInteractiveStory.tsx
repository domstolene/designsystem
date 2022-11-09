import { Typography } from '../../components/Typography';

type props = { href?: string };

export const LinkToInteractiveStory = ({ href }: props) => (
  <Typography>
    Se stories med kontrollere i{' '}
    <Typography typographyType="a" externalLink href={href}>
      Storybook
    </Typography>
    .
  </Typography>
);
