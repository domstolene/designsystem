import { type Meta } from '@storybook/react';
import { type FormEvent, useState } from 'react';

import {
  Button,
  ChevronRightIcon,
  Drawer,
  DrawerGroup,
  Fieldset,
  FieldsetGroup,
  Grid,
  GridChild,
  HStack,
  Heading,
  Hide,
  Legend,
  NativeSelect,
  Paragraph,
  ProgressTracker,
  TextInput,
  VStack,
} from '../../src';
import { StoryThemeProvider } from '../../src/components/ThemeProvider/utils/StoryThemeProvider';

const meta: Meta = {
  title: 'Patterns/Form',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <>
        <style>
          {`
          .text--subtle  {
            color: var(--dds-color-text-subtle);
          }
          .required-mark {
          color: var(--dds-color-text-requiredfield);
          }
          `}
        </style>
        <Story />
      </>
    ),
  ],
};

export default meta;

export const Form = () => {
  return (
    <StoryThemeProvider>
      <Grid as="div" marginBlock="x1">
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/-1',
            md: '1/6',
            lg: '1/5',
            xl: '1/5',
          }}
        >
          <VStack gap="x1" maxWidth="60ch">
            <Heading level={1} withMargins>
              Navn på skjema
            </Heading>
            <Paragraph typographyType="leadMedium">
              Dette er et avsnitt/ingress. Bruk "body" og "lead" i meg. Lead er
              ingress og body er vanlig mengdetekst.
            </Paragraph>
            <Paragraph typographyType="bodySmall" className="text--subtle">
              Obligatoriske felter er merket med{' '}
              <span className="required-mark">*</span>.
            </Paragraph>
            <form>
              <VStack gap="x1">
                <Fieldset>
                  <Legend withMargins>Overskrift for gruppe</Legend>
                  <FieldsetGroup>
                    <TextInput label="Ledetekst" />
                    <NativeSelect label="Ledetekst">
                      <option></option>
                      <option>Valg 1</option>
                      <option>Valg 2</option>
                      <option>Valg 3</option>
                    </NativeSelect>
                  </FieldsetGroup>
                </Fieldset>
                <Fieldset>
                  <Legend withMargins>Overskrift for gruppe</Legend>
                  <FieldsetGroup>
                    <TextInput label="Ledetekst" />
                    <NativeSelect label="Ledetekst">
                      <option></option>
                      <option>Valg 1</option>
                      <option>Valg 2</option>
                      <option>Valg 3</option>
                    </NativeSelect>
                  </FieldsetGroup>
                </Fieldset>
                <HStack gap="x1.5" paddingBlock="x1 0">
                  <Button>Send inn</Button>
                  <Button purpose="tertiary">Avbryt of forkast</Button>
                </HStack>
              </VStack>
            </form>
          </VStack>
        </GridChild>
      </Grid>
    </StoryThemeProvider>
  );
};

export const FormWithSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const [progressTrackerDrawerOpen, setProgressTrackerDrawerOpen] =
    useState(false);

  const steps = ['Steg 1 ', 'Steg 2'];

  const completeStep = (step: number, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCompletedSteps(s => new Set([...s, activeStep]));
    setActiveStep(step + 1);
  };

  const stepItems = steps.map((step, index) => (
    <ProgressTracker.Item key={step} completed={completedSteps.has(index)}>
      {step}
    </ProgressTracker.Item>
  ));

  const formSteps = [
    <>
      <Heading level={2}>{steps[0]}</Heading>
      <form
        onSubmit={e => {
          completeStep(0, e);
        }}
      >
        <VStack gap="x1">
          <Fieldset>
            <Legend withMargins>Overskrift for gruppe</Legend>
            <FieldsetGroup>
              <TextInput label="Ledetekst" />
              <NativeSelect label="Ledetekst">
                <option></option>
                <option>Valg 1</option>
                <option>Valg 2</option>
                <option>Valg 3</option>
              </NativeSelect>
            </FieldsetGroup>
          </Fieldset>
          <Fieldset>
            <Legend withMargins>Overskrift for gruppe</Legend>
            <FieldsetGroup>
              <TextInput label="Ledetekst" />
              <NativeSelect label="Ledetekst">
                <option></option>
                <option>Valg 1</option>
                <option>Valg 2</option>
                <option>Valg 3</option>
              </NativeSelect>
            </FieldsetGroup>
          </Fieldset>
          <HStack gap="x1.5" paddingBlock="x1 0">
            <Button>Neste</Button>
            <Button purpose="tertiary">Avbryt of forkast</Button>
          </HStack>
        </VStack>
      </form>
    </>,
    <>
      <Heading level={2}>{steps[1]}</Heading>
      <form
        onSubmit={e => {
          completeStep(1, e);
        }}
      >
        <Fieldset>
          <Legend withMargins>Overskrift for gruppe</Legend>
          <FieldsetGroup>
            <TextInput label="Ledetekst" />
            <NativeSelect label="Ledetekst">
              <option></option>
              <option>Valg 1</option>
              <option>Valg 2</option>
              <option>Valg 3</option>
            </NativeSelect>
          </FieldsetGroup>
        </Fieldset>
        <Fieldset>
          <Legend withMargins>Overskrift for gruppe</Legend>
          <FieldsetGroup>
            <TextInput label="Ledetekst" />
            <NativeSelect label="Ledetekst">
              <option></option>
              <option>Valg 1</option>
              <option>Valg 2</option>
              <option>Valg 3</option>
            </NativeSelect>
          </FieldsetGroup>
        </Fieldset>
        <HStack gap="x1.5" paddingBlock="x1 0">
          <Button>Neste</Button>
          <Button purpose="tertiary">Avbryt of forkast</Button>
        </HStack>
      </form>
    </>,
  ];
  return (
    <StoryThemeProvider>
      <Grid as="div" marginBlock="x1">
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/-1',
            md: '1/6',
            lg: '1/5',
            xl: '1/5',
          }}
        >
          <VStack gap="x1" maxWidth="60ch">
            <Heading level={1}>Navn på skjema</Heading>
            <Hide hideAbove="md">
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
                    activeStep={activeStep}
                    onStepChange={newStep => setActiveStep(newStep)}
                  >
                    {stepItems}
                  </ProgressTracker>
                </Drawer>
              </DrawerGroup>
            </Hide>
            <Paragraph typographyType="leadMedium">
              Dette er et avsnitt/ingress. Bruk "body" og "lead" i meg. Lead er
              ingress og body er vanlig mengdetekst.
            </Paragraph>
            <Paragraph typographyType="bodySmall" className="text--subtle">
              Obligatoriske felter er merket med{' '}
              <span className="required-mark">*</span>.
            </Paragraph>
            {formSteps[activeStep]}
          </VStack>
        </GridChild>
        <GridChild
          hideBelow="md"
          marginBlock="x3 x1"
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/-1',
            md: '6/13',
            lg: '5/13',
            xl: '5/13',
          }}
        >
          <ProgressTracker
            activeStep={activeStep}
            onStepChange={newStep => setActiveStep(newStep)}
          >
            {stepItems}
          </ProgressTracker>
        </GridChild>
      </Grid>
    </StoryThemeProvider>
  );
};
