// Anteriormente utilice metodos como replace, substr y otros como conditional ||.

// Ahora se repasara el condicional switch

let array = ['uno', 'dos', 'tres', 'cuatro'];

let caso = array[Math.floor(Math.random() * array.length)];

switch(caso) {
  case 'uno':
  console.log(`encontraste el ${caso}`);
  break;

  case 'dos':
  console.log(`encontraste el ${caso}`);
  break;

  case 'tres':
  console.log(`encontraste el ${caso}`);
  break;

  case 'cuatro':
  console.log(`encontraste el ${caso}`);
  break;

  default:
  console.log('nada');
}