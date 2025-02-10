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
class TestClass {
    constructor() {
        this.prop = 1;
    }
    
    method() {
        return this.prop;
    }
    
    static staticMethod() {
        return 'static';
    }
    
    get getter() {
        return this.prop;
    }
    
    set setter(value) {
        this.prop = value;
    }
}
class EmptyClass {}
class ExtendedClass extends TestClass {}

//====================================================

function itsObjNullNull(param) {
    return param === null;
}
console.log("========itsObjNullNull=========");
console.log(itsObjNullNull(newObjNullNull));   // true
console.log(itsObjNullNull(newObjNull));       // false
console.log(itsObjNullNull(newObjNotNull));    // false
console.log(itsObjNullNull(newArrNull));       // false
console.log(itsObjNullNull(newArrNotNull));    // false
console.log(itsObjNullNull(newStringNull));    // false
console.log(itsObjNullNull(newStringNotNull)); // false
console.log(itsObjNullNull(newNumber));        // false
console.log(itsObjNullNull(newBool));          // false
console.log(itsObjNullNull(newUndef));         // false
console.log(itsObjNullNull(newSymbolNull));    // false
console.log(itsObjNullNull(newSymbolNotNull)); // false
console.log(itsObjNullNull(newBigInt));        // false
console.log(itsObjNullNull(newNaN));           // false
console.log(itsObjNullNull(newInfinity));      // false
console.log(itsObjNullNull(newRegExp));        // false
console.log(itsObjNullNull(newDate));          // false
console.log(itsObjNullNull(newError));         // false
console.log(itsObjNullNull(newFiniteNumber));  // false
console.log(itsObjNullNull(ConstructorFunc));  // false
console.log(itsObjNullNull(arrowFunc));        // false
console.log(itsObjNullNull(regularFunc));      // false
console.log(itsObjNullNull(asyncFunc));        // false
console.log(itsObjNullNull(generatorFunc));    // false
console.log(itsObjNullNull(TestClass));        // false

function itsObjNull(param) {
    return param !== null &&
           typeof param === 'object' &&
           !Array.isArray(param) &&
           !(param instanceof RegExp) &&
           !(param instanceof Date) &&
           !(param instanceof Error) &&
           Object.keys(param).length === 0;
}
console.log("========itsObjNull=========");
console.log(itsObjNull(newObjNullNull));   // false
console.log(itsObjNull(newObjNull));       // true
console.log(itsObjNull(newObjNotNull));    // false
console.log(itsObjNull(newArrNull));       // false
console.log(itsObjNull(newArrNotNull));    // false
console.log(itsObjNull(newStringNull));    // false
console.log(itsObjNull(newStringNotNull)); // false
console.log(itsObjNull(newNumber));        // false
console.log(itsObjNull(newBool));          // false
console.log(itsObjNull(newUndef));         // false
console.log(itsObjNull(newSymbolNull));    // false
console.log(itsObjNull(newSymbolNotNull)); // false
console.log(itsObjNull(newBigInt));        // false
console.log(itsObjNull(newNaN));           // false
console.log(itsObjNull(newInfinity));      // false
console.log(itsObjNull(newRegExp));        // false специальные типов объектов
console.log(itsObjNull(newDate));          // false без собственных 
console.log(itsObjNull(newError));         // false перечисляемых свойств
console.log(itsObjNull(newFiniteNumber));  // false
console.log(itsObjNull(ConstructorFunc));  // false
console.log(itsObjNull(arrowFunc));        // false
console.log(itsObjNull(regularFunc));      // false
console.log(itsObjNull(asyncFunc));        // false
console.log(itsObjNull(generatorFunc));    // false
console.log(itsObjNull(TestClass));        // false


function itsObjNotNull(param) {
    return param !== null &&
        typeof param === 'object' &&
        !Array.isArray(param) &&
        Object.keys(param).length > 0;
}
console.log("========itsObjNotNull=========");
console.log(itsObjNotNull(newObjNullNull));   // false
console.log(itsObjNotNull(newObjNull));       // false
console.log(itsObjNotNull(newObjNotNull));    // true
console.log(itsObjNotNull(newArrNull));       // false
console.log(itsObjNotNull(newArrNotNull));    // false
console.log(itsObjNotNull(newStringNull));    // false
console.log(itsObjNotNull(newStringNotNull)); // false
console.log(itsObjNotNull(newNumber));        // false
console.log(itsObjNotNull(newBool));          // false
console.log(itsObjNotNull(newUndef));         // false
console.log(itsObjNotNull(newSymbolNull));    // false
console.log(itsObjNotNull(newSymbolNotNull)); // false
console.log(itsObjNotNull(newBigInt));        // false
console.log(itsObjNotNull(newNaN));           // false
console.log(itsObjNotNull(newInfinity));      // false
console.log(itsObjNotNull(newRegExp));        // false
console.log(itsObjNotNull(newDate));          // false
console.log(itsObjNotNull(newError));         // false
console.log(itsObjNotNull(newFiniteNumber));  // false
console.log(itsObjNotNull(ConstructorFunc));  // false
console.log(itsObjNotNull(arrowFunc));        // false
console.log(itsObjNotNull(regularFunc));      // false
console.log(itsObjNotNull(asyncFunc));        // false
console.log(itsObjNotNull(generatorFunc));    // false
console.log(itsObjNotNull(TestClass));        // false

