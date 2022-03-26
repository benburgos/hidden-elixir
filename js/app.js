const ingredients = document.querySelector('#ingredients');
let ingredientList = [];
let selectedIngredients = [];
let drinkData = {};
const drinkList = document.querySelector('#drinklist');
let filteredDrinks = [];
let drinkIds = [];

$.ajax('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((data) => {
        for(let ingredient in data.drinks){
            ingredientList.push(data.drinks[ingredient].strIngredient1);
        }
    });

$('#addIt').click(function(){
  let inputValue = $('#myInput').val();
  function capitalize(inputValue) {
    return inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  }
  const formattedIngredient = inputValue.split(' ').map(capitalize).join(' ');
  const $button = $('<button>');
  $button.text(formattedIngredient);
  $(ingredients).append($button);
  selectedIngredients.push($('#myInput').val().split(' ').join('_'));
  console.log(selectedIngredients)
});

$('#showMe').click(function(){
  $.ajax(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${$('#myInput').val()}`)
    .then((data) => {
        for(let drink in data.drinks){
            filteredDrinks.push(data.drinks[drink].strDrink)
            const $div = $('<div id=new-drink>');
            $div.html(`<img src="${data.drinks[drink].strDrinkThumb}" alt="${data.drinks[drink].strDrink}"/>${data.drinks[drink].strDrink}`)
            $(drinkList).append($div);
        }
    })
});


function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
autocomplete(document.querySelector("#myInput"),ingredientList);
