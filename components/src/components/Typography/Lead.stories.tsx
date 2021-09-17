import { Typography as DDSTypography } from './Typography';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';

export default {
  title: 'Design system/Typography/Overview/Leads',
  component: DDSTypography
};

export const Leads = () => {
  return storyHTMLGridTemplate(
    'Leads - overview',
    <>
      <DDSTypography typographyType="leadSans01">lead-sans-01</DDSTypography>
      <DDSTypography typographyType="leadSans02">lead-sans-02</DDSTypography>
      <DDSTypography typographyType="leadSans03">lead-sans-03</DDSTypography>
      <DDSTypography typographyType="leadSans04">lead-sans-04</DDSTypography>
      <DDSTypography typographyType="leadSans05">lead-sans-05</DDSTypography>
    </>,
    '30px',
    1
  );
};
