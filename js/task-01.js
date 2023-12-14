const categoriesList = document.querySelector("#categories")


const categoryItems = categoriesList.querySelectorAll(".item")
console.log('Number of categories:', categoryItems.length);
console.log("");

categoryItems.forEach(categoryItem => {
    const title = categoryItem.querySelector("h2")
    console.log("Category: ", title.textContent);
   

    const elements = categoryItem.querySelectorAll("li")
    console.log("Elements: ", elements.length);
    console.log("");
})

