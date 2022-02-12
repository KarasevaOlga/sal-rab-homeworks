

function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order: {}};
    data.client = name + ' ' + phone;

    data.order.address = "ул. " + address.street + ", дом " + address.house + ", " + address.entrance + " подъезд, " + address.floor + " этаж, кв " + address.flat;
    data.order.sum = sum;

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i++) {
        let good = {};
        good.title = goods[i].title;
        good.count = goods[i].count;
        data.goods.push(good);
    }

    let jsonData = JSON.stringify({data});

    return jsonData;
}
