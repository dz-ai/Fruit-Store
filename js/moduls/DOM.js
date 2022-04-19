
let $shoppingCart,
    $itemList,
    $total,
    $main;

let addToCartButtonFoo,
    delFooVar;

let id = 0;

//*********************** reg functions
export function onBodyLoad(funAdd, funDel, fun) {
    $(document).ready();
    registerFoo()
    fooReg(funAdd, funDel)
    fun();
}

function registerFoo() {
    $itemList = $('#items-list');
    $shoppingCart = $('#shopping-list');
    $total = $('#total');
    $main = $('main');
}

function fooReg(funAdd, funDel) {
    addToCartButtonFoo = funAdd;
    delFooVar = funDel
}
//***********************

// operating functions
export function populateProductList(productList, elCreatFun) {
    productList.map(item => {
        $itemList.append(elCreatFun(item, functionFactory))
    })
}

export function populateCart(creatCartEl) {
   $shoppingCart.append(creatCartEl)
    id++;
}

function functionFactory(toCartItemObj) {
    toCartItemObj.itemId = id;
    addToCartButtonFoo(toCartItemObj)
}

export function unPopulateCart(num) {
    $(`#cart-num-${num}`).remove()
}

export function showTotalPrice(sum) {
    $total.empty()
    $total.append(sum)
}

export function onSubmit(cart, total, creatSubmitEl) {
     $('input:submit').click(() => {
         submitMassage(total(),creatSubmitEl)
         submitRequest(cart, total)
     })
}

function submitMassage(total, creatSubmitEl) {
    if (total) {
        $main.empty()
        $main.append(creatSubmitEl(total, reload))
    }

}

export function submitRequest(cart, total) {

    console.log(JSON.stringify(cart) + 'total: ' + total())
}

function reload() {
    location.reload()
}














