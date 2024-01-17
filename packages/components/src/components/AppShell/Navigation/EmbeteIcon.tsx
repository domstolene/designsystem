import {
  JordskifterettIcon,
  LagmannsrettIcon,
  PersonIcon,
  TingrettIcon,
} from '../../Icon/icons';
import { type SvgProps } from '../../Icon/utils';

export type EmbeteType =
  | 'jordskifterett'
  | 'tingrett'
  | 'lagmannsrett'
  | 'høyesterett';

type EmbeteIconProps = {
  type?: EmbeteType;
} & SvgProps;

export const EmbeteIcon = ({ type, ...rest }: EmbeteIconProps) => {
  switch (type) {
    case 'jordskifterett':
      return <JordskifterettIcon {...rest} />;
    case 'tingrett':
      return <TingrettIcon {...rest} />;
    case 'lagmannsrett':
      return <LagmannsrettIcon {...rest} />;
    case 'høyesterett':
    case undefined:
      return <PersonIcon {...rest} />;
  }
};
