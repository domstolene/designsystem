import { useState } from 'react';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import styled from 'styled-components';
import { Button } from '../Button';
import { Drawer } from '../Drawer';
import {
  PersonIcon,
  AttachmentIcon,
  GavelIcon,
  ChecklistIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '../Icon/icons';
import { Select } from '../Select';
import { Checkbox } from '../SelectionControl/Checkbox';
import { VStack } from '../Stack';
import { TextInput } from '../TextInput';
import { Heading, Paragraph, Legend } from '../Typography';
import { ProgressTracker } from './ProgressTracker';

export default {
  title: 'dds-components/ProgressTracker',
  component: ProgressTracker,
};

export const Overview = () => {
  const numSteps = 3;

  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  return (
    <StoryTemplate title="ProgressTracker - overview" display="block">
      <ProgressTracker
        activeStep={activeStep}
        onStepChange={step => setActiveStep(step)}
        htmlProps={{ style: { maxWidth: '800px' } }}
      >
        <ProgressTracker.Item completed={completedSteps.has(0)}>
          Partopplysninger
        </ProgressTracker.Item>
        <ProgressTracker.Item completed={completedSteps.has(1)}>
          Slutning
        </ProgressTracker.Item>
        <ProgressTracker.Item completed={completedSteps.has(2)}>
          Vedlegg
        </ProgressTracker.Item>
        <ProgressTracker.Item completed={completedSteps.has(3)} disabled>
          Sammendrag
        </ProgressTracker.Item>
      </ProgressTracker>

      <div style={{ margin: '10px' }}>
        {activeStep === 0 && <div>Steg 1</div>}
        {activeStep === 1 && <div>Steg 2</div>}
        {activeStep === 2 && <div>Steg 3</div>}
        {activeStep === 3 && <div>Steg 4</div>}
      </div>

      <Button
        onClick={() => {
          setCompletedSteps(s => new Set([...s, activeStep]));
          if (activeStep < numSteps - 1) {
            setActiveStep(s => s + 1);
          }
        }}
      >
        Sett som ferdig
      </Button>
    </StoryTemplate>
  );
};

export const WithIcons = () => {
  const numSteps = 3;

  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  return (
    <StoryTemplate title="ProgressTracker - with icons" display="block">
      <ProgressTracker
        activeStep={activeStep}
        htmlProps={{ style: { maxWidth: '800px' } }}
        onStepChange={step => setActiveStep(step)}
      >
        <ProgressTracker.Item
          icon={PersonIcon}
          completed={completedSteps.has(0)}
        >
          Partopplysninger
        </ProgressTracker.Item>
        <ProgressTracker.Item
          icon={AttachmentIcon}
          completed={completedSteps.has(1)}
        >
          Vedlegg
        </ProgressTracker.Item>
        <ProgressTracker.Item
          icon={GavelIcon}
          completed={completedSteps.has(2)}
        >
          Slutning
        </ProgressTracker.Item>
        <ProgressTracker.Item
          icon={ChecklistIcon}
          completed={completedSteps.has(3)}
          disabled
        >
          Sammendrag
        </ProgressTracker.Item>
      </ProgressTracker>

      <div style={{ margin: '10px' }}>
        {activeStep === 0 && <div>Steg 1</div>}
        {activeStep === 1 && <div>Steg 2</div>}
        {activeStep === 2 && <div>Steg 3</div>}
        {activeStep === 3 && <div>Steg 4</div>}
      </div>

      <Button
        onClick={() => {
          setCompletedSteps(s => new Set([...s, activeStep]));
          if (activeStep < numSteps - 1) {
            setActiveStep(s => s + 1);
          }
        }}
      >
        Sett som ferdig
      </Button>
    </StoryTemplate>
  );
};

export const FutureStepsDisabled = () => {
  const numSteps = 3;

  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const highestCompletedStep = Math.max(...Array.from(completedSteps), -1);

  const handleSetFinishedButtonClick = () => {
    setCompletedSteps(s => new Set([...s, activeStep]));
    if (activeStep < numSteps - 1) {
      setActiveStep(s => s + 1);
    }
  };

  const isDisabled = (index: number) => index > highestCompletedStep + 1;

  return (
    <StoryTemplate title="ProgressTracker - disabled steps" display="block">
      <ProgressTracker
        activeStep={activeStep}
        htmlProps={{ style: { maxWidth: '800px' } }}
        onStepChange={step => setActiveStep(step)}
      >
        <ProgressTracker.Item
          disabled={isDisabled(0)}
          completed={completedSteps.has(0)}
        >
          Partopplysninger
        </ProgressTracker.Item>
        <ProgressTracker.Item
          disabled={isDisabled(1)}
          completed={completedSteps.has(1)}
        >
          Slutning
        </ProgressTracker.Item>
        <ProgressTracker.Item
          disabled={isDisabled(2)}
          completed={completedSteps.has(2)}
        >
          Vedlegg
        </ProgressTracker.Item>
      </ProgressTracker>
      <div style={{ margin: '10px' }}>
        {activeStep === 0 && <div>Steg 1</div>}
        {activeStep === 1 && <div>Steg 2</div>}
        {activeStep === 2 && <div>Steg 3</div>}
      </div>

      <Button onClick={() => activeStep > 0 && setActiveStep(s => s - 1)}>
        Forrige steg
      </Button>
      <Button onClick={handleSetFinishedButtonClick}>Neste steg</Button>
    </StoryTemplate>
  );
};

export const Mobile = () => {
  const numSteps = 3;

  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <StoryTemplate title="ProgressTracker - mobile" display="block">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {activeStep === 0 && <div>Steg 1</div>}
          {activeStep === 1 && <div>Steg 2</div>}
          {activeStep === 2 && <div>Steg 3</div>}
          {activeStep === 3 && <div>Steg 4</div>}
          <Button
            onClick={() => {
              setCompletedSteps(s => new Set([...s, activeStep]));
              if (activeStep < numSteps - 1) {
                setActiveStep(s => s + 1);
              }
            }}
          >
            Sett som ferdig
          </Button>
        </div>
        <Button
          purpose="secondary"
          onClick={() => setDrawerOpen(true)}
          iconPosition="right"
          icon={ChevronRightIcon}
        >
          Steg {activeStep + 1} av 4
        </Button>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <ProgressTracker
          activeStep={activeStep}
          onStepChange={step => {
            setDrawerOpen(false);
            setActiveStep(step);
          }}
        >
          <ProgressTracker.Item completed={completedSteps.has(0)}>
            Partopplysninger med lang tekst
          </ProgressTracker.Item>
          <ProgressTracker.Item completed={completedSteps.has(1)}>
            Slutning
          </ProgressTracker.Item>
          <ProgressTracker.Item completed={completedSteps.has(2)}>
            Vedlegg
          </ProgressTracker.Item>
          <ProgressTracker.Item completed={completedSteps.has(3)} disabled>
            Sammendrag
          </ProgressTracker.Item>
        </ProgressTracker>
      </Drawer>
    </StoryTemplate>
  );
};

