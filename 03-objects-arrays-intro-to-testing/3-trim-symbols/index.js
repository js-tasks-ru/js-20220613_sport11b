/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size)
{

  if (size === 0) return '';
  if (size === undefined) return string;

  let ar = Array.from(string);
  let first_slice = ar.slice(0,size).join('');
  let rest_slice = ar.slice(size,);
  console.log('first_slice', first_slice)
  console.log('rest_slice', rest_slice)

  const handler = (acc,curr,index) =>
  {

    if (!acc.endsWith(curr.repeat(size))) {acc = acc + curr} else {acc};
    console.log('index', index);
    console.log('curr', curr);
    console.log('acc', acc);
    return acc
  }

  const res = ar.reduce(handler,first_slice)
  return res
}
