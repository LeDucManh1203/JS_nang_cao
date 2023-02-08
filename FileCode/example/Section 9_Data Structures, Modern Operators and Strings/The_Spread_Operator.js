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
    oderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

};

// cách bình thường
 const arr = [6,7,8];
 const badNewArr = [1,2,3, arr[0], arr[1], arr[2] ];
 console.log(badNewArr);
 // cách ES6
 const newArray = [1,2,3, ...arr];
 console.log(newArray);
// ví dụ
const newMenu = [...restaurant.mainMenu, 'Bun Cha'];
console.log(newMenu);
// coppy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// iterables: arrays, strings, maps, sets. NOT objects
const str = 'VietNam';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
