function foo(a, b) {
  // Handle undefined values using the nullish coalescing operator
  a = a ?? 0; 
  b = b ?? 0;
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(undefined, undefined)); // Output: 0