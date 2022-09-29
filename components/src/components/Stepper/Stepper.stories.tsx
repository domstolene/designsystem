import { useState } from 'react';
import { StoryTemplate } from '../../storybook';
import { Button } from '../Button';
import { Step } from './Step';
import { Stepper } from './Stepper';

export default {
  title: 'Design system/Stepper BETA',
  component: Stepper,
  argTypes: {
    color: { control: { type: 'text' } },
    size: { control: { type: 'text' } },
  },
};

export const Overview = () => {
  const numSteps = 3;

  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <StoryTemplate title="Stepper - overview" display="block">
      <Stepper
        activeStep={activeStep}
        htmlProps={{ style: { maxWidth: '800px' } }}
      >
        <Step completed={completedSteps.has(0)} onClick={handleStepClick}>
          Partopplysninger
        </Step>
        <Step completed={completedSteps.has(1)} onClick={handleStepClick}>
          Slutning
        </Step>
        <Step completed={completedSteps.has(2)} onClick={handleStepClick}>
          Vedlegg
        </Step>
        <Step
          completed={completedSteps.has(3)}
          onClick={handleStepClick}
          disabled
        >
          Innsending
        </Step>
      </Stepper>

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
        label="Sett som ferdig"
      />
    </StoryTemplate>
  );
};

export const NonClickable = () => {
  const numSteps = 3;

  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const handleSetFinishedButtonClick = () => {
    setCompletedSteps(s => new Set([...s, activeStep]));
    if (activeStep < numSteps - 1) {
      setActiveStep(s => s + 1);
    }
  };

  return (
    <StoryTemplate title="Stepper - non-clickable" display="block">
      <Stepper
        activeStep={activeStep}
        htmlProps={{ style: { maxWidth: '800px' } }}
      >
        <Step completed={completedSteps.has(0)}>Partopplysninger</Step>
        <Step completed={completedSteps.has(1)}>Slutning</Step>
        <Step completed={completedSteps.has(2)}>Vedlegg</Step>
      </Stepper>
      <div style={{ margin: '10px' }}>
        {activeStep === 0 && <div>Steg 1</div>}
        {activeStep === 1 && <div>Steg 2</div>}
        {activeStep === 2 && <div>Steg 3</div>}
      </div>

      <Button
        onClick={() => activeStep > 0 && setActiveStep(s => s - 1)}
        label="Forrige steg"
      />
      <Button onClick={handleSetFinishedButtonClick} label="Sett som ferdig" />
      <Button
        onClick={() => activeStep < numSteps - 1 && setActiveStep(s => s + 1)}
        label="Neste steg"
      />
    </StoryTemplate>
  );
};
