// Q1: By using script tag in body with attribute src referent to the JS file.

// Q2
let container1 = document.getElementById("container1");
let item3 = container1.lastElementChild;
let container2 = document.getElementById("container2");
container2.appendChild(item3);

// Q3
container2.firstElementChild.remove();

// Q4
let container3 = document.getElementById("container3");
item10 = document.createElement('div')
item10.classList.add("item");
item10.innerText = "10";
container3.appendChild(item10);

// Q5
container1.style = container3.style = "color: red;";
