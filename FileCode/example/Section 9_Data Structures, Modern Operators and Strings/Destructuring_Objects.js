'use trict';
const restaurant = {
    name: 'VietNam Food',
    location: 'Chu Phan, Me Linh, Ha Noi',
    categories: ['Mon Viet ', 'Tiem Banh Pizza', 'An Chay', 'Huu Co'],
    starterMenu: ['Salad', 'Khoai Tay Chien', 'Nuoc Ngot'],
    mainMenu: ['Com Tam', 'Pho Bo', 'Banh Xeo'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {  
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    oder: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    oderDelivery: function ({starterIndex, mainIndex, time, address}) {
        console.log(`oder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
    },
};
restaurant.oderDelivery({
    time: '22:30',
    address: 'HN',
    mainIndex: 2,
    starterIndex: 2,
});

// const {name, openingHours, categories} = restaurant;

// console.log(name, openingHours, categories);

// có thể đặt thành tên biến khác 

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// định nghĩa lại trong trường hợp tên giá trị đó không tồn tại, khi API gửi về
// menu ở đây chưa có 
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables - Hoán đổi

// let a = 111;
// let b = 999;
// const obj = { a: 1, b: 2, c: 3 };
// ({a,b} = obj);
// console.log(a, b);

// // Nested obj

// const {
//     fri: {open, close},
// } = hours; // được đổi ở dòng 35
// console.log(open,close);