import { type Meta } from '@storybook/react';
import { type FormEvent, Fragment, useState } from 'react';

import {
  ArrowLeftIcon,
  Box,
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
  InternalHeader,
  Legend,
  NativeSelect,
  Paragraph,
  ProgressTracker,
  ShowHide,
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
      <InternalHeader
        applicationName="Applikasjon"
        applicationDesc="Beskrivelse"
        navItems={[
          { children: 'Lenkenavn', href: '/' },
          { children: 'Lenkenavn', href: '/' },
        ]}
        smallScreenBreakpoint="sm"
      />
      <Box
        maxWidth="60ch"
        marginInline={{ xs: 'x2', sm: 'x2', md: 'x4', lg: 'x6', xl: 'x10' }}
      >
        <Heading level={1} withMargins>
          Navn på skjema
        </Heading>
        <Paragraph withMargins typographyType="leadMedium">
          Dette er et avsnitt/ingress. Bruk "body" og "lead" i meg. Lead er
          ingress og body er vanlig mengdetekst.
        </Paragraph>
        <Paragraph
          withMargins
          typographyType="bodySmall"
          className="text--subtle"
        >
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
            <Fieldset>
              <Legend withMargins>Adresse</Legend>
              <FieldsetGroup>
                <TextInput label="Adresse" />
                <Box
                  display="flex"
                  flexDirection={{
                    xs: 'column',
                  }}
                  gap="x1.5"
                >
                  <TextInput width="94px" label="Postnummer" />
                  <TextInput label="Sted" readOnly width="202px" />
                </Box>
              </FieldsetGroup>
            </Fieldset>

            <HStack gap="x1.5" paddingBlock="x1 0">
              <Button>Send inn</Button>
              <Button purpose="tertiary">Avbryt og forkast</Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </StoryThemeProvider>
  );
};

export const FormWithSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const [progressTrackerDrawerOpen, setProgressTrackerDrawerOpen] =
    useState(false);

  const steps = ['Skjemasteg 1 ', 'Skjemasteg 2'];

  const completeStep = (step: number, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCompletedSteps(s => new Set([...s, activeStep]));
    setActiveStep(step + 1);
  };

  const previousStep = () => {
    setActiveStep(activeStep - 1);
  };

  const stepItems = steps.map((step, index) => (
    <ProgressTracker.Item key={step} completed={completedSteps.has(index)}>
      {step}
    </ProgressTracker.Item>
  ));

  const formSteps = [
    <Fragment key={0}>
      <Heading level={2} withMargins>
        {steps[0]}
      </Heading>
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
          <Fieldset>
            <Legend withMargins>Adresse</Legend>
            <FieldsetGroup>
              <TextInput label="Adresse" />
              <Box
                display="flex"
                flexDirection={{
                  xs: 'column',
                }}
                gap="x1.5"
              >
                <TextInput width="94px" label="Postnummer" />
                <TextInput label="Sted" readOnly width="202px" />
              </Box>
            </FieldsetGroup>
          </Fieldset>
          <HStack gap="x1.5" paddingBlock="x1 0">
            <Button>Neste</Button>
            <Button purpose="tertiary">Avbryt og forkast</Button>
          </HStack>
        </VStack>
      </form>
    </Fragment>,
    <Fragment key={1}>
      <Heading level={2} withMargins>
        {steps[1]}
      </Heading>
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
          <Button purpose="tertiary">Avbryt og forkast</Button>
        </HStack>
      </form>
    </Fragment>,
  ];
  return (
    <StoryThemeProvider>
      <InternalHeader
        applicationName="Applikasjon"
        applicationDesc="Beskrivelse"
        navItems={[
          { children: 'Lenkenavn', href: '/' },
          { children: 'Lenkenavn', href: '/' },
        ]}
        smallScreenBreakpoint="sm"
      />
      <Grid as="div" marginBlock="0 x1" maxWidth="1100px">
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/7',
            md: '1/7',
            lg: '1/7',
            xl: '1/7',
          }}
        >
          <Heading withMargins level={1}>
            Navn på skjema
          </Heading>
          <Paragraph typographyType="leadMedium" withMargins>
            Dette er et avsnitt/ingress. Bruk "body" og "lead" i meg. Lead er
            ingress og body er vanlig mengdetekst.
          </Paragraph>
          <Paragraph
            typographyType="bodySmall"
            className="text--subtle"
            withMargins
          >
            Obligatoriske felter er merket med{' '}
            <span className="required-mark">*</span>.
          </Paragraph>
          <VStack gap="x1">
            {activeStep > 0 && (
              <Button
                purpose="secondary"
                icon={ArrowLeftIcon}
                onClick={() => previousStep()}
              >
                Forrige steg
              </Button>
            )}

            <ShowHide showBelow="sm">
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
            </ShowHide>
          </VStack>
          {formSteps[activeStep]}
        </GridChild>
        <GridChild
          hideBelow="sm"
          marginBlock="x4 x1"
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/-1',
            md: '7/13',
            lg: '7/13',
            xl: '7/13',
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

export const FormWithStepsCustomGrid = () => {
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
    <Fragment key={0}>
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
            <Button purpose="tertiary">Avbryt og forkast</Button>
          </HStack>
        </VStack>
      </form>
    </Fragment>,
    <Fragment key={1}>
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
          <Button purpose="tertiary">Avbryt og forkast</Button>
        </HStack>
      </form>
    </Fragment>,
  ];
  return (
    <StoryThemeProvider>
      <Grid
        as="div"
        marginBlock="x1"
        gridTemplateColumns={{
          xs: '100%',
          sm: '60ch',
          md: '60ch',
          lg: '60ch 1fr',
          xl: '60ch 1fr',
        }}
      >
        <GridChild>
          <VStack gap="x1">
            <Heading level={1}>Navn på skjema</Heading>
            <Paragraph typographyType="leadMedium">
              Dette er et avsnitt/ingress. Bruk "body" og "lead" i meg. Lead er
              ingress og body er vanlig mengdetekst.
            </Paragraph>
            <Paragraph typographyType="bodySmall" className="text--subtle">
              Obligatoriske felter er merket med{' '}
              <span className="required-mark">*</span>.
            </Paragraph>
            <VStack gap="x1">
              <Button purpose="secondary" icon={ArrowLeftIcon}>
                Forrige steg
              </Button>
              <ShowHide showBelow="sm">
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
              </ShowHide>
            </VStack>
            {formSteps[activeStep]}
          </VStack>
        </GridChild>
        <GridChild hideBelow="md" marginBlock="x3 x1">
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
