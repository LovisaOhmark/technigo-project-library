/*Array with breakfast recipes*/
const recipe = [

  {
    name: 'Amerikanska bananpannkakor med blåbär',
    cuisineType: ['Pancake'],
    ingredients: [
      '2 eggs',
      '1 ripe banana',
      '1 dl oats',
      '2 msk peanut butter',
      '1 tsk vanilla sugar',
      '1 tsk baking powder',
      '1 msk butter',
      '250 g blueberries',
      '2 msk maple syrup',
      '600 ml milk',
    ],
    source: 'ICA',
    totalTime: 30,
    url: 'https://www.ica.se/recept/amerikanska-bananpannkakor-med-blabar-729823/',
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250745/cf_259/amerikanska_bananpannkakor_med_blabar.jpg'
  },
  {
    name: 'Kokos- och mannagrynsgröt med stekt banan',
    cuisineType: ['Porridge'],
    ingredients: [
      '2 dl coconut milk',
      '2 dl milk, your choice',
      '4 msk semolina',
      '2 krm vanilla powder',
      '1 krm salt',
      '2 small bananas',
      '1 tsk coconut oil',
      '1 msk honey',
      '2 passion fruits',
      'raosted coconut chips',
    ],
    source: 'ICA',
    totalTime: 30,
    url: 'https://www.ica.se/recept/kokos-och-mannagrynsgrot-med-stekt-banan-728831/',
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_235491/cf_259/kokos-_och_mannagrynsgrot_med_stekt_banan.jpg'
  },
  {
    name: 'Supersmoothie med spenat och ingefära',
    cuisineType: ['Smoothie'],
    ingredients: [
      '1 ripe avocado',
      '1 green apple',
      '1 msk grated ginger',
      '3 dl spinach',
      '1 1/2 dl froozen green peas',
      '125 g mango',
      '2 msk fresh lime juice',
      '3 dl cold water',
    ],
    source: 'ICA',
    totalTime: 15,
    url: 'https://www.ica.se/recept/supersmoothie-med-spenat-och-ingefara-726428/',
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_210973/cf_259/supersmoothie_med_spenat_och_ingefara.jpg'
  },
  {
    name: 'Havrepannkakor',
    cuisineType: ['Pancake'],
    ingredients: [
      '3 eggs',
      '2 dl oat flour',
      '1/2 tsk salt',
      '3 dl milk',
      '40 g butter',
      'Your choice of topping',

    ],
    source: 'Arla',
    totalTime: 20,
    url: 'https://www.arla.se/recept/havrepannkakor/',
    image: 'https://images.arla.com/recordid/47254108-98DE-4E61-926A8FB6E01A076D/havrepannkakor.jpg?width=1269&height=715&mode=crop&crop=(0,89,0,-59)&format=jpg'
  },
  {
    name: 'Bovetegröt med sesamfrön, kanel och russin',
    cuisineType: ['Porridge'],
    ingredients: [
      '1 dl buckwheat',
      '1 dl peeled sesame seeds',
      '1/2 dl raisin',
      '1 tsk ground cinnamon',
      '2 apples',
      'ground cinnamon',
      'honey',
    ],
    source: 'Coop',
    totalTime: 25,
    url: 'https://www.coop.se/recept/bovetegrot-med-sesamfron-kanel-och-russin/',
    image: 'https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1535547500/347870.jpg'
  },
  {
    name: 'Overnight oats med chokladsmak',
    cuisineType: ['Overnight oats'],
    ingredients: [
      '4 dl oats',
      '1/2 dl coconut flakes',
      '1 msk chia seeds',
      '1 krm salt',
      '6 dl oat drink, chocolate flavour',
      'Roasted coconut flakes',
      'Banana',
      'Blueberry',
    ],
    source: 'Coop',
    totalTime: 140,
    url: 'https://www.coop.se/recept/overnight-oats-med-chokladsmak/',
    image: 'https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1669897056/cloud/268108.jpg'
  },
  {
    name: 'Overnight oats med blåbär',
    cuisineType: ['Overnight oats'],
    ingredients: [
      '2 dl oats',
      '2 dl coconut drink',
      '3 tsk chia seeds',
      '1 dl quark',
      '1 dl froozen berries',
      '1 dl granola',
      '2 msk dried blueberries',
    ],
    source: 'ICA',
    totalTime: 140,
    url: 'https://www.ica.se/recept/overnight-oats-med-blabar-728839/',
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_237454/cf_259/overnight_oats_med_blabar.jpg'
  },
  {
    name: 'Smoothie hallon',
    cuisineType: ['Smoothie'],
    ingredients: [
      '1 dl Frozen raspberries',
      '1/2 msk honey',
      '1 dl milk',
      '1 dl vanilla yoghurt',
    ],
    source: 'Arla',
    totalTime: 10,
    url: 'https://www.arla.se/recept/smoothie-hallon/',
    image: 'https://images.arla.com/recordid/974A7347-8772-46D0-868D1392E75DBEB4/smoothie-hallon.jpg?width=1269&height=715&mode=crop&format=jpg'
  },
]

