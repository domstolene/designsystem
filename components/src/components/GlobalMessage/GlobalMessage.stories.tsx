import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { GlobalMessage as DDSGlobalMessage, GlobalMessageProps } from './GlobalMessage';

export default {
    title: 'design system/GlobalMessage',
    component: DDSGlobalMessage,
    argTypes: {
        message: { control: { type: 'text' } },
        closable: { control: { type: 'boolean' } },
    }
}

export const Overview = (args: GlobalMessageProps) => {
    return storyHTMLTemplate(
        'GlobalMessage - overview',
        <>
            <DDSGlobalMessage {...args} purpose='info' message='En tilfeldig melding' />
            <DDSGlobalMessage {...args} purpose='warning' message='En tilfeldig melding' />
            <DDSGlobalMessage {...args} purpose='danger' message='En tilfeldig melding' />
            <DDSGlobalMessage {...args} purpose='info' message='En tilfeldig melding' closable />
            <DDSGlobalMessage {...args} purpose='warning' message='En tilfeldig melding' closable />
            <DDSGlobalMessage {...args} purpose='danger' message='En tilfeldig melding' closable />
        </>
    );
}

export const Default = (args: GlobalMessageProps) => {
    return storyHTMLTemplate(
        'GlobalMessage - default',
        <DDSGlobalMessage {...args} message={args.message || 'En tilfeldig melding'} />
    );
}

export const Closable = (args: GlobalMessageProps) => {
    return storyHTMLTemplate(
        'GlobalMessage - closable',
        <DDSGlobalMessage {...args} purpose={args.purpose || 'info'} message={args.message || 'En tilfeldig melding'} closable />
    );
}