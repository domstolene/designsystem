import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { describe, expect, it, vi } from 'vitest';

import {
  readOnlyChangeHandler,
  readOnlyClickHandler,
  readOnlyKeyDownHandler,
  readOnlyMouseDownHandler,
} from './readonlyEventHandlers';

describe('readonlyEventHandlers', () => {
  it('readOnlyMouseDownHandler prevents default and focuses target when readOnly is true', () => {
    const onMouseDown = vi.fn();
    const preventDefault = vi.fn();
    const focus = vi.fn();

    const handler = readOnlyMouseDownHandler<HTMLElement>(true, onMouseDown);
    const event = {
      preventDefault,
      target: { focus },
    } as unknown as MouseEvent<HTMLElement>;

    handler(event);

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(focus).toHaveBeenCalledTimes(1);
    expect(onMouseDown).not.toHaveBeenCalled();
  });

  it('readOnlyKeyDownHandler prevents default for select navigation keys when readOnly is true', () => {
    const onKeyDown = vi.fn();
    const preventDefault = vi.fn();

    const handler = readOnlyKeyDownHandler<HTMLElement>(
      'select',
      true,
      onKeyDown,
    );
    const event = {
      key: 'ArrowDown',
      preventDefault,
    } as unknown as KeyboardEvent<HTMLElement>;

    handler(event);

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onKeyDown).not.toHaveBeenCalled();
  });

  it('readOnlyKeyDownHandler prevents default for selection controls on space when readOnly is true', () => {
    const onKeyDown = vi.fn();
    const preventDefault = vi.fn();

    const handler = readOnlyKeyDownHandler<HTMLElement>(
      'selectionControl',
      true,
      onKeyDown,
    );
    const event = {
      key: ' ',
      preventDefault,
    } as unknown as KeyboardEvent<HTMLElement>;

    handler(event);

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onKeyDown).not.toHaveBeenCalled();
  });

  it('readOnlyKeyDownHandler calls onKeyDown when readOnly is false', () => {
    const onKeyDown = vi.fn();
    const preventDefault = vi.fn();

    const handler = readOnlyKeyDownHandler<HTMLElement>(
      'select',
      false,
      onKeyDown,
    );
    const event = {
      key: 'ArrowDown',
      preventDefault,
    } as unknown as KeyboardEvent<HTMLElement>;

    handler(event);

    expect(preventDefault).not.toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledWith(event);
  });

  it('readOnlyChangeHandler blocks changes when readOnly is true', () => {
    const onChange = vi.fn();
    const handler = readOnlyChangeHandler<HTMLInputElement>(true, onChange);
    const event = {
      target: { value: 'x' },
    } as unknown as ChangeEvent<HTMLInputElement>;

    handler(event);

    expect(onChange).not.toHaveBeenCalled();
  });

  it('readOnlyClickHandler prevents default and skips onClick when readOnly is true', () => {
    const onClick = vi.fn();
    const preventDefault = vi.fn();

    const handler = readOnlyClickHandler<HTMLButtonElement>(true, onClick);
    const event = {
      preventDefault,
    } as unknown as MouseEvent<HTMLButtonElement>;

    handler(event);

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onClick).not.toHaveBeenCalled();
  });
});
