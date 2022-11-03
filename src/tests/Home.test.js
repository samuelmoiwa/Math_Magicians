import { render } from '@testing-library/react';
import Home from '../components/pages/Home';

describe('test for creating the home section', () => {
  it('created home page', () => {
    const view = render(<Home />);
    expect(view).toMatchSnapshot();
  });
});
