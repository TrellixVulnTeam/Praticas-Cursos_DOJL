let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54]; //um aray JavaScript, uma estrutura de dados utilizada para armazenar diversos valores. Cada item do array é separado por vírgula.

let solution2 = scores[2]; //para acessar um item do array, usamos esta sintaxe: o nome da cariável do array seguida pelo índic do item entre colchetes.

alert(`Solution 2 produced ${solution2} bubbles.`); // os espaços que ficam armazenados os valores dentros dos arrays são chamdos de índeces. Em JS começamos a contar os índeces a partir do '0' (zero).

let flavors = ['vanilla', 'butterscotch', 'lavender', 'chocolate', 'cookie dough'];

let flavorOfTheDay = flavors[2];

flavors[3] = 'vanilla chocolate cjip';

let numFlavors = flavors.length; //todo array possui uma propriedade chamada 'length', que contém o número de itens presentes no array no momento.

alert(numFlavors);


let products = ['Choo Choo Chocolate', 'Icy Mint', 'Cake Batter', 'Bubblegum'];
let last = products.length - 1;

let recent = products[last];