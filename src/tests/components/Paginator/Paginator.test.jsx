import React from 'react';
import { render, screen } from '@testing-library/react';
import Paginator from '../../../components/common/Paginator/Paginator';

describe('Paginator component', () => {
    it('renders spans', async () => {
        render(
        <Paginator 
            currentPage={ 1 }
            totalItemsCount={ 100 }
            pageSize={ 5 }
            setCurrentPage={() => {}} />
        );
        const spanElements = await screen.findAllByText(/^[1-9]\d*$/);
        expect(spanElements.length).toBe(20);
    });
});