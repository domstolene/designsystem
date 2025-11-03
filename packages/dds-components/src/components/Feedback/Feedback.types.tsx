export interface FeedbackProps {
  /**Om knappene skal være plassert under eller ved siden av teksten. */
  layout?: Layout;
  /**Label som er plassert over tommel opp/ned knappene.
   * @default "Hva syns du om tjenesten?"
   */
  ratingLabel?: string;
  /**Label til fritekstfeltet når bruker har gitt tommel opp.
   * @default "Hva kan vi forbedre? (valgfritt)"
   */
  positiveFeedbackLabel?: string;
  /**Label til fritekstfeltet når bruker har gitt tommel ned.
   *  @default "Hva kan vi forbedre? (valgfritt)"
   */
  negativeFeedbackLabel?: string;
  /**Tittel som vises når bruker har gitt tommel opp/ned, og enda ikke sendt inn kommentar.
   *  @default "Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen"
   */
  ratingSubmittedTitle?: string;
  /**Tittel som vises når bruker har gitt feedback (inkl. eventuell kommentar).
   * @default "Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen"
   */
  submittedTitle?: string;
  /**Tip som vises under tekstfeltet når bruker skal sende inn kommentar.
   * @default "Ikke send inn personopplysninger eller annen sensitiv informasjon"
   */
  textAreaTip?: string;
  /**Om tommel opp eller ned er valgt. Brukes når komponenten skal være styrt utenfra. */
  ratingValue?: Rating | null;
  /**Verdien til fritekstfeltet. Brukes når komponenten skal være styrt utenfra. */
  feedbackTextValue?: string;
  /**Tooltip-teksten til tommel-opp-knappen.
   * @default "Bra"
   */
  thumbUpTooltip?: string;
  /**Tooltip-teksten til tommel-ned-knappen.
   * @default "Dårlig"
   */
  thumbDownTooltip?: string;
  /**Om tilbakemeldingskomponenten skal ekskludere fritekstfeltet (i.e. kun ha tommel opp/ned).
   * @default false
   */
  feedbackTextAreaExcluded?: boolean;
  /**Om knappene skal vise spinner. Gjelder både tommel opp/ned knappene, og "send inn" knappen.
   * @default false
   */
  loading?: boolean;
  /**Om tilbakemelding er sendt inn. Brukes når komponenten skal være styrt utenfra. */
  isSubmitted?: boolean;
  /**Callback når bruker har gitt tommel-rating. */
  onRating?: (rating: Rating) => void;
  /**Callback når bruker skriver noe i fritekstfeltet. */
  onFeedbackTextChange?: (feedbackText: string) => void;
  /**Callback når bruker sender inn feedback. */
  onSubmit?: (rating: Rating, feedbackText: string) => void;
}

export type Rating = 'positive' | 'negative';
export type Layout = 'vertical' | 'horizontal';
