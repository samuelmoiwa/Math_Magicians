import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderNav from '../components/header';

describe('test for creating the header', () => {
  test('created header', () => {
    const view = render(
      <BrowserRouter>
        <HeaderNav />
      </BrowserRouter>,
    );
    expect(view).toMatchSnapshot();
  });
});
