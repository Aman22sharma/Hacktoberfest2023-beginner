// Selecting HTML elements using JavaScript under Document Object Model
// The elements of HTML are selected so that their properties/attributes/values can be set in javascript


//1. querySelector()
document.querySelector("p"); // Will select p tag
// Any element (tag, class, id) can be selected using querySelector

document.querySelector("div.firstPara") // will select firstPara class inside div tag

//2. querySelectorAll()
document.querySelectorAll(".text"); //will select all the elements with class text.

//3. getElementsByClassName();
document.getElementsByClassName("firstPara"); //will select element with class firstPara

//4. getElementById()
document.getElementById("intro"); //will select element with id intro

//5. getElementsByTagName()
document.getElementsByTagName("li"); // will select element with tag name li

//6.
document.firstElementChild //will select the first element in the document

//7. 
document.firstElementChild.lastElementChild // will select the last elemwnt of the first child
