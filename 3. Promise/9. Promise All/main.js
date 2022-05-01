Promise.all([
  fetch('https://api.github.com/users/1'),
  fetch('https://api.github.com/users/2'),
  fetch('https://api.github.com/users/3')
]).then(results => {
  console.log('results', results);
});