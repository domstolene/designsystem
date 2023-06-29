import styled from 'styled-components';

export const TextOverflowEllipsisWrapper = styled.span`
  max-width: 100%;
`;

export const TextOverflowEllipsisInner = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
