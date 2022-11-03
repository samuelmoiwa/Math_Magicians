import operate from '../components/logic/operate';

describe('make operations', () => {
  test('adding 5 to 2', () => {
    expect(operate(5, 2, '+')).toBe('7');
  });
});
