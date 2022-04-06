//В HTML есть пустой список ul#ingredients.
//Напиши скрипт, который для каждого элемента массива ingredients:
//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsElement = document.querySelector("ul#ingredients")
const elementText = ingredients.map((element) => {
  const el = document.createElement("li");
  el.classList.add("item");
  el.textContent = element;
  return el;
});
ingredientsElement.append(...elementText);
console.log(ingredientsElement);