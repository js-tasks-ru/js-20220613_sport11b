/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export   function invertObj(obj) {
  if (obj!== undefined) {
    const ar = Object.entries(obj)
    // const handler = (acc, curr, index) => {
    //   acc[curr[1]] = curr[0];
    //   return acc
    // };
    const handler = (acc, [first, second]) => {
      acc[second] = first;
      return acc
    };
    const res = ar.reduce(handler, {})
    return res
  }
}
