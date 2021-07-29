import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {Breadcrumbs, Breadcrumb } from '.';

describe('Breadcrumbs', () => {
    it('has aria-label', () => {
        render (
            <Breadcrumbs data-testid='test'>
                <Breadcrumb>
                    Side 1
                </Breadcrumb>
                    Side 2
                <Breadcrumb>
                </Breadcrumb>
                <Breadcrumb>
                    Side 3
                </Breadcrumb>
            </Breadcrumbs>
        )
    });

    const breadcrumbs = screen.getByTestId('test');
    expect(breadcrumbs).toHaveAttribute('aria-label', 'breadcrumbs');
});