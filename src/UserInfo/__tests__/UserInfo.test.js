import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { render } from '@testing-library/react';
import UserInfo from '../UserInfo';

fetchMock.enableMocks();

test('should render UserInfo', () => {
  const { getByTestId } = render(
    <UserInfo
      user={{
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
        },
      }}
    />
  );
  const userInfo = getByTestId('userInfo');
  expect(userInfo.querySelectorAll('.ContactMeSectionItem')).toHaveLength(4);
});
