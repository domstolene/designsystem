import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { ProgressTracker } from './ProgressTracker';
import { htmlPropsArgType } from '../../storybook/helpers';
import { Button } from '../Button';
import { Drawer, DrawerGroup } from '../Drawer';
import { Fieldset, FieldsetGroup } from '../Fieldset';
import {
  ArrowRightIcon,
  AttachmentIcon,
  ChecklistIcon,
  ChevronRightIcon,
  GavelIcon,
  PersonIcon,
} from '../Icon/icons';
import { Box, Grid, HStack, ShowHide, VStack } from '../layout';
import { Select } from '../Select';
import { Checkbox } from '../SelectionControl/Checkbox';
import { TextInput } from '../TextInput';
import { StoryThemeProvider } from '../ThemeProvider/utils/StoryThemeProvider';
import { Heading, Legend, Paragraph } from '../Typography';

export default {
  title: 'dds-components/Components/ProgressTracker',
  component: ProgressTracker,
  argTypes: {
    htmlProps: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof ProgressTracker>;

type Story = StoryObj<typeof ProgressTracker>;

export const Default: Story = {
  render: args => {
    const numSteps = 3;

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());

    return (
      <VStack gap="x1.5">
        <ProgressTracker
          {...args}
          activeStep={activeStep}
          onStepChange={step => setActiveStep(step)}
          htmlProps={{ style: { maxWidth: '800px' } }}
        >
          <ProgressTracker.Item completed={completedSteps.has(0)}>
            Parter
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

        <div>
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
      </VStack>
    );
  },
};

export const WithIcons: Story = {
  render: args => {
    const numSteps = 3;

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());

    return (
      <VStack gap="x1.5">
        <ProgressTracker
          {...args}
          activeStep={activeStep}
          onStepChange={step => setActiveStep(step)}
        >
          <ProgressTracker.Item
            icon={PersonIcon}
            completed={completedSteps.has(0)}
          >
            Parter
          </ProgressTracker.Item>
          <ProgressTracker.Item
            icon={GavelIcon}
            completed={completedSteps.has(1)}
          >
            Slutning
          </ProgressTracker.Item>
          <ProgressTracker.Item
            icon={AttachmentIcon}
            completed={completedSteps.has(2)}
          >
            Vedlegg
          </ProgressTracker.Item>
          <ProgressTracker.Item
            icon={ChecklistIcon}
            completed={completedSteps.has(3)}
            disabled
          >
            Sammendrag
          </ProgressTracker.Item>
        </ProgressTracker>

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
      </VStack>
    );
  },
};

export const Horisontal: Story = {
  render: args => {
    const numSteps = 3;

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());

    return (
      <VStack gap="x1.5">
        <ProgressTracker
          {...args}
          direction="row"
          activeStep={activeStep}
          onStepChange={step => setActiveStep(step)}
        >
          <ProgressTracker.Item completed={completedSteps.has(0)}>
            Parter
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

        <div>
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
      </VStack>
    );
  },
};

export const FutureStepsDisabled: Story = {
  render: args => {
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
      <VStack gap="x1.5">
        <ProgressTracker
          {...args}
          activeStep={activeStep}
          htmlProps={{ style: { maxWidth: '800px' } }}
          onStepChange={step => setActiveStep(step)}
        >
          <ProgressTracker.Item
            disabled={isDisabled(0)}
            completed={completedSteps.has(0)}
          >
            Parter
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
        <div>
          {activeStep === 0 && <div>Steg 1</div>}
          {activeStep === 1 && <div>Steg 2</div>}
          {activeStep === 2 && <div>Steg 3</div>}
        </div>
        <HStack gap="x0.75">
          <Button onClick={() => activeStep > 0 && setActiveStep(s => s - 1)}>
            Forrige steg
          </Button>
          <Button onClick={handleSetFinishedButtonClick}>Neste steg</Button>
        </HStack>
      </VStack>
    );
  },
};

export const SmallScreen: Story = {
  decorators: [
    Story => (
      <StoryThemeProvider>
        <Story />
      </StoryThemeProvider>
    ),
  ],
  render: args => {
    const numSteps = 3;

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
      <>
        <VStack gap="x1.5">
          <DrawerGroup isOpen={isDrawerOpen} setIsOpen={setDrawerOpen}>
            <Button
              purpose="secondary"
              iconPosition="right"
              icon={ChevronRightIcon}
            >
              Steg {activeStep + 1} av 4
            </Button>
            <Drawer>
              <ProgressTracker
                {...args}
                activeStep={activeStep}
                onStepChange={step => {
                  setDrawerOpen(false);
                  setActiveStep(step);
                }}
              >
                <ProgressTracker.Item completed={completedSteps.has(0)}>
                  Parter med lang tekst
                </ProgressTracker.Item>
                <ProgressTracker.Item completed={completedSteps.has(1)}>
                  Slutning
                </ProgressTracker.Item>
                <ProgressTracker.Item completed={completedSteps.has(2)}>
                  Vedlegg
                </ProgressTracker.Item>
                <ProgressTracker.Item
                  completed={completedSteps.has(3)}
                  disabled
                >
                  Sammendrag
                </ProgressTracker.Item>
              </ProgressTracker>
            </Drawer>
          </DrawerGroup>
          {activeStep >= 0 && <div>Steg {activeStep + 1}</div>}
          <Button
            onClick={() => {
              setCompletedSteps(s => new Set([...s, activeStep]));
              if (activeStep < numSteps - 1) {
                setActiveStep(s => s + 1);
              }
            }}
          >
            Sett steg ferdig
          </Button>
        </VStack>
      </>
    );
  },
};

