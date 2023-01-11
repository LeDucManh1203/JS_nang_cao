'use trict';
const restaurant = {
    name: 'VietNam Food',
    location: 'Chu Phan, Me Linh, Ha Noi',
    categories: ['Banh ', 'Pho', 'Com'],
    starterMenu: ['Salad', 'Khoai Tay Chien', 'Nuoc Ngot'],
    mainMenu: ['Com Tam', 'Pho Bo', 'Banh Xeo'],
}
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);