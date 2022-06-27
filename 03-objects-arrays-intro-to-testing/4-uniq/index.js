/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export  function uniq(arr) {
  if (arr === undefined){return []};
  const handler = (acc, curr) => {
    if (!acc.includes(curr)){acc.push(curr)}
    return acc
  };

  return arr.reduce(handler, [])
}
