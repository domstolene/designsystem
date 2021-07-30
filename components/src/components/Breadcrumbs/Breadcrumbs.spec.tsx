import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {Breadcrumbs, Breadcrumb } from '.';

describe('Breadcrumbs', () => {
    it('has aria-label', () => {
        render (
            <Breadcrumbs>
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
        const breadcrumbs = screen.getByLabelText('breadcrumbs');
        expect(breadcrumbs).toHaveAttribute('aria-label', 'breadcrumbs');
    });
    it('should render three breadcrumbs', () => {
        render (
            <Breadcrumbs>
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
        const breadcrumbItems = screen.getAllByRole('listitem');
        expect(breadcrumbItems).toHaveLength(3);
    });
});