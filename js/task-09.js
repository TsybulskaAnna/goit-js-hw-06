//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color 
//и выводит значение цвета в span.color.
//Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = {
  body: document.body,
  spanColorName: document.querySelector('span.color'),
  btnChangeColor: document.querySelector('button.change-color'),
} ;

color.btnChangeColor.addEventListener("click", () => {
const bgColor = getRandomHexColor();
color.body.style.backgroundColor = bgColor;
color.spanColorName.textContent = bgColor;
});