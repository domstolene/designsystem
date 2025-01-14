import { Button, CopyIcon } from '../../../packages/dds-components/src';

export const copyButton = (tokenName: string) => (
  <Button
    size="xsmall"
    purpose="tertiary"
    icon={CopyIcon}
    htmlProps={{ title: `Kopier ${tokenName}` }}
    onClick={(): Promise<void> => navigator.clipboard.writeText(tokenName)}
  />
);
