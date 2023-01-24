import { Typography } from '..';
import { StoryTemplate } from '../../../storybook';

export default {
  title: 'Design system/Typography/Overview/Typography types',
  component: Typography,
};

export const Body = () => {
  return (
    <StoryTemplate title="Typography - body styles overview">
      <Typography typographyType="bodySans01">
        bodySans01 - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
      <Typography typographyType="bodySans02">
        bodySans02 - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
      <Typography typographyType="bodySans03">
        bodySans03 - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
      <Typography typographyType="bodySans04">
        bodySans04 - Når du kommer inn i rettssalen, blir du bedt om å stå ved
        vitneboksen. Så blir du spurt om hva du heter, hvor du bor og så videre.
        Deretter om du på noen måte er i slekt med tiltalte, fornærmede eller
        partene i saken.
      </Typography>
    </StoryTemplate>
  );
};

export const Headings = () => {
  return (
    <StoryTemplate title="Typography - heading styles overview" gap="30px">
      <Typography typographyType="headingSans01">Heading-sans-01</Typography>
      <Typography typographyType="headingSans02">Heading-sans-02</Typography>
      <Typography typographyType="headingSans03">Heading-sans-03</Typography>
      <Typography typographyType="headingSans04">Heading-sans-04</Typography>
      <Typography typographyType="headingSans05">Heading-sans-05</Typography>
      <Typography typographyType="headingSans06">Heading-sans-06</Typography>
      <Typography typographyType="headingSans07">Heading-sans-07</Typography>
      <Typography typographyType="headingSans08">Heading-sans-08</Typography>
    </StoryTemplate>
  );
};

export const Leads = () => {
  return (
    <StoryTemplate title=" Typography - lead styles overview" gap="30px">
      <Typography typographyType="leadSans01">lead-sans-01</Typography>
      <Typography typographyType="leadSans02">lead-sans-02</Typography>
      <Typography typographyType="leadSans03">lead-sans-03</Typography>
      <Typography typographyType="leadSans04">lead-sans-04</Typography>
      <Typography typographyType="leadSans05">lead-sans-05</Typography>
    </StoryTemplate>
  );
};

export const Supporting = () => {
  return (
    <StoryTemplate title="Typography - supporting styles overview" gap="30px">
      <Typography typographyType="supportingStyleLabel01">
        supportingStyleLabel01
      </Typography>
      <Typography typographyType="supportingStyleHelperText01">
        supportingStyleHelperText01
      </Typography>
      <Typography typographyType="supportingStylePlaceholderText01">
        supportingStylePlaceholderText01
      </Typography>
      <Typography typographyType="supportingStylePlaceholderText02">
        supportingStylePlaceholderText02
      </Typography>
      <Typography typographyType="supportingStylePlaceholderText03">
        supportingStylePlaceholderText03
      </Typography>
      <Typography typographyType="supportingStyleTiny01">
        supportingStyleTiny01
      </Typography>
      <Typography typographyType="supportingStyleTiny02">
        supportingStyleTiny02
      </Typography>
    </StoryTemplate>
  );
};

export const Link = () => {
  return (
    <StoryTemplate title="Typography - link styles overview">
      <Typography typographyType="a" href="https://www.domstol.no">
        Link
      </Typography>
      <Typography typographyType="a" href="https://www.domstol.no" externalLink>
        Link
      </Typography>
    </StoryTemplate>
  );
};