function displayRecipes(recipes) {
  //look after the HTML-element where we want to put our arrays at 
  const recipeList = document.getElementById("recipe-list");

  //create a empty string where the content will locate
  let html = '';

  //go through all the recipes with an forEach loop
  recipes.forEach((recipe) => {
    html += `
      <a href="${recipe.url}" target="_blank" style="text-decoration: none; color: inherit;">
        <div class="recipe">
          <img src="${recipe.image}" alt="${recipe.name}" width="100%">
          <h2>${recipe.name}</h2>
          <hr class="separator">
          <p><strong>Cuisine Type: </strong>${recipe.cuisineType}</p>
          <p><strong>Source: </strong>${recipe.source}</p>
          <p><strong>Total Time: </strong>${recipe.totalTime ? recipe.totalTime + ' minutes' : 'Unknown'}</p>
          <hr class="separator">
          <p><strong>Ingredients: </strong></p>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </div>
      </a>
    `
  });

  recipeList.innerHTML = html;

};

displayRecipes(recipe)

//function for sort button shortest-longest cooking time
function sortOnShortest(recipesTime) {
  recipesTime.sort((a, b) => a.totalTime - b.totalTime);

  displayRecipes(recipesTime);
};

//function for sort button longest-shortest cooking time
function sortOnLongest(recipesTime) {
  recipesTime.sort((a, b) => b.totalTime - a.totalTime);

  displayRecipes(recipesTime);
};

//Event listener for make it possible to add a filters at the same time
document.getElementById("shortest-time").addEventListener("click", () => {
  sortOnShortest(recipe);  // Sort recpies when button activated 
});

document.getElementById("longest-time").addEventListener("click", () => {
  sortOnLongest(recipe);  // Sort recpies when button activated 
});

//show all recipes 
document.getElementById("filter-all").addEventListener("click", () => {
  displayRecipes(recipe);
});

//filter only pancake recipes 
function filterPancake(recipes) {
  return recipes.filter(recipe => recipe.cuisineType.includes('Pancake'));
};

document.getElementById("filter-pancake").addEventListener("click", () => {
  const filteredPancakeRecipes = filterPancake(recipe);
  displayRecipes(filteredPancakeRecipes)
});

//filter only porridge recipes
function filterPorridge(recipes) {
  return recipes.filter(recipe =>
    recipe.cuisineType.includes('Porridge')
  );
};

document.getElementById("filter-porridge").addEventListener("click", () => {
  const filteredPorridgeRecipes = filterPorridge(recipe);
  displayRecipes(filteredPorridgeRecipes)
});

//filter only smoothie recipes
function filterSmoothie(recipes) {
  return recipes.filter(recipe =>
    recipe.cuisineType.includes('Smoothie')
  );
};

document.getElementById("filter-smoothie").addEventListener("click", () => {
  const filteredSmoothieRecipes = filterSmoothie(recipe);
  displayRecipes(filteredSmoothieRecipes)
});

//filter only Overnight oats
function filterOvernightOats(recipes) {
  return recipes.filter(recipe =>
    recipe.cuisineType.includes('Overnight oats')
  );
};

document.getElementById("filter-overnight-oats").addEventListener("click", () => {
  const filteredOvernightOatsRecipes = filterOvernightOats(recipe);
  displayRecipes(filteredOvernightOatsRecipes)
});

//two variables that collect all the buttons in a container within class
const activeFilterButtons = document.querySelectorAll(".filter button");
const activeSortButtons = document.querySelectorAll(".timesort button");

//add eventlistener for each button
activeFilterButtons.forEach(button => {
  button.addEventListener('click', function () {
    activeFilterButtons.forEach(btn => btn.classList.remove('active'));
    //loop that goes through every button and makes sure that only one is active at a time

    this.classList.add('active');
    //adds the active class to the button that was just clicked
  });
});

//add eventlistener for each button
activeSortButtons.forEach(button => {
  button.addEventListener('click', function () {
    activeSortButtons.forEach(btn => btn.classList.remove('active'));
    //loop through every button and makes sure only one is active at the same time

    this.classList.add('active');
    //add active class to the button that was clicked
  });
});

//function that filter recipes name, breakfast type and ingridients 
function searchRecipes(keyword, recipes) {
  return recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(keyword.toLowerCase()) ||
      recipe.cuisineType.some(cuisine => cuisine.trim().toLowerCase().includes(keyword.toLowerCase())) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(keyword.toLowerCase()))
    );
  });
}

document.getElementById('search-field').addEventListener("input", function () {
  const searchTerm = this.value;
  //gets the value from input field
  const filteredRecipes = searchRecipes(searchTerm, recipe);
  //filter the recipes
  displayRecipes(filteredRecipes);
  //show the filtered recipes
});

//function for randomize a recipe
function getRandomRecipe(recipes) {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
  //return the random selected recipe
}

//eventlistener for random button
document.getElementById('randomRecipe').addEventListener("click", function () {

  activeFilterButtons.forEach(btn => btn.classList.remove('active'));
  activeSortButtons.forEach(btn => btn.classList.remove('active'));
  //removes the other filter and sort buttons when random is clicked

  const randomRecipe = getRandomRecipe(recipe);
  displayRecipes([randomRecipe]);
  //show the selected recipe
});