export const RealWorldRosponsiveExample: Story = {
  decorators: [
    Story => (
      <StoryThemeProvider>
        <Story />
        <style>
          {`
          .story-grid {
              grid-template-columns: 26rem 1fr;
              gap: var(--dds-spacing-x6);
          }
          `}
        </style>
      </StoryThemeProvider>
    ),
  ],
  render: args => {
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
      <Heading level={2} typographyType="headingXlarge" withMargins>
        Salærberegning
      </Heading>,
      <Heading level={2} typographyType="headingXlarge" withMargins>
        Fravær
      </Heading>,
      <Heading level={2} typographyType="headingXlarge" withMargins>
        Utlegg
      </Heading>,
      <Heading level={2} typographyType="headingXlarge" withMargins>
        Oppsummering
      </Heading>,
    ];

    return (
      <Grid className="story-grid">
        <div>
          <ShowHide showBelow="md">
            <DrawerGroup
              isOpen={progressTrackerDrawerOpen}
              setIsOpen={setProgressTrackerDrawerOpen}
            >
              <Button
                purpose="secondary"
                iconPosition="right"
                icon={ChevronRightIcon}
              >
                Steg {activeStep + 1} av {steps.length}
              </Button>
              <Drawer>
                <ProgressTracker
                  {...args}
                  activeStep={activeStep}
                  onStepChange={newStep => setActiveStep(newStep)}
                >
                  {stepItems}
                </ProgressTracker>
              </Drawer>
            </DrawerGroup>
          </ShowHide>
          {formSteps[activeStep]}
        </div>
        <Box hideBelow="md" marginBlock="x3 x1">
          <ProgressTracker
            {...args}
            activeStep={activeStep}
            onStepChange={newStep => setActiveStep(newStep)}
          >
            {stepItems}
          </ProgressTracker>
        </Box>
      </Grid>
    );
  },
};

const RolleSaksnummerForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <VStack gap="x1">
      <Heading level={2} typographyType="headingXlarge" withMargins>
        Rolle- og saksnummer
      </Heading>
      <Paragraph typographyType="leadMedium">
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
          <FieldsetGroup>
            <TextInput label="Rettens saksnummer" required />
            <Select
              label="Din rolle"
              required
              options={[{ value: 'advokat', label: 'Advokat' }]}
            />
          </FieldsetGroup>
        </Fieldset>
        <Box marginBlock="x2 x1">
          <Button icon={ArrowRightIcon} iconPosition="right">
            Neste steg
          </Button>
        </Box>
      </form>
    </VStack>
  );
};

const Kontaktinformasjon = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <VStack>
      <Heading level={2} typographyType="headingXlarge" withMargins>
        Kontaktinformasjon
      </Heading>
      <VStack
        as="form"
        gap="x1.5"
        onSubmit={event => {
          event.preventDefault();
          onSubmit();
        }}
        className="story-form-wrapper"
      >
        <Checkbox label="Jeg sender inn faktura på vegne av noen andre" />

        <Fieldset>
          <Legend withMargins>Hvor jobber du?</Legend>
          <div className="story-form-wrapper">
            <TextInput label="Firmanavn" required />
            <TextInput label="Organisasjonsnummer" required />
          </div>
        </Fieldset>
        <Button
          htmlProps={{ style: { marginTop: '2rem' } }}
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          Neste steg
        </Button>
      </VStack>
    </VStack>
  );
};

const Fakturainformasjon = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <VStack>
      <Heading level={2} typographyType="headingXlarge" withMargins>
        Fakturainformasjon
      </Heading>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit();
        }}
        className="story-form-wrapper"
      >
        <Fieldset>
          <div className="story-form-wrapper">
            <TextInput
              label="Fakturanummer eller annen unik referanse"
              required
            />
            <TextInput label="KID-nummer" />
            <TextInput label="Kontonummer" required />
          </div>
        </Fieldset>
        <Checkbox label="Ikke beregn 25% moms" />
        <Button
          className="story-step-button"
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          Neste steg
        </Button>
      </form>
    </VStack>
  );
};
