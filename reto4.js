function myFunction(obj) {
  if (obj.a) {
    if (obj.a.b) {
      return obj.a.b;
    }
    return undefined;
  }
  return undefined;
  /*
  //pude visualizar esta solución en otro codigo pero apenas estoy repasando como funciona el optional chaining
  const valor = obj.a?.b;
  return valor;
    */
}

console.log(myFunction({ a: 1 }));
console.log(myFunction({ a: { b: { c: 3 } } }));
console.log(myFunction({ b: { a: 1 } }));
console.log(myFunction({ a: { b: 2 } }));