function itsStringNull(param) {
    return typeof param === 'string' && param.length === 0;
}
console.log("========itsStringNull=========");
console.log(itsStringNull(newObjNullNull));   // false
console.log(itsStringNull(newObjNull));       // false
console.log(itsStringNull(newObjNotNull));    // false
console.log(itsStringNull(newArrNull));       // false
console.log(itsStringNull(newArrNotNull));    // false
console.log(itsStringNull(newStringNull));    // true
console.log(itsStringNull(newStringNotNull)); // false
console.log(itsStringNull(newNumber));        // false
console.log(itsStringNull(newBool));          // false
console.log(itsStringNull(newUndef));         // false
console.log(itsStringNull(newSymbolNull));    // false
console.log(itsStringNull(newSymbolNotNull)); // false
console.log(itsStringNull(newBigInt));        // false
console.log(itsStringNull(newNaN));           // false
console.log(itsStringNull(newInfinity));      // false
console.log(itsStringNull(newRegExp));        // false
console.log(itsStringNull(newDate));          // false
console.log(itsStringNull(newError));         // false
console.log(itsStringNull(newFiniteNumber));  // false
console.log(itsStringNull(ConstructorFunc));  // false
console.log(itsStringNull(arrowFunc));        // false
console.log(itsStringNull(regularFunc));      // false
console.log(itsStringNull(asyncFunc));        // false
console.log(itsStringNull(generatorFunc));    // false
console.log(itsStringNull(TestClass));        // false

function itsStringNotNull(param) {
    return typeof param === 'string' && param.length > 0;
}
console.log("========itsStringNotNull=========");
console.log(itsStringNotNull(newObjNullNull));   // false
console.log(itsStringNotNull(newObjNull));       // false
console.log(itsStringNotNull(newObjNotNull));    // false
console.log(itsStringNotNull(newArrNull));       // false
console.log(itsStringNotNull(newArrNotNull));    // false
console.log(itsStringNotNull(newStringNull));    // false
console.log(itsStringNotNull(newStringNotNull)); // true
console.log(itsStringNotNull(newNumber));        // false
console.log(itsStringNotNull(newBool));          // false
console.log(itsStringNotNull(newUndef));         // false
console.log(itsStringNotNull(newSymbolNull));    // false
console.log(itsStringNotNull(newSymbolNotNull)); // false
console.log(itsStringNotNull(newBigInt));        // false
console.log(itsStringNotNull(newNaN));           // false
console.log(itsStringNotNull(newInfinity));      // false
console.log(itsStringNotNull(newRegExp));        // false
console.log(itsStringNotNull(newDate));          // false
console.log(itsStringNotNull(newError));         // false
console.log(itsStringNotNull(newFiniteNumber));  // false
console.log(itsStringNotNull(ConstructorFunc));  // false
console.log(itsStringNotNull(arrowFunc));        // false
console.log(itsStringNotNull(regularFunc));      // false
console.log(itsStringNotNull(asyncFunc));        // false
console.log(itsStringNotNull(generatorFunc));    // false
console.log(itsStringNotNull(TestClass));        // false

function itsnewNumber(param) {
    return typeof param === 'number';
}
console.log("========itsnewNumber=========");
console.log(itsnewNumber(newObjNullNull));   // false
console.log(itsnewNumber(newObjNull));       // false
console.log(itsnewNumber(newObjNotNull));    // false
console.log(itsnewNumber(newArrNull));       // false
console.log(itsnewNumber(newArrNotNull));    // false
console.log(itsnewNumber(newStringNull));    // false
console.log(itsnewNumber(newStringNotNull)); // false
console.log(itsnewNumber(newNumber));        // true
console.log(itsnewNumber(newBool));          // false
console.log(itsnewNumber(newUndef));         // false
console.log(itsnewNumber(newSymbolNull));    // false
console.log(itsnewNumber(newSymbolNotNull)); // false
console.log(itsnewNumber(newBigInt));        // false
console.log(itsnewNumber(newNaN));           // false
console.log(itsnewNumber(newInfinity));      // false
console.log(itsnewNumber(newRegExp));        // false
console.log(itsnewNumber(newDate));          // false
console.log(itsnewNumber(newError));         // false
console.log(itsnewNumber(newFiniteNumber));  // false
console.log(itsnewNumber(ConstructorFunc));  // false
console.log(itsnewNumber(arrowFunc));        // false
console.log(itsnewNumber(regularFunc));      // false
console.log(itsnewNumber(asyncFunc));        // false
console.log(itsnewNumber(generatorFunc));    // false
console.log(itsnewNumber(TestClass));        // false

