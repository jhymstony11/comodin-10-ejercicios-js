let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]


//1. Ordernar los pokemons por base_damage de menor a mayor.

 pokemons.sort(function(a, b) {
     return a.base_damage - b.base_damage;
   });
   console.log(pokemons)
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

 function ordenPokemons(pokemons, key) {
     return pokemons.sort(function(a, b) {
       if(key === "name" || key === "type" ) {
         return a[key].localeCompare(b[key])
       } else {
         return a[key] - b[key];
       }
     });
   }
   let elOrdenPokemons = ordenPokemons(pokemons, 'id');
   console.log(sortedPokemons)


 
//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
 
 function filtroPokemons(pokemons, type) {
     return pokemons.filter(function(pokemon) {
       return pokemon.type === type;
     });
   }
   let typePokemons = filtroPokemons(pokemons, 'water');
   console.log(typePokemons)



//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.

 let pokemonMaster = {
     id: 1,
     name: 'brok',
     created_date: '2022-11-29',
     pokemon: [
      {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
      {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
      {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
     ]
   };
  
 
//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

 function miNuevoPokemon(PokemonMaster) {
     let nuevoPokemon = {
       id: Math.floor(Math.nuevo() * 100) + 1,
       name: 'nuevoPokemon',
       type: 'Type',
       base_damage: Math.floor(Math.nuevo() * 20) + 1,
       base_hp: Math.floor(Math.nuevo() * 20) + 1,
       speed: Math.floor(Math.nuevo() * 50) + 1
     };
      PokemonMaster.pokemon.push(nuevoPokemon);
   }
   miNuevoPokemon(PokemonMaster);
   console.log(PokemonMaster)
  
 
//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5

 function agregarDamage(pokemons) {
     pokemons.forEach(pokemon => {
       pokemon.min_damage = Math.floor(Math.nuevo() * 2) + 1;
       pokemon.max_damage = Math.floor(Math.nuevo() * 3) + 3;
     });
   }
   agregarDamage(pokemons);
   console.log(pokemons);

   //7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

 function dañoDamage(pokemon, minDamage, maxDamage) {
     let eldañoDamage = Math.floor(Math.nuevo() * (maxDamage - minDamage + 1)) + minDamage;
     return pokemon.base_damage + eldañoDamage;
   }
   let evee = pokemons[0]; 
   let minDamage = 8;
   let maxDamage = 18;
   let EveerDamage = dañoDamage(evee, minDamage, maxDamage);
   console.log(`Evee hara el daño de: ${EveerDamage}`);
    
//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
 function sortPokemons(PokemonMaster, maxDamage) {
     PokemonMaster.pokemon.sort((a, b) => {
       let aTotalDamage = a.base_damage + maxDamage;
       let bTotalDamage = b.base_damage + maxDamage;
       return bTotalDamage - aTotalDamage;
     });
   }
   let PokemonMaster = {
     pokemon: [
       {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
       {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
      {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
     ]
   };
  
  //  let maxDamage = 18;
   sortPokemons(PokemonMaster, maxDamage);
   console.log(PokemonMaster.pokemon); 
 
//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

   let table = document.getElementById("nuestraTablaPokemon");
   let headerRow = document.createElement("tr");
   let headers = ["id", "name", "type", "base_damage", "base_hp", "speed"];
   headers.forEach(header => {
     let th = document.createElement("th");
     th.textContent = header;
     headerRow.appendChild(th);
   });
   table.appendChild(headerRow);
   pokemons.forEach(pokemon => {
     let row = document.createElement("tr");
     let cells = [pokemon.id, pokemon.name, pokemon.type, pokemon.base_damage,
       pokemon.base_hp, pokemon.speed];
     cells.forEach(cell => {
       let td = document.createElement("td");
       td.textContent = cell;
       row.appendChild(td);
     });
     table.appendChild(row);
   });
