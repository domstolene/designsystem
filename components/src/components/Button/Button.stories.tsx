import {Button as DDSButton, ButtonProps} from './Button';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { firstLetterToUpperCase } from '../../helpers/functions';


export default {
  title: 'Design system/Button',
  component: DDSButton,
  argTypes: {
    label: { control: { type: 'text' } },
    loading: {control: {type: 'boolean'}},
    className: {control: {type: 'text'}},
    href: {control: {type: 'text'}},
  },
};

const buttonLabel = (text: string) => firstLetterToUpperCase(text);

export const OverviewWithText = (args:ButtonProps) => {
  return (
    storyHTMLGridTemplate('Button overview - with text',
     <>
      <DDSButton {...args} label='Primary' purpose='primary' form='filled' />
      <DDSButton {...args} label='Secondary' purpose='secondary' form='filled' />
      <DDSButton {...args} label='Danger' purpose='danger' form='filled' />
      <DDSButton {...args} label={'Primary'} purpose='primary' form='ghost' />
      <DDSButton {...args} label='Secondary' purpose='secondary' form='ghost' />
      <DDSButton {...args} label='Danger' purpose='danger' form='ghost' />
      <DDSButton {...args} label={'Primary'} purpose='primary' form='borderless' />
      <DDSButton {...args} label='Secondary' purpose='secondary' form='borderless' />
      <DDSButton {...args} label='Danger' purpose='danger' form='borderless' />
      <DDSButton {...args} label={'Primary'} purpose='primary' form='rounded' />
      <DDSButton {...args} label='Secondary' purpose='secondary' form='rounded' />
      <DDSButton {...args} label='Danger' purpose='danger' form='rounded' />
      <DDSButton {...args} label={'Primary'} purpose='primary' form='filled' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label='Secondary' purpose='secondary' form='filled' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label='Danger' purpose='danger' form='filled' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label={'Primary'} purpose='primary' form='ghost' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label='Secondary' purpose='secondary' form='ghost' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label='Danger' purpose='danger' form='ghost' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label={'Primary'} purpose='primary' form='borderless' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label='Secondary' purpose='secondary' form='borderless' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label='Danger' purpose='danger' form='borderless' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label={'Primary'} purpose='primary' form='rounded' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label='Secondary' purpose='secondary' form='rounded' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label='Danger' purpose='danger' form='rounded' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
     </>
     )
  )
}

export const OverviewJustIcon = (args:ButtonProps) => {
  return (
    storyHTMLGridTemplate('Button overview - just icon',
     <>
      <DDSButton {...args} purpose='primary' form='filled' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='secondary' form='filled' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='danger' form='filled' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='primary' form='ghost' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='secondary' form='ghost' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='danger' form='ghost' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='primary' form='borderless' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='secondary' form='borderless' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='danger' form='borderless' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='primary' form='rounded' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='secondary' form='rounded' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='danger' form='rounded' Icon={CloseOutlinedIcon} />
     </>
     )
  )
}

export const OverviewSizes = (args:ButtonProps) => {
  return (
    storyHTMLGridTemplate('Button overview - sizes',
     <>
      <DDSButton {...args} label={buttonLabel(args.purpose)} purpose='primary' form='filled' size='small' />
      <DDSButton {...args} label={buttonLabel(args.purpose)} purpose='primary' form='filled' size='medium' />
      <DDSButton {...args} label={buttonLabel(args.purpose)} purpose='primary' form='filled' size='large' />
      <DDSButton {...args} label={buttonLabel(args.purpose)} purpose='primary' form='filled' size='small' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label={buttonLabel(args.purpose)} purpose='primary' form='filled' size='medium' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} label={buttonLabel(args.purpose)} purpose='primary' form='filled' size='large' iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />
      <DDSButton {...args} purpose='primary' form='filled' size='small' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='primary' form='filled' size='medium' Icon={CloseOutlinedIcon} />
      <DDSButton {...args} purpose='primary' form='filled' size='large' Icon={CloseOutlinedIcon} />
     </>
     )
  )
}

export const Default = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button default', <DDSButton {...args} label={args.label || 'Tekst'} />)
  )
}

export const WithIcon = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button with Icon', <DDSButton {...args} label={args.label || 'Tekst'} iconPosition={ args.iconPosition || 'left'} Icon={AddCircleOutlineOutlinedIcon} />)
  )
}

export const Icon = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button Icon', <DDSButton {...args} Icon={CloseOutlinedIcon} />)
  )
}
export const Ghost = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button ghost',
     <>
     <DDSButton {...args} label={args.label || 'tekst'} purpose='primary' form='ghost' />
     <DDSButton {...args} label={args.label || 'tekst'} purpose='secondary' form='ghost' />
     <DDSButton {...args} label={args.label || 'tekst'} purpose='danger' form='ghost' />
     </>
     )
  )
}

export const Borderless = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button borderless',
     <>
     <DDSButton {...args} label={args.label || 'tekst'} purpose='primary' form='borderless' />
     <DDSButton {...args} label={args.label || 'tekst'} purpose='secondary' form='borderless' />
     <DDSButton {...args} label={args.label || 'tekst'} purpose='danger' form='borderless' />
     </>
     )
  )
}

export const Rounded = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button rounded',
     <>
     <DDSButton {...args} label={args.label || 'tekst'} purpose='primary' form='rounded' />
     <DDSButton {...args} label={args.label || 'tekst'} purpose='secondary' form='rounded' />
     <DDSButton {...args} label={args.label || 'tekst'} purpose='danger' form='rounded' />
     </>
     )
  )
}


