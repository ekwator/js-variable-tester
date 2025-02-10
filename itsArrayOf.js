const newArrNull = [];
const newArrNotNull = [1, 2, 3];
const numberArr = [1, 2, 3];
const stringArr = ['a', 'b', 'c'];
const mixedArr = [1, 'a', true, null];
const objArr = [{}, { a: 1 }];
const nestedArr = [[1, 2], [3, 4]];
const sparseArrNull = new Array(3);
const sparseArrNotNull = new Array(3);
sparseArrNotNull.push('str');
const sparseArrNumber = new Array(3);
sparseArrNumber.push(4);
const typedArr = new Int8Array([1, 2, 3]);
const arrayBuffer = new ArrayBuffer(8);
const setArr = new Set([1, 2, 3]);
const mapArr = new Map([['a', 1], ['b', 2]]);

//===============================

function itsArrNull(param) {
    return Array.isArray(param) && 
           (param.length === 0 || 
           (param.length > 0 && Object.keys(param).length === 0));
}
console.log("========itsArrNull=========");
console.log(itsArrNull(newArrNull));       // true
console.log(itsArrNull(newArrNotNull));    // false
console.log(itsArrNull(numberArr));        // false
console.log(itsArrNull(stringArr));        // false
console.log(itsArrNull(mixedArr));         // false
console.log(itsArrNull(objArr));           // false
console.log(itsArrNull(nestedArr));        // false
console.log(itsArrNull(sparseArrNull));    // true
console.log(itsArrNull(sparseArrNotNull)); // false
console.log(itsArrNull(sparseArrNumber));  // false
console.log(itsArrNull(typedArr));         // false
console.log(itsArrNull(arrayBuffer));      // false
console.log(itsArrNull(setArr));           // false
console.log(itsArrNull(mapArr));           // false

function itsArrNotNull(param) {
    return (Array.isArray(param) && param.length > 0 && param.some(item => item !== undefined)) || 
           (ArrayBuffer.isView(param) && !(param instanceof DataView) && param.length > 0) ||
           (param instanceof Set && param.size > 0) ||
           (param instanceof Map && param.size > 0) ||
           (param instanceof ArrayBuffer && param.byteLength > 0);
}
console.log("========itsArrNotNull=========");
console.log(itsArrNotNull(newArrNull));       // false
console.log(itsArrNotNull(newArrNotNull));    // true
console.log(itsArrNotNull(numberArr));        // true
console.log(itsArrNotNull(stringArr));        // true
console.log(itsArrNotNull(mixedArr));         // true
console.log(itsArrNotNull(objArr));           // true
console.log(itsArrNotNull(nestedArr));        // true
console.log(itsArrNotNull(sparseArrNull));    // false
console.log(itsArrNotNull(sparseArrNotNull)); // true
console.log(itsArrNotNull(sparseArrNumber));  // true
console.log(itsArrNotNull(typedArr));         // true
console.log(itsArrNotNull(arrayBuffer));      // true
console.log(itsArrNotNull(setArr));           // true
console.log(itsArrNotNull(mapArr));           // true

function itsNumberArray(param) {
    return Array.isArray(param) && 
           param.length > 0 && 
           param.filter(item => item !== undefined).length > 0 &&
           param.filter(item => item !== undefined).every(item => typeof item === 'number');
}
console.log("========itsNumberArray=========");
console.log(itsNumberArray(newArrNull));       // false
console.log(itsNumberArray(newArrNotNull));    // true
console.log(itsNumberArray(numberArr));        // true
console.log(itsNumberArray(stringArr));        // false
console.log(itsNumberArray(mixedArr));         // false
console.log(itsNumberArray(objArr));           // false
console.log(itsNumberArray(nestedArr));        // false
console.log(itsNumberArray(sparseArrNull));    // false
console.log(itsNumberArray(sparseArrNotNull)); // false
console.log(itsNumberArray(sparseArrNumber));  // true
console.log(itsNumberArray(typedArr));         // false
console.log(itsNumberArray(arrayBuffer));      // false
console.log(itsNumberArray(setArr));           // false
console.log(itsNumberArray(mapArr));           // false

