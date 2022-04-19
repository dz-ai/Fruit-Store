import {onBodyLoad, populateProductList, populateCart, unPopulateCart, showTotalPrice, onSubmit} from "./moduls/DOM.js";
import {fruitList} from "./moduls/fruit-list.js";
import {creatProductListEl, creatCartEl, creatSubmitEl} from "./moduls/populate-foos.js";

const cart  = [];
let total   = 0;

const addToCartButton = (toCartItemObj) => {
    cart.push(toCartItemObj);
    populateCart(creatCartEl(toCartItemObj, delFoo));
    totalFoo();
    showTotalPrice(total);
    console.log(cart)
}

const delFoo = (id) => {
    total = 0;
    unPopulateCart(id);
    cart.find(item => {
        item.itemId === id ? item.price = 0 : ':)';
    })
    totalFoo();
    showTotalPrice(total);
}

const totalFoo = () => {
    total = cart.reduce((acc, curr)=> acc + curr.price , 0);
    return total
}

onSubmit(cart, totalFoo, creatSubmitEl)

onBodyLoad(addToCartButton, delFoo, () => {
    populateProductList(fruitList, creatProductListEl)
})


