const $ul = $('ul');

// fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
//   .then(response => response.json())
//   .then(data => {
//     for(let ingredient in data.drinks){
//         const $li = $('<li>')
//         $li.text(data.drinks[ingredient].strIngredient1)
//         $ul.append($li)
//     }
//   })

$.ajax('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((data) => {
        for(let ingredient in data.drinks){
            const $li = $('<li>');
            $li.text(data.drinks[ingredient].strIngredient1)
            $ul.append($li)
        }
    })
