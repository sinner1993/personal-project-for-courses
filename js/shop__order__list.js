const SHOPPING__PRODUCTS = [
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
const arrOrderedItem = [];

const orderList = () => {
document.addEventListener("click", (event)=> {
 let foundItem = SHOPPING__PRODUCTS.find((el)=>el.productCode === event.target.id); 
 if(foundItem) {
    // check if array empty
    arrOrderedItem.length === 0 ? arrOrderedItem.push(foundItem) : arrOrderedItem;
    // check  insinde arrOrderedItem for dublicate if yes then sum prices if not the push foundItem to arrOrderedItem
    arrOrderedItem.forEach((el) => el.productCode ==  foundItem.productCode 
    ? el.price += foundItem.price : arrOrderedItem.push(foundItem) )
    console.log(arrOrderedItem,"sum")
 }
 
}
)
} 
orderList();