function itsBool(param) {
    return typeof param === 'boolean';
}
console.log("========itsBool=========");
console.log(itsBool(newObjNullNull));   // false
console.log(itsBool(newObjNull));       // false
console.log(itsBool(newObjNotNull));    // false
console.log(itsBool(newArrNull));       // false
console.log(itsBool(newArrNotNull));    // false
console.log(itsBool(newStringNull));    // false
console.log(itsBool(newStringNotNull)); // false
console.log(itsBool(newNumber));        // false
console.log(itsBool(newBool));          // true
console.log(itsBool(newUndef));         // false
console.log(itsBool(newSymbolNull));    // false
console.log(itsBool(newSymbolNotNull)); // false
console.log(itsBool(newBigInt));        // false
console.log(itsBool(newNaN));           // false
console.log(itsBool(newInfinity));      // false
console.log(itsBool(newRegExp));        // false
console.log(itsBool(newDate));          // false
console.log(itsBool(newError));         // false
console.log(itsBool(newFiniteNumber));  // false
console.log(itsBool(ConstructorFunc));  // false
console.log(itsBool(arrowFunc));        // false
console.log(itsBool(regularFunc));      // false
console.log(itsBool(asyncFunc));        // false
console.log(itsBool(generatorFunc));    // false
console.log(itsBool(TestClass));        // false

function itsnewUndef(param) {
    return typeof param === 'undefined';
}
console.log("========itsnewUndef=========");
console.log(itsnewUndef(newObjNullNull));   // false
console.log(itsnewUndef(newObjNull));       // false
console.log(itsnewUndef(newObjNotNull));    // false
console.log(itsnewUndef(newArrNull));       // false
console.log(itsnewUndef(newArrNotNull));    // false
console.log(itsnewUndef(newStringNull));    // false
console.log(itsnewUndef(newStringNotNull)); // false
console.log(itsnewUndef(newNumber));        // false
console.log(itsnewUndef(newBool));          // false
console.log(itsnewUndef(newUndef));         // true
console.log(itsnewUndef(newSymbolNull));    // false
console.log(itsnewUndef(newSymbolNotNull)); // false
console.log(itsnewUndef(newBigInt));        // false
console.log(itsnewUndef(newNaN));           // false
console.log(itsnewUndef(newInfinity));      // false
console.log(itsnewUndef(newRegExp));        // false
console.log(itsnewUndef(newDate));          // false
console.log(itsnewUndef(newError));         // false
console.log(itsnewUndef(newFiniteNumber));  // false
console.log(itsnewUndef(ConstructorFunc));  // false
console.log(itsnewUndef(arrowFunc));        // false
console.log(itsnewUndef(regularFunc));      // false
console.log(itsnewUndef(asyncFunc));        // false
console.log(itsnewUndef(generatorFunc));    // false
console.log(itsnewUndef(TestClass));        // false

function itsSymbolNull(param) {
    return typeof param === 'symbol' && param.description === 'test' && param === newSymbolNull;
}
console.log("========itsSymbolNull=========");
console.log(itsSymbolNull(newObjNullNull));   // false
console.log(itsSymbolNull(newObjNull));       // false
console.log(itsSymbolNull(newObjNotNull));    // false
console.log(itsSymbolNull(newArrNull));       // false
console.log(itsSymbolNull(newArrNotNull));    // false
console.log(itsSymbolNull(newStringNull));    // false
console.log(itsSymbolNull(newStringNotNull)); // false
console.log(itsSymbolNull(newNumber));        // false
console.log(itsSymbolNull(newBool));          // false
console.log(itsSymbolNull(newUndef));         // false
console.log(itsSymbolNull(newSymbolNull));    // true
console.log(itsSymbolNull(newSymbolNotNull)); // false
console.log(itsSymbolNull(newBigInt));        // false
console.log(itsSymbolNull(newNaN));           // false
console.log(itsSymbolNull(newInfinity));      // false
console.log(itsSymbolNull(newRegExp));        // false
console.log(itsSymbolNull(newDate));          // false
console.log(itsSymbolNull(newError));         // false
console.log(itsSymbolNull(newFiniteNumber));  // false
console.log(itsSymbolNull(ConstructorFunc));  // false
console.log(itsSymbolNull(arrowFunc));        // false
console.log(itsSymbolNull(regularFunc));      // false
console.log(itsSymbolNull(asyncFunc));        // false
console.log(itsSymbolNull(generatorFunc));    // false
console.log(itsSymbolNull(TestClass));        // false

function itsSymbolNotNull(param) {
    return typeof param === 'symbol' && param.description === 'test' && param === newSymbolNotNull;
}
console.log("========itsSymbolNotNull=========");
console.log(itsSymbolNotNull(newObjNullNull));   // false
console.log(itsSymbolNotNull(newObjNull));       // false
console.log(itsSymbolNotNull(newObjNotNull));    // false
console.log(itsSymbolNotNull(newArrNull));       // false
console.log(itsSymbolNotNull(newArrNotNull));    // false
console.log(itsSymbolNotNull(newStringNull));    // false
console.log(itsSymbolNotNull(newStringNotNull)); // false
console.log(itsSymbolNotNull(newNumber));        // false
console.log(itsSymbolNotNull(newBool));          // false
console.log(itsSymbolNotNull(newUndef));         // false
console.log(itsSymbolNotNull(newSymbolNull));    // false
console.log(itsSymbolNotNull(newSymbolNotNull)); // true
console.log(itsSymbolNotNull(newBigInt));        // false
console.log(itsSymbolNotNull(newNaN));           // false
console.log(itsSymbolNotNull(newInfinity));      // false
console.log(itsSymbolNotNull(newRegExp));        // false
console.log(itsSymbolNotNull(newDate));          // false
console.log(itsSymbolNotNull(newError));         // false
console.log(itsSymbolNotNull(newFiniteNumber));  // false
console.log(itsSymbolNotNull(ConstructorFunc));  // false
console.log(itsSymbolNotNull(arrowFunc));        // false
console.log(itsSymbolNotNull(regularFunc));      // false
console.log(itsSymbolNotNull(asyncFunc));        // false
console.log(itsSymbolNotNull(generatorFunc));    // false
console.log(itsSymbolNotNull(TestClass));        // false

