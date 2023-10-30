const arrayRange = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export function PaginationGenerator(
  pagesAmount: number,
  activePage: number,
): (string | number)[] {
  const siblingsCount = 1;
  const maxPagesShown = 7;
  const pagesBeforeTruncator = 5;
  const truncator = 'truncator';

  let pageRange: (string | number)[];

  if (pagesAmount > 4) {
    const middleStartPage = Math.max(
      1,
      activePage < pagesBeforeTruncator || pagesAmount <= maxPagesShown
        ? 1
        : activePage + siblingsCount + 1 >= pagesAmount
        ? pagesAmount - 4 // - 4 to fit total columns /
        : activePage > 4 && pagesAmount > maxPagesShown
        ? activePage - siblingsCount
        : 1,
    );

    const middleEndOffset =
      activePage < pagesBeforeTruncator && pagesAmount > maxPagesShown
        ? pagesBeforeTruncator
        : activePage < pagesBeforeTruncator && pagesAmount <= maxPagesShown
        ? pagesAmount
        : activePage + siblingsCount + 1 < pagesAmount - 1
        ? activePage + siblingsCount
        : activePage + siblingsCount + 1 === pagesAmount - 1
        ? pagesAmount
        : pagesAmount;

    const middleEndPage = Math.min(pagesAmount, middleEndOffset);
    pageRange = arrayRange(middleStartPage, middleEndPage);
    const truncatedLeft = middleStartPage > 2 && pagesAmount > maxPagesShown;
    const truncatedRight =
      pagesAmount - middleEndPage > 1 && pagesAmount > maxPagesShown;

    if (truncatedLeft && truncatedRight) {
      pageRange = [1, truncator, ...pageRange, truncator, pagesAmount];
    } else if (truncatedLeft && !truncatedRight) {
      pageRange = [1, truncator, ...pageRange];
    } else if (!truncatedLeft && truncatedRight) {
      pageRange = [...pageRange, truncator, pagesAmount];
    }
    return [...pageRange];
  }

  return arrayRange(1, pagesAmount);
}
