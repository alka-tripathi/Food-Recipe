// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pasta")
// .then(response => response.json())
// .then(data => {
//     if (!data.meals) {
//         console.log("No meals found");
//         return;
//     }
    
//     const meal = data.meals[0]; // Get the first meal result
//     const mealName = meal.strMeal;
//     const category = meal.strCategory;
//     const instructions = meal.strInstructions;

//     console.log("Meal name:", mealName);
//     console.log("Category:", category);
//     console.log("Instructions:", instructions);
// })
// .catch(error => console.error("Error:", error));

    
// }
let input=document.getElementById("input");
let food = input.value;
console.log(food);

let btn = document.getElementById("btn");
let head = document.getElementById("head");
let middle = document.getElementById("middle");
let body = document.getElementById("body");
let form = document.getElementById("search-form");
let details=document.getElementById("box");
let find = document.getElementById("find");
// btn.addEventListener("click",()=>{
//     let food = input.value;
//   alert(food);
// })
// const food = input.value;
let name=document.getElementById("name");
let cat = document.getElementById("cat");
let inst = document.getElementById('inst');
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

async function getRecipe(food){
   
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
.then( response => response.json())
.then(data=>{
    if(!data.meals){
      head.innerText="result not found";
        return;
    }
    const meal = data.meals[0];
//    console.log(data);
    const mealName = meal.strMeal;
    const category=meal.strCategory;
    const instructions = meal.strInstructions;


    console.log("Meal name:",mealName);
    console.log("Category:",category);
    console.log("instruction:",instructions);
    head.innerText=mealName;
    middle.innerText=category;
    body.innerText=instructions;

})
}
btn.addEventListener("click",()=>{
    const food = input.value; 
    find.classList.add("hide");
    details.classList.add("box-border");
    name.classList.add("vis");
    inst.classList.add("vis");
    cat.classList.add("vis");
    head.classList.add("data");
    middle.classList.add("data");
    body.classList.add("data");
    getRecipe(food);

})

