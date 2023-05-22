

export const SHOPPING__PRODUCTS = [
    {
        presence: "In stock",
        img: "../images/t__shirt__shop.png",
        name: "Basic Workouts T-Shirt",
        productCode: "18",
        price: 19.49,
        value: 1,
        description: "Are you going to train hard and sweat a lot? Then this T-Shirt made of unique cotton blend is the right pick for you. Designed for our football team and available only in the Lions FC store!"

    },
    {
        presence: "In stock",
        img: "../images/jacket__shop.png",
        name: "Puffer Jacket in Red",
        productCode: "19",
        price: 83.95,
        value: 1,
        description: "Update your winter wardrobe with our favorite puffer jacket. It features two zipped pockets and a hood for you to feel as comfortable as possible during your street workouts or just long walks."
    },
    {
        presence: "In stock",
        img: "../images/hoodie__shop.png",
        name: "Lions Cotton Hoodie",
        productCode: "20",
        price: 35.71,
        value: 1,
        description: "Soft and cozy, this hoodie will keep you warm during street workouts in the spring and fall, and can also be part of your daily sporty wardrobe. There is a large Lions FC logo on the back. Show everyone that you are a true fan!"
    },
    {
        presence: "In stock",
        img: "../images/training__bag__shop.png",
        name: "Luxury Gym Bag",
        productCode: "21",
        price: 67.76,
        value: 1,
        description: "This gym bag in camel will be your main motivator to train. Just look how stylish and beautiful it is! The bag will perfectly fit your workout gear, football ball, and more."
    },
    {
        presence: "In stock",
        img: "../images/blue__t__shits__shop.png",
        name: "Cotton Polo Shirt in Blue",
        productCode: "22",
        price: 19.59,
        value: 1,
        description: "This is the favorite polo of our entire team! Share Lions signature style with this classic polo shirt made from quality cotton."
    },
    {
        presence: "In stock",
        img: "../images/sport__jacket__shop.png",
        name: "Essential Rain Jacket",
        productCode: "23",
        price: 47.99,
        value: 1,
        description: "This rain zipped jacket is 100% waterproof. It also protects you from chilly winds thanks to its unique StopWind technology. The jacket is great for outdoor training in all weather conditions."
    },
    {
        presence: "In stock",
        img: "../images/shorts__shop.png",
        name: "Football Shorts in Blue",
        productCode: "24",
        price: 13.50,
        value: 1,
        description: "These football shorts are designed with an elasticated waistband and look stylish and sporty at the same time. They feature DryBody technology to keep the skin cool and comfortable."
    },
    {
        presence: "In stock",
        img: "../images/training__bag__shop.png",
        name: "Lions Team Hardcase Bag",
        productCode: "25",
        price: 17.00,
        value: 1,
        description: "Going to a sports training session? This bag will allow you to take everything you need with you. The bag is made of a dense, yet lightweight and waterproof synthetic material."
    },


]
let arrOrderedItems = [];
const shopButton = document.querySelectorAll("[data-id]");
const ulModal = document.querySelector(".modal__form__inputs__img__wrapper");
const openModalCard = document.querySelector(".modal__container");
const makeModalListVisible = document.querySelector(".shoping__card__back__ground");
const closeModalCard = document.querySelector(".modal__form__close__button");
const modaFormWrapper = document.querySelector(".modal__form");
const modalFormNortification = document.querySelector(".modal__nortification");
const cartSelector = document.querySelector(".shoping__card__back__ground");
const closeEmptyCart = document.querySelector(".modal__nortification__close__button");

const toFixedFunc = (reducer) => {
const totalSelector = document.querySelector(".modal__form__inputs__total__price");
const toFixedTotalPrice = reducer.toFixed(2).replace(/(?<=\.\d{2})\d+/).replace(".", ",");
totalSelector.innerHTML = `$${toFixedTotalPrice}USD`;
}  

const totalFunc = (arr)=> {
const reducer = arr.reduce((acu, current)=> acu + current.price, 0);
toFixedFunc(reducer)
}

const template = (el) => {
    const liModal = document.createElement("li");
    const liImg = document.createElement("img");
    const liName = document.createElement("p");
    const liInputNumber = document.createElement("input");
    const liPrice = document.createElement("p");
    const liSpan = document.createElement("div");
    const iModal = document.createElement("i");
    liModal.setAttribute("class", "modal__card__li");
    liModal.setAttribute("id", `${el.productCode}`);
    liName.setAttribute("class", "modal__card__li__p");
    liInputNumber.setAttribute("class", "modal__form__name__inputs__quantity");
    liSpan.setAttribute("class", "delete__modal__list__item");
    liImg.setAttribute("src", el.img);
    liName.innerHTML = el.name;
    liSpan.appendChild(iModal);
    liPrice.setAttribute("class", "modal__li__price")
    liInputNumber.setAttribute("type", "number");
    
    liInputNumber.setAttribute("value", el.value);
    iModal.setAttribute("class","bi bi-trash3");
    iModal.setAttribute("data-id", `${el.productCode}`);
    const fixedPrice = el.price.toFixed(2).replace(/(?<=\.\d{2})\d+/).replace(".", ",");
    liPrice.innerHTML = `$${fixedPrice}USD`;
    liModal.appendChild(liImg);
    liModal.appendChild(liName);
    liModal.appendChild(liInputNumber);
    liModal.appendChild(liPrice);
    liModal.appendChild(liSpan);
    ulModal.appendChild(liModal);
}

