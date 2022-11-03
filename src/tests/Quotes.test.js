import { render } from '@testing-library/react';
import Quote from '../components/pages/Quote';

describe('test for creating the quote section', () => {
  it('created quote page', () => {
    const view = render(<Quote />);
    expect(view).toMatchSnapshot();
  });
});
