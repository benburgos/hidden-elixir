// const url = window.location.href;
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'

const header = $('header')
const h1 = $('<h1>')
const img = $('<img>')
const imgHolder = $('#drink-image')
const imgSource = $('#drink-image-source')
const drinkGlass = $('#drink-glass-type')
const drinkIngredients = $('#drink-ingredients')
const drinkInstructions = $('#drink-instructions')
const ingredients = [];

$.ajax(url)
    .then((data) => {
        h1.text(data.drinks[0].strDrink);
        header.append(h1);
        imgHolder.text(`Image Placeholder: ${data.drinks[0].strDrinkThumb}`);
        imgSource.text(`Source Placeholder: ${data.drinks[0].strImageSource}`);
        drinkGlass.text(`Glass Placeholder: ${data.drinks[0].strGlass}`);
        ingredients.push(
            data.drinks[0].strIngredient1,
            data.drinks[0].strIngredient2,
            data.drinks[0].strIngredient3,
            data.drinks[0].strIngredient4,
            data.drinks[0].strIngredient5,
            data.drinks[0].strIngredient6,
            data.drinks[0].strIngredient7,
            data.drinks[0].strIngredient8,
            data.drinks[0].strIngredient9,
            data.drinks[0].strIngredient10,
            data.drinks[0].strIngredient11,
            data.drinks[0].strIngredient12,
            data.drinks[0].strIngredient13,
            data.drinks[0].strIngredient14,
            data.drinks[0].strIngredient15,
            );
        filteredIngredients = ingredients.filter(element => {
            return element !== null;
        })
        drinkIngredients.text(`Ingredients Placeholder: ${filteredIngredients.join(', ')}`);
        console.log(filteredIngredients);
        drinkInstructions.text(`Instructions Placeholder: ${data.drinks[0].strInstructions}`);
    })