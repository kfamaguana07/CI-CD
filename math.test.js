const { factorial, fibonacci } = require('./math');

describe('factorial', () => {
  test('factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial de 1 debe ser 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('factorial de 10 debe ser 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });

  test('debe lanzar error con número negativo', () => {
    expect(() => factorial(-1)).toThrow('El argumento debe ser un número entero no negativo');
  });

  test('debe lanzar error con número decimal', () => {
    expect(() => factorial(3.5)).toThrow('El argumento debe ser un número entero no negativo');
  });

  test('debe lanzar error con argumento no numérico', () => {
    expect(() => factorial('5')).toThrow('El argumento debe ser un número entero no negativo');
  });

  test('debe lanzar error con null', () => {
    expect(() => factorial(null)).toThrow('El argumento debe ser un número entero no negativo');
  });
});

describe('fibonacci', () => {
  test('fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci de 1 debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci de 2 debe ser 1', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('fibonacci de 5 debe ser 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('fibonacci de 10 debe ser 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('fibonacci de 15 debe ser 610', () => {
    expect(fibonacci(15)).toBe(610);
  });

  test('debe lanzar error con número negativo', () => {
    expect(() => fibonacci(-1)).toThrow('El argumento debe ser un número entero no negativo');
  });

  test('debe lanzar error con número decimal', () => {
    expect(() => fibonacci(3.7)).toThrow('El argumento debe ser un número entero no negativo');
  });

  test('debe lanzar error con argumento no numérico', () => {
    expect(() => fibonacci('10')).toThrow('El argumento debe ser un número entero no negativo');
  });

  test('debe lanzar error con undefined', () => {
    expect(() => fibonacci(undefined)).toThrow('El argumento debe ser un número entero no negativo');
  });
});
