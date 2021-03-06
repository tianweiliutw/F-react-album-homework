import { enableFetchMocks } from 'jest-fetch-mock';
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

enableFetchMocks();

beforeEach(() => {
  fetch.mockIf(/https:\/\/jsonplaceholder.typicode.com.*$/, (req) => {
    if (req.url.endsWith('users/1')) {
      return Promise.resolve(
        JSON.stringify({
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
          },
        })
      );
    } if (req.url.endsWith('albums')) {
      return Promise.resolve(
        JSON.stringify([
          {
            userId: 1,
            id: 1,
            title: 'quidem molestiae enim',
          },
        ])
      );
    } if (req.url.endsWith('photos')) {
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

test('should render App', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId('app');

  expect(app).not.toBeEmptyDOMElement();
});
