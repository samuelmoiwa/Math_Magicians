import calculate from '../components/logic/calculate';

describe('Make calculations', () => {
  const equal = '=';

  it('Adding test', () => {
    const display = {
      total: '140',
      next: '30',
      operation: '+',
    };
    const sumDisp = calculate(display, equal);
    expect(sumDisp.total).toBe('170');
  });

  it('Multiplying test', () => {
    const display = {
      total: '5',
      next: '4',
      operation: 'x',
    };
    const multiDisp = calculate(display, equal);
    expect(multiDisp.total).toBe('20');
  });
});
