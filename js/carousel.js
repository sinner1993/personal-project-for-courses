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
const imgItemWrapper = document.querySelector(".gallery__img__wrapper");

const firstChild = document.getElementById(1);
const lastChild = document.getElementById(4);
let counter  = 1;
  slideRight.addEventListener("click", ()=>{
    let arr = Array.from(imgSelectors);
    arr.forEach((element, index) => {
        if(index == counter){
            console.log("21453");
            const copyFirst = element.cloneNode(true);
            carouselWrapper.append(copyFirst);
            carouselWrapper.scrollBy( imgItemWrapper.offsetWidth, 0);
        }
    });
    counter++
    counter = 4 ? 0 : counter;
  })
  slideLeft.addEventListener("click", ()=>{
    let arr = Array.from(imgSelectors);
    arr.forEach((element, index) => {
        if(index == counter){
            console.log("EFG");
            const copyLast = element.cloneNode(true);
            console.log(copyLast,"Sda");
            carouselWrapper.prepend(copyLast);
            carouselWrapper.scrollBy(imgItemWrapper, 0);
        }
    });
    console.log(arr);
    counter++
    counter = 4 ? 0 : counter;
  })



  const slider = () => {
    const copyFirst = firstChild.cloneNode(true);
    const copyLast = lastChild.cloneNode(true);
    console.log(firstChild);
    carouselWrapper.append(copyFirst);
    carouselWrapper.prepend(copyLast);
    let position = imgItemWrapper.offsetWidth * 2
    carouselWrapper.scrollLeft = position
     // Adjust the value as per your requirement
   
  };
  
  slider();