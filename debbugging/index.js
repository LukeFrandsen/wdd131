// const titleElement = document.getElementById('title');
// titleElement.innerText = 'Hello World';

// const subTitleElement = document.getElementById('subtitile');
// subTitleElement.innerText = 'Hello from the other side';

// const PI = 3.14;
// let radius = 3;
// let area = 0;
// area = radius * radius * PI;
// radius = 4;
// area = radius * radius * PI;

const PI = 3.14;
let area = 0;
function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
area = circleArea(3);
console.log(area);
console.log('hello');