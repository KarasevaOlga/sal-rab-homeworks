function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    item = {
        id: 1, 
        title:'Пицца', 
        count: 5, 
        price: '500.00'};
  
    let itemCountText = product.count + ` × ` + product.price + ` ₽ = ` + product.count * product.price + ` ₽`;

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
