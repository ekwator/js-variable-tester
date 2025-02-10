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
const newFunc = () => { };
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


function itsRegularFuncBad(param) {
    try {
        console.log('typeof function:', typeof param === 'function');
        console.log('starts with function:', param.toString().startsWith('function'));
        console.log('not generator:', !param.toString().includes('function*'));
        console.log('not arrow:', !param.toString().includes('=>'));
        console.log('not async:', !param.toString().includes('async'));
        console.log('not class:', !param.toString().includes('class'));
        console.log('has prototype:', param.prototype);
        console.log('no this:', !param.toString().includes('this.'));
        console.log('no name:', !param.name);
        console.log('toString:', param.toString());

        return typeof param === 'function' &&
               param.toString().startsWith('function') &&
               !param.toString().includes('function*') &&
               !param.toString().includes('=>') &&
               !param.toString().includes('async') &&
               !param.toString().includes('class') &&
               param.prototype &&
               !param.toString().includes('this.') &&
               !param.name;
    } catch (e) {
        return false;
    }
}

console.log("========itsRegularFuncBad=========");
console.log(itsRegularFuncBad(ConstructorFunc));  // false
console.log(itsRegularFuncBad(arrowFunc));        // false
console.log(itsRegularFuncBad(regularFunc));      // true
console.log(itsRegularFuncBad(asyncFunc));        // false
console.log(itsRegularFuncBad(generatorFunc));    // false
console.log(itsRegularFuncBad(TestClass));        // false

console.log("=== Testing ConstructorFunc Bad===");
console.log(itsRegularFuncBad(ConstructorFunc));

console.log("\n=== Testing regularFunc Bad===");
console.log(itsRegularFuncBad(regularFunc));

function itsRegularFuncOk(param) {
    try {
        console.log('typeof function:', typeof param === 'function');
        console.log('starts with function:', param.toString().startsWith('function'));
        console.log('not generator:', !param.toString().includes('function*'));
        console.log('not arrow:', !param.toString().includes('=>'));
        console.log('not async:', !param.toString().includes('async'));
        console.log('not class:', !param.toString().includes('class'));
        console.log('has prototype:', param.prototype);
        console.log('no this:', !param.toString().includes('this.'));
        console.log('no name:', !param.name);
        console.log('toString:', param.toString());

        return typeof param === 'function' &&
               param.toString().startsWith('function') &&
               !param.toString().includes('function*') &&
               !param.toString().includes('=>') &&
               !param.toString().includes('async') &&
               !param.toString().includes('class') &&
               param.prototype &&
               !param.toString().includes('this.') &&
               !param.name;
    } catch (e) {
        return false;
    }
}

console.log("========itsRegularFuncOk=========");
console.log(itsRegularFuncOk(ConstructorFunc));  // false
console.log(itsRegularFuncOk(arrowFunc));        // false
console.log(itsRegularFuncOk(regularFunc));      // true
console.log(itsRegularFuncOk(asyncFunc));        // false
console.log(itsRegularFuncOk(generatorFunc));    // false
console.log(itsRegularFuncOk(TestClass));        // false

console.log("=== Testing ConstructorFunc Ok===");
console.log(itsRegularFuncOk(ConstructorFunc));

console.log("\n=== Testing regularFunc Ok===");
console.log(itsRegularFuncOk(regularFunc));


