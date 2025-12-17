import { type Meta } from '@storybook/react-vite';
import { type FormEvent, Fragment, useState } from 'react';

import {
  ArrowLeftIcon,
  BackLink,
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
  Modal,
  ModalActions,
  ModalBody,
  NativeSelect,
  Paragraph,
  ProgressTracker,
  ShowHide,
  TextInput,
  Typography,
  VStack,
  VisuallyHidden,
} from '../../../src';
import { ddsProviderDecorator } from '../../../src/storybook';

const meta: Meta = {
  title: 'Patterns/Form',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { inline: false } },
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

export const Form = () => {
  return (
    <>
      <InternalHeader
        applicationName="Applikasjon"
        applicationDesc="Beskrivelse"
        navItems={[
          { children: 'Menypunkt', href: '//' },
          { children: 'Menypunkt', href: '///' },
        ]}
        smallScreenBreakpoint="sm"
        currentPageHref="//"
      />
      <Grid maxWidth="60ch" marginBlock="0 x1">
        <GridChild columnsOccupied="all">
          <Heading level={1} withMargins>
            Navn på skjema
          </Heading>
          <Paragraph withMargins typographyType="leadMedium">
            Dette er et eksempel på en ingress. Den består ofte av et par
            setninger. En setning til.
          </Paragraph>
          <Paragraph withMargins typographyType="bodySmall" color="text-subtle">
            Obligatoriske felter er merket med{' '}
            <Typography as="span" color="text-requiredfield">
              *
            </Typography>
            .
          </Paragraph>
          <VStack as="form" gap="x1">
            <Fieldset>
              <Legend withMargins>Overskrift for gruppe</Legend>
              <FieldsetGroup>
                <TextInput label="Ledetekst" width={{ xs: '100%' }} />
                <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
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
                <TextInput label="Ledetekst" width={{ xs: '100%' }} />
                <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
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
                <TextInput label="Adresse" width={{ xs: '100%' }} />
                <Box
                  display="flex"
                  flexDirection={{
                    xs: 'column',
                  }}
                  gap="x1.5"
                >
                  <TextInput width="94px" label="Postnummer" />
                  <TextInput
                    label="Sted"
                    readOnly
                    width={{
                      xs: '100%',
                      sm: '202px',
                      md: '202px',
                      lg: '202px',
                      xl: '202px',
                    }}
                  />
                </Box>
              </FieldsetGroup>
            </Fieldset>

            <HStack gap="x1.5" paddingBlock="x1.5">
              <Button>Send inn</Button>
            </HStack>
          </VStack>
        </GridChild>
      </Grid>
    </>
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
      <VStack
        as="form"
        gap="x1"
        onSubmit={e => {
          completeStep(0, e);
        }}
      >
        <Fieldset>
          <Legend withMargins typographyType="headingMedium">
            Overskrift for gruppe
          </Legend>
          <FieldsetGroup>
            <TextInput label="Ledetekst" width={{ xs: '100%' }} />
            <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
              <option></option>
              <option>Valg 1</option>
              <option>Valg 2</option>
              <option>Valg 3</option>
            </NativeSelect>
          </FieldsetGroup>
        </Fieldset>
        <Fieldset>
          <Legend withMargins typographyType="headingMedium">
            Overskrift for gruppe
          </Legend>
          <FieldsetGroup>
            <TextInput label="Ledetekst" width={{ xs: '100%' }} />
            <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
              <option></option>
              <option>Valg 1</option>
              <option>Valg 2</option>
              <option>Valg 3</option>
            </NativeSelect>
          </FieldsetGroup>
        </Fieldset>
        <Fieldset>
          <Legend withMargins typographyType="headingMedium">
            Adresse
          </Legend>
          <FieldsetGroup>
            <TextInput label="Adresse" width={{ xs: '100%' }} />
            <Box
              display="flex"
              flexDirection={{
                xs: 'column',
              }}
              gap="x1.5"
            >
              <TextInput width="94px" label="Postnummer" />
              <TextInput
                label="Sted"
                readOnly
                width={{
                  xs: '100%',
                  sm: '202px',
                  md: '202px',
                  lg: '202px',
                  xl: '202px',
                }}
              />
            </Box>
          </FieldsetGroup>
        </Fieldset>
        <HStack gap="x1.5" paddingBlock="x1.5">
          <Button>Neste</Button>
        </HStack>
      </VStack>
    </Fragment>,
    <Fragment key={1}>
      <Heading level={2} withMargins>
        {steps[1]}
      </Heading>
      <VStack
        as="form"
        gap="x1"
        onSubmit={e => {
          completeStep(1, e);
        }}
      >
        <Fieldset>
          <Legend withMargins typographyType="headingMedium">
            Overskrift for gruppe
          </Legend>
          <FieldsetGroup>
            <TextInput label="Ledetekst" width={{ xs: '100%' }} />
            <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
              <option></option>
              <option>Valg 1</option>
              <option>Valg 2</option>
              <option>Valg 3</option>
            </NativeSelect>
          </FieldsetGroup>
        </Fieldset>
        <Fieldset>
          <Legend withMargins typographyType="headingMedium">
            Overskrift for gruppe
          </Legend>
          <FieldsetGroup>
            <TextInput label="Ledetekst" width={{ xs: '100%' }} />
            <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
              <option></option>
              <option>Valg 1</option>
              <option>Valg 2</option>
              <option>Valg 3</option>
            </NativeSelect>
          </FieldsetGroup>
        </Fieldset>
        <HStack gap="x1.5" paddingBlock="x1 0">
          <Button>Send inn</Button>
        </HStack>
      </VStack>
    </Fragment>,
  ];
  return (
    <>
      <InternalHeader
        applicationName="Applikasjon"
        applicationDesc="Beskrivelse"
        navItems={[
          { children: 'Menypunkt', href: '//' },
          { children: 'Menypunkt', href: '///' },
        ]}
        currentPageHref="//"
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
            Dette er et eksempel på en ingress. Den består ofte av et par
            setninger. En setning til.
          </Paragraph>
          <Paragraph typographyType="bodySmall" color="text-subtle" withMargins>
            Obligatoriske felter er merket med{' '}
            <Typography as="span" color="text-requiredfield">
              *
            </Typography>
            .
          </Paragraph>
          <VStack gap="x1">
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
                  Steg {activeStep + 1} av {steps.length}{' '}
                  <VisuallyHidden>Vis stegnavigasjon</VisuallyHidden>
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
            {activeStep > 0 && (
              <Button
                purpose="secondary"
                icon={ArrowLeftIcon}
                onClick={() => previousStep()}
              >
                Forrige steg
              </Button>
            )}
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
    </>
  );
};

