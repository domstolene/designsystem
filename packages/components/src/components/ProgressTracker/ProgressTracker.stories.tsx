import { useState } from 'react';
import { ProgressTracker } from '.';
import {
  AttachmentIcon,
  ChecklistIcon,
  GavelIcon,
  PersonIcon,
} from '../../icons/tsx';
import { StoryTemplate } from '../../storybook';
import { Button } from '../Button';

export default {
  title: 'Design system/ProgressTracker',
  component: ProgressTracker,
};

export const Overview = () => {
  const numSteps = 3;

  const [activeStep, setActiveStep] = useState(2);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  return (
    <StoryTemplate title="ProgressTracker - overview" display="block">
      <ProgressTracker
        activeStep={activeStep}
        onStepChange={step => setActiveStep(step)}
        clickable
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
        label="Sett som ferdig"
      />
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
        clickable
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
    <StoryTemplate title="ProgressTracker - non-clickable" display="block">
      <ProgressTracker
        activeStep={activeStep}
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
      </ProgressTracker>
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

export const Mobile = () => {
  const numSteps = 3;

  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  return (
    <StoryTemplate title="ProgressTracker - mobile" display="block">
      <ProgressTracker
        activeStep={activeStep}
        onStepChange={step => setActiveStep(step)}
        clickable
        smallScreen
        htmlProps={{ style: { maxWidth: '800px' } }}
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
