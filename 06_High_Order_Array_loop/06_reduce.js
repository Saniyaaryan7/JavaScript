// Shopping cart containing courses and their prices
const shoppingCart = [
    {
        itemName : "Js course",
        price : 3999
    },

    {
        itemName : "Data Science",
        price : 4999
    },

    {
        itemName : "Rust",
        price : 2999
    },
]
// reduce() adds all prices and returns the total amount
const priceTopay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceTopay);