import styled, { css } from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { Button } from '../../components/Button';
import { Checkbox2, CheckboxGroup } from '../../components/Checkbox2';
import { RadioButton, RadioButtonGroup } from '../../components/RadioButton';
import { Breadcrumbs, Breadcrumb } from '../../components/Breadcrumbs';
import { Typography } from '../../components/Typography';
import { TextInput } from '../../components/TextInput';
import { GlobalMessage } from '../../components/GlobalMessage';
import { LocalMessage } from '../../components/LocalMessage';
import { storyHTMLTemplate } from '../storyHTMLTemplate';

export default {
  title: 'Playground/color test'
};

const { colors: Colors } = ddsBaseTokens;

const colors = {
  colors7: {
    light: '#5DA1CE',
    lighter: '#A3C9E3',
    lightest: '#E8F2F8',
    base: '#1878b9',
    dark: '#136094',
    darker: '#0E486F'
  },
  colors6: {
    light: '#6DA1C4',
    lighter: '#ABC9DD',
    lightest: '#EAF2F7',
    base: '#2E78AA',
    dark: '#256088',
    darker: '#1C4866'
  },
  colors5: {
    light: '#78B1D7',
    lighter: '#B2D3E8',
    lightest: '#ECF4F9',
    base: '#006DB6',
    dark: '#005792',
    darker: '#00416D',
    darkest: '#002C49'
  },
  infoNew: {
    light: 'rgba(158, 206, 238, 1)',
    lighter: 'rgba(200, 227, 245, 1)',
    lightest: 'rgba(241, 248, 253, 1)',
    base: 'rgba(117, 185, 230, 1)',
    dark: 'rgba(94, 148, 184, 1)',
    darker: 'rgba(70, 111, 138, 1)',
    darkest: 'rgba(47, 74, 92, 1)'
  }
};

const infoMessageStyle = css`
  background-color: ${colors.infoNew.lightest};
  border-color: ${colors.infoNew.light};
  svg {
    color: ${colors.infoNew.darkest};
  }
`;

const LocalMessageStyled = styled(LocalMessage)<{ purpose: string }>`
  ${({ purpose }) => purpose === 'info' && infoMessageStyle}
`;

const buttonStyle = (color: string) =>
  css`
    background-color: ${colors[color].base};
    border-color: ${colors[color].base};
    &:hover {
      background-color: ${colors[color].dark};
      border-color: ${colors[color].dark};
    }
    &:active {
      background-color: ${colors[color].darker};
      border-color: ${colors[color].darker};
    }
  `;

const ButtonStyled = styled(Button)<{ colorPalette?: string }>`
  ${({ colorPalette }) => colorPalette && buttonStyle(colorPalette)}
`;

const selectionControlStyle = (color: string) => css`
  &:hover input:enabled ~ span:first-of-type {
    background-color: ${colors[color].lightest};
    border-color: ${colors[color].base};
  }
  input:checked:enabled ~ span:first-of-type {
    background-color: ${colors[color].base};
    border-color: ${colors[color].base};
  }
  &:hover input:checked:enabled ~ span:first-of-type {
    background-color: ${colors[color].dark};
    border-color: ${colors[color].dark};
  }
`;

const CheckboxStyled = styled(Checkbox2)<{ colorPalette?: string }>`
  ${({ colorPalette }) => colorPalette && selectionControlStyle(colorPalette)}
`;

const RadioButtonStyled = styled(RadioButton)<{ colorPalette?: string }>`
  ${({ colorPalette }) => colorPalette && selectionControlStyle(colorPalette)}
`;

const linkStyle = (color: string, t: string) =>
  t === 'a' &&
  css`
    color: ${colors[color].base};
    &:hover {
      color: ${colors[color].dark};
    }
  `;

const LinkStyled = styled(Typography)<{
  colorPalette?: string;
  typographyType: string;
}>`
  ${({ colorPalette, typographyType }) =>
    colorPalette && linkStyle(colorPalette, typographyType)}
`;

const inputStyle = (color: string) => css`
  input {
    &:hover:enabled {
      border-color: ${colors[color].base};
      box-shadow: 0 0 0 1px ${colors[color].base};
      background-color: ${colors[color].lightest};
    }
    &:focus:enabled {
      border-color: ${colors[color].base};
      box-shadow: 0 0 0 1px ${colors[color].base};
    }
    &:hover:enabled ~ label,
    &:focus:enabled ~ label {
      color: ${colors[color].base};
    }
  }
`;

const InputStyled = styled(TextInput)<{ colorPalette?: string }>`
  ${({ colorPalette }) => colorPalette && inputStyle(colorPalette)}
`;

const breadcrumbsStyle = (color: string) => css`
  a {
    color: ${colors[color].base};
    &:hover {
      color: ${colors[color].dark};
    }
  }
  p,
  svg {
    color: ${colors[color].base};
  }
`;

const BreadcrumbsStyled = styled(Breadcrumbs)<{ colorPalette?: string }>`
  ${({ colorPalette }) => colorPalette && breadcrumbsStyle(colorPalette)}
`;

const Footer = styled.div`
  color: white;
  height: 100px;
  background-color: ${Colors.DdsColorSecondaryDark};
`;

const TestForm = (color?: string) => (
  <>
    <GlobalMessage purpose="warning">Dette er en viktig melding</GlobalMessage>
    <BreadcrumbsStyled colorPalette={color}>
      <Breadcrumb href="#">Norges domstoler</Breadcrumb>
      <Breadcrumb href="#">Arv og skifte</Breadcrumb>
      <Breadcrumb>Skjema</Breadcrumb>
    </BreadcrumbsStyled>
    {storyHTMLTemplate(
      'Skjema',
      <>
        <InputStyled colorPalette={color} label="Fornavn" />
        <InputStyled colorPalette={color} label="Etternavn" />
        <CheckboxGroup label="Interesser">
          <CheckboxStyled colorPalette={color} label="Bøker" />
          <CheckboxStyled colorPalette={color} label="Film" />
          <CheckboxStyled colorPalette={color} label="Sport" />
        </CheckboxGroup>
        <Typography>
          De fleste arvinger velger å stå for skiftet selv. Privat skifte kan
          først starte når du har fått skifteattest. Skjemaet{' '}
          <LinkStyled typographyType="a" colorPalette={color}>
            Erklæring om privat skifte av dødsbo
          </LinkStyled>{' '}
          må fylles ut. På skjemaet må en eller flere av arvingene overta
          ansvaret for avdødes gjeld. Den eller de som sender inn skjemaet, er
          selv ansvarlig for at retten har fått en fullstendig oversikt over
          hvem som er arvinger. Det er egne skjema for gjenlevende
          ektefelle/arveberettig samboer som mener å være enearving etter
          bestemmelsene om minstearv.
        </Typography>
        <LocalMessageStyled purpose="info">
          Dette er en infomelding
        </LocalMessageStyled>
        <RadioButtonGroup label="Sivilstand">
          <RadioButtonStyled name="test" colorPalette={color} label="Ugift" />
          <RadioButtonStyled name="test" colorPalette={color} label="Gift" />
        </RadioButtonGroup>
        <LocalMessage purpose="danger">
          Dette er en danger-melding for testing
        </LocalMessage>
        <CheckboxStyled colorPalette={color} label="Jeg bekrefter noe" />
        <ButtonStyled colorPalette={color} label="Send" />
      </>
    )}
    <Footer />
  </>
);

export const color5 = () => TestForm('colors5');
export const color6 = () => TestForm('colors6');
export const color7 = () => TestForm('colors7');
