import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ProgressTracker } from './ProgressTracker';
import styles from './ProgressTrackerStory.module.css';
import { Button } from '../Button';
import { Drawer } from '../Drawer';
import { Fieldset } from '../Fieldset';
import {
  ArrowRightIcon,
  AttachmentIcon,
  ChecklistIcon,
  ChevronRightIcon,
  GavelIcon,
  PersonIcon,
} from '../Icon/icons';
import { Select } from '../Select';
import { Checkbox } from '../SelectionControl/Checkbox';
import { VStack } from '../Stack';
import { TextInput } from '../TextInput';
import { Heading, Legend, Paragraph } from '../Typography';

export default {
  title: 'dds-components/ProgressTracker',
  component: ProgressTracker,
  argTypes: {
    activeStep: { control: 'number' },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof ProgressTracker>;

type Story = StoryObj<typeof ProgressTracker>;

export const Overview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const numSteps = 3;

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());

    return (
      <>
        <ProgressTracker
          {...args}
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
      </>
    );
  },
};

export const WithIcons: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const numSteps = 3;

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());

    return (
      <>
        <ProgressTracker
          {...args}
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
      </>
    );
  },
};

export const FutureStepsDisabled: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
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
      <>
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
      </>
    );
  },
};

export const SmallScreen: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const numSteps = 3;

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
      <>
        <div>
          <Button
            purpose="secondary"
            onClick={() => setDrawerOpen(true)}
            iconPosition="right"
            icon={ChevronRightIcon}
          >
            Steg {activeStep + 1} av 4
          </Button>
          <div style={{ marginTop: '1rem' }}>
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
          </div>
        </div>
        <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
          <ProgressTracker
            {...args}
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
      </>
    );
  },
};

export const RealWorldExample: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
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
      <Heading level={2} typographyType="headingSans05" withMargins>
        Salærberegning
      </Heading>,
      <Heading level={2} typographyType="headingSans05" withMargins>
        Fravær
      </Heading>,
      <Heading level={2} typographyType="headingSans05" withMargins>
        Utlegg
      </Heading>,
      <Heading level={2} typographyType="headingSans05" withMargins>
        Oppsummering
      </Heading>,
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
        }}
      >
        <div style={{ width: '415px' }}>
          <div className={styles.mobile}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                purpose="secondary"
                onClick={() => setProgressTrackerDrawerOpen(true)}
                iconPosition="right"
                icon={ChevronRightIcon}
              >
                Steg {activeStep + 1} av {steps.length}
              </Button>
            </div>
          </div>
          {formSteps[activeStep]}
        </div>
        <div style={{ marginTop: '5rem' }}>
          <div className={styles.mobile}>
            <Drawer
              isOpen={progressTrackerDrawerOpen}
              onClose={() => setProgressTrackerDrawerOpen(false)}
            >
              <ProgressTracker
                {...args}
                activeStep={activeStep}
                onStepChange={newStep => setActiveStep(newStep)}
              >
                {stepItems}
              </ProgressTracker>
            </Drawer>
          </div>
          <div className={styles.desktop}>
            <ProgressTracker
              {...args}
              activeStep={activeStep}
              onStepChange={newStep => setActiveStep(newStep)}
            >
              {stepItems}
            </ProgressTracker>
          </div>
        </div>
      </div>
    );
  },
};

const RolleSaksnummerForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <VStack align="flex-start">
      <Heading level={2} typographyType="headingSans05" withMargins>
        Rolle- og saksnummer
      </Heading>
      <Paragraph withMargins>
        Vi trenger å vite litt om deg og saken før vi logger deg inn på neste
        steg.
      </Paragraph>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit();
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <Fieldset>
          <Legend withMargins>Saksopplysninger</Legend>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <TextInput label="Rettens saksnummer" required />
            <Select
              label="Din rolle"
              required
              options={[{ value: 'advokat', label: 'Advokat' }]}
            />
          </div>
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
    <VStack align="flex-start">
      <Heading level={2} typographyType="headingSans05" withMargins>
        Kontaktinformasjon
      </Heading>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit();
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <Checkbox label="Jeg sender inn faktura på vegne av noen andre" />

        <Fieldset>
          <Legend withMargins>Hvor jobber du?</Legend>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
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
      </form>
    </VStack>
  );
};

const Fakturainformasjon = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <VStack align="flex-start">
      <Heading level={2} typographyType="headingSans05" withMargins>
        Fakturainformasjon
      </Heading>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit();
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <Fieldset>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
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
