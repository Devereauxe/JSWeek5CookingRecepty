const search = document.querySelector('.dessertsearch');
const divs = document.querySelectorAll('.dessert');

search.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();

    divs.forEach(item =>{
        item.querySelector('.desserttext').textContent.toLowerCase().includes(word) ?
        (item.style.display = 'block') : (item.style.display = 'none');
    })
})