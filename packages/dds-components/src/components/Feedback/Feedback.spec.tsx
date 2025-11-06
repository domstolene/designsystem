import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Feedback } from './Feedback';

describe('<Feedback>', () => {
  it('should show thumb buttons on first render', () => {
    render(<Feedback ratingLabel="Hva syns du om tjenesten?" />);

    assertInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);

    assertNotInDocument([
      'Hva var dårlig?',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);
  });

  it('should trigger onRating when thumb up button is clicked', async () => {
    const onRating = vi.fn();
    render(
      <Feedback ratingLabel="Hva syns du om tjenesten?" onRating={onRating} />,
    );
    const button = screen.getByLabelText('Bra');

    await userEvent.click(button);

    expect(onRating).toHaveBeenCalledTimes(1);
  });

  it('should trigger onRating when thumb down button is clicked', async () => {
    const onRating = vi.fn();
    render(
      <Feedback ratingLabel="Hva syns du om tjenesten?" onRating={onRating} />,
    );
    const button = screen.getByLabelText('Dårlig');

    await userEvent.click(button);

    expect(onRating).toHaveBeenCalledTimes(1);
  });

  it('should show text area when rating is positive', () => {
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
        ratingValue={'positive'}
      />,
    );

    assertInDocument([
      'Hva kan vi forbedre? (valgfritt)',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);

    assertNotInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);
  });

  it('should show text area when rating is negative', () => {
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
        ratingValue={'negative'}
      />,
    );

    assertInDocument([
      'Hva kan vi forbedre? (valgfritt)',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);

    assertNotInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);
  });

  it('should not show text area when rating is positive and text area is excluded', () => {
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
        ratingValue={'positive'}
        feedbackTextAreaExcluded
      />,
    );

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

  it('should show confirmation text when isSubmitted is true', () => {
    render(<Feedback ratingLabel="Hva syns du om tjenesten?" isSubmitted />);

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

  it('should not show text area when rating is negative and text area is excluded', () => {
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
        ratingValue={'negative'}
        feedbackTextAreaExcluded
      />,
    );

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

  it('should show text value when text value is given', () => {
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
        ratingValue={'positive'}
        feedbackTextValue={'Veldig bra tilbakemelding'}
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

  it('should trigger onSubmit when submit button is clicked', async () => {
    const onSubmit = vi.fn();
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
        ratingValue={'positive'}
        onSubmit={onSubmit}
      />,
    );
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should trigger onSubmit when rating button is clicked and text area is excluded', async () => {
    const onSubmit = vi.fn();
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
        onSubmit={onSubmit}
        feedbackTextAreaExcluded
      />,
    );
    const button = screen.getByLabelText('Dårlig');

    await userEvent.click(button);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should have correct labels when using custom tooltips', () => {
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
        thumbUpTooltip="Veldig bra"
        thumbDownTooltip="Veldig dårlig"
      />,
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

  it('should render spinner and not thumb up/down buttons when loading', () => {
    render(<Feedback ratingLabel="Hva syns du om tjenesten?" loading />);

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

  it('should render positive feedback label', () => {
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
        positiveFeedbackLabel="Hva var bra?"
        ratingValue="positive"
      />,
    );

    assertInDocument([
      'Hva var bra?',
      'Send inn',
      'Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen',
      'Ikke send inn personopplysninger eller annen sensitiv informasjon',
    ]);

    assertNotInDocument(['Hva syns du om tjenesten?', 'Bra', 'Dårlig']);
  });

  it('should render negative feedback label', () => {
    render(
      <Feedback
        ratingLabel="Hva syns du om tjenesten?"
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
