import React from 'react';
import '@testing-library/jest-dom';
import Search from '../search';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../test-utils';

describe('Attribute test', () => {
  it('should be have placeholder "Поиск"', () => {
    renderWithProviders(<Search/>);

    expect(screen.getByPlaceholderText('Поиск')).toHaveAttribute('type', 'search');
    expect(screen.getByPlaceholderText('Поиск')).toHaveAttribute('name', 'search');
  });
});
