'use trict';
const restaurant = {
    name: 'VietNam Food',
    location: 'Chu Phan, Me Linh, Ha Noi',
    categories: ['Mon Viet ', 'Tiem Banh Pizza', 'An Chay', 'Huu Co'],
    starterMenu: ['Salad', 'Khoai Tay Chien', 'Nuoc Ngot'],
    mainMenu: ['Com Tam', 'Pho Bo', 'Banh Xeo'],
    oder: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(arr);

let [main, , secondary] = restaurant.categories;
// - dau " , " se bo qua phan tu
// => Mon Viet, An Chay
console.log(main, secondary);

// ==== Switching variables ====
// const temp = main; // - bien tam
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// => An Chay, Mon Viet
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.oder(2,0));
// => Nuoc Ngot, Com Tam
const [starter, mainCouser] = restaurant.oder(2,0);
console.log(starter, mainCouser);

const nested = [2,4,[5,6]];

const [i, , [j, k]] = nested;
console.log(i , j ,k);

// default values

const [p = 1,q = 1,r = 1] = [8 , 9];
console.log(p,q,r);
