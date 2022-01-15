import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Table, Row, Head, SortCell } from '.';

describe('<SortCell />', () => {
  it('should run onclick event', () => {
    const event = jest.fn();
    const { container } = render(
      <Table>
        <Head>
          <Row>
            <SortCell onClick={event}></SortCell>
          </Row>
        </Head>
      </Table>
    );
    const sortButton = container.querySelector('th')?.querySelector('button');
    fireEvent.click(sortButton!);
    expect(event).toHaveBeenCalled();
  });

  it('should have aria-sort', () => {
    const { container } = render(
      <Table>
        <Head>
          <Row>
            <SortCell
              isSorted={true}
              sortOrder="ascending"
              onClick={() => {}}
            ></SortCell>
          </Row>
        </Head>
      </Table>
    );
    const sortCell = container.querySelector('th');
    expect(sortCell!.getAttribute('aria-sort')).toBe('ascending');
  });
});
