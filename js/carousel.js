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
const imgItemWrapper = document.querySelector(".gallery__img__wrapper");
const sliderContainer = document.querySelector(".slider__contaienr");
let initialCounterLeft = 3;
let initialCounterRight  = 0;
let translatedWidth = 0;
let translatedWidthRight = 0;

  slideRight.addEventListener("click", ()=>{
   translatedWidth -= imgItemWrapper.offsetWidth;
   if(initialCounterRight < 0){
       sliderContainer.style.transform = `translateX(${-translatedWidth}px)`;
       sliderContainer.style.transition = `transform 300ms ease-in-out`;
   }
    
  })
  slideLeft.addEventListener("click", ()=>{ 
    const selec = document.querySelectorAll(".gallery__img__wrapper");
     translatedWidth += imgItemWrapper.offsetWidth;
    const lastChild = imgSelectors[2].cloneNode(true);
  selec.forEach((el, index)=>{     
        if(initialCounterLeft == index){
                sliderContainer.style.transform = `translateX(-${translatedWidth}px)`;
                sliderContainer.style.transition = `transform 300ms ease-in-out`;
                sliderContainer.append(lastChild); 
        }
        
    })
    initialCounterLeft--
    initialCounterRight--
    console.log(initialCounterRight,"123456");
    initialCounterLeft = -1 ? 3 : initialCounterLeft; 
  })