const addLiItem = (foundItemTemplate) => {
    arrOrderedItems.push(foundItemTemplate);
    arrOrderedItems.forEach(el => {
        el.productCode === foundItemTemplate.productCode ? template(el) : el;
    })
    totalFunc(arrOrderedItems)
}
const quantityItems = () => {
    const root = document.querySelector(":root");
    const sumOfAllItems = arrOrderedItems.reduce((acu, current) => acu + current.value, 0)
    sumOfAllItems <= 9 ? root.style.setProperty("--counter", `"${sumOfAllItems}"`) : root.style.setProperty("--counter", `"9+"`)
}
const emptyModal = () =>{
    const  emptyModalCard = ()=> { 
        modaFormWrapper.style.display = "none";
        modalFormNortification.style.display = "block";
        modalFormNortification.style.visibility = "visible";
        cartSelector.style.zIndex = 39;
        makeModalListVisible.style.visibility = "hidden"
    }
    const sumOfAllItems = arrOrderedItems.reduce((acu, current) => acu + current.value, 0);
    sumOfAllItems == 0 ? emptyModalCard() : sumOfAllItems;
}


const deleteLiItem = () => {
    const selectedAllTrashBins = document.querySelectorAll(".bi");
    const trashBinsArr = Array.from(selectedAllTrashBins);
    trashBinsArr.forEach((el) => {
        el.addEventListener("click", (event) => {
            let idItem = event.target.getAttribute('data-id');
            let firstIndex = arrOrderedItems.findIndex(el => el.productCode == idItem);
            if(firstIndex !== -1){
            arrOrderedItems.splice(firstIndex, 1);
            const deleteLi = document.getElementById(idItem);
            ulModal.removeChild(deleteLi)
            quantityItems()
            emptyModal()
            }
        })
    })
}


const increseValue = () => {
const inputAll = document.querySelectorAll(".modal__form__name__inputs__quantity");
const inputArr = Array.from(inputAll);
inputArr.forEach(el=>{
 el.addEventListener("click", (event)=> {
   let id = event.target.parentNode.id;
   const parent = document.getElementById(id);
   const input = parent.querySelector(".modal__form__name__inputs__quantity")
   let value  = el.value;
   const price = parent.querySelector(".modal__li__price");
   if(value >= 1){
   arrOrderedItems.forEach((item) => {
    if (item.productCode === id) {
      let foundItemTemplate = Object.assign({}, SHOPPING__PRODUCTS.find((el) => el.productCode === id));
      item.price = foundItemTemplate.price * value;
      let fixedPrice = item.price.toFixed(2).replace(/(?<=\.\d{2})\d+/, "").replace(".", ",");
      price.innerHTML = `$${fixedPrice}USD`;
    }
  });
}
else{
    input.stepDown(-1);
}
}) ;
});
};


closeEmptyCart.addEventListener("click",()=>{
    const closeModalContainer = document.querySelector(".modal__container");
    closeModalContainer.style.visibility = "hidden";
    closeModalContainer.style.display = "none";
})

makeModalListVisible.addEventListener("click", () => {
    openModalCard.style.visibility = "visible";
    modaFormWrapper.style.visibility = "visible";
    modaFormWrapper.style.display ="block";
    modalFormNortification.style.display = "none";
    openModalCard.style.display = "flex";
})

closeModalCard.addEventListener("click", () => {
    openModalCard.style.visibility = "hidden";
    modalFormNortification.style.visibility = "hidden";
    modaFormWrapper.style.display ="none";
})

const addTheSameItem = (foundItemTemplate, idShopButton) => {
    const parentPrice = document.getElementById(idShopButton);
    const price = parentPrice.querySelector(".modal__li__price");
    const input = parentPrice.querySelector(".modal__form__name__inputs__quantity");
    arrOrderedItems.forEach(el => {
        el.productCode == idShopButton ? el.value += 1 : el
    })
    arrOrderedItems.forEach(el => {
        if(el.productCode == idShopButton){
         el.price = foundItemTemplate.price * el.value ;
        const priceFixed = el.price.toFixed(2).replace(/(<=\.\d{2})\d+/,"").replace(".", ",");
        price.innerHTML = `$${priceFixed}USD`;
        input.value = el.value;
        }
    })

}

const addItemToModalCard = () => {
    const shopButtonArr = Array.from(shopButton);
    shopButtonArr.forEach(el => {
        el.addEventListener("click", (event) => {
            let idShopButton = event.target.getAttribute("data-id");
            let foundItemTemplate = Object.assign({}, SHOPPING__PRODUCTS.find(el => el.productCode == idShopButton));
            let foundItemInOrderedArr = arrOrderedItems.find(el => el.productCode == idShopButton);
            foundItemInOrderedArr ? addTheSameItem(foundItemTemplate, idShopButton) : addLiItem(foundItemTemplate);
            makeModalListVisible.style.visibility = "visible";
            quantityItems();
            deleteLiItem();
            increseValue();
        })
    }
    )
}


addItemToModalCard()