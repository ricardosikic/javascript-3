// Anteriormente utilice metodos como replace, substr y otros como conditional ||.

// Ahora se repasara el condicional switch

let array = ['uno', 'dos', 'tres', 'cuatro'];

let caso = array[Math.floor(Math.random() * array.length)];

let puntos = 0;

switch(caso) {
  case 'uno':
  console.log(`encontraste el ${caso}`);
  break;

  case 'dos':
  console.log(`encontraste el ${caso}`);
  break;

  case 'tres':
  puntos ++;
  console.log(`encontraste el ${caso}, ${puntos}`);
  break;

  case 'cuatro':
  console.log(`encontraste el ${caso}`);
  break;

  default:
  console.log('nada');
}