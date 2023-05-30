const arrPhotos = [
    {
        id : 1,
        img : '../images/carousel_1.webp',
    },
    {
        id : 2,
        img : '../images/carousel_2.webp',
    },
    {
        id : 3,
        img : '../images/carousel_3.webp',
    },
    {
        id : 4,
        img : '../images/carousel_4.jpg',
    },
    {
        id : 5,
        img : '../images/carousel_5.jpg',
    },
]

const slideRight = document.querySelector(".gallery__right__button");
const slideLeft = document.querySelector(".gallery__left__button");
const imgSelectors = document.querySelectorAll(".gallery__img__wrapper");
const carouselWrapper = document.querySelector(".wrapper__for__carousel");
const im = document.getElementById("1");
let counter = 1;
slideRight.addEventListener("click", ()=>{
const imgWrapper  = document.getElementById(counter);
carouselWrapper.scrollBy(carouselWrapper.scrollWidth, 0);
imgSelectors.forEach((el,index)=>{ 
    if(index == counter){
        const clonedEl = imgWrapper.cloneNode(true); 
        carouselWrapper.append(clonedEl);      
    }
})
counter++
counter == 4 ? counter = 1 : counter;
})



