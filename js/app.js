const ingredients = document.querySelector('#ingredients');
let ingredientList = [];
let selectedIngredients = [];
const drinklist = document.querySelector('#drinklist');
let filteredDrinks = [];

$.ajax('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((data) => {
        for(let ingredient in data.drinks){
            ingredientList.push(data.drinks[ingredient].strIngredient1)
            const $button = $('<button>');
            $button.text(ingredientList[ingredient])
            $(ingredients).append($button)
        }
    });

$.ajax('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then((data) => {
        for(let drink in data.drinks){
            filteredDrinks.push(data.drinks[drink].strDrink)
            const $li = $('<li>');
            $li.text(data.drinks[drink].strDrink)
            $('ul').append($li)
        }
    })