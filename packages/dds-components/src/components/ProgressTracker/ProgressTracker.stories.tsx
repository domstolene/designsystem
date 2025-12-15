import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { ProgressTracker } from './ProgressTracker';
import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
} from '../../storybook';
import { Button } from '../Button';
import { Drawer, DrawerGroup } from '../Drawer';
import {
  AttachmentIcon,
  ChecklistIcon,
  ChevronRightIcon,
  GavelIcon,
  PersonIcon,
} from '../Icon/icons';
import { HStack, VStack } from '../layout';

export default {
  title: 'dds-components/Components/ProgressTracker',
  component: ProgressTracker,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof ProgressTracker>;

type Story = StoryObj<typeof ProgressTracker>;

export const Preview: Story = {
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
          style={{ maxWidth: '800px' }}
        >
          <ProgressTracker.Item completed={completedSteps.has(0)}>
            Steg 1
          </ProgressTracker.Item>
          <ProgressTracker.Item completed={completedSteps.has(1)}>
            Steg 2
          </ProgressTracker.Item>
          <ProgressTracker.Item completed={completedSteps.has(2)}>
            Steg 3
          </ProgressTracker.Item>
          <ProgressTracker.Item completed={completedSteps.has(3)} disabled>
            Sammendrag
          </ProgressTracker.Item>
        </ProgressTracker>

        <div>
          {activeStep === 0 && <div>Steg 1</div>}
          {activeStep === 1 && <div>Steg 2</div>}
          {activeStep === 2 && <div>Steg 3</div>}
          {activeStep === 3 && <div>Sammendrag</div>}
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
            Steg 1
          </ProgressTracker.Item>
          <ProgressTracker.Item
            icon={GavelIcon}
            completed={completedSteps.has(1)}
          >
            Steg 2
          </ProgressTracker.Item>
          <ProgressTracker.Item
            icon={AttachmentIcon}
            completed={completedSteps.has(2)}
          >
            Steg 3
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
            Steg 1
          </ProgressTracker.Item>
          <ProgressTracker.Item completed={completedSteps.has(1)}>
            Steg 2
          </ProgressTracker.Item>
          <ProgressTracker.Item completed={completedSteps.has(2)}>
            Steg 3
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
          style={{ maxWidth: '800px' }}
          onStepChange={step => setActiveStep(step)}
        >
          <ProgressTracker.Item
            disabled={isDisabled(0)}
            completed={completedSteps.has(0)}
          >
            Steg 1
          </ProgressTracker.Item>
          <ProgressTracker.Item
            disabled={isDisabled(1)}
            completed={completedSteps.has(1)}
          >
            Steg 2
          </ProgressTracker.Item>
          <ProgressTracker.Item
            disabled={isDisabled(2)}
            completed={completedSteps.has(2)}
          >
            Steg 3
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
                  Steg 1 med lang tekst
                </ProgressTracker.Item>
                <ProgressTracker.Item completed={completedSteps.has(1)}>
                  Steg 2
                </ProgressTracker.Item>
                <ProgressTracker.Item completed={completedSteps.has(2)}>
                  Steg 3
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
