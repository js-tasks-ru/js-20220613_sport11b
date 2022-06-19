/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

export const pick = (obj, ...fields)  => {
    // параметр prev накапливает результат действия функции на каждой итерации по элементам массива fields
    // параметр item - это текущий итерируемый элемент массива fields
    const c = fields.reduce((prev, item) => {
    //  prev[item] - это значение по ключу item. А ключ item - это текущий элемент массива fields
    // например: на шаге1 мы инициировали prev = {} , то есть создали пустой словарь. Параметр prev
    // должен иметь структуру {key: value}. В нашем случае на первой итерации по массиву fields
    // мы получаем элемент item = apple далее достаем из словаря { apple: 2, orange: 4, banana: 3 } по ключу item = apple
    // значение obj["apple"] , которое равно 2 и пихаем эту двойку в качестве значения для prev["apple"]  ( prev[item] = obj[item]  )
    // и возвращаем prev , который на первой итерации получился таким: {apple: 2}
    prev[item] = obj[item];
    return prev; // возвращаем prev в виде {key: value}
  }, {})  // в начале создаем пустой словарь json  {} - это начальный prev
  // console.log(c);
  return c;
}
