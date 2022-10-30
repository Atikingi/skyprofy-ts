import '@testing-library/jest-dom';
import { rest } from 'msw';
import { allTracks } from '../../../../mocks/all-tracks';
import { setupServer } from 'msw/node';
import { renderWithProviders, setupApiStore } from '../../../../test-utils';
import { musicApi } from '../../../../services/music';
import PlaylistContent from './index';
import { screen } from '@testing-library/react';
import React from 'react';

export const handlers = [
  rest.get('http://51.250.95.23:8000/catalog/track/all', (req, res, ctx) => {
    return res(
      ctx.json(allTracks)
    );
  })
];

const server = setupServer(...handlers);

const storeRef = setupApiStore(musicApi);

describe('MusicList feature', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should show requested data', async () => {
    renderWithProviders(<PlaylistContent />, { wrapper: storeRef.wrapper });

    expect(await screen.findAllByText('Chase')).toBeTruthy();
  });
});
