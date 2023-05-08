

export const SHOPPING__PRODUCTS = [
    {
        presence: "In stock",
        img: `src="../images/t__shirt__shop.png"`,
        name: "Basic Workouts T-Shirt",
        productCode: "18",
        price: 19.49, 
        description: "Are you going to train hard and sweat a lot? Then this T-Shirt made of unique cotton blend is the right pick for you. Designed for our football team and available only in the Lions FC store!"

    },
    {
        presence: "In stock",
        img: `src="../images/jacket__shop.png"`,
        name: "Puffer Jacket in Red",
        productCode: "19",
        price: 83.95,
        description: "Update your winter wardrobe with our favorite puffer jacket. It features two zipped pockets and a hood for you to feel as comfortable as possible during your street workouts or just long walks."
    },
    {
        presence: "In stock",
        img: `src="../images/hoodie__shop.png"`,
        name: "Lions Cotton Hoodie",
        productCode: "20",
        price: 35.71,
        description: "Soft and cozy, this hoodie will keep you warm during street workouts in the spring and fall, and can also be part of your daily sporty wardrobe. There is a large Lions FC logo on the back. Show everyone that you are a true fan!"
    },
    {
        presence: "In stock",
        img: `src="../images/training__bag__shop.png"`,
        name: "Luxury Gym Bag",
        productCode: "21",
        price: 67.76,
        description: "This gym bag in camel will be your main motivator to train. Just look how stylish and beautiful it is! The bag will perfectly fit your workout gear, football ball, and more."
    },
    {
        presence: "In stock",
        img: `src="../images/blue__t__shits__shop.png"`,
        name: "Cotton Polo Shirt in Blue",
        productCode: "22",
        price: 19.59,
        description: "This is the favorite polo of our entire team! Share Lions signature style with this classic polo shirt made from quality cotton."
    },
    {
        presence: "In stock",
        img: `src="../images/sport__jacket__shop.png"`,
        name: "Essential Rain Jacket",
        productCode: "23",
        price: 47.99,
        description: "This rain zipped jacket is 100% waterproof. It also protects you from chilly winds thanks to its unique StopWind technology. The jacket is great for outdoor training in all weather conditions."
    },
    {
        presence: "In stock",
        img: `src="../images/shorts__shop.png"`,
        name: "Football Shorts in Blue",
        productCode: "24",
        price: 13.50,
        description: "These football shorts are designed with an elasticated waistband and look stylish and sporty at the same time. They feature DryBody technology to keep the skin cool and comfortable."
    },
    {
        presence: "In stock",
        img: `src="../images/training__bag__shop.png"`,
        name: "Lions Team Hardcase Bag",
        productCode: "25",
        price: 17.00,
        description: "Going to a sports training session? This bag will allow you to take everything you need with you. The bag is made of a dense, yet lightweight and waterproof synthetic material."
    },


]
const shopContainer = document.querySelector(".shop__column__container");
const shopBackGroundWrapper = document.querySelector(".shop__background__wrapper")
const buttonLink = document.createElement("a");
buttonLink.setAttribute("class", "shop__link__to__shop")
buttonLink.href="#"
buttonLink.textContent = "Go to shop"
const main = () => {

    const shopingObj = SHOPPING__PRODUCTS.map((el) => (
        {
            productImg: `<img class="shop__column" ${el.img} alt ="${el.name}">`,
            productName: `<h2 class="shop__column__h2">${el.name}</h2>`,
            productDescription: `<p class="shop__column__p__description>${el.description}</p>"`,
            productPrice: `<p class="shop__column__p__price">${el.price}</p>`,
            productPresence: `<p class="shop__column__p__presence">${el.presence}</p>`,
            productCode: `<p class="shop__column__p__product__code">${el.productCode}</p>`,
            shopItemId : el.productCode,
        }
    )
    );

    const shopMarkings = shopingObj.map((el, index) => (
    `<div class="shop__columns__wrapper">
          <div class="shop__column">
           ${el.productImg}
          </div>
          <h2 class="shop__column__h2">${el.productName}</h2>
          <p class="shop__column__p">${el.productPrice}</p>
          <button class="shop__column__button" id="${el.shopItemId}" type="button">Add to card</button>
    </div>
    `
    ));
    const mainShopView = shopMarkings.filter((__, index) => index < 4);
    shopContainer.innerHTML = `${mainShopView.join("")}`;
    shopBackGroundWrapper.appendChild(buttonLink)
}

main()
