'use trict';
const nhahang = {
    ten: 'VietNam Food',
    vitri: 'Chu Phan, Me Linh, Ha Noi',
    theloai: ['Mon Viet ', 'Tiem Banh Pizza', 'An Chay', 'Huu Co'],
    monkhaivi: ['Salad', 'Khoai Tay Chien', 'Nuoc Ngot'],
    monchinh: ['Com Tam', 'Pho Bo', 'Banh Xeo'],
    goi: function (khaiviIndex, chinhIndex) {
        return [this.monkhaivi[khaiviIndex], this.monchinh[chinhIndex]];
    },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(arr);

let [main, , secondary] = nhahang.theloai;
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

console.log(nhahang.goi(2,0));
// => Nuoc Ngot, Com Tam
const [starter, mainCouser] = nhahang.goi(2,0);
console.log(starter, mainCouser);