const Layout = styled.div`
  display: flex;
  gap: 4rem;
`;

const ProgressTrackerWrapper = styled.div`
  margin-top: 6rem;
  grid-area: progressTracker;
`;

const FormWrapper = styled.div`
  width: 768px;
`;

const MobileOnly = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopOnly = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const RealWorldExample = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const [progressTrackerDrawerOpen, setProgressTrackerDrawerOpen] =
    useState(false);

  const steps = [
    'Rolle- og saksnummer',
    'Kontaktinformasjon',
    'Fakturainformasjon',
    'Salærberegning',
    'Fravær',
    'Utlegg',
    'Oppsummering',
  ];
  const stepItems = steps.map((step, index) => (
    <ProgressTracker.Item key={step} completed={completedSteps.has(index)}>
      {step}
    </ProgressTracker.Item>
  ));

  const completeStep = (step: number) => {
    setCompletedSteps(s => new Set([...s, activeStep]));
    setActiveStep(step + 1);
  };

  const formSteps = [
    <RolleSaksnummerForm onSubmit={() => completeStep(0)} />,
    <Kontaktinformasjon onSubmit={() => completeStep(1)} />,
    <Fakturainformasjon onSubmit={() => completeStep(2)} />,
    <Heading level={1}>Salærberegning</Heading>,
    <Heading level={1}>Fravær</Heading>,
    <Heading level={1}>Utlegg</Heading>,
    <Heading level={1}>Oppsummering</Heading>,
  ];

  return (
    <Layout>
      <FormWrapper>
        <MobileOnly>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              purpose="secondary"
              onClick={() => setProgressTrackerDrawerOpen(true)}
              iconPosition="right"
              icon={ChevronRightIcon}
            >
              Steg {activeStep + 1} av {steps.length}
            </Button>
          </div>
        </MobileOnly>
        {formSteps[activeStep]}
      </FormWrapper>
      <ProgressTrackerWrapper>
        <MobileOnly>
          <Drawer
            isOpen={progressTrackerDrawerOpen}
            onClose={() => setProgressTrackerDrawerOpen(false)}
          >
            <ProgressTracker
              activeStep={activeStep}
              onStepChange={newStep => setActiveStep(newStep)}
            >
              {stepItems}
            </ProgressTracker>
          </Drawer>
        </MobileOnly>
        <DesktopOnly>
          <ProgressTracker
            activeStep={activeStep}
            onStepChange={newStep => setActiveStep(newStep)}
          >
            {stepItems}
          </ProgressTracker>
        </DesktopOnly>
      </ProgressTrackerWrapper>
    </Layout>
  );
};

