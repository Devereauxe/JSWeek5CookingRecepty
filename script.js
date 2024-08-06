const items = document.querySelectorAll('.box');

const removeFocus = () => {
    items.forEach(item => {
        item.classList.remove('selected');
    });
};

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
    });
});
// НЕ РАБОЧИЙ КОД
// const searchSalad = document.querySelector('.saladsearch');
// const saladdivs = document.querySelectorAll('.salad');

// searchSalad.addEventListener('keyup', function (eventSalad) {
//     const saladword = eventSalad.target.value.toLowerCase();

//     saladdivs.forEach(item =>{
// item.querySelector('.textsalad').textContent.toLowerCase().includes(saladword) ?
// (item.style.display = "block") : (item.style.display = "none");
//     })
// })


//  РАБОЧИЕ СПОСОБЫ 1
// document.addEventListener("DOMContentLoaded", function () {
//     const searchSalad = document.querySelector('.saladsearch');
//     const saladdivs = document.querySelectorAll('.salad');

//     searchSalad.addEventListener("keyup", function (eventSalad) {
//         const saladword = eventSalad.target.value.toLowerCase();

//         saladdivs.forEach(item => {
//             const textElement = item.querySelector('.textsalad');
//             const containsSearchWord = textElement.textContent.toLowerCase().includes(saladword);

//             item.style.display = containsSearchWord ? "block" : "none";
//         });
//     });
// });
//
// document.addEventListener("DOMContentLoaded", function () {
//     const searchSoup = document.querySelector('.soupsearch');
//     const soupdivs = document.querySelectorAll('.soup');

//     searchSoup.addEventListener("keyup", function (eventSoup) {
//         const soupword = eventSoup.target.value.toLowerCase();

//         soupdivs.forEach(item => {
//             const textElement = item.querySelector('.souptext');
//             const containsSearchWord = textElement.textContent.toLowerCase().includes(soupword);

//             item.style.display = containsSearchWord ? "block" : "none";
//         });
//     });
// });


// 2 РАБОЧИЙ СПОСОБ 
document.addEventListener("DOMContentLoaded", function () {
    function setupSearch(searchInputSelector, itemsSelector, textSelector) {
        const searchInput = document.querySelector(searchInputSelector);
        const items = document.querySelectorAll(itemsSelector);

        searchInput.addEventListener("keyup", function () {
            const searchWord = searchInput.value.toLowerCase();

            items.forEach(item => {
                const textElement = item.querySelector(textSelector);
                const containsSearchWord = textElement.textContent.toLowerCase().includes(searchWord);

                item.style.display = containsSearchWord ? "block" : "none";
            });
        });
    }

    setupSearch('.saladsearch', '.salad', '.textsalad');
    
});


document.addEventListener("DOMContentLoaded", function () {
    function setupSearch(searchInputSelector, itemsSelector, textSelector) {
        const searchInput = document.querySelector(searchInputSelector);
        const items = document.querySelectorAll(itemsSelector);

        searchInput.addEventListener("keyup", function () {
            const searchWord = searchInput.value.toLowerCase();

            items.forEach(item => {
                const textElement = item.querySelector(textSelector);
                const containsSearchWord = textElement.textContent.toLowerCase().includes(searchWord);

                item.style.display = containsSearchWord ? "block" : "none";
            });
        });
    }

    setupSearch('.soupsearch', '.soup', '.souptext');
    
});