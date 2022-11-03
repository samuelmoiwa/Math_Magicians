import { render } from '@testing-library/react';
import Calculator from '../components/pages/Calculator';

describe('test for creating the calculator', () => {
  it('created calculator', () => {
    const view = render(<Calculator />);
    expect(view).toMatchSnapshot();
  });
});