function itsBigInt(param) {
    return typeof param === 'bigint';
}
console.log("========itsBigInt=========");
console.log(itsBigInt(newObjNullNull));   // false
console.log(itsBigInt(newObjNull));       // false
console.log(itsBigInt(newObjNotNull));    // false
console.log(itsBigInt(newArrNull));       // false
console.log(itsBigInt(newArrNotNull));    // false
console.log(itsBigInt(newStringNull));    // false
console.log(itsBigInt(newStringNotNull)); // false
console.log(itsBigInt(newNumber));        // false
console.log(itsBigInt(newBool));          // false
console.log(itsBigInt(newUndef));         // false
console.log(itsBigInt(newSymbolNull));    // false
console.log(itsBigInt(newSymbolNotNull)); // false
console.log(itsBigInt(newBigInt));        // true
console.log(itsBigInt(newNaN));           // false
console.log(itsBigInt(newInfinity));      // false
console.log(itsBigInt(newRegExp));        // false
console.log(itsBigInt(newDate));          // false
console.log(itsBigInt(newError));         // false
console.log(itsBigInt(newFiniteNumber));  // false
console.log(itsBigInt(ConstructorFunc));  // false
console.log(itsBigInt(arrowFunc));        // false
console.log(itsBigInt(regularFunc));      // false
console.log(itsBigInt(asyncFunc));        // false
console.log(itsBigInt(generatorFunc));    // false
console.log(itsBigInt(TestClass));        // false

function itsNaN(param) {
    return Number.isNaN(param);
}
console.log("========itsNaN=========");
console.log(itsNaN(newObjNullNull));   // false
console.log(itsNaN(newObjNull));       // false
console.log(itsNaN(newObjNotNull));    // false
console.log(itsNaN(newArrNull));       // false
console.log(itsNaN(newArrNotNull));    // false
console.log(itsNaN(newStringNull));    // false
console.log(itsNaN(newStringNotNull)); // false
console.log(itsNaN(newNumber));        // false
console.log(itsNaN(newBool));          // false
console.log(itsNaN(newUndef));         // false
console.log(itsNaN(newSymbolNull));    // false
console.log(itsNaN(newSymbolNotNull)); // false
console.log(itsNaN(newBigInt));        // false
console.log(itsNaN(newNaN));           // true
console.log(itsNaN(newInfinity));      // false
console.log(itsNaN(newRegExp));        // false
console.log(itsNaN(newDate));          // false
console.log(itsNaN(newError));         // false
console.log(itsNaN(newFiniteNumber));  // false
console.log(itsNaN(ConstructorFunc));  // false
console.log(itsNaN(arrowFunc));        // false
console.log(itsNaN(regularFunc));      // false
console.log(itsNaN(asyncFunc));        // false
console.log(itsNaN(generatorFunc));    // false
console.log(itsNaN(TestClass));        // false

function itsInfinity(param) {
    return !Number.isNaN(param) && (param === Infinity || param === -Infinity);
}
console.log("========itsInfinity=========");
console.log(itsInfinity(newObjNullNull));   // false
console.log(itsInfinity(newObjNull));       // false
console.log(itsInfinity(newObjNotNull));    // false
console.log(itsInfinity(newArrNull));       // false
console.log(itsInfinity(newArrNotNull));    // false
console.log(itsInfinity(newStringNull));    // false
console.log(itsInfinity(newStringNotNull)); // false
console.log(itsInfinity(newNumber));        // false
console.log(itsInfinity(newBool));          // false
console.log(itsInfinity(newUndef));         // false
console.log(itsInfinity(newSymbolNull));    // false
console.log(itsInfinity(newSymbolNotNull)); // false
console.log(itsInfinity(newBigInt));        // false
console.log(itsInfinity(newNaN));           // false
console.log(itsInfinity(newInfinity));      // true
console.log(itsInfinity(newRegExp));        // false
console.log(itsInfinity(newDate));          // false
console.log(itsInfinity(newError));         // false
console.log(itsInfinity(newFiniteNumber));  // false
console.log(itsInfinity(ConstructorFunc));  // false
console.log(itsInfinity(arrowFunc));        // false
console.log(itsInfinity(regularFunc));      // false
console.log(itsInfinity(asyncFunc));        // false
console.log(itsInfinity(generatorFunc));    // false
console.log(itsInfinity(TestClass));        // false

