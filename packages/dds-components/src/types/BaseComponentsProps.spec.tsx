import { describe, expect, it } from 'vitest';

import {
  type BaseComponentProps,
  getBaseHTMLProps,
} from './BaseComponentProps';

type BCP = BaseComponentProps<HTMLElement>;

describe('getBaseHTMLProps', () => {
  it('returns empty object if not receiving any non-undefined arguments', () => {
    const baseHTMLProps = getBaseHTMLProps(undefined, undefined, undefined, {});

    expect(baseHTMLProps).toStrictEqual({});
  });
  it('returns id from base argument', () => {
    const props: BCP = { id: 'foo' };

    const { id, className, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(id, className, htmlProps, rest);

    expect(baseHTMLProps).toStrictEqual({
      id: 'foo',
    });
  });
  it('returns id from htmlProps if base id is not set', () => {
    const props: BCP = { htmlProps: { id: 'fewa' } };

    const { id, className, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(id, className, htmlProps, rest);

    expect(baseHTMLProps).toStrictEqual({
      id: 'fewa',
    });
  });
  it('returns className from base argument', () => {
    const props: BCP = { className: 'foo' };

    const { id, className, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(id, className, htmlProps, rest);

    expect(baseHTMLProps).toStrictEqual({
      className: 'foo',
    });
  });
  it('returns className from htmlProps if base className is not set', () => {
    const props: BCP = { htmlProps: { className: 'fewa' } };

    const { id, className, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(id, className, htmlProps, rest);

    expect(baseHTMLProps).toStrictEqual({
      className: 'fewa',
    });
  });
  it('returns className from both base and htmlProps if both are set', () => {
    const props: BCP = {
      className: 'foobar',
      htmlProps: { className: 'fewa' },
    };

    const { id, className, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(id, className, htmlProps, rest);

    expect(baseHTMLProps).toStrictEqual({
      className: 'foobar fewa',
    });
  });
  it('returns htmlProps from base argument without id and with joined className', () => {
    const props: BCP = {
      id: 'fooid',
      className: 'baseclassName',
      htmlProps: {
        id: 'htmlPropsId',
        'aria-activedescendant': 'fewa',
        title: 'fewafewa',
        className: 'htmlPropsClassName',
      },
    };

    const { id, className, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(id, className, htmlProps, rest);

    expect(baseHTMLProps).toStrictEqual({
      id: 'fooid',
      'aria-activedescendant': 'fewa',
      title: 'fewafewa',
      className: 'baseclassName htmlPropsClassName',
    });
  });
  it('returns unknownProps from base argument "rest"', () => {
    const props: BCP = {
      id: 'fooid',
      htmlProps: {
        'aria-label': 'arialabel',
      },
      // @ts-expect-error Tester oppførsel med ukjent prop
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    };

    const { id, className, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(id, className, htmlProps, rest);

    expect(baseHTMLProps).toStrictEqual({
      id: 'fooid',
      'aria-label': 'arialabel',
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    });
  });
  it('overwrites aria-attributes that are set on the root if they are set on htmlprops', () => {
    const props: BCP = {
      'aria-label': 'foobar',
      'aria-describedby': 'other',
      htmlProps: { 'aria-label': 'arialabelfromhtmlprops' },
    };

    const { id, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(id, htmlProps, rest);

    expect(baseHTMLProps).toStrictEqual({
      'aria-label': 'arialabelfromhtmlprops',
      'aria-describedby': 'other',
    });
  });
  it('works without className argument', () => {
    const props: BCP = {
      id: 'foo',
      htmlProps: {
        className: 'fewa',
        'aria-label': 'arialabl',
      },
    };

    const { id, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(id, htmlProps, rest);

    expect(baseHTMLProps).toStrictEqual({
      id: 'foo',
      className: 'fewa',
      'aria-label': 'arialabl',
    });
  });
});
