//  arrays.js
const steps = ["one", "two", "three"];
const letters = ["a", "b", "c"];
const gpa_grader = function(grade) {
    let points = 0;
    switch (grade) {
      case "A":
        points = 4;
        break;
      case "B":
        points = 3;
        break;
      case "C":
        points = 2;
        break;
      case "D":
        points = 1;
        break;
      default:
        points = 0;
    }
    return points;
}
const gpa_calc = letters.map(gpa_grader);

let new_array = arr.map(function callback(currentValue, index, array) {
    return currentValue * currentValue ;
  // Return element for new_array
}, thisArg);
const listTemplate = function(step) {
    return `<li>${step}</li>`;//the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML