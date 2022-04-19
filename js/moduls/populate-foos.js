

export function creatProductListEl(item, addToCartFoo) {
    const $temp = $(`<div class="item">
        <img src="./images/${item.img}" alt="" width="auto" height="50">
            <div class="name">${item.name}</div>
            <div class="price">${item.price} $</div>
            <input type="number" value="1" class="amount">
                <input type="button" value="Add" class="add-button">
    </div>`)
    const amount = $temp.find('input.amount')
    $temp.find('input.add-button').click(() => addToCartFoo({name: item.name,
                                                             amount: +amount.val(),
                                                             price: item.price * +amount.val(),
                                                             unit: item.unit
                                                            }));
    return $temp
}

export function creatCartEl(toCartItemObj, delFoo) {
    const $temp = $(`
            <div id="cart-num-${toCartItemObj.itemId}" class="cart-item">
                <div>${toCartItemObj.name} | ${toCartItemObj.amount} ${toCartItemObj.unit} | ${toCartItemObj.price} $</div>
                <input type="button" value="delete" class="delete">
            </div>
                    `);
    $temp.find('input.delete').click(()=> delFoo(toCartItemObj.itemId))
    return $temp

}

export function creatSubmitEl(total, reload) {
    const temp = $(`<div id="submit-massage">
                <p>Your order send successfully!,<br>Total Price: ${total} $</p>
                <input type="button" value="To make another order">
                </div>`)
    temp.find('input:button').click(() => reload())
    return temp
}
