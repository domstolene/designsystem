import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Feedback } from './Feedback';

describe('<Feedback>', () => {
  it('renders thumb buttons on first render', () => {
    render(<Feedback />);

    assertInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);

    assertNotInDocument([
      'Hva var dårlig?',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);
  });

  it('calls onRating when thumb up button is clicked', async () => {
    const onRating = vi.fn();
    render(<Feedback onRating={onRating} />);
    const button = screen.getByLabelText('Bra');

    await userEvent.click(button);

    expect(onRating).toHaveBeenCalledTimes(1);
  });

  it('calls onRating when thumb down button is clicked', async () => {
    const onRating = vi.fn();
    render(<Feedback onRating={onRating} />);
    const button = screen.getByLabelText('Dårlig');

    await userEvent.click(button);

    expect(onRating).toHaveBeenCalledTimes(1);
  });

  it('renders text area when rating is positive', () => {
    render(<Feedback ratingValue="positive" />);

    assertInDocument([
      'Hva kan vi forbedre? (valgfritt)',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);

    assertNotInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);
  });

  it('renders text area when rating is negative', () => {
    render(<Feedback ratingValue="negative" />);

    assertInDocument([
      'Hva kan vi forbedre? (valgfritt)',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);

    assertNotInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);
  });

  it('does not render text area when rating is positive and text area is excluded', () => {
    render(<Feedback ratingValue="positive" feedbackTextAreaExcluded />);

    assertInDocument([
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
    ]);

    assertNotInDocument([
      'Hva syns du om tjenesten?',
      'Bra',
      'Dårlig',
      'Send inn',
      'Hva kan vi forbedre? (valgfritt)',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);
  });

  it('renders confirmation text when isSubmitted is true', () => {
    render(<Feedback isSubmitted />);

    assertInDocument([
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
    ]);

    assertNotInDocument([
      'Hva syns du om tjenesten?',
      'Bra',
      'Dårlig',
      'Send inn',
      'Hva kan vi forbedre? (valgfritt)',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);
  });

  it('does not render text area when rating is negative and text area is excluded', () => {
    render(<Feedback ratingValue="negative" feedbackTextAreaExcluded />);

    assertInDocument([
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
    ]);

    assertNotInDocument([
      'Hva syns du om tjenesten?',
      'Bra',
      'Dårlig',
      'Send inn',
      'Hva kan vi forbedre? (valgfritt)',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);
  });

  it('renders text value when text value is given', () => {
    render(
      <Feedback
        ratingValue="positive"
        feedbackTextValue="Veldig bra tilbakemelding"
      />,
    );

    assertInDocument([
      'Veldig bra tilbakemelding',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Hva kan vi forbedre? (valgfritt)',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);

    assertNotInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);
  });

  it('calls onSubmit when submit button is clicked', async () => {
    const onSubmit = vi.fn();
    render(<Feedback ratingValue="positive" onSubmit={onSubmit} />);
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('calls onSubmit when rating button is clicked and text area is excluded', async () => {
    const onSubmit = vi.fn();
    render(<Feedback onSubmit={onSubmit} feedbackTextAreaExcluded />);
    const button = screen.getByLabelText('Dårlig');

    await userEvent.click(button);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('has correct labels when using custom tooltips', () => {
    render(
      <Feedback thumbUpTooltip="Veldig bra" thumbDownTooltip="Veldig dårlig" />,
    );

    assertInDocument([
      'Veldig bra',
      'Veldig dårlig',
      'Hva syns du om tjenesten?',
    ]);

    assertNotInDocument([
      'Hva kan vi forbedre? (valgfritt)',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);
  });

  it('renders spinner and not thumb up/down buttons when loading', () => {
    render(<Feedback loading />);

    assertInDocument([
      'Hva syns du om tjenesten?',
      'Laster opp tilbakemelding...',
    ]);

    assertNotInDocument([
      'Hva var dårlig?',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
      'Bra',
      'Dårlig',
    ]);
  });

  it('renders positive feedback label', () => {
    render(
      <Feedback positiveFeedbackLabel="Hva var bra?" ratingValue="positive" />,
    );

    assertInDocument([
      'Hva var bra?',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);

    assertNotInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);
  });

  it('renders negative feedback label', () => {
    render(
      <Feedback
        negativeFeedbackLabel="Hva var dårlig?"
        ratingValue="negative"
      />,
    );

    assertInDocument([
      'Hva var dårlig?',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);

    assertNotInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);
  });
});

const assertInDocument = (textsToCheck: Array<string>) => {
  textsToCheck.forEach(text =>
    expect(screen.getByText(text)).toBeInTheDocument(),
  );
};

const assertNotInDocument = (textsToCheck: Array<string>) => {
  textsToCheck.forEach(text =>
    expect(screen.queryByText(text)).not.toBeInTheDocument(),
  );
};
