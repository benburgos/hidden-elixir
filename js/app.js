const ingredients = document.querySelector('#ingredients');
const drinklist = document.querySelector('#drinklist');

$.ajax('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((data) => {
        for(let ingredient in data.drinks){
            const $button = $('<button>');
            $button.text(data.drinks[ingredient].strIngredient1)
            $(ingredients).append($button)
        }
    });

$.ajax('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then((data) => {
        for(let drink in data.drinks){
            const $li = $('<li>');
            $li.text(data.drinks[drink].strDrink)
            $('ul').append($li)
        }
    })