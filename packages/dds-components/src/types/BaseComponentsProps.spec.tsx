import { describe, expect, it } from 'vitest';

import {
  type BaseComponentProps,
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from './BaseComponentProps';

type BCP = BaseComponentProps<HTMLElement>;
type BCPExtraProps = BaseComponentProps<HTMLElement, { defaultValue?: string }>;
type PBCP = PolymorphicBaseComponentProps<'div'>;

describe('getBaseHTMLProps', () => {
  describe('BaseComponentProps<HTMLElement>', () => {
    it('returns empty object if not receiving any non-undefined arguments', () => {
      const baseHTMLProps = getBaseHTMLProps(
        undefined,
        undefined,
        undefined,
        undefined,
        {},
      );

      expect(baseHTMLProps).toStrictEqual({});
    });
    it('returns id from base argument', () => {
      const props: BCP = { id: 'foo' };

      const { id, className, style, htmlProps, ...rest } = props;

      const baseHTMLProps = getBaseHTMLProps(
        id,
        className,
        style,
        htmlProps,
        rest,
      );

      expect(baseHTMLProps).toStrictEqual({
        id: 'foo',
      });
    });
    it('returns className from base argument', () => {
      const props: BCP = { className: 'foo' };

      const { id, className, style, htmlProps, ...rest } = props;

      const baseHTMLProps = getBaseHTMLProps(
        id,
        className,
        style,
        htmlProps,
        rest,
      );

      expect(baseHTMLProps).toStrictEqual({
        className: 'foo',
      });
    });
    it('returns props from base argument htmlProps', () => {
      const props: BCP = {
        id: 'fooid',
        htmlProps: {
          'aria-label': 'arialabel',
          defaultValue: 'defaultvalue',
        },
      };

      const { id, className, style, htmlProps, ...rest } = props;

      const baseHTMLProps = getBaseHTMLProps(
        id,
        className,
        style,
        htmlProps,
        rest,
      );

      expect(baseHTMLProps).toStrictEqual({
        id: 'fooid',
        'aria-label': 'arialabel',
        defaultValue: 'defaultvalue',
      });
    });

    it('returns props from base argument "rest" and not htmlProps', () => {
      const props: BCPExtraProps = {
        id: 'fooid',
        defaultValue: 'foodefaultvalue',
        htmlProps: {
          'aria-label': 'arialabel',
          // @ts-expect-error Tester oppførsel med ukjent prop
          defaultValue: 'bardefaultvalue',
        },
      };

      const { id, className, style, htmlProps, ...rest } = props;

      const baseHTMLProps = getBaseHTMLProps(
        id,
        className,
        style,
        htmlProps,
        rest,
      );

      expect(baseHTMLProps).toStrictEqual({
        id: 'fooid',
        'aria-label': 'arialabel',
        defaultValue: 'foodefaultvalue',
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

      const { id, className, style, htmlProps, ...rest } = props;

      const baseHTMLProps = getBaseHTMLProps(
        id,
        className,
        style,
        htmlProps,
        rest,
      );

      expect(baseHTMLProps).toStrictEqual({
        id: 'fooid',
        'aria-label': 'arialabel',
        'data-unknownProp': 'lol',
        'data-unknownProp2': 'lol2',
      });
    });
    it('returns id from base argument and not htmlProps', () => {
      const props: BCP = {
        id: 'fooid',
        htmlProps: {
          // @ts-expect-error Tester oppførsel med ukjent prop
          id: 'barid',
          'aria-label': 'arialabel',
        },
        'data-unknownProp': 'lol',
        'data-unknownProp2': 'lol2',
      };

      const { id, className, style, htmlProps, ...rest } = props;

      const baseHTMLProps = getBaseHTMLProps(
        id,
        className,
        style,
        htmlProps,
        rest,
      );

      expect(baseHTMLProps).toStrictEqual({
        id: 'fooid',
        'aria-label': 'arialabel',
        'data-unknownProp': 'lol',
        'data-unknownProp2': 'lol2',
      });
    });
    it('returns className from base argument and not htmlProps', () => {
      const props: BCP = {
        className: 'fooclassName',
        htmlProps: {
          // @ts-expect-error Tester oppførsel med ukjent prop
          className: 'barclassName',
          'aria-label': 'arialabel',
        },
        'data-unknownProp': 'lol',
        'data-unknownProp2': 'lol2',
      };

      const { id, className, style, htmlProps, ...rest } = props;

      const baseHTMLProps = getBaseHTMLProps(
        id,
        className,
        style,
        htmlProps,
        rest,
      );

      expect(baseHTMLProps).toStrictEqual({
        className: 'fooclassName',
        'aria-label': 'arialabel',
        'data-unknownProp': 'lol',
        'data-unknownProp2': 'lol2',
      });
    });
    it('returns style from base argument and not htmlProps', () => {
      const props: BCP = {
        style: { top: 0 },
        htmlProps: {
          // @ts-expect-error Tester oppførsel med ukjent prop
          style: { bottom: '110px' },
          'aria-label': 'arialabel',
        },
        'data-unknownProp': 'lol',
        'data-unknownProp2': 'lol2',
      };

      const { id, className, style, htmlProps, ...rest } = props;

      const baseHTMLProps = getBaseHTMLProps(
        id,
        className,
        style,
        htmlProps,
        rest,
      );

      expect(baseHTMLProps).toStrictEqual({
        style: { top: 0 },
        'aria-label': 'arialabel',
        'data-unknownProp': 'lol',
        'data-unknownProp2': 'lol2',
      });
    });
  });
});
describe("PolymorphicBaseComponentProps<'div'>", () => {
  it('returns id from base argument', () => {
    const props: PBCP = { id: 'foo' };

    const { id, className, style, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(
      id,
      className,
      style,
      htmlProps,
      rest,
    );

    expect(baseHTMLProps).toStrictEqual({
      id: 'foo',
    });
  });
  it('returns className from base argument', () => {
    const props: PBCP = { className: 'foo' };

    const { id, className, style, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(
      id,
      className,
      style,
      htmlProps,
      rest,
    );

    expect(baseHTMLProps).toStrictEqual({
      className: 'foo',
    });
  });
  it('returns unknownProps from base argument "rest"', () => {
    const props: PBCP = {
      id: 'fooid',
      htmlProps: {
        'aria-label': 'arialabel',
      },
      // @ts-expect-error Tester oppførsel med ukjent prop
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    };

    const { id, className, style, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(
      id,
      className,
      style,
      htmlProps,
      rest,
    );

    expect(baseHTMLProps).toStrictEqual({
      id: 'fooid',
      'aria-label': 'arialabel',
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    });
  });
  it('returns id from base argument and not htmlProps', () => {
    const props: PBCP = {
      id: 'fooid',
      htmlProps: {
        // @ts-expect-error Tester oppførsel med ukjent prop
        id: 'barid',
        'aria-label': 'arialabel',
      },
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    };

    const { id, className, style, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(
      id,
      className,
      style,
      htmlProps,
      rest,
    );

    expect(baseHTMLProps).toStrictEqual({
      id: 'fooid',
      'aria-label': 'arialabel',
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    });
  });
  it('returns className from base argument and not htmlProps', () => {
    const props: PBCP = {
      className: 'fooclassName',
      htmlProps: {
        // @ts-expect-error Tester oppførsel med ukjent prop
        className: 'barclassName',
        'aria-label': 'arialabel',
      },
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    };

    const { id, className, style, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(
      id,
      className,
      style,
      htmlProps,
      rest,
    );

    expect(baseHTMLProps).toStrictEqual({
      className: 'fooclassName',
      'aria-label': 'arialabel',
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    });
  });
  it('returns style from base argument and not htmlProps', () => {
    const props: PBCP = {
      style: { top: 0 },
      htmlProps: {
        // @ts-expect-error Tester oppførsel med ukjent prop
        style: { bottom: '110px' },
        'aria-label': 'arialabel',
      },
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    };

    const { id, className, style, htmlProps, ...rest } = props;

    const baseHTMLProps = getBaseHTMLProps(
      id,
      className,
      style,
      htmlProps,
      rest,
    );

    expect(baseHTMLProps).toStrictEqual({
      style: { top: 0 },
      'aria-label': 'arialabel',
      'data-unknownProp': 'lol',
      'data-unknownProp2': 'lol2',
    });
  });
});
