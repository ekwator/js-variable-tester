const { isMixedArray, isObjectArray, itSsparseArrNumber, itsArrNotNull, itsArrNul, itsArrayBuffer, itsMap, itsNestedArr, itsNumberArray, itsSet, itsSparseArrNotNull, itsSparseArrNull, itsStringArray, itsTypedArray } = require('./itsArrayOf');

const { isMixedArray, isObjectArray } = require('./itsArrayOf');

describe('Проверка функций для массивов', () => {
  test('isMixedArray должен вернуть true для [1, "a", true, null]', () => {
    expect(isMixedArray([1, 'a', true, null])).toBe(true);
  });

  test('isObjectArray должен вернуть false для [1, 2, 3]', () => {
    expect(isObjectArray([1, 2, 3])).toBe(false);
  });
});
