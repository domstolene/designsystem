export interface FeedbackProps {
  /**Om knappene skal være plassert under eller ved siden av teksten. */
  layout?: Layout;
  /**Label som er plassert over tommel opp/ned knappene */
  ratingLabel: string;
  /**Label til fritekstfeltet når bruker har gitt tommel opp */
  positiveFeedbackLabel?: string;
  /**Label til fritekstfeltet når bruker har gitt tommel ned */
  negativeFeedbackLabel?: string;
  /**Tittel som vises når bruker har gitt tommel opp/ned, og enda ikke sendt inn kommentar */
  ratingSubmittedTitle?: string;
  /**Tittel som vises når bruker har gitt feedback (inkl. eventuell kommentar) */
  submittedTitle?: string;
  /**Om tommel opp eller ned er valgt. Brukes når komponenten skal være styrt utenfra. */
  ratingValue?: Rating | null;
  /**Verdien til fritekstfeltet. Brukes når komponenten skal være styrt utenfra. */
  feedbackTextValue?: string;
  /**Tooltip-teksten til tommel-opp-knappen*/
  thumbUpTooltip?: string;
  /**Tooltip-teksten til tommel-ned-knappen*/
  thumbDownTooltip?: string;
  /**Om tilbakemeldingskomponenten skal ekskludere fritekstfeltet (i.e. kun ha tommel opp/ned).*/
  feedbackTextAreaExcluded?: boolean;
  /**Om knappene skal vise spinner. Gjelder både tommel opp/ned knappene, og "send inn" knappen. */
  loading?: boolean;
  /**Om tilbakemelding er sendt inn. Brukes når komponenten skal være styrt utenfra. */
  isSubmitted?: boolean;
  /**Callback når bruker har gitt tommelrating */
  onRating?: (rating: Rating) => void;
  /**Callback når bruker skriver noe i fritekstfeltet */
  onFeedbackTextChange?: (feedbackText: string) => void;
  /**Callback når bruker sender inn feedback */
  onSubmit?: (rating: Rating, feedbackText: string) => void;
}

export type Rating = 'positive' | 'negative';
export type Layout = 'vertical' | 'horizontal';
