import { CalendarDate, Time } from '@internationalized/date';
import { type Meta } from '@storybook/react-vite';
import { type FormEvent, Fragment, useState } from 'react';

import {
  ArrowLeftIcon,
  Box,
  Button,
  ChevronRightIcon,
  DatePicker,
  Drawer,
  DrawerGroup,
  Fieldset,
  FieldsetGroup,
  FormSummary,
  FormSummaryEditButton,
  FormSummaryEmptyValue,
  FormSummaryError,
  FormSummaryField,
  FormSummaryFields,
  FormSummaryHeader,
  FormSummaryHeading,
  FormSummaryLabel,
  FormSummaryValue,
  Grid,
  GridChild,
  HStack,
  Heading,
  InternalHeader,
  Legend,
  Link,
  Paragraph,
  ProgressTracker,
  ShowHide,
  Tag,
  TextInput,
  TimePicker,
  Typography,
  VStack,
  VisuallyHidden,
} from '../../../src';
import { ddsProviderDecorator } from '../../../src/storybook';

const meta: Meta = {
  title: 'Patterns/Check Answers',
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { inline: false } },
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

export const CheckAnswers = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const [progressTrackerDrawerOpen, setProgressTrackerDrawerOpen] =
    useState(false);

  const steps = ['Skjemasteg 1 ', 'Skjemasteg 2', 'Oppsummering'];

  const completeStep = (step: number, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (activeStep !== 1) setCompletedSteps(s => new Set([...s, activeStep]));
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
        <TextInput required label="Navn" value="Navnar Navnesen" />
        <TextInput required label="Epostadresse" value="navnar.n@epost.no" />
        <TextInput label="Telefonnummer" />

        <HStack gap="x1.5" paddingBlock="x1.5">
          <Button>Neste</Button>
        </HStack>
      </VStack>
    </Fragment>,
    <Box marginBlock="x1 0" key={1}>
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
            Møte nr 1
          </Legend>
          <FieldsetGroup>
            <DatePicker
              isRequired
              label="Dato"
              value={new CalendarDate(2012, 12, 12)}
            />
            <TimePicker isRequired label="Start" value={new Time(12, 0)} />
            <TimePicker
              isRequired
              label="Slutt"
              value={new Time(11, 0)}
              errorMessage="Tidspunkt for slutt må være etter start."
            />
          </FieldsetGroup>
        </Fieldset>
        <Fieldset>
          <Legend withMargins typographyType="headingMedium">
            Møte nr 2
          </Legend>
          <FieldsetGroup>
            <DatePicker
              isRequired
              label="Dato"
              errorMessage="Dato for møte må fylles ut."
            />
            <TimePicker isRequired label="Start" value={new Time(13, 0)} />
            <TimePicker isRequired label="Slutt" value={new Time(14, 0)} />
          </FieldsetGroup>
        </Fieldset>
        <HStack gap="x1.5" paddingBlock="x1 0">
          <Button>Neste</Button>
        </HStack>
      </VStack>
    </Box>,
    <VStack gap="x1" marginBlock="x1 0" key={2}>
      <Heading level={2} withMargins>
        Oppsummering
      </Heading>
      <VStack gap="x1">
        <FormSummary>
          <FormSummaryHeader>
            <FormSummaryHeading level={3}>Første steg</FormSummaryHeading>
            <FormSummaryEditButton onClick={() => setActiveStep(0)}>
              Endre svar
            </FormSummaryEditButton>
          </FormSummaryHeader>
          <FormSummaryFields>
            <FormSummaryField>
              <FormSummaryLabel>Navn</FormSummaryLabel>
              <FormSummaryValue>Navnar Navnesen</FormSummaryValue>
            </FormSummaryField>
            <FormSummaryField>
              <FormSummaryLabel>Epostadresse</FormSummaryLabel>
              <FormSummaryValue>navnar.n@epost.no</FormSummaryValue>
            </FormSummaryField>
            <FormSummaryField>
              <FormSummaryLabel>Telefonnummer</FormSummaryLabel>
              <FormSummaryValue>
                <FormSummaryEmptyValue />
              </FormSummaryValue>
            </FormSummaryField>
          </FormSummaryFields>
        </FormSummary>
        <FormSummary>
          <FormSummaryHeader>
            <FormSummaryHeading level={3}>Andre steg</FormSummaryHeading>
            <FormSummaryEditButton onClick={() => setActiveStep(1)}>
              Endre svar
            </FormSummaryEditButton>
          </FormSummaryHeader>
          <FormSummaryFields>
            <FormSummaryField>
              <FormSummaryLabel>Møte nr 1</FormSummaryLabel>
              <FormSummaryValue>
                <FormSummaryFields>
                  <FormSummaryField>
                    <FormSummaryLabel>Dato</FormSummaryLabel>
                    <FormSummaryValue>12.12.2012</FormSummaryValue>
                  </FormSummaryField>
                  <FormSummaryField>
                    <FormSummaryLabel>Start</FormSummaryLabel>
                    <FormSummaryValue>12:00</FormSummaryValue>
                  </FormSummaryField>
                  <FormSummaryField>
                    <FormSummaryLabel>Slutt</FormSummaryLabel>
                    <FormSummaryValue>
                      11:00
                      <FormSummaryError>
                        <Link href="/linkTilFelt">
                          Tidspunkt for slutt må være etter start.
                        </Link>
                      </FormSummaryError>
                    </FormSummaryValue>
                  </FormSummaryField>
                </FormSummaryFields>
              </FormSummaryValue>
            </FormSummaryField>
            <FormSummaryField>
              <FormSummaryLabel>Møte nr 2</FormSummaryLabel>
              <FormSummaryValue>
                <FormSummaryFields>
                  <FormSummaryField>
                    <FormSummaryLabel>Dato</FormSummaryLabel>
                    <FormSummaryValue>
                      <FormSummaryError>
                        <Link href="/linkTilFelt">
                          Dato for møte må fylles ut.
                        </Link>
                      </FormSummaryError>
                    </FormSummaryValue>
                  </FormSummaryField>
                  <FormSummaryField>
                    <FormSummaryLabel>Start</FormSummaryLabel>
                    <FormSummaryValue>13:00</FormSummaryValue>
                  </FormSummaryField>
                  <FormSummaryField>
                    <FormSummaryLabel>Slutt</FormSummaryLabel>
                    <FormSummaryValue>14:00</FormSummaryValue>
                  </FormSummaryField>
                </FormSummaryFields>
              </FormSummaryValue>
            </FormSummaryField>
          </FormSummaryFields>
        </FormSummary>
        <FormSummary>
          <FormSummaryHeader>
            <FormSummaryHeading level={3}>Data</FormSummaryHeading>

            <Tag>Data hentet fra Et Sted</Tag>
          </FormSummaryHeader>
          <FormSummaryFields>
            <FormSummaryField>
              <FormSummaryLabel>Ledetekst</FormSummaryLabel>
              <FormSummaryValue>Verdi</FormSummaryValue>
            </FormSummaryField>
          </FormSummaryFields>
        </FormSummary>
        <HStack gap="x1.5" paddingBlock="x1.5">
          <Button>Send inn</Button>
        </HStack>
      </VStack>
    </VStack>,
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
          <Paragraph
            typographyType="bodyLongSmall"
            color="text-subtle"
            withMargins
          >
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
