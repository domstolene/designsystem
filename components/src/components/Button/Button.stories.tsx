import { Button as DDSButton, ButtonProps } from './Button';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export default {
  title: 'Design system/Button',
  component: DDSButton,
  argTypes: {
    label: { control: { type: 'text' } },
    loading: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } },
    href: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'target', 'Icon']
    }
  }
};

export const OverviewWithText = (args: ButtonProps) => {
  return storyHTMLGridTemplate(
    'Button overview - with text',
    <>
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="filled"
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="filled"
      />
      <DDSButton
        {...args}
        label={'Primary'}
        purpose="primary"
        appearance="ghost"
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="ghost"
      />
      <DDSButton {...args} label="Danger" purpose="danger" appearance="ghost" />
      <DDSButton
        {...args}
        label={'Primary'}
        purpose="primary"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label={'Primary'}
        purpose="primary"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label={'Primary'}
        purpose="primary"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="filled"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label={'Primary'}
        purpose="primary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="ghost"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label={'Primary'}
        purpose="primary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="borderless"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label={'Primary'}
        purpose="primary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Secondary"
        purpose="secondary"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Danger"
        purpose="danger"
        appearance="rounded"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
    </>
  );
};

export const OverviewJustIcon = (args: ButtonProps) => {
  return storyHTMLGridTemplate(
    'Button overview - just icon',
    <>
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="secondary"
        appearance="filled"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="danger"
        appearance="filled"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="ghost"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="secondary"
        appearance="ghost"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="danger"
        appearance="ghost"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="borderless"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="secondary"
        appearance="borderless"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="danger"
        appearance="borderless"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="rounded"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="secondary"
        appearance="rounded"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="danger"
        appearance="rounded"
        Icon={CloseOutlinedIcon}
      />
    </>
  );
};

export const OverviewSizes = (args: ButtonProps) => {
  return storyHTMLGridTemplate(
    'Button overview - sizes',
    <>
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="medium"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="large"
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="small"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        label="Primary"
        purpose="primary"
        appearance="filled"
        size="large"
        iconPosition={args.iconPosition || 'left'}
        Icon={AddCircleOutlineOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        size="small"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        Icon={CloseOutlinedIcon}
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        size="large"
        Icon={CloseOutlinedIcon}
      />
    </>
  );
};

export const OverviewFullWidth = (args: ButtonProps) => {
  return storyHTMLTemplate(
    'Button overview - full width',
    <>
      <DDSButton
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        fullWidth
      />
      <DDSButton
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition={'left'}
        Icon={AddCircleOutlineOutlinedIcon}
        fullWidth
      />
      <DDSButton
        {...args}
        label={args.label || 'Primary'}
        purpose="primary"
        appearance="filled"
        size="medium"
        iconPosition={'right'}
        Icon={AddCircleOutlineOutlinedIcon}
        fullWidth
      />
      <DDSButton
        {...args}
        purpose="primary"
        appearance="filled"
        size="medium"
        Icon={CloseOutlinedIcon}
        fullWidth
      />
    </>
  );
};

export const Default = (args: ButtonProps) => {
  return storyHTMLTemplate(
    'Button default',
    <DDSButton {...args} label={args.label || 'Tekst'} />
  );
};

export const WithIcon = (args: ButtonProps) => {
  return storyHTMLTemplate(
    'Button with Icon',
    <DDSButton
      {...args}
      label={args.label || 'Tekst'}
      iconPosition={args.iconPosition || 'left'}
      Icon={AddCircleOutlineOutlinedIcon}
    />
  );
};

export const Icon = (args: ButtonProps) => {
  return storyHTMLTemplate(
    'Button Icon',
    <DDSButton {...args} Icon={CloseOutlinedIcon} />
  );
};
export const Ghost = (args: ButtonProps) => {
  return storyHTMLTemplate(
    'Button ghost',
    <>
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="primary"
        appearance="ghost"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="secondary"
        appearance="ghost"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="danger"
        appearance="ghost"
      />
    </>
  );
};

export const Borderless = (args: ButtonProps) => {
  return storyHTMLTemplate(
    'Button borderless',
    <>
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="primary"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="secondary"
        appearance="borderless"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="danger"
        appearance="borderless"
      />
    </>
  );
};

export const Rounded = (args: ButtonProps) => {
  return storyHTMLTemplate(
    'Button rounded',
    <>
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="primary"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="secondary"
        appearance="rounded"
      />
      <DDSButton
        {...args}
        label={args.label || 'tekst'}
        purpose="danger"
        appearance="rounded"
      />
    </>
  );
};
