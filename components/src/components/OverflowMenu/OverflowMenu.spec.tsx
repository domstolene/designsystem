import { render, screen } from '@testing-library/react';
import { useRef, useState } from 'react';
import { Button } from '../Button';
import { OverflowMenu } from './OverflowMenu';

const text = 'text';
const href = '#';

const TestComponent = () => {
  const [closed, setClosed] = useState(true);
  const toggle = () => setClosed(!closed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button onClick={toggle} />
      <OverflowMenu
        triggerRef={buttonRef}
        isOpen={!closed}
        onClose={close}
        items={[{ text: text, onClick: () => {} }]}
      />
    </>
  );
};

const TestComponentLink = () => {
  const [closed, setClosed] = useState(true);
  const toggle = () => setClosed(!closed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button onClick={toggle} />
      <OverflowMenu
        triggerRef={buttonRef}
        isOpen={!closed}
        onClose={close}
        navItems={[{ text: text, href: href }]}
      />
    </>
  );
};

const TestComponentStatic = () => {
  const [closed, setClosed] = useState(true);
  const toggle = () => setClosed(!closed);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button onClick={toggle} />
      <OverflowMenu
        triggerRef={buttonRef}
        isOpen={!closed}
        onClose={close}
        userProps={{ text: text }}
      />
    </>
  );
};

describe('<OverflowMenu />', () => {
  it('should display context menu item as button', () => {
    render(<TestComponent />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  it('should display nav menu item as link', () => {
    render(<TestComponentLink />);
    const aElement = screen.getByText(text);
    expect(aElement).toBeInTheDocument();
    expect(aElement).toHaveAttribute('href', href);
  });
  it('should display static usertext', () => {
    render(<TestComponentStatic />);
    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });
});