export const FormWithStepsCustomGrid = () => {
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
      <Heading level={2}>{steps[0]}</Heading>
      <form
        onSubmit={e => {
          completeStep(0, e);
        }}
      >
        <VStack gap="x1">
          <Fieldset>
            <Legend withMargins typographyType="headingMedium">
              Overskrift for gruppe
            </Legend>
            <FieldsetGroup>
              <TextInput label="Ledetekst" width={{ xs: '100%' }} />
              <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
                <option></option>
                <option>Valg 1</option>
                <option>Valg 2</option>
                <option>Valg 3</option>
              </NativeSelect>
            </FieldsetGroup>
          </Fieldset>
          <Fieldset>
            <Legend withMargins typographyType="headingMedium">
              Overskrift for gruppe
            </Legend>
            <FieldsetGroup>
              <TextInput label="Ledetekst" width={{ xs: '100%' }} />
              <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
                <option></option>
                <option>Valg 1</option>
                <option>Valg 2</option>
                <option>Valg 3</option>
              </NativeSelect>
            </FieldsetGroup>
          </Fieldset>
          <Fieldset>
            <Legend withMargins typographyType="headingMedium">
              Adresse
            </Legend>
            <FieldsetGroup>
              <TextInput label="Adresse" width={{ xs: '100%' }} />
              <Box
                display="flex"
                flexDirection={{
                  xs: 'column',
                }}
                gap="x1.5"
              >
                <TextInput width="94px" label="Postnummer" />
                <TextInput
                  label="Sted"
                  readOnly
                  width={{
                    xs: '100%',
                    sm: '202px',
                    md: '202px',
                    lg: '202px',
                    xl: '202px',
                  }}
                />
              </Box>
            </FieldsetGroup>
          </Fieldset>
          <HStack gap="x1.5" paddingBlock="x1.5">
            <Button>Neste</Button>
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
          <Legend withMargins typographyType="headingMedium">
            Overskrift for gruppe
          </Legend>
          <FieldsetGroup>
            <TextInput label="Ledetekst" width={{ xs: '100%' }} />
            <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
              <option></option>
              <option>Valg 1</option>
              <option>Valg 2</option>
              <option>Valg 3</option>
            </NativeSelect>
          </FieldsetGroup>
        </Fieldset>
        <Fieldset>
          <Legend withMargins typographyType="headingMedium">
            Overskrift for gruppe
          </Legend>
          <FieldsetGroup>
            <TextInput label="Ledetekst" width={{ xs: '100%' }} />
            <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
              <option></option>
              <option>Valg 1</option>
              <option>Valg 2</option>
              <option>Valg 3</option>
            </NativeSelect>
          </FieldsetGroup>
        </Fieldset>
        <HStack gap="x1.5" paddingBlock="x1.5">
          <Button>Send inn</Button>
        </HStack>
      </form>
    </Fragment>,
  ];
  return (
    <>
      <Grid
        as="div"
        marginBlock="x1"
        gridTemplateColumns={{
          xs: '100%',
          sm: '60ch',
          md: '60ch 1fr',
          lg: '60ch 1fr',
          xl: '60ch 1fr',
        }}
      >
        <GridChild>
          <VStack gap="x1">
            <Heading level={1}>Navn på skjema</Heading>
            <Paragraph typographyType="leadMedium">
              Dette er et eksempel på en ingress. Den består ofte av et par
              setninger. En setning til.
            </Paragraph>
            <Paragraph typographyType="bodySmall" color="text-subtle">
              Obligatoriske felter er merket med{' '}
              <Typography as="span" color="text-requiredfield">
                *
              </Typography>
              .
            </Paragraph>
            <VStack gap="x1">
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
                    Steg {activeStep + 1} av {steps.length}{' '}
                    <VisuallyHidden>Vis stegnavigasjon</VisuallyHidden>
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
              {activeStep > 0 && (
                <Button
                  purpose="secondary"
                  icon={ArrowLeftIcon}
                  onClick={() => previousStep()}
                >
                  Forrige steg
                </Button>
              )}
            </VStack>
            {formSteps[activeStep]}
          </VStack>
        </GridChild>
        <GridChild hideBelow="sm" marginBlock="x3 x1">
          <ProgressTracker
            activeStep={activeStep}
            onStepChange={newStep => setActiveStep(newStep)}
          >
            {stepItems}
          </ProgressTracker>
        </GridChild>
      </Grid>
    </>
  );
};

