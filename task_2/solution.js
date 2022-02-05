function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
        min = 700;
    let shippingPrice = shipping; // стоимость доставки
        shipping = 200;

    // Задание №2.1. Рассчитать доставку
    
    let shippingSum;
    if(productsSum == 0) {
        shippingPrice = 0;
    } 
    if(productsSum >= freeShippingMinSum) {
        shippingPrice = 0;
    }
    else if (productsSum > 0 && productsSum < freeShippingMinSum) {
        shippingSum = shippingPrice;
    }

    // Конец решения задания №2.1.

    return shippingPrice;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
        min = 700;
    let discountPart = discount; // величина скидки в процентах
        discount = 10;

    // Задание №2.2. Рассчитать скидку
    
    let discountPrice;
    if(productsSum >= discountMinSum) {
        discountPrice = discountPart / 100 * productsSum;
    }
    else discountPrice = 0;

    // Конец решения задания №2.2.

    return discountPrice;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum;
    totalSum = productsSum - discountSum;

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = totalSum + shippingSum;

    let freeShipping;
    freeShipping = !shippingSum;

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
