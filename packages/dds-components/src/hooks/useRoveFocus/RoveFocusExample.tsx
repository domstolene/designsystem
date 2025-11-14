import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { useRoveFocus } from './useRoveFocus';
import { Icon } from '../../components/Icon';
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '../../components/Icon/icons';

export interface Props {
  /**Antall elementer. */
  size?: Parameters<typeof useRoveFocus>[0];
  /**Om fokus skal kontrolleres av hooken. Når status blir inaktiv vil fokusrekkefølge nullstilles. */
  active?: Parameters<typeof useRoveFocus>[1];
  /**Retning elementene blas i. */
  direction: Parameters<typeof useRoveFocus>[2];
  /**Om indeksen skal 'wrappe' rundt til 0 hvis den går over size - 1, eller til size - 1 hvis den går under 0. */
  noWrap?: Parameters<typeof useRoveFocus>[3];
}

export const RoveFocusExample = ({
  active,
  direction = 'column',
  noWrap,
  size,
}: Props) => {
  const elements = [];
  const maxSize = 10;
  const loopSize = !size ? 0 : size <= maxSize ? size : maxSize;
  for (let index = 1; index < loopSize + 1; index++) {
    elements.push(`Element ${index}`);
  }
  const [focusedIndex, setFocus] = useRoveFocus(
    elements.length,
    active,
    direction,
    noWrap,
  );
  return (
    <div>
      <p>
        Bruk piltastene (
        {direction === 'column' ? (
          <>
            <Icon iconSize="small" icon={ArrowUpIcon} />
            <Icon icon={ArrowDownIcon} iconSize="small" />
          </>
        ) : (
          <>
            <Icon iconSize="small" icon={ArrowLeftIcon} />
            <Icon icon={ArrowRightIcon} iconSize="small" />
          </>
        )}
        ) til å styre fokus-indeksen.
      </p>
      <p>Fokusert indeks: {focusedIndex}</p>
      <p>
        <code>useRoveFocus(size, active, direction, noWrap)</code>
      </p>
      <p>
        <code>
          useRoveFocus({elements.length}, {(active ?? false).toString()},{' '}
          {direction}, {(noWrap ?? false).toString()})
        </code>
      </p>
      {loopSize === maxSize && <p>Nådd maks antall elementer 🥵 </p>}
      <ul>
        {elements.map((element, index) => (
          <li key={element}>
            <RoveItem
              index={index}
              shouldFocus={focusedIndex === index}
              setFocus={setFocus}
            >
              {element}
            </RoveItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface RoveItemProps {
  children?: ReactNode;
  shouldFocus: boolean;
  setFocus: Dispatch<SetStateAction<number>>;
  index: number;
}

const RoveItem = (props: RoveItemProps) => {
  const { children, shouldFocus, setFocus, index } = props;
  const itemRef = useRef<HTMLSpanElement>(null);

  const handleSelect = useCallback(() => {
    if (shouldFocus) setFocus(index);
  }, [index, setFocus]);

  const handleOnClick = () => {
    handleSelect();
  };

  const handleOnKeyDown = () => {
    handleSelect();
  };

  useEffect(() => {
    if (shouldFocus) {
      itemRef.current?.focus();
    }
  }, [shouldFocus]);

  return (
    <span
      tabIndex={shouldFocus ? 0 : -1}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      role="menuitem"
      ref={itemRef}
    >
      {children}
    </span>
  );
};
