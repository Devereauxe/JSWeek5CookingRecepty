const searchMeal = document.querySelector('.mealsearch');
const divs = document.querySelectorAll('.meal');

searchMeal.addEventListener('keyup', function(event){
const word = event.target.value.toLowerCase();

divs.forEach(item => {
    item.querySelector('.mealtext').textContent.toLowerCase().includes(word) ?
    (item.style.display = "block") : (item.style.display = "none");
})
})