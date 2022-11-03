import { render } from '@testing-library/react';
import Footer from '../components/pages/Footer';

describe('test for creating the footer section', () => {
  it('created footer page', () => {
    const view = render(<Footer />);
    expect(view).toMatchSnapshot();
  });
});
