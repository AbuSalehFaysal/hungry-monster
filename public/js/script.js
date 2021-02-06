// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=burger")
// .then(res => res.json())
// .then(data => {
//     console.log(data.meals[0].strMeal);
// })

const search = document.getElementById("search");
search.addEventListener("click", function () {
    // alert("clicked");
    const meal = document.getElementById("meal").value;
    const mainAPI = "https://www.themealdb.com/api/json/v1/1/search.php";
    const url = `${mainAPI}?s=${meal}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => mealMenu(data.meals));

        const mealMenu = (food) => {
            console.log(food);
            const menuList = document.getElementById("menuList");
            food.forEach(foods => {
                const foodDiv = document.createElement("div");
                foodDiv.className = "foods";
                const foodInfo = `
                    <div class="card" style="width: 18rem;">
                    <img src="${foods.strMealThumb}" class="card-img-top img-thumbnail" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${foods.strMeal}</h5>
                    </div>
                    </div>
                `
                foodDiv.innerHTML = foodInfo;
                menuList.appendChild(foodDiv);
            });
            // const countriesDiv = document.getElementById("countryList");
            // data.forEach(countries => {
            //     const countryDiv = document.createElement("div");
        
            //     countryDiv.className = "country"
        
            //     const countryInfo = `
            //             <h3>${countries.name}</h3>
            //             <h5>${countries.capital}</h5>
            //             <button class="btn btn-primary" onclick="countryDetail('${countries.name}')">Show Detail</button>
            //         `
        
            //     countryDiv.innerHTML = countryInfo;
            //     countriesDiv.appendChild(countryDiv);
            // });
        }
});