function itsRegExp(param) {
    return param instanceof RegExp;
}
console.log("========itsRegExp=========");
console.log(itsRegExp(newObjNullNull));   // false
console.log(itsRegExp(newObjNull));       // false
console.log(itsRegExp(newObjNotNull));    // false
console.log(itsRegExp(newArrNull));       // false
console.log(itsRegExp(newArrNotNull));    // false
console.log(itsRegExp(newStringNull));    // false
console.log(itsRegExp(newStringNotNull)); // false
console.log(itsRegExp(newNumber));        // false
console.log(itsRegExp(newBool));          // false
console.log(itsRegExp(newUndef));         // false
console.log(itsRegExp(newSymbolNull));    // false
console.log(itsRegExp(newSymbolNotNull)); // false
console.log(itsRegExp(newBigInt));        // false
console.log(itsRegExp(newNaN));           // false
console.log(itsRegExp(newInfinity));      // false
console.log(itsRegExp(newRegExp));        // true
console.log(itsRegExp(newDate));          // false
console.log(itsRegExp(newError));         // false
console.log(itsRegExp(newFiniteNumber));  // false
console.log(itsRegExp(ConstructorFunc));  // false
console.log(itsRegExp(arrowFunc));        // false
console.log(itsRegExp(regularFunc));      // false
console.log(itsRegExp(asyncFunc));        // false
console.log(itsRegExp(generatorFunc));    // false
console.log(itsRegExp(TestClass));        // false

function itsDate(param) {
    return param instanceof Date && !isNaN(param.getTime());
}
console.log("========itsDate=========");
console.log(itsDate(newObjNullNull));   // false
console.log(itsDate(newObjNull));       // false
console.log(itsDate(newObjNotNull));    // false
console.log(itsDate(newArrNull));       // false
console.log(itsDate(newArrNotNull));    // false
console.log(itsDate(newStringNull));    // false
console.log(itsDate(newStringNotNull)); // false
console.log(itsDate(newNumber));        // false
console.log(itsDate(newBool));          // false
console.log(itsDate(newUndef));         // false
console.log(itsDate(newSymbolNull));    // false
console.log(itsDate(newSymbolNotNull)); // false
console.log(itsDate(newBigInt));        // false
console.log(itsDate(newNaN));           // false
console.log(itsDate(newInfinity));      // false
console.log(itsDate(newRegExp));        // false
console.log(itsDate(newDate));          // true
console.log(itsDate(newError));         // false
console.log(itsDate(newFiniteNumber));  // false
console.log(itsDate(ConstructorFunc));  // false
console.log(itsDate(arrowFunc));        // false
console.log(itsDate(regularFunc));      // false
console.log(itsDate(asyncFunc));        // false
console.log(itsDate(generatorFunc));    // false
console.log(itsDate(TestClass));        // false

function itsError(param) {
    return param instanceof Error;
}

console.log("========itsError=========");
console.log(itsError(newObjNullNull));   // false
console.log(itsError(newObjNull));       // false
console.log(itsError(newObjNotNull));    // false
console.log(itsError(newArrNull));       // false
console.log(itsError(newArrNotNull));    // false
console.log(itsError(newStringNull));    // false
console.log(itsError(newStringNotNull)); // false
console.log(itsError(newNumber));        // false
console.log(itsError(newBool));          // false
console.log(itsError(newUndef));         // false
console.log(itsError(newSymbolNull));    // false
console.log(itsError(newSymbolNotNull)); // false
console.log(itsError(newBigInt));        // false
console.log(itsError(newNaN));           // false
console.log(itsError(newInfinity));      // false
console.log(itsError(newRegExp));        // false
console.log(itsError(newDate));          // false
console.log(itsError(newError));         // true
console.log(itsError(newFiniteNumber));  // false
console.log(itsError(ConstructorFunc));  // false
console.log(itsError(arrowFunc));        // false
console.log(itsError(regularFunc));      // false
console.log(itsError(asyncFunc));        // false
console.log(itsError(generatorFunc));    // false
console.log(itsError(TestClass));        // false

function itsFiniteNumber(param) {
    return typeof param === 'number' && 
           !Number.isNaN(param) && 
           param !== Infinity && 
           param !== -Infinity;
}
console.log("========itsFiniteNumber=========");
console.log(itsFiniteNumber(newObjNullNull));   // false
console.log(itsFiniteNumber(newObjNull));       // false
console.log(itsFiniteNumber(newObjNotNull));    // false
console.log(itsFiniteNumber(newArrNull));       // false
console.log(itsFiniteNumber(newArrNotNull));    // false
console.log(itsFiniteNumber(newStringNull));    // false
console.log(itsFiniteNumber(newStringNotNull)); // false
console.log(itsFiniteNumber(newNumber));        // true
console.log(itsFiniteNumber(newBool));          // false
console.log(itsFiniteNumber(newUndef));         // false
console.log(itsFiniteNumber(newSymbolNull));    // false
console.log(itsFiniteNumber(newSymbolNotNull)); // false
console.log(itsFiniteNumber(newBigInt));        // false
console.log(itsFiniteNumber(newNaN));           // false
console.log(itsFiniteNumber(newInfinity));      // false
console.log(itsFiniteNumber(newRegExp));        // false
console.log(itsFiniteNumber(newDate));          // false
console.log(itsFiniteNumber(newError));         // false
console.log(itsFiniteNumber(newFiniteNumber));  // true
console.log(itsFiniteNumber(ConstructorFunc));  // false
console.log(itsFiniteNumber(arrowFunc));        // false
console.log(itsFiniteNumber(regularFunc));      // false
console.log(itsFiniteNumber(asyncFunc));        // false
console.log(itsFiniteNumber(generatorFunc));    // false
console.log(itsFiniteNumber(TestClass));        // false