function itsStringArray(param) {
    return Array.isArray(param) && 
           param.length > 0 && 
           param.filter(item => item !== undefined).length > 0 &&
           param.filter(item => item !== undefined).every(item => typeof item === 'string');
}

console.log("========itsStringArray=========");
console.log(itsStringArray(newArrNull));       // false
console.log(itsStringArray(newArrNotNull));    // false
console.log(itsStringArray(numberArr));        // false
console.log(itsStringArray(stringArr));        // true
console.log(itsStringArray(mixedArr));         // false
console.log(itsStringArray(objArr));           // false
console.log(itsStringArray(nestedArr));        // false
console.log(itsStringArray(sparseArrNull));    // false
console.log(itsStringArray(sparseArrNotNull)); // true
console.log(itsStringArray(sparseArrNumber));  // false
console.log(itsStringArray(typedArr));         // false
console.log(itsStringArray(arrayBuffer));      // false
console.log(itsStringArray(setArr));           // false
console.log(itsStringArray(mapArr));           // false

function isMixedArray(param) {
    return Array.isArray(param) && 
           param.length > 0 && 
           param.some(item => typeof item !== typeof param[0]);
}
console.log("========isMixedArray=========");
console.log(isMixedArray(newArrNull));       // false
console.log(isMixedArray(newArrNotNull));    // false
console.log(isMixedArray(numberArr));        // false
console.log(isMixedArray(stringArr));        // false
console.log(isMixedArray(mixedArr));         // true
console.log(isMixedArray(objArr));           // false
console.log(isMixedArray(nestedArr));        // false
console.log(isMixedArray(sparseArrNull));    // false
console.log(isMixedArray(sparseArrNotNull)); // true
console.log(isMixedArray(sparseArrNumber));  // true
console.log(isMixedArray(typedArr));         // false
console.log(isMixedArray(arrayBuffer));      // false
console.log(isMixedArray(setArr));           // false
console.log(isMixedArray(mapArr));           // false

function isObjectArray(param) {
    return Array.isArray(param) && 
           param.length > 0 && 
           param.filter(item => item !== undefined).length > 0 &&
           param.filter(item => item !== undefined)
               .every(item => typeof item === 'object' && 
                            item !== null && 
                            !Array.isArray(item));
}

console.log("========isObjectArray=========");
console.log(isObjectArray(newArrNull));       // false
console.log(isObjectArray(newArrNotNull));    // false
console.log(isObjectArray(numberArr));        // false
console.log(isObjectArray(stringArr));        // false
console.log(isObjectArray(mixedArr));         // false
console.log(isObjectArray(objArr));           // true
console.log(isObjectArray(nestedArr));        // false
console.log(isObjectArray(sparseArrNull));    // false
console.log(isObjectArray(sparseArrNotNull)); // false
console.log(isObjectArray(sparseArrNumber));  // false
console.log(isObjectArray(typedArr));         // false
console.log(isObjectArray(arrayBuffer));      // false
console.log(isObjectArray(setArr));           // false
console.log(isObjectArray(mapArr));           // false

function itsNestedArr(param) {
    return Array.isArray(param) && 
           param.length > 0 && 
           param.filter(item => item !== undefined).length > 0 &&
           param.filter(item => item !== undefined)
               .every(item => Array.isArray(item));
}

