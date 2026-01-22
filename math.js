function factorial(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('El argumento debe ser un número entero no negativo');}

  if (n === 0 || n === 1) {
    return 1;}
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;}
  
  return result;
}

function fibonacci(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('El argumento debe ser un número entero no negativo');}
  
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let a = 0;
  let b = 1;
  let temp;
  
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;}
  
  return b;
}

export { factorial, fibonacci };

