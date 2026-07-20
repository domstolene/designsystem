import preview from '#.storybook/preview';
import { Fragment, type SubmitEvent, useState } from 'react';

import {
  ArrowLeftIcon,
  Box,
  Button,
  ChevronRightIcon,
  Drawer,
  DrawerGroup,
  ErrorSummary,
  ErrorSummaryItem,
  Grid,
  GridChild,
  HStack,
  Heading,
  InternalHeader,
  NativeSelect,
  Paragraph,
  ProgressTracker,
  TextInput,
  Typography,
  VStack,
  VisuallyHidden,
} from '../../../src';
import { ddsProviderDecorator } from '../../../src/storybook';

const meta = preview.meta({
  title: 'Mønstre/Skjemavalidering',
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
      },
    },
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const SimpleWithErrors = meta.story({
  name: 'Statisk visning av feilmeldinger',
  parameters: {
    docs: {
      story: {
        height: '1000px',
      },
    },
  },
  render: () => {
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
            <Paragraph withMargins typographyType="lead-medium">
              Dette er et eksempel på en ingress. Den består ofte av et par
              setninger. En setning til.
            </Paragraph>
            <Paragraph
              withMargins
              typographyType="body-long-small"
              color="text-subtle"
            >
              Obligatoriske felter er merket med{' '}
              <Typography as="span" color="text-requiredfield">
                *
              </Typography>
              .
            </Paragraph>
            <VStack as="form" gap="x1.5" noValidate>
              <TextInput
                id="ledetekst"
                required
                label="Ledetekst"
                width={{ xs: '100%' }}
                errorMessage="Ledetekst må fylles ut"
              />
              <TextInput
                id="ledetekst2"
                label="Ledetekst 2"
                width={{ xs: '100%' }}
                value="123"
                errorMessage="Ledetekst 2 må inneholde 11 sifre"
              />
              <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
                <option></option>
                <option>Valg 1</option>
                <option>Valg 2</option>
                <option>Valg 3</option>
              </NativeSelect>
              <ErrorSummary>
                <ErrorSummaryItem href="#ledetekst">
                  Ledetekst må fylles ut
                </ErrorSummaryItem>
                <ErrorSummaryItem href="#ledetekst2">
                  Ledetekst 2 må inneholde 11 sifre
                </ErrorSummaryItem>
              </ErrorSummary>
              <Button>Send inn</Button>
            </VStack>
          </GridChild>
        </Grid>
      </>
    );
  },
});

