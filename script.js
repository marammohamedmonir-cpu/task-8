var recipes = [
    {
        name: "Classic Beef Burger",
        description: "Juicy homemade burger with all the fixings",
        category: "American",
        difficulty: "Easy",
        image:"./images/photo-1568901346375-23c9450c58cd.jpeg"
    },
    {
        name: "Shrimp Scampi",
        description: "Garlicky shrimp in white wine butter sauce",
        category: "Seafood",
        difficulty: "Easy",
        image:"./images/photo-1633504581786-316c8002b1b9.jpeg"
    },
    {
        name: "Vegetable Curry",
        description: "Hearty vegetarian curry with coconut milk",
        category: "Asian",
        difficulty: "Easy",
        image:"./images/photo-1585032226651-759b368d7246.jpeg"
    },
       {
        name: "Margherita Pizza",
        description: "Classic Italian pizza with fresh mozzarella and basil",
        category: "Italian",
        difficulty: "Easy",
        image:"./images/photo-1574071318508-1cdbab80d002.jpeg"
    },
        {
        name: "Caesar Salad",
        description: "Classic salad with crispy romaine and creamy dressing",
        category: "Italian",
        difficulty: "Easy",
        image:"./images/salad.jpeg"
    }
];

var currentRecipe = 0;
var recipeImage = document.querySelector(".left-div img");
var recipeButton = document.getElementById("uni-right-side");
var recipeTitle = document.querySelector(".content-title-right-side h1");
var recipeDescription = document.querySelector(".content-title-right-side p");
var recipeCategory = document.querySelector(".american");
var recipeDifficulty = document.querySelector(".easy");

recipeButton.addEventListener("click", function () {

    currentRecipe++;

    if (currentRecipe >= recipes.length) {
        currentRecipe = 0;
    }

    recipeTitle.innerText = recipes[currentRecipe].name;
    recipeDescription.innerText = recipes[currentRecipe].description;
    recipeCategory.innerText = recipes[currentRecipe].category;
    recipeDifficulty.innerText = recipes[currentRecipe].difficulty;
    recipeImage.src = recipes[currentRecipe].image;
});