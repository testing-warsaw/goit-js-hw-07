const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

ingredients.forEach(ingredient => {

  const listLi = document.createElement("li")
  
  listLi.textContent = ingredient

  listLi.classList.add("item")

  ingredientsList.append(listLi)

})


















