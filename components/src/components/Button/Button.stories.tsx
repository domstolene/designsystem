import {Button as DDSButton, ButtonProps} from './Button';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';


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

export const Primary = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button primary', <DDSButton {...args} label={args.label || 'tekst'} />)
  )
}

export const Secondary = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button secondary', <DDSButton {...args} label={args.label || 'tekst'} purpose='secondary' />)
  )
}
export const Danger = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button danger', <DDSButton {...args} label={args.label || 'tekst'} purpose='danger' />)
  )
}


export const WithIcon = (args:ButtonProps) => {
  return (
    storyHTMLTemplate('Button with Icon', <DDSButton {...args} label={args.label || 'tekst'} iconPosition={ args.iconPosition || 'left'} Icon={GetAppOutlinedIcon} />)
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