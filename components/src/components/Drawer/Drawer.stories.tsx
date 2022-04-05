import { useRef, useState } from 'react';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Button } from '../Button';
import { Drawer, DrawerProps } from './Drawer';
import { Typography } from '../Typography';

export default {
  title: 'design system/Drawer',
  component: Drawer
};

export const Overview = (args: DrawerProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => setClosed(true);
  const [closed2, setClosed2] = useState(true);
  const show2 = () => setClosed2(false);
  const close2 = () => setClosed2(true);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate title="Drawer - overview">
      <Button label="Åpne høyre" onClick={show} ref={buttonRef} />
      <Drawer
        {...args}
        onClose={close}
        isOpen={!closed}
        header="Tittel"
        triggerRef={buttonRef}
      >
        Innhold
        <Button label="Gjør noe" />
      </Drawer>
      <Button label="Åpne venstre" onClick={show2} ref={buttonRef2} />
      <Drawer
        {...args}
        onClose={close2}
        isOpen={!closed2}
        header="Tittel"
        placement="left"
        triggerRef={buttonRef2}
      >
        Innhold
        <Button label="Gjør noe" />
      </Drawer>
    </StoryTemplate>
  );
};

export const Default = (args: DrawerProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate title="Drawer - default">
      <Button label="Åpne" onClick={show} ref={buttonRef} />
      <Drawer
        {...args}
        onClose={close}
        isOpen={!closed}
        header="Rettsmekling"
        triggerRef={buttonRef}
      >
        <Typography>
          En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
          hovedforhandling og dom. Det går ut på at partene kommer fram til en
          avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en raskere,
          mer effektiv og billigere måte å løse konflikten på.
        </Typography>
        <Typography typographyType="headingSans02">
          Hva er rettsmekling?
        </Typography>
        <Typography>
          Rettsmekling går ut på at partene selv finner en løsning på konflikten
          ved å bruke en mekler (vanligvis en dommer i domstolen som behandler
          saken). Avtalen man kommer fram til, blir rettskraftig på lik linje
          med en dom. Rettsmekling kan bare brukes i sivile saker, ikke i
          straffesaker.
        </Typography>
        <Button label="Gjør noe" />
      </Drawer>
    </StoryTemplate>
  );
};