function itsConstructorFunc(param) {
    try {
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

function itsArrowFunc(param) {
    return typeof param === 'function' && 
           !param.prototype && 
           param.toString().startsWith('(');
}
console.log("========itsArrowFunc=========");
console.log(itsArrowFunc(newObjNullNull));   // false
console.log(itsArrowFunc(newObjNull));       // false
console.log(itsArrowFunc(newObjNotNull));    // false
console.log(itsArrowFunc(newArrNull));       // false
console.log(itsArrowFunc(newArrNotNull));    // false
console.log(itsArrowFunc(newStringNull));    // false
console.log(itsArrowFunc(newStringNotNull)); // false
console.log(itsArrowFunc(newNumber));        // false
console.log(itsArrowFunc(newBool));          // false
console.log(itsArrowFunc(newUndef));         // false
console.log(itsArrowFunc(newSymbolNull));    // false
console.log(itsArrowFunc(newSymbolNotNull)); // false
console.log(itsArrowFunc(newBigInt));        // false
console.log(itsArrowFunc(newNaN));           // false
console.log(itsArrowFunc(newInfinity));      // false
console.log(itsArrowFunc(newRegExp));        // false
console.log(itsArrowFunc(newDate));          // false
console.log(itsArrowFunc(newError));         // false
console.log(itsArrowFunc(newFiniteNumber));  // false
console.log(itsArrowFunc(ConstructorFunc));  // false
console.log(itsArrowFunc(arrowFunc));        // true
console.log(itsArrowFunc(regularFunc));      // false
console.log(itsArrowFunc(asyncFunc));        // false
console.log(itsArrowFunc(generatorFunc));    // false
console.log(itsArrowFunc(TestClass));        // false

function itsRegularFunc(param) {
    try {
        return typeof param === 'function' &&
               param.toString().startsWith('function') &&
               !param.toString().includes('function*') &&
               !param.toString().includes('=>') &&
               !param.toString().includes('async') &&
               !param.toString().includes('class') &&
               param.prototype &&
               !param.toString().includes('this.') &&
               param.toString().includes('return'); // Вместо проверки имени проверяем наличие return
    } catch (e) {
        return false;
    }
}

console.log("========itsRegularFunc=========");
console.log(itsRegularFunc(newObjNullNull));   // false
console.log(itsRegularFunc(newObjNull));       // false
console.log(itsRegularFunc(newObjNotNull));    // false
console.log(itsRegularFunc(newArrNull));       // false
console.log(itsRegularFunc(newArrNotNull));    // false
console.log(itsRegularFunc(newStringNull));    // false
console.log(itsRegularFunc(newStringNotNull)); // false
console.log(itsRegularFunc(newNumber));        // false
console.log(itsRegularFunc(newBool));          // false
console.log(itsRegularFunc(newUndef));         // false
console.log(itsRegularFunc(newSymbolNull));    // false
console.log(itsRegularFunc(newSymbolNotNull)); // false
console.log(itsRegularFunc(newBigInt));        // false
console.log(itsRegularFunc(newNaN));           // false
console.log(itsRegularFunc(newInfinity));      // false
console.log(itsRegularFunc(newRegExp));        // false
console.log(itsRegularFunc(newDate));          // false
console.log(itsRegularFunc(newError));         // false
console.log(itsRegularFunc(newFiniteNumber));  // false
console.log(itsRegularFunc(ConstructorFunc));  // false
console.log(itsRegularFunc(arrowFunc));        // false
console.log(itsRegularFunc(regularFunc));      // true
console.log(itsRegularFunc(asyncFunc));        // false
console.log(itsRegularFunc(generatorFunc));    // false
console.log(itsRegularFunc(TestClass));        // false

function itsAsyncFunc(param) {
    return param instanceof (async function(){}).constructor || 
           (typeof param === 'function' && param.constructor.name === 'AsyncFunction');
}
console.log("========itsAsyncFunc=========");
console.log(itsAsyncFunc(newObjNullNull));   // false
console.log(itsAsyncFunc(newObjNull));       // false
console.log(itsAsyncFunc(newObjNotNull));    // false
console.log(itsAsyncFunc(newArrNull));       // false
console.log(itsAsyncFunc(newArrNotNull));    // false
console.log(itsAsyncFunc(newStringNull));    // false
console.log(itsAsyncFunc(newStringNotNull)); // false
console.log(itsAsyncFunc(newNumber));        // false
console.log(itsAsyncFunc(newBool));          // false
console.log(itsAsyncFunc(newUndef));         // false
console.log(itsAsyncFunc(newSymbolNull));    // false
console.log(itsAsyncFunc(newSymbolNotNull)); // false
console.log(itsAsyncFunc(newBigInt));        // false
console.log(itsAsyncFunc(newNaN));           // false
console.log(itsAsyncFunc(newInfinity));      // false
console.log(itsAsyncFunc(newRegExp));        // false
console.log(itsAsyncFunc(newDate));          // false
console.log(itsAsyncFunc(newError));         // false
console.log(itsAsyncFunc(newFiniteNumber));  // false
console.log(itsAsyncFunc(ConstructorFunc));  // false
console.log(itsAsyncFunc(arrowFunc));        // false
console.log(itsAsyncFunc(regularFunc));      // false
console.log(itsAsyncFunc(asyncFunc));        // true
console.log(itsAsyncFunc(generatorFunc));    // false
console.log(itsAsyncFunc(TestClass));        // false

function itsGeneratorFunc(param) {
    return param instanceof (function*(){}).constructor || 
           (typeof param === 'function' && param.constructor.name === 'GeneratorFunction');
}
console.log("========itsGeneratorFunc=========");
console.log(itsGeneratorFunc(newObjNullNull));   // false
console.log(itsGeneratorFunc(newObjNull));       // false
console.log(itsGeneratorFunc(newObjNotNull));    // false
console.log(itsGeneratorFunc(newArrNull));       // false
console.log(itsGeneratorFunc(newArrNotNull));    // false
console.log(itsGeneratorFunc(newStringNull));    // false
console.log(itsGeneratorFunc(newStringNotNull)); // false
console.log(itsGeneratorFunc(newNumber));        // false
console.log(itsGeneratorFunc(newBool));          // false
console.log(itsGeneratorFunc(newUndef));         // false
console.log(itsGeneratorFunc(newSymbolNull));    // false
console.log(itsGeneratorFunc(newSymbolNotNull)); // false
console.log(itsGeneratorFunc(newBigInt));        // false
console.log(itsGeneratorFunc(newNaN));           // false
console.log(itsGeneratorFunc(newInfinity));      // false
console.log(itsGeneratorFunc(newRegExp));        // false
console.log(itsGeneratorFunc(newDate));          // false
console.log(itsGeneratorFunc(newError));         // false
console.log(itsGeneratorFunc(newFiniteNumber));  // false
console.log(itsGeneratorFunc(ConstructorFunc));  // false
console.log(itsGeneratorFunc(arrowFunc));        // false
console.log(itsGeneratorFunc(regularFunc));      // false
console.log(itsGeneratorFunc(asyncFunc));        // false
console.log(itsGeneratorFunc(generatorFunc));    // true
console.log(itsGeneratorFunc(TestClass));        // false

function itsClass(param) {
    return typeof param === 'function' && 
           /^class\s/.test(param.toString());
}
console.log("========itsClass=========");
console.log(itsClass(newObjNullNull));   // false
console.log(itsClass(newObjNull));       // false
console.log(itsClass(newObjNotNull));    // false
console.log(itsClass(newArrNull));       // false
console.log(itsClass(newArrNotNull));    // false
console.log(itsClass(newStringNull));    // false
console.log(itsClass(newStringNotNull)); // false
console.log(itsClass(newNumber));        // false
console.log(itsClass(newBool));          // false
console.log(itsClass(newUndef));         // false
console.log(itsClass(newSymbolNull));    // false
console.log(itsClass(newSymbolNotNull)); // false
console.log(itsClass(newBigInt));        // false
console.log(itsClass(newNaN));           // false
console.log(itsClass(newInfinity));      // false
console.log(itsClass(newRegExp));        // false
console.log(itsClass(newDate));          // false
console.log(itsClass(newError));         // false
console.log(itsClass(newFiniteNumber));  // false
console.log(itsClass(ConstructorFunc));  // false
console.log(itsClass(arrowFunc));        // false
console.log(itsClass(regularFunc));      // false
console.log(itsClass(asyncFunc));        // false
console.log(itsClass(generatorFunc));    // false
console.log(itsClass(TestClass));        // true

function itsPrimitive(param) {
    return param === null || 
           (typeof param !== 'object' && typeof param !== 'function');
}
console.log("========itsPrimitive=========");
console.log(itsPrimitive(newObjNullNull));   // true
console.log(itsPrimitive(newObjNull));       // false
console.log(itsPrimitive(newObjNotNull));    // false
console.log(itsPrimitive(newArrNull));       // false
console.log(itsPrimitive(newArrNotNull));    // false
console.log(itsPrimitive(newStringNull));    // true
console.log(itsPrimitive(newStringNotNull)); // true
console.log(itsPrimitive(newNumber));        // true
console.log(itsPrimitive(newBool));          // true
console.log(itsPrimitive(newUndef));         // true
console.log(itsPrimitive(newSymbolNull));    // true
console.log(itsPrimitive(newSymbolNotNull)); // true
console.log(itsPrimitive(newBigInt));        // true
console.log(itsPrimitive(newNaN));           // true
console.log(itsPrimitive(newInfinity));      // true
console.log(itsPrimitive(newRegExp));        // false
console.log(itsPrimitive(newDate));          // false
console.log(itsPrimitive(newError));         // false
console.log(itsPrimitive(newFiniteNumber));  // true
console.log(itsPrimitive(ConstructorFunc));  // false
console.log(itsPrimitive(arrowFunc));        // false
console.log(itsPrimitive(regularFunc));      // false
console.log(itsPrimitive(asyncFunc));        // false
console.log(itsPrimitive(generatorFunc));    // false
console.log(itsPrimitive(TestClass));        // false

// Функции проверки для классов
function itsClass(param) {
    try {
        console.log("=== Testing itsClass ===");
        console.log('typeof function:', typeof param === 'function');
        console.log('is class:', param.toString().startsWith('class'));
        console.log('has prototype:', param.prototype);
        console.log('toString:', param.toString());

        return typeof param === 'function' &&
               param.toString().startsWith('class') &&
               param.prototype;
    } catch (e) {
        return false;
    }
}

function itsClassMethod(param) {
    try {
        console.log("=== Testing itsClassMethod ===");
        console.log('typeof function:', typeof param === 'function');
        console.log('is prototype method:', param.toString().includes('function'));
        console.log('has this:', param.toString().includes('this.'));
        console.log('toString:', param.toString());

        return typeof param === 'function' &&
               param.toString().includes('function') &&
               param.toString().includes('this.');
    } catch (e) {
        return false;
    }
}

function itsClassStaticMethod(param) {
    try {
        console.log("=== Testing itsClassStaticMethod ===");
        console.log('typeof function:', typeof param === 'function');
        console.log('is static:', param.toString().includes('static'));
        console.log('toString:', param.toString());

        return typeof param === 'function' &&
               param.toString().includes('static');
    } catch (e) {
        return false;
    }
}

function itsClassGetter(param) {
    try {
        const descriptor = Object.getOwnPropertyDescriptor(param.prototype, 'getter');
        console.log("=== Testing itsClassGetter ===");
        console.log('has getter:', descriptor && typeof descriptor.get === 'function');
        console.log('toString:', descriptor?.get?.toString());

        return descriptor && typeof descriptor.get === 'function';
    } catch (e) {
        return false;
    }
}

function itsClassSetter(param) {
    try {
        const descriptor = Object.getOwnPropertyDescriptor(param.prototype, 'setter');
        console.log("=== Testing itsClassSetter ===");
        console.log('has setter:', descriptor && typeof descriptor.set === 'function');
        console.log('toString:', descriptor?.set?.toString());

        return descriptor && typeof descriptor.set === 'function';
    } catch (e) {
        return false;
    }
}

function itsClassExtends(param) {
    try {
        console.log("=== Testing itsClassExtends ===");
        console.log('is class:', param.toString().startsWith('class'));
        console.log('extends:', param.toString().includes('extends'));
        console.log('toString:', param.toString());

        return param.toString().startsWith('class') &&
               param.toString().includes('extends');
    } catch (e) {
        return false;
    }
}

// Тесты
console.log("========itsClass Tests=========");
console.log(itsClass(TestClass));        // true
console.log(itsClass(EmptyClass));       // true
console.log(itsClass(ExtendedClass));    // true
console.log(itsClass(function() {}));    // false

console.log("========itsClassMethod Tests=========");
console.log(itsClassMethod(TestClass.prototype.method));     // true
console.log(itsClassMethod(TestClass.staticMethod));         // false

console.log("========itsClassStaticMethod Tests=========");
console.log(itsClassStaticMethod(TestClass.staticMethod));   // true
console.log(itsClassStaticMethod(TestClass.prototype.method)); // false

console.log("========itsClassGetter Tests=========");
console.log(itsClassGetter(TestClass));    // true
console.log(itsClassGetter(EmptyClass));   // false

console.log("========itsClassSetter Tests=========");
console.log(itsClassSetter(TestClass));    // true
console.log(itsClassSetter(EmptyClass));   // false

console.log("========itsClassExtends Tests=========");
console.log(itsClassExtends(ExtendedClass));   // true
console.log(itsClassExtends(TestClass));       // false

// itsClass - проверяет является ли параметр классом
// itsClassMethod - проверяет метод класса
// itsClassStaticMethod - проверяет статический метод
// itsClassGetter - проверяет геттер
// itsClassSetter - проверяет сеттер
// itsClassExtends - проверяет наследование

module.exports = { itsArrowFunc,  itsAsyncFunc, itsBigInt, itsBool, itsClass, itsClassExtends, itsClassGetter, itsClassMethod, itsClassSetter, itsClassStaticMethod, itsConstructorFunc, itsDate,itsError, itsFiniteNumber, itsGeneratorFunc, itsInfinity, itsNaN, itsObjNotNull, itsObjNull, itsObjNullNull, itsPrimitive, itsRegExp, itsRegularFunc, itsStringNotNull, itsStringNull, itsSymbolNotNull, itsSymbolNull, itsnewNumber,  itsnewUndef };
