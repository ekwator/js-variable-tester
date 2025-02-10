const newObjNullNull = null;
const newObjNull = {};
const newObjNotNull = { key: 1 };
const newArrNull = [];
const newArrNotNull = [1, 2, 3];
const newStringNull = "";
const newStringNotNull = "abc";
const newNumber = 10;
const newBool = true;
const newUndef = undefined;
const newSymbolNull = Symbol('test');
const newSymbolNotNull = Symbol('test');
const newBigInt = BigInt(9007199254740991);
const newNaN = NaN;
const newInfinity = Infinity;
const newRegExp = /test/;
const newDate = new Date();
const newError = new Error('test');
const newFiniteNumber = Number.MAX_VALUE;
const ConstructorFunc = function ConstructorFunc() { 
    this.prop = 1; 
};
const arrowFunc = () => {};
const regularFunc = function() {  // анонимная функция без this
    return 1;
};
const asyncFunc = async () => {};
const generatorFunc = function* () {};
class TestClass {}

function itsConstructorFunc(param) {
    try {
        // Отладочный вывод
        console.log("=== Testing ConstructorFunc ===");
        console.log('typeof function:', typeof param === 'function');
        console.log('starts with function:', param.toString().startsWith('function'));
        console.log('not generator:', !param.toString().includes('function*'));
        console.log('not arrow:', !param.toString().includes('=>'));
        console.log('not async:', !param.toString().includes('async'));
        console.log('not class:', !param.toString().includes('class'));
        console.log('has prototype:', param.prototype);
        console.log('has this:', param.toString().includes('this.'));
        console.log('no return:', !param.toString().includes('return'));
        console.log('toString:', param.toString());

        return typeof param === 'function' &&
               param.toString().startsWith('function') &&
               !param.toString().includes('function*') &&
               !param.toString().includes('=>') &&
               !param.toString().includes('async') &&
               !param.toString().includes('class') &&
               param.prototype &&
               param.toString().includes('this.') &&
               !param.toString().includes('return');
    } catch (e) {
        return false;
    }
}

// Давайте добавим отладочный вывод для проверки:
console.log("========itsConstructorFunc=========");
console.log(itsConstructorFunc(newObjNullNull));   // false
console.log(itsConstructorFunc(newObjNull));       // false
console.log(itsConstructorFunc(newObjNotNull));    // false
console.log(itsConstructorFunc(newArrNull));       // false
console.log(itsConstructorFunc(newArrNotNull));    // false
console.log(itsConstructorFunc(newStringNull));    // false
console.log(itsConstructorFunc(newStringNotNull)); // false
console.log(itsConstructorFunc(newNumber));        // false
console.log(itsConstructorFunc(newBool));          // false
console.log(itsConstructorFunc(newUndef));         // false
console.log(itsConstructorFunc(newSymbolNull));    // false
console.log(itsConstructorFunc(newSymbolNotNull)); // false
console.log(itsConstructorFunc(newBigInt));        // false
console.log(itsConstructorFunc(newNaN));           // false
console.log(itsConstructorFunc(newInfinity));      // false
console.log(itsConstructorFunc(newRegExp));        // false
console.log(itsConstructorFunc(newDate));          // false
console.log(itsConstructorFunc(newError));         // false
console.log(itsConstructorFunc(newFiniteNumber));  // false
console.log(itsConstructorFunc(ConstructorFunc));  // true
console.log(itsConstructorFunc(arrowFunc));        // false
console.log(itsConstructorFunc(regularFunc));      // false
console.log(itsConstructorFunc(asyncFunc));        // false
console.log(itsConstructorFunc(generatorFunc));    // false
console.log(itsConstructorFunc(TestClass));        // false