export const ExitForm = () => {
  const [isFormPage, setIsFormPage] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  function exitForm() {
    closeModal();
    setIsFormPage(false);
  }

  return (
    <>
      <InternalHeader
        applicationName="Applikasjon"
        applicationDesc="Beskrivelse"
      />
      <Grid maxWidth="60ch" marginBlock="0 x1">
        <GridChild columnsOccupied="all">
          {isFormPage ? (
            <>
              <Box marginBlock="x1">
                <BackLink label="Tilbake" onClick={() => setShowModal(true)} />
              </Box>
              <Heading level={1} withMargins>
                Navn på skjema
              </Heading>
              <Paragraph withMargins typographyType="leadMedium">
                Dette er et eksempel på en ingress. Den består ofte av et par
                setninger. En setning til.
              </Paragraph>
              <Paragraph
                withMargins
                typographyType="bodySmall"
                color="text-subtle"
              >
                Obligatoriske felter er merket med{' '}
                <Typography as="span" color="text-requiredfield">
                  *
                </Typography>
                .
              </Paragraph>
              <VStack as="form" gap="x1">
                <Fieldset>
                  <Legend withMargins>Overskrift for gruppe</Legend>
                  <FieldsetGroup>
                    <TextInput label="Ledetekst" width={{ xs: '100%' }} />
                    <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
                      <option></option>
                      <option>Valg 1</option>
                      <option>Valg 2</option>
                      <option>Valg 3</option>
                    </NativeSelect>
                  </FieldsetGroup>
                </Fieldset>
                <HStack gap="x1.5" paddingBlock="x1.5">
                  <Button>Send inn</Button>
                </HStack>
              </VStack>
            </>
          ) : (
            <>
              <Heading level={1} withMargins>
                Ute av skjema
              </Heading>
              <Button onClick={() => setIsFormPage(true)}>Gå til skjema</Button>
            </>
          )}
        </GridChild>
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          header="Du er i ferd med å forlate skjema"
        >
          <ModalBody>Alle endringer vil bli tapt.</ModalBody>
          <ModalActions>
            <Button onClick={exitForm}>Forlat</Button>
            <Button purpose="secondary" onClick={closeModal}>
              Bli på siden
            </Button>
          </ModalActions>
        </Modal>
      </Grid>
    </>
  );
};
