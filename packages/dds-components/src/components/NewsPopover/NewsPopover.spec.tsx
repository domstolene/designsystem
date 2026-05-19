import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import { NewsPopover } from '.';

const img = <img src="/test.png" alt="Test image" />;

const singleItem = [
  {
    heading: 'a',
    text: 'c',
    image: img,
  },
];

const news = [
  {
    heading: 'heading 1',
    text: 'test 1',
    image: img,
  },
  {
    heading: 'heading 2',
    text: 'test 2',
    image: img,
  },
  {
    heading: 'heading 3',
    text: 'test 3',
    image: img,
  },
];

describe('<NewsPopover>', () => {
  it('renders headings', () => {
    const mainHeading = 'Main heading';
    render(<NewsPopover header={mainHeading} news={singleItem} />);

    const headings = screen.getAllByRole('heading');

    expect(headings).toHaveLength(2);
    expect(headings[0]).toHaveTextContent(mainHeading);
    expect(headings[1]).toHaveTextContent(singleItem[0].heading);
  });

  it('renders dialog', () => {
    render(
      <NewsPopover
        header="Main heading"
        news={singleItem}
        isInitiallyOpen={true}
      />,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders image', () => {
    render(<NewsPopover header="Main heading" news={singleItem} />);

    expect(
      screen.getByRole('img', { name: /test image/i }),
    ).toBeInTheDocument();
  });

  it('is labelled by header', () => {
    const mainHeading = 'Main heading';
    render(
      <NewsPopover
        header={mainHeading}
        news={singleItem}
        isInitiallyOpen={true}
      />,
    );

    expect(screen.getByRole('dialog')).toHaveAccessibleName(mainHeading);
  });
  it('traps focus inside the popover', async () => {
    const user = userEvent.setup();

    render(
      <>
        <a data-testid="outside" href="/">
          Outside
        </a>
        <NewsPopover header="" news={news} />
      </>,
    );

    const dialog = screen.getByRole('dialog');

    const focusableInside = screen.getAllByRole('button');

    focusableInside[0].focus();
    expect(focusableInside[0]).toHaveFocus();

    for (let i = 0; i < focusableInside.length + 2; i++) {
      await user.tab();
    }

    const outside = screen.getByTestId('outside');

    expect(dialog.contains(document.activeElement)).toBe(true);
    expect(outside).not.toHaveFocus();
  });

  it('traps focus when tabbing backwards (Shift+Tab)', async () => {
    const user = userEvent.setup();

    render(
      <>
        <a data-testid="outside" href="/">
          Outside
        </a>
        <NewsPopover header="" news={news} />
      </>,
    );

    const focusableInside = screen.getAllByRole('button');

    focusableInside[focusableInside.length - 1].focus();

    await user.tab({ shift: true });

    expect(screen.getByRole('dialog').contains(document.activeElement)).toBe(
      true,
    );
  });
  describe('closing', () => {
    it('closes after Esc keydown', async () => {
      render(<NewsPopover header="" news={singleItem} />);

      const el = await screen.findByRole('dialog');
      expect(el).toBeInTheDocument();

      await userEvent.keyboard('[Escape]');

      const elQuery = screen.queryByRole('dialog');
      await waitFor(() => {
        expect(elQuery).not.toBeInTheDocument();
      });
    });

    it('closes dialog on close button click', async () => {
      const user = userEvent.setup();
      render(<NewsPopover header="Main heading" news={singleItem} />);
      const button = screen.getByRole('button', { name: /Lukk/i });

      expect(screen.getByRole('dialog')).toBeInTheDocument();

      await user.click(button);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('closes when clicking outside', async () => {
      const user = userEvent.setup();

      render(
        <>
          <div data-testid="outside">Outside</div>
          <NewsPopover header="" news={singleItem} />
        </>,
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();

      await user.click(screen.getByTestId('outside'));

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    it('does NOT close when clicking inside', async () => {
      const user = userEvent.setup();

      render(<NewsPopover header="" news={singleItem} />);

      const dialog = screen.getByRole('dialog');

      await user.click(dialog);

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('does NOT close on outside click when closeOnClickOutside=false', async () => {
      const user = userEvent.setup();

      render(
        <>
          <button data-testid="outside">Outside</button>
          <NewsPopover
            header="Main heading"
            news={singleItem}
            closeOnClickOutside={false}
          />
        </>,
      );

      await user.click(screen.getByTestId('outside'));

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('one item', () => {
    it('does not render list', () => {
      render(<NewsPopover header="" news={singleItem} />);

      const list = screen.queryByRole('list');

      expect(list).not.toBeInTheDocument();
    });
    it('renders text', () => {
      render(<NewsPopover header="" news={singleItem} />);

      expect(screen.getByText(singleItem[0].heading)).toBeInTheDocument();
      expect(screen.getByText(singleItem[0].text)).toBeInTheDocument();
    });
    it('renders only close button', () => {
      render(<NewsPopover header="" news={singleItem} />);
      const buttons = screen.getAllByRole('button');

      expect(buttons).toHaveLength(1);
      expect(buttons[0]).toHaveAccessibleName(/Lukk/i);
    });
  });
  describe('multiple items', () => {
    it('renders list', () => {
      render(<NewsPopover header="" news={news} />);
      const list = screen.queryByRole('list');

      expect(list).toBeInTheDocument();
    });
    it('renders news texts', () => {
      render(<NewsPopover header="" news={news} />);

      expect(screen.getByText(news[0].heading)).toBeInTheDocument();
      expect(screen.getByText(news[0].text)).toBeInTheDocument();
      expect(screen.getByText(news[1].heading)).toBeInTheDocument();
      expect(screen.getByText(news[1].text)).toBeInTheDocument();
    });
    it('renders next, previous and close buttons', () => {
      render(<NewsPopover header="" news={news} />);
      const buttons = screen.getAllByRole('button');

      expect(buttons).toHaveLength(3);
      expect(buttons[0]).toHaveAccessibleName(/Forrige side/i);
      expect(buttons[1]).toHaveAccessibleName(/Neste side/i);
      expect(buttons[2]).toHaveAccessibleName(/Lukk/i);
    });

    it('shows first slide initially and hides the rest', () => {
      render(<NewsPopover header="" news={news} />);

      const [heading1, heading2, heading3] = [
        screen.getByText(news[0].heading),
        screen.getByText(news[1].heading),
        screen.getByText(news[2].heading),
      ];

      expect(heading1.closest('li')).not.toHaveAttribute('hidden');
      expect(heading2.closest('li')).toHaveAttribute('hidden');
      expect(heading3.closest('li')).toHaveAttribute('hidden');
    });

    it('shows second slide initially and hides the rest if defaultActiveSlide set to 1', () => {
      render(<NewsPopover header="" news={news} defaultActiveSlide={1} />);

      const [heading1, heading2, heading3] = [
        screen.getByText(news[0].heading),
        screen.getByText(news[1].heading),
        screen.getByText(news[2].heading),
      ];

      expect(heading1.closest('li')).toHaveAttribute('hidden');
      expect(heading2.closest('li')).not.toHaveAttribute('hidden');
      expect(heading2.closest('li')).toHaveAttribute('aria-current', 'true');
      expect(heading3.closest('li')).toHaveAttribute('hidden');
    });

    it('navigates to next slide when clicking "Next" button', async () => {
      const user = userEvent.setup();
      render(<NewsPopover header="" news={news} />);

      const nextButton = screen.getByRole('button', {
        name: /Neste side/i,
      });

      await user.click(nextButton);

      const [heading1, heading2, heading3] = [
        screen.getByText(news[0].heading),
        screen.getByText(news[1].heading),
        screen.getByText(news[2].heading),
      ];

      expect(heading1.closest('li')).toHaveAttribute('hidden');
      expect(heading2.closest('li')).not.toHaveAttribute('hidden');
      expect(heading2.closest('li')).toHaveAttribute('aria-current', 'true');
      expect(heading3.closest('li')).toHaveAttribute('hidden');
    });

    it('navigates to last slide when clicking "Previous" button', async () => {
      const user = userEvent.setup();
      render(<NewsPopover header="" news={news} />);

      const nextButton = screen.getByRole('button', {
        name: /Forrige side/i,
      });

      await user.click(nextButton);

      const [heading1, heading2, heading3] = [
        screen.getByText(news[0].heading),
        screen.getByText(news[1].heading),
        screen.getByText(news[2].heading),
      ];

      expect(heading1.closest('li')).toHaveAttribute('hidden');
      expect(heading2.closest('li')).toHaveAttribute('hidden');
      expect(heading3.closest('li')).not.toHaveAttribute('hidden');
      expect(heading3.closest('li')).toHaveAttribute('aria-current', 'true');
    });

    it('navigates to previous slide when clicking "Previous" button with middle slide active', async () => {
      const user = userEvent.setup();
      render(<NewsPopover header="" news={news} defaultActiveSlide={1} />);

      const nextButton = screen.getByRole('button', {
        name: /Forrige side/i,
      });

      await user.click(nextButton);

      const [heading1, heading2, heading3] = [
        screen.getByText(news[0].heading),
        screen.getByText(news[1].heading),
        screen.getByText(news[2].heading),
      ];

      expect(heading1.closest('li')).not.toHaveAttribute('hidden');
      expect(heading1.closest('li')).toHaveAttribute('aria-current', 'true');
      expect(heading2.closest('li')).toHaveAttribute('hidden');
      expect(heading3.closest('li')).toHaveAttribute('hidden');
    });

    it('supports controlled close state', async () => {
      const user = userEvent.setup();

      const Comp = () => {
        const [isOpen, setIsOpen] = useState(true);

        return (
          <>
            <button onClick={() => setIsOpen(false)}>Lukk popover</button>
            <NewsPopover
              header=""
              news={news}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              closeOnClickOutside={false}
            />
          </>
        );
      };
      render(<Comp />);

      expect(screen.queryByRole('dialog')).toBeInTheDocument();

      const button = screen.getByRole('button', {
        name: /Lukk popover/i,
      });

      await user.click(button);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('supports controlled slide state', async () => {
      const user = userEvent.setup();

      const Comp = () => {
        const [activeSlide, setActiveSlide] = useState(1);

        return (
          <>
            <button onClick={() => setActiveSlide(2)}>3. nyhet</button>
            <NewsPopover
              header=""
              news={news}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
              closeOnClickOutside={false}
            />
          </>
        );
      };
      render(<Comp />);

      const [heading1, heading2, heading3] = [
        screen.getByText(news[0].heading),
        screen.getByText(news[1].heading),
        screen.getByText(news[2].heading),
      ];

      expect(heading1.closest('li')).toHaveAttribute('hidden');
      expect(heading2.closest('li')).not.toHaveAttribute('hidden');
      expect(heading2.closest('li')).toHaveAttribute('aria-current', 'true');
      expect(heading3.closest('li')).toHaveAttribute('hidden');

      const button = screen.getByRole('button', {
        name: /3. nyhet/i,
      });

      await user.click(button);

      const [heading1updated, heading2updated, heading3updated] = [
        screen.getByText(news[0].heading),
        screen.getByText(news[1].heading),
        screen.getByText(news[2].heading),
      ];

      expect(heading1updated.closest('li')).toHaveAttribute('hidden');
      expect(heading2updated.closest('li')).toHaveAttribute('hidden');
      expect(heading3updated.closest('li')).not.toHaveAttribute('hidden');
      expect(heading3updated.closest('li')).toHaveAttribute(
        'aria-current',
        'true',
      );
    });
  });
});
