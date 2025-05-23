import { createContext, useContext } from 'react';

import { type CardSelectableType } from '../Card.types';

export interface CardSelectableContextProps {
  cardType: CardSelectableType;
  tipId?: string;
}

export const CardSelectableContext = createContext<
  Partial<CardSelectableContextProps>
>({});

export const useCardSelectableContext = () => useContext(CardSelectableContext);