export const Wizard = meta.story({
  parameters: {
    docs: {
      story: {
        height: '1100px',
      },
    },
  },
  render: () => {
    type FormDataKeys =
      | 'step1Field1'
      | 'step1Field2'
      | 'step2Field1'
      | 'step2Field2';

    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set<number>());
    const [progressTrackerDrawerOpen, setProgressTrackerDrawerOpen] =
      useState(false);
    const [showErrorSummary, setShowErrorSummary] = useState(false);

    type FormState = Record<
      FormDataKeys,
      {
        value: string;
        changed: boolean;
        validated: boolean;
      }
    >;

    const initialFormState: FormState = {
      step1Field1: { value: '', changed: false, validated: false },
      step1Field2: { value: '', changed: false, validated: false },
      step2Field1: { value: '', changed: false, validated: false },
      step2Field2: { value: '', changed: false, validated: false },
    };

    const [form, setForm] = useState<FormState>(initialFormState);

    const [errors, setErrors] = useState<Record<FormDataKeys, string>>({
      step1Field1: '',
      step1Field2: '',
      step2Field1: '',
      step2Field2: '',
    });

    const fields: Record<FormDataKeys, { id: string; step: number }> = {
      step1Field1: {
        id: 'ledetekst',
        step: 0,
      },
      step1Field2: {
        id: 'ledetekst2',
        step: 0,
      },
      step2Field1: {
        id: 'ledetekst3',
        step: 1,
      },
      step2Field2: {
        id: 'ledetekst4',
        step: 1,
      },
    };

    const getStepFields = (step: number) =>
      (Object.keys(fields) as Array<FormDataKeys>).filter(
        key => fields[key].step === step,
      );

    const steps = ['Skjemasteg 1 ', 'Skjemasteg 2'];

    const getFieldError = (field: FormDataKeys, value: string): string => {
      switch (field) {
        case 'step1Field1':
        case 'step2Field1':
          return value.trim() ? '' : 'Ledetekst må fylles ut';

        case 'step1Field2':
        case 'step2Field2':
          if (!value.trim()) {
            return 'Ledetekst 2 må fylles ut';
          }

          return /^\d{11}$/.test(value)
            ? ''
            : 'Ledetekst 2 må bestå av 11 sifre';
      }
    };

    const updateField = (field: FormDataKeys, value: string) => {
      setForm(current => ({
        ...current,
        [field]: {
          ...current[field],
          value,
          changed: true,
        },
      }));
    };

    const blurField = (field: FormDataKeys) => {
      setForm(current => ({
        ...current,
        [field]: {
          ...current[field],
          validated: true,
        },
      }));

      if (!form[field].changed) {
        return;
      }

      setErrors(current => ({
        ...current,
        [field]: getFieldError(field, form[field].value),
      }));
    };

    const validateStep = (step: number) => {
      const stepFields = getStepFields(step);

      const stepErrors = {} as Record<FormDataKeys, string>;

      let isValid = true;

      stepFields.forEach(field => {
        const error = getFieldError(field, form[field].value);

        stepErrors[field] = error;

        if (error) {
          isValid = false;
        }
      });

      setErrors(current => ({
        ...current,
        ...stepErrors,
      }));

      setShowErrorSummary(!isValid);

      return isValid;
    };

    const goToStep = (nextStep: number) => {
      if (nextStep <= activeStep) {
        setActiveStep(nextStep);
        return;
      }
      if (!validateStep(activeStep)) {
        return;
      }

      setShowErrorSummary(false);
      setCompletedSteps(s => new Set([...s, activeStep]));
      setActiveStep(nextStep);
    };

    const completeStep = (step: number, e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      goToStep(step + 1);
    };

    const previousStep = () => {
      setActiveStep(activeStep - 1);
    };

    const summaryErrors = getStepFields(activeStep)
      .filter(field => errors[field])
      .map(field => ({
        field,
        error: errors[field],
      }));

    console.log('summaryErrors', summaryErrors);

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
          noValidate
          onSubmit={e => {
            completeStep(0, e);
          }}
        >
          <TextInput
            id="ledetekst"
            required
            label="Ledetekst"
            width={{ xs: '100%' }}
            value={form.step1Field1.value}
            onChange={e => updateField('step1Field1', e.target.value)}
            onBlur={() => blurField('step1Field1')}
            errorMessage={errors.step1Field1}
          />
          <TextInput
            id="ledetekst2"
            required
            label="Ledetekst 2"
            width={{ xs: '100%' }}
            value={form.step1Field2.value}
            onChange={e => updateField('step1Field2', e.target.value)}
            onBlur={() => blurField('step1Field2')}
            errorMessage={errors.step1Field2}
          />
          <NativeSelect label="Ledetekst" width={{ xs: '100%' }}>
            <option></option>
            <option>Valg 1</option>
            <option>Valg 2</option>
            <option>Valg 3</option>
          </NativeSelect>
          <div aria-live="polite">
            {showErrorSummary && summaryErrors.length > 0 && (
              <ErrorSummary>
                {summaryErrors.map(({ field, error }) => (
                  <ErrorSummaryItem key={field} href={`#${fields[field].id}`}>
                    {error}
                  </ErrorSummaryItem>
                ))}
              </ErrorSummary>
            )}
          </div>
          <HStack
            gap="x1.5"
            paddingBlock={showErrorSummary ? '0 x1.5' : 'x1.5'}
          >
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
          noValidate
          onSubmit={e => {
            completeStep(1, e);
          }}
        >
          <TextInput
            id="ledetekst3"
            required
            label="Ledetekst"
            width={{ xs: '100%' }}
            value={form.step2Field1.value}
            onChange={e => updateField('step2Field1', e.target.value)}
            onBlur={() => blurField('step2Field1')}
            errorMessage={errors.step2Field1}
          />
          <TextInput
            id="ledetekst4"
            required
            label="Ledetekst 2"
            width={{ xs: '100%' }}
            value={form.step2Field2.value}
            onChange={e => updateField('step2Field2', e.target.value)}
            onBlur={() => blurField('step2Field2')}
            errorMessage={errors.step2Field2}
          />
          <div aria-live="polite">
            {showErrorSummary && summaryErrors.length > 0 && (
              <ErrorSummary>
                {summaryErrors.map(({ field, error }) => (
                  <ErrorSummaryItem key={field} href={`#${fields[field].id}`}>
                    {error}
                  </ErrorSummaryItem>
                ))}
              </ErrorSummary>
            )}
          </div>
          <HStack
            gap="x1.5"
            paddingBlock={showErrorSummary ? 'x1 x1.5' : 'x1.5'}
          >
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
            <Paragraph typographyType="lead-medium" withMargins>
              Dette er et eksempel på en ingress. Den består ofte av et par
              setninger. En setning til.
            </Paragraph>
            <Paragraph
              typographyType="body-long-small"
              color="text-subtle"
              withMargins
            >
              Obligatoriske felter er merket med{' '}
              <Typography as="span" color="text-requiredfield">
                *
              </Typography>
              .
            </Paragraph>
            <VStack
              gap="x1"
              marginBlock={{
                xs: '0 x1',
                sm: '0 x1',
                md: activeStep > 0 ? '0 x1' : '0',
                lg: activeStep > 0 ? '0 x1' : '0',
                xl: activeStep > 0 ? '0 x1' : '0',
              }}
            >
              <Box showBelow="sm">
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
                      onStepChange={goToStep}
                    >
                      {stepItems}
                    </ProgressTracker>
                  </Drawer>
                </DrawerGroup>
              </Box>
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
            <ProgressTracker activeStep={activeStep} onStepChange={goToStep}>
              {stepItems}
            </ProgressTracker>
          </GridChild>
        </Grid>
      </>
    );
  },
});