// ========itsRegularFuncBad=========
// typeof function: true
// starts with function: true
// not generator: true
// not arrow: true
// not async: true
// not class: true
// has prototype: {}
// no this: false
// no name: false
// toString: function ConstructorFunc() { 
//     this.prop = 1; 
// }
// false
// typeof function: true
// starts with function: false
// not generator: true
// not arrow: false
// not async: true
// not class: true
// has prototype: undefined
// no this: true
// no name: false
// toString: () => {}
// false
// typeof function: true
// starts with function: true
// not generator: true
// not arrow: true
// not async: true
// not class: true
// has prototype: {}
// no this: true
// no name: false
// toString: function() {  // анонимная функция без this
//     return 1;
// }
// false
// typeof function: true
// starts with function: false
// not generator: true
// not arrow: false
// not async: false
// not class: true
// has prototype: undefined
// no this: true
// no name: false
// toString: async () => {}
// false
// typeof function: true
// starts with function: true
// not generator: false
// not arrow: true
// not async: true
// not class: true
// has prototype: Object [Generator] {}
// no this: true
// no name: false
// toString: function* () {}
// false
// typeof function: true
// starts with function: false
// not generator: true
// not arrow: true
// not async: true
// not class: false
// has prototype: {}
// no this: true
// no name: false
// toString: class TestClass {}
// false
// === Testing ConstructorFunc Bad===
// typeof function: true
// starts with function: true
// not generator: true
// not arrow: true
// not async: true
// not class: true
// has prototype: {}
// no this: false
// no name: false
// toString: function ConstructorFunc() { 
//     this.prop = 1; 
// }
// false

// === Testing regularFunc Bad===
// typeof function: true
// starts with function: true
// not generator: true
// not arrow: true
// not async: true
// not class: true
// has prototype: {}
// no this: true
// no name: false
// toString: function() {  // анонимная функция без this
//     return 1;
// }
// false
// ========itsRegularFuncOk=========
// typeof function: true
// starts with function: true
// not generator: true
// not arrow: true
// not async: true
// not class: true
// has prototype: {}
// no this: false
// no name: false
// toString: function ConstructorFunc() { 
//     this.prop = 1; 
// }
// false
// typeof function: true
// starts with function: false
// not generator: true
// not arrow: false
// not async: true
// not class: true
// has prototype: undefined
// no this: true
// no name: false
// toString: () => {}
// false
// typeof function: true
// starts with function: true
// not generator: true
// not arrow: true
// not async: true
// not class: true
// has prototype: {}
// no this: true
// no name: false
// toString: function() {  // анонимная функция без this
//     return 1;
// }
// false
// typeof function: true
// starts with function: false
// not generator: true
// not arrow: false
// not async: false
// not class: true
// has prototype: undefined
// no this: true
// no name: false
// toString: async () => {}
// false
// typeof function: true
// starts with function: true
// not generator: false
// not arrow: true
// not async: true
// not class: true
// has prototype: Object [Generator] {}
// no this: true
// no name: false
// toString: function* () {}
// false
// typeof function: true
// starts with function: false
// not generator: true
// not arrow: true
// not async: true
// not class: false
// has prototype: {}
// no this: true
// no name: false
// toString: class TestClass {}
// false
// === Testing ConstructorFunc Ok===
// typeof function: true
// starts with function: true
// not generator: true
// not arrow: true
// not async: true
// not class: true
// has prototype: {}
// no this: false
// no name: false
// toString: function ConstructorFunc() { 
//     this.prop = 1; 
// }
// false

// === Testing regularFunc Ok===
// typeof function: true
// starts with function: true
// not generator: true
// not arrow: true
// not async: true
// not class: true
// has prototype: {}
// no this: true
// no name: false
// toString: function() {  // анонимная функция без this
//     return 1;
// }
// false

// Анализируя вывод, вижу следующее для regularFunc:
// 1. typeof function: true ✓
// starts with function: true ✓
// not generator: true ✓
// not arrow: true ✓
// not async: true ✓
// not class: true ✓
// has prototype: {} ✓
// no this: true ✓
// no name: false ❌ - вот проблема!
// Для ConstructorFunc:
// Все те же проверки, но no this: false
// Изменения:
// 1. Убрана проверка !param.name
// Добавлена проверка param.toString().includes('return')
// Обычные функции обычно что-то возвращают
// Конструкторы обычно не используют return, а работают с this
// Теперь:
// regularFunc должен вернуть true (имеет return)
// ConstructorFunc должен вернуть false (использует this вместо return)


