// Тесты
console.log("========itsNestedArr=========");
console.log(itsNestedArr(newArrNull));       // false
console.log(itsNestedArr(newArrNotNull));    // false
console.log(itsNestedArr(numberArr));        // false
console.log(itsNestedArr(stringArr));        // false
console.log(itsNestedArr(mixedArr));         // false
console.log(itsNestedArr(objArr));           // false
console.log(itsNestedArr(nestedArr));        // true
console.log(itsNestedArr(sparseArrNull));    // false
console.log(itsNestedArr(sparseArrNotNull)); // false
console.log(itsNestedArr(sparseArrNumber));  // false
console.log(itsNestedArr(typedArr));         // false
console.log(itsNestedArr(arrayBuffer));      // false
console.log(itsNestedArr(setArr));           // false
console.log(itsNestedArr(mapArr));           // false

function itsSparseArrNull(param) {
    return Array.isArray(param) && 
           param.length > 0 && 
           param.filter(item => item !== undefined).length === 0;    
}
console.log("========itsSparseArrNull=========");
console.log(itsSparseArrNull(newArrNull));       // false
console.log(itsSparseArrNull(newArrNotNull));    // false
console.log(itsSparseArrNull(numberArr));        // false
console.log(itsSparseArrNull(stringArr));        // false
console.log(itsSparseArrNull(mixedArr));         // false
console.log(itsSparseArrNull(objArr));           // false
console.log(itsSparseArrNull(nestedArr));        // false
console.log(itsSparseArrNull(sparseArrNull));    // true
console.log(itsSparseArrNull(sparseArrNotNull)); // false
console.log(itsSparseArrNull(sparseArrNumber));  // false
console.log(itsSparseArrNull(typedArr));         // false
console.log(itsSparseArrNull(arrayBuffer));      // false
console.log(itsSparseArrNull(setArr));           // false
console.log(itsSparseArrNull(mapArr));           // false

function itsSparseArrNotNull(param) {
    return Array.isArray(param) &&
        param.length > 0 &&
        param.filter(item => item !== undefined).length > 0 &&
        param.length > param.filter(item => item !== undefined).length;

}
console.log("========itsSparseArrNotNull=========");
console.log(itsSparseArrNotNull(newArrNull));       // false
console.log(itsSparseArrNotNull(newArrNotNull));    // false
console.log(itsSparseArrNotNull(numberArr));        // false
console.log(itsSparseArrNotNull(stringArr));        // false
console.log(itsSparseArrNotNull(mixedArr));         // false
console.log(itsSparseArrNotNull(objArr));           // false
console.log(itsSparseArrNotNull(nestedArr));        // false
console.log(itsSparseArrNotNull(sparseArrNull));    // false
console.log(itsSparseArrNotNull(sparseArrNotNull)); // true
console.log(itsSparseArrNotNull(sparseArrNumber));  // true
console.log(itsSparseArrNotNull(typedArr));         // false
console.log(itsSparseArrNotNull(arrayBuffer));      // false
console.log(itsSparseArrNotNull(setArr));           // false
console.log(itsSparseArrNotNull(mapArr));           // false

function itSsparseArrNumber(param) {
    return Array.isArray(param) &&
        param.length > 0 &&
        param.filter(item => item !== undefined).length > 0 &&
        param.length > param.filter(item => item !== undefined).length &&
        param.filter(item => item !== undefined).every(item => typeof item === 'number');
}
console.log("========itSsparseArrNumber=========");
console.log(itSsparseArrNumber(newArrNull));       // false
console.log(itSsparseArrNumber(newArrNotNull));    // false
console.log(itSsparseArrNumber(numberArr));        // false
console.log(itSsparseArrNumber(stringArr));        // false
console.log(itSsparseArrNumber(mixedArr));         // false
console.log(itSsparseArrNumber(objArr));           // false
console.log(itSsparseArrNumber(nestedArr));        // false
console.log(itSsparseArrNumber(sparseArrNull));    // false
console.log(itSsparseArrNumber(sparseArrNotNull)); // false
console.log(itSsparseArrNumber(sparseArrNumber));  // true
console.log(itSsparseArrNumber(typedArr));         // false
console.log(itSsparseArrNumber(arrayBuffer));      // false
console.log(itSsparseArrNumber(setArr));           // false
console.log(itSsparseArrNumber(mapArr));           // false