const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const RolleSaksnummerForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <VStack gap="layout-x1" align="flex-start">
      <Heading level={1} style={{ marginBottom: '1rem' }}>
        Rolle- og saksnummer
      </Heading>
      <Paragraph>
        Vi trenger å vite litt om deg og saken før vi logger deg inn på neste
        steg.
      </Paragraph>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <Fieldset>
          <Legend withMargins>Saksopplysninger</Legend>
          <TextInput label="Rettens saksnummer" required />
          <Select
            label="Din rolle"
            required
            options={[{ value: 'advokat', label: 'Advokat' }]}
          />
        </Fieldset>
        <Button
          htmlProps={{ style: { marginTop: '2rem' } }}
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          Neste steg
        </Button>
      </form>
    </VStack>
  );
};

const Kontaktinformasjon = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <VStack gap="layout-x1" align="flex-start">
      <Heading level={1} style={{ marginBottom: '1rem' }}>
        Kontaktinformasjon
      </Heading>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <Fieldset>
          <Checkbox label="Jeg sender inn faktura på vegne av noen andre" />
        </Fieldset>
        <Fieldset>
          <Legend withMargins>Hvor jobber du?</Legend>
          <TextInput label="Firmanavn" required />
          <TextInput label="Organisasjonsnummer" required />
        </Fieldset>
        <Button
          htmlProps={{ style: { marginTop: '2rem' } }}
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          Neste steg
        </Button>
      </form>
    </VStack>
  );
};

const Fakturainformasjon = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <VStack gap="layout-x1" align="flex-start">
      <Heading level={1} style={{ marginBottom: '1rem' }}>
        Fakturainformasjon
      </Heading>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <Fieldset>
          <TextInput
            label="Fakturanummer eller annen unik referanse"
            required
          />
          <TextInput label="KID-nummer" />
          <TextInput label="Kontonummer" required />
        </Fieldset>
        <Fieldset>
          <Checkbox label="Ikke beregn 25% moms" />
        </Fieldset>
        <Button
          htmlProps={{ style: { marginTop: '2rem' } }}
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          Neste steg
        </Button>
      </form>
    </VStack>
  );
};
