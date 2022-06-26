/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export   function invertObj(obj) {
  if (obj!== undefined) {
    const ar = Object.entries(obj)
    const handler = (acc, curr, index) => {
      console.log('index', index);
      console.log('curr1', curr[0]);
      console.log('curr2', curr[1]);
      acc[curr[1]] = curr[0];
      console.log('acc', acc);
      return acc
    };

    const res = ar.reduce(handler, {})
    return res
  } else return undefined
}
