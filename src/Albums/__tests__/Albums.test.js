import { enableFetchMocks } from 'jest-fetch-mock';
import React from 'react';
import { render } from '@testing-library/react';
import Albums from '../Albums';

enableFetchMocks();

beforeEach(() => {
  fetch.mockIf(/https:\/\/jsonplaceholder.typicode.com.*$/, (req) => {
    if (req.url.endsWith('albums')) {
      return Promise.resolve(
        JSON.stringify([
          {
            userId: 1,
            id: 1,
            title: 'quidem molestiae enim',
          },
          {
            userId: 1,
            id: 2,
            title: 'sunt qui excepturi placeat culpa',
          },
          {
            userId: 1,
            id: 3,
            title: 'omnis laborum odio',
          },
        ])
      );
    } if (req.url.endsWith('1/photos')) {
      return Promise.resolve(
        JSON.stringify([
          {
            albumId: 1,
            id: 1,
            title: 'accusamus beatae ad facilis cum similique qui sunt',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          },
          {
            albumId: 1,
            id: 2,
            title: 'reprehenderit est deserunt velit ipsam',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796',
          },
          {
            albumId: 1,
            id: 3,
            title: 'officia porro iure quia iusto qui ipsa ut modi',
            url: 'https://via.placeholder.com/600/24f355',
            thumbnailUrl: 'https://via.placeholder.com/150/24f355',
          },
        ])
      );
    }
    return Promise.resolve('{}');
  });
});

test('should render Albums', async () => {
  const { findByText } = render(<Albums />);

  expect(await findByText('quidem molestiae enim')).not.toBeEmptyDOMElement();
  expect(await findByText('sunt qui excepturi placeat culpa')).not.toBeEmptyDOMElement();
  expect(
    await findByText('accusamus beatae ad facilis cum similique qui sunt')
  ).not.toBeEmptyDOMElement();
});
