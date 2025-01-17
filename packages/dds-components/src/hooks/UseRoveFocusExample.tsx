import React, {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { useRoveFocus } from './useRoveFocus';
import { Icon } from '../components/Icon';
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '../components/Icon/icons';

interface Props {
  active?: boolean;
  direction: 'column' | 'row';
  noWrap?: boolean;
}

export const UseRoveFocusExample = ({
  active,
  direction = 'column',
  noWrap,
}: Props) => {
  const elements = [
    { name: 'Element 1' },
    { name: 'Element 2' },
    { name: 'Element 3' },
    { name: 'Element 4' },
  ];
  const [focus, setFocus] = useRoveFocus(
    elements.length,
    active,
    direction,
    noWrap,
  );
  return (
    <div>
      <pre>
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
        <br />
        Indeks: {focus}
        <br />
        <code>useRoveFocus(size, active, direction, noWrap)</code>
        <br />
        <code>
          useRoveFocus({elements.length}, {(active ?? false).toString()},{' '}
          {direction}, {(noWrap ?? false).toString()})
        </code>
      </pre>
      <ul>
        {elements.map((element, index) => (
          <li key={element.name}>
            <RoveItem
              index={index}
              shouldFocus={focus === index}
              setFocus={setFocus}
            >
              {element.name}
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
