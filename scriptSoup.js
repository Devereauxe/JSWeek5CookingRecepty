const searchSoup = document.querySelector('.soupsearch');
const soupdivs = document.querySelectorAll('.soup');

searchSoup.addEventListener('keyup', function (eventSoup) {
    const soupword = eventSoup.target.value.toLowerCase();

    soupdivs.forEach(item =>{
    item.querySelector('.souptext').textContent.toLowerCase().includes(soupword) ?
    (item.style.display = "block") : (item.style.display = "none");
    })
})