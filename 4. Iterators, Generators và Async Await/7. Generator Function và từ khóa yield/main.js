function* generatorFunc() {
  console.log('generatorFunc run 1');

  yield 30;

  console.log('generatorFunc run 2');

  yield 100;

  console.log('generatorFunc run 3');

  return 1000;

  yield [
    {
      id: 10,
      name: 'John'
    },
    {
      id: 20,
      name: 'Smith'
    }
  ];
  
  console.log('generatorFunc run 4');
}

const genOjb = generatorFunc();

const data1 = genOjb.next();
console.log('data1', data1);

console.log('............. 3s .............');

const data2 = genOjb.next();
console.log('data2', data2);

console.log('............. 5s .............');

const data3 = genOjb.next();
console.log('data3', data3);

const data4 = genOjb.next();
console.log('data4', data4);

console.log('genObj', genOjb);