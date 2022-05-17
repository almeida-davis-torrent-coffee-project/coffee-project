"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    section.innerHTML = renderCoffees(filteredCoffees);
}

//start here tomorrow. Coffee search function returning undefined inside the function.
function filterByRoastAndName(input) {

    let filteredCoffees = [];
    let roasts = roastSelection.value;

    for (let i = 0; i < coffees.length; i++) {
        if (roasts === coffees[i].roast) {
            filteredCoffees.push(coffees[i])
        }
    }

    for (const coffee of filteredCoffees) {
        if(!coffee.name.toLowerCase().includes(input)){
            filteredCoffees.splice(filteredCoffees.indexOf(coffee), 1)
            console.log(filteredCoffees)
        }
    }
    return filteredCoffees;
}

function coffeeSearch(e) {
    let searchTerm = searchInput.value.toLowerCase();
    section.innerHTML = renderCoffees(filterByRoastAndName(searchTerm));


}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let section = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let searchInput = document.querySelector('#coffeeSearch')
section.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchInput.addEventListener("keyup", coffeeSearch);
roastSelection.addEventListener("change", coffeeSearch);