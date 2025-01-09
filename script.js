/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/

const title = document.getElementsByTagName("h1"[0]);
console.log(title);

/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/

const recipe = document.getElementsByClassName("recipe"[0]);
console.log(recipe);

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/

const subtitles = document.querySelectorAll("h2");

for (let i = 0; i < subtitles.length; i++) {
  subtitles[i].style.color = "blue";
}

/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/

const inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].style.borderColor = "red";
}
