// В функциях вроде isEmptyObject стоит явно исключать null через obj !== null.
// смотри isEmptyObjectNotNull
// Если тебе нужно явно показать, что проверяется null, то используй obj !== null.
// Если ты хочешь короткую и лаконичную проверку, которая работает для null, undefined и других "ложных" значений — используй obj &&.
function isEmptyObject(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length === 0;
}
function isEmptyObjectNotNull(obj) {
    return obj !== null && typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length === 0;
}

function isEmptyObjectIsArray(obj) {
    return obj !== null && typeof obj === 'object' && Array.isArray(obj) && Object.keys(obj).length === 0;
}


let newObj = null;
let arr = [];
let arr2 = [1,2,3];
let newObj2 = { key: 1 };
let newObj3 = {};
console.log("========isEmptyObject=========");
console.log(isEmptyObject({}));       // true
console.log(isEmptyObject(newObj));   // null
console.log(isEmptyObject([]));       // false
console.log(isEmptyObject(arr2));       // false
console.log(isEmptyObject({ key: 1 })); // false
console.log("=================");
console.log(Object.setPrototypeOf( {}, [] )); // Array {}
console.log(Object.setPrototypeOf( {}, {} )); // {}
console.log(Object.setPrototypeOf( {}, null )); // [Object: null prototype] {}
console.log("=================");
console.log(typeof newObj === 'object'); // true для null (вот тут-то и ошибка!)
console.log("========isEmptyObjectNotNull=========");
console.log(isEmptyObjectNotNull({}));       // true
console.log(isEmptyObjectNotNull(newObj));   // false
console.log(isEmptyObjectNotNull([]));       // false
console.log(isEmptyObjectNotNull(arr2));       // false
console.log(isEmptyObjectNotNull({ key: 1 })); // false
console.log("========isEmptyObjectIsArray=========");
console.log(isEmptyObjectIsArray({}));       // false
console.log(isEmptyObjectIsArray(newObj));   // false
console.log(isEmptyObjectIsArray([]));       // true
console.log(isEmptyObjectIsArray(arr2));       // false
console.log(isEmptyObjectIsArray({ key: 1 })); // false
console.log("=========newObj === null========");
console.log(newObj === null);         // для точных проверок.
console.log("=========newObj == null========");
console.log(newObj == null);          // если нужно проверить на null или undefined одновременно.

// // Так как тебе нужно, чтобы функция возвращала true только для null, 
// // достаточно использовать строгое сравнение obj === null. 
// // Это самое простое и эффективное решение.

function isEmptyObject2(obj) {
    return obj === null;
}
console.log("========isEmptyObject2=========");
console.log(isEmptyObject2(newObj));    // true
console.log(isEmptyObject2(arr));       // false
console.log(isEmptyObject2(newObj2));   // false
console.log(isEmptyObject2(newObj3));   // false

