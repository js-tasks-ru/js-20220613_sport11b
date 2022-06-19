/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let collator = new Intl.Collator(["ru","en-US"], { caseFirst: 'upper' }); // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator
  let arr2 = [...arr]  // делаем копию массива в новый массив arr2  через спрэд синтаксис https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  if (param === 'asc') {
    return arr2.sort((a,b) => collator.compare(a,b))
  }else {
    return arr2.sort((a,b) => -1*collator.compare(a,b))
  }
};
