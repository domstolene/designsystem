import { describe, expect, it } from 'vitest';

import { createClearChangeEvent } from './createClearChangeEvent';

describe('createClearChangeEvent', () => {
  it('throws an error if the element with id does not exist', () => {
    document.body.innerHTML = '<div></div>';
    const id = 'test';

    expect(() => createClearChangeEvent(id)).toThrow(
      `Element by id '${id}' not found.`,
    );
  });
  it('creates an empty change event for an input element', () => {
    document.body.innerHTML = '<input id="search-input" value="original" />';
    const input = document.getElementById('search-input') as HTMLInputElement;

    const event = createClearChangeEvent('search-input');

    expect(input.value).toBe('');
    expect(event.type).toBe('change');
    expect(event.target).toBe(input);
    expect(event.currentTarget).toBe(input);
    expect(event.nativeEvent).toBeInstanceOf(Event);
    expect(event.isDefaultPrevented()).toBe(false);
    expect(event.isPropagationStopped()).toBe(false);
    expect(event.bubbles).toBe(true);
    expect(event.cancelable).toBe(false);
    expect(event.preventDefault()).toBe(null);
    expect(event.stopPropagation()).toBe(null);
    expect(event.persist()).toBe(null);
  });
  it('creates an empty change event for a select element', () => {
    document.body.innerHTML =
      '<select id="search-select"><option value=""></option><option value="original" selected>Original</option></select>';
    const select = document.getElementById(
      'search-select',
    ) as HTMLSelectElement;

    const event = createClearChangeEvent('search-select');

    expect(select.value).toBe('');
    expect(select.selectedIndex).toBe(0);
    expect(event.type).toBe('change');
    expect(event.target).toBe(select);
    expect(event.currentTarget).toBe(select);
    expect(event.nativeEvent).toBeInstanceOf(Event);
    expect(event.isDefaultPrevented()).toBe(false);
    expect(event.isPropagationStopped()).toBe(false);
    expect(event.bubbles).toBe(true);
    expect(event.cancelable).toBe(false);
    expect(event.preventDefault()).toBe(null);
    expect(event.stopPropagation()).toBe(null);
    expect(event.persist()).toBe(null);
  });
});
