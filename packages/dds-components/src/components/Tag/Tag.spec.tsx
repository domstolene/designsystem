import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TAG_PURPOSES } from './Tag';

import { Tag } from '.';

describe('<Tag>', () => {
  it('displays provided text', () => {
    const text = 'text';
    render(<Tag>{text}</Tag>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders with strong appearance', () => {
    render(<Tag appearance="strong">Strong Tag</Tag>);
    expect(screen.getByText('Strong Tag')).toBeInTheDocument();
  });

  it('renders with icon when withIcon is true and purpose is not default', () => {
    const { container } = render(
      <Tag purpose="success" withIcon={true}>
        Success with Icon
      </Tag>,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('does not render icon when withIcon is false', () => {
    const { container } = render(
      <Tag purpose="success" withIcon={false}>
        Success without Icon
      </Tag>,
    );
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  it('renders for all purposes', () => {
    TAG_PURPOSES.forEach(purpose => {
      const tag = `${purpose} tag`;
      render(<Tag purpose={purpose}>{tag}</Tag>);
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });
});
