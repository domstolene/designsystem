import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Accordion, AccordionBody, AccordionHeader } from '.';

describe('<Accordion>', () => {
  it('should render button', () => {
    render(
      <Accordion>
        <AccordionHeader></AccordionHeader>
        <AccordionBody></AccordionBody>
      </Accordion>,
    );

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render button text', () => {
    const text = 'text';
    render(
      <Accordion>
        <AccordionHeader> {text} </AccordionHeader>
        <AccordionBody></AccordionBody>
      </Accordion>,
    );

    const button = screen.getByText(text);
    expect(button).toBeInTheDocument();
  });

  it('should render text in body', () => {
    const text = 'text';
    render(
      <Accordion>
        <AccordionHeader></AccordionHeader>
        <AccordionBody>{text}</AccordionBody>
      </Accordion>,
    );

    const body = screen.getByText(text);
    expect(body).toBeInTheDocument();
  });

  it('should toggle expanded onClick', async () => {
    const text = 'text';
    render(
      <Accordion>
        <AccordionHeader></AccordionHeader>
        <AccordionBody>{text}</AccordionBody>
      </Accordion>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('region')).not.toBeInTheDocument();

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => {
      const body = screen.getByRole('region');
      expect(body).toHaveAttribute('aria-hidden', 'false');
    });
  });

  it('should have role on body', async () => {
    const text = 'text';
    render(
      <Accordion>
        <AccordionHeader></AccordionHeader>
        <AccordionBody>{text}</AccordionBody>
      </Accordion>,
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      const body = screen.getByRole('region');
      expect(body).toBeInTheDocument();
    });
  });

  it('should have aria attributes', async () => {
    const id = 'id';

    render(
      <Accordion id={id}>
        <AccordionHeader></AccordionHeader>
        <AccordionBody></AccordionBody>
      </Accordion>,
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);
    await waitFor(() => {
      const body = screen.getByRole('region');
      expect(body).toHaveAttribute('aria-labelledby', `${id}-header`);
    });
    expect(button).toHaveAttribute('aria-controls', `${id}-body`);
  });

  it('should have ids on children', async () => {
    const id = 'id';

    render(
      <Accordion id={id}>
        <AccordionHeader></AccordionHeader>
        <AccordionBody></AccordionBody>
      </Accordion>,
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);
    await waitFor(() => {
      const body = screen.getByRole('region');
      expect(body).toHaveAttribute('id', `${id}-body`);
    });
    expect(button).toHaveAttribute('id', `${id}-header`);
  });
});
