//В HTML есть список категорий ul#categories.
//Напиши скрипт который:
//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).


const categoriesAll = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesAll.length}`);

for (const item of categoriesAll) {
  const name = item.querySelector("h2");
  console.log(`Category: ${name.textContent}`); 
  const itemLength = item.querySelectorAll('li');
  console.log(`Elements: ${itemLength.length}`)
};