function itsTypedArray(param) {
    return ArrayBuffer.isView(param) && !(param instanceof DataView);
}
console.log("========itsTypedArray=========");
console.log(itsTypedArray(newArrNull));       // false
console.log(itsTypedArray(newArrNotNull));    // false
console.log(itsTypedArray(numberArr));        // false
console.log(itsTypedArray(stringArr));        // false
console.log(itsTypedArray(mixedArr));         // false
console.log(itsTypedArray(objArr));           // false
console.log(itsTypedArray(nestedArr));        // false
console.log(itsTypedArray(sparseArrNull));    // false
console.log(itsTypedArray(sparseArrNotNull)); // false
console.log(itsTypedArray(sparseArrNumber));  // false
console.log(itsTypedArray(typedArr));         // true
console.log(itsTypedArray(arrayBuffer));      // false
console.log(itsTypedArray(setArr));           // false
console.log(itsTypedArray(mapArr));           // false

function itsArrayBuffer(param) {
    return param instanceof ArrayBuffer;
}
console.log("========itsArrayBuffer=========");
console.log(itsArrayBuffer(newArrNull));       // false
console.log(itsArrayBuffer(newArrNotNull));    // false
console.log(itsArrayBuffer(numberArr));        // false
console.log(itsArrayBuffer(stringArr));        // false
console.log(itsArrayBuffer(mixedArr));         // false
console.log(itsArrayBuffer(objArr));           // false
console.log(itsArrayBuffer(nestedArr));        // false
console.log(itsArrayBuffer(sparseArrNull));    // false
console.log(itsArrayBuffer(sparseArrNotNull)); // false
console.log(itsArrayBuffer(sparseArrNumber));  // false
console.log(itsArrayBuffer(typedArr));         // false
console.log(itsArrayBuffer(arrayBuffer));      // true
console.log(itsArrayBuffer(setArr));           // false
console.log(itsArrayBuffer(mapArr));           // false

function itsSet(param) {
    return param instanceof Set;
}
console.log("========itsSet=========");
console.log(itsSet(newArrNull));       // false
console.log(itsSet(newArrNotNull));    // false
console.log(itsSet(numberArr));        // false
console.log(itsSet(stringArr));        // false
console.log(itsSet(mixedArr));         // false
console.log(itsSet(objArr));           // false
console.log(itsSet(nestedArr));        // false
console.log(itsSet(sparseArrNull));    // false
console.log(itsSet(sparseArrNotNull)); // false
console.log(itsSet(sparseArrNumber));  // false
console.log(itsSet(typedArr));         // false
console.log(itsSet(arrayBuffer));      // false
console.log(itsSet(setArr));           // true
console.log(itsSet(mapArr));           // false

function itsMap(param) {
    return param instanceof Map;
}
console.log("========itsMap=========");
console.log(itsMap(newArrNull));       // false
console.log(itsMap(newArrNotNull));    // false
console.log(itsMap(numberArr));        // false
console.log(itsMap(stringArr));        // false
console.log(itsMap(mixedArr));         // false
console.log(itsMap(objArr));           // false
console.log(itsMap(nestedArr));        // false
console.log(itsMap(sparseArrNull));    // false
console.log(itsMap(sparseArrNotNull)); // false
console.log(itsMap(sparseArrNumber));  // false
console.log(itsMap(typedArr));         // false
console.log(itsMap(arrayBuffer));      // false
console.log(itsMap(setArr));           // false
console.log(itsMap(mapArr));           // true

module.exports = { isMixedArray, isObjectArray, itSsparseArrNumber, itsArrNotNull, itsArrNul, itsArrayBuffer, itsMap, itsNestedArr, itsNumberArray, itsSet, itsSparseArrNotNull, itsSparseArrNull, itsStringArray, itsTypedArray };
