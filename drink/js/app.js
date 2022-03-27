// const url = window.location.href;
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'

const header = $('header')
const h1 = $('<h1>')
const img = $('<img>')
const imgHolder = $('#drink-image')
const imgSource = $('#drink-image-source')
const drinkGlass = $('#drink-glass-type')
const drinkIngredients = $('#drink-ingredients')
const drinkMeasurements = $('#drink-measurements')
const drinkInstructions = $('#drink-instructions')
const ingredients = [];
const measurements = [];

$.ajax(url)
    .then((data) => {
        h1.text(data.drinks[0].strDrink);
        header.append(h1);
        imgHolder.html(`<img src="${data.drinks[0].strDrinkThumb}" alt="${data.drinks[0].strDrink}"/>`)
        imgSource.html(`<a href="${data.drinks[0].strImageSource}" target="_blank">Image Source</a>`);
        drinkGlass.text(`Glass Type Needed: ${data.drinks[0].strGlass}`);
        ingredients.push(
            data.drinks[0].strIngredient1,
            data.drinks[0].strMeasure1,
            data.drinks[0].strIngredient2,
            data.drinks[0].strMeasure2,
            data.drinks[0].strIngredient3,
            data.drinks[0].strMeasure3,
            data.drinks[0].strIngredient4,
            data.drinks[0].strMeasure4,
            data.drinks[0].strIngredient5,
            data.drinks[0].strMeasure5,
            data.drinks[0].strIngredient6,
            data.drinks[0].strMeasure6,
            data.drinks[0].strIngredient7,
            data.drinks[0].strMeasure7,
            data.drinks[0].strIngredient8,
            data.drinks[0].strMeasure8,
            data.drinks[0].strIngredient9,
            data.drinks[0].strMeasure9,
            data.drinks[0].strIngredient10,
            data.drinks[0].strMeasure10,
            data.drinks[0].strIngredient11,
            data.drinks[0].strMeasure11,
            data.drinks[0].strIngredient12,
            data.drinks[0].strMeasure12,
            data.drinks[0].strIngredient13,
            data.drinks[0].strMeasure13,
            data.drinks[0].strIngredient14,
            data.drinks[0].strMeasure14,
            data.drinks[0].strIngredient15,
            data.drinks[0].strMeasure15,
            );
        filteredIngredients = ingredients.filter(element => {
            return element !== null;
        })
        drinkIngredients.text(`Ingredients: ${filteredIngredients.join(' ')}`);
        console.log(filteredIngredients);
        drinkInstructions.text(`Instructions: ${data.drinks[0].strInstructions}`);
    })