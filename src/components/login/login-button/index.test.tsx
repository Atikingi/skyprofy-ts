import React from 'react';
import '@testing-library/jest-dom';
import LoginButton from './index';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../test-utils';

describe('Attribute test', () => {
  it('should be type="button" by default', () => {
    renderWithProviders(<LoginButton email={''} password={''}/>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
