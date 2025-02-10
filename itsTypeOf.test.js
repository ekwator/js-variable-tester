const { itsArrowFunc, itsAsyncFunc, itsBigInt, itsBool, itsClass, itsClassExtends, itsClassGetter, itsClassMethod, itsClassSetter, itsClassStaticMethod, itsConstructorFunc, itsDate, itsError, itsFiniteNumber, itsGeneratorFunc, itsInfinity, itsNaN, itsObjNotNull, itsObjNull, itsObjNullNull, itsPrimitive, itsRegExp, itsRegularFunc, itsStringNotNull, itsStringNull, itsSymbolNotNull, itsSymbolNull, itsnewNumber, itsnewUndef } = require('./itsTypeOf');

test('itsBool should return true for boolean true', () => {
    expect(itsBool(true)).toBe(true);
});

test('itsBool should return false for a number', () => {
    expect(itsBool(123)).toBe(false);
});
