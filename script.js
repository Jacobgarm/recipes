let recipes = ["Cake", "Cookies"];
let recipeList = document.getElementById("recipeList")

for (let rcp of recipes) {
    let item = document.createElement("li");
    item.innerText = rcp;
    recipeList.appendChild(item);
}