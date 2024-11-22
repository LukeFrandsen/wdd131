import recipes from "./recipes.mjs";

function getRandomNumber(num) {
    if (typeof num !== 'number' || num <= 0) {
        throw new Error("Input must be a positive number.");
    }
    return Math.random() * num;
}

function getRandomRecipe(recipesArray) {
    const randomIndex = Math.floor(getRandomNumber(recipesArray.length));
    return recipesArray[randomIndex];
}

function generateTagsMarkup(tags) {
    if (!Array.isArray(tags) || tags.length === 0) {
        return ''; // Return an empty string if no valid tags
    }
    return tags.map(tag => `<h3 class="tag">${tag}</h3>`).join("");
}

function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    const starsHtml = `${'⭐'.repeat(fullStars)}${'☆'.repeat(emptyStars)}`;

    return `
        <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
            <span aria-hidden="true">${starsHtml}</span>
        </span>
    `;
}

function generateRecipeTemplate(recipes) {
    const { name, tags, rating, image="./images/default-image.jpg", description } = recipes;

    return `
        <div class="recipe-block">
            <img src="${image}" alt="${name}">
            <div class="recipe-details">
                ${generateTagsMarkup(tags)}
                <h2>${name}</h2>
                ${generateRatingStars(rating)}
                <p>${description}</p>
            </div>
        </div>
    `;
}

function filter(query) {
    const filtered = recipes.filter(recipe => {
        const matchesName = recipe.name.toLowerCase().includes(query);
        const matchesDescription = recipe.description.toLowerCase().includes(query);
        const matchesTags = recipe.tags.find(tag => tag.toLowerCase().includes(query));
        const matchesIngredients = recipe.ingredients?.find(ingredient =>
            ingredient.toLowerCase().includes(query)
        );

        return matchesName || matchesDescription || matchesTags || matchesIngredients;
    });

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function renderRecipes(recipeList) {
    const outputElement = document.querySelector("main");

    if (recipeList.length === 0) {
        outputElement.innerHTML = "<p>No recipes found. Try a different search term.</p>";
        return;
    }

    const recipeHtml = recipeList.map(recipe => generateRecipeTemplate(recipe)).join("");
    outputElement.innerHTML = recipeHtml;
}

function searchHandler(e) {
    e.preventDefault();
    const query = document.querySelector("#search").value.toLowerCase().trim();
    const filteredRecipes = filter(query);
    renderRecipes(filteredRecipes);
}

function init() {
    const randomRecipe = getRandomRecipe(recipes);
    const recipeHtml = generateRecipeTemplate(randomRecipe);
    document.querySelector("main").innerHTML = recipeHtml;
}

document.addEventListener("DOMContentLoaded", () => {
    init();
    const searchButton = document.querySelector("button[type='submit']");
    searchButton.addEventListener("click", searchHandler);
});