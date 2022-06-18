/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields)  => {

  // сначала создаем объект json в котором есть только те элементы из obj , которые
  // совпадают с ключами из списка fields
  const c = fields.reduce((prev, item) => {
    prev[item] = obj[item];
    return prev; // возвращаем prev в виде {key: value}
  }, {}) ; // в начале создаем пустой словарь json  {} - это начальный prev

  // рассмотрим работу кода на примере
  // const obj = {apple: 2,orange: 4,banana: 3};
  // fields = ['apple', 'banana']
  // console.log(omit(obj, 'apple', 'banana'));



  // теперь убираем из json объекта obj те элементы , которые есть в json объекте c созданном
  // ранее

  // Object.keys(obj) возвращает массив ключей объекта obj и мы можем применить метод reduce
  // к этому массиву.
  // внутрь reduce передаем функцию с двумя параметрами prev  и item
  // prev будет накапливать результат итераций по массиву ключей Object.keys(obj)
  // item - это текущий итерируемый элемент массива Object.keys(obj)
  // на каждой итерации выполняется действие if(!c.hasOwnProperty(item)) prev[item] = obj[item]
  // где c.hasOwnProperty(item) возвращает true , если свойство item
  // (а это в нашем случае на первой итерации apple) принадлежит самому объекту с , который мы получили выше
  // условие if(!c.hasOwnProperty(item))  срабатывает в случае , если apple НЕ принадлежит объекту c
  // в нашем случае условие выдает False , поэтому значению по ключу prev["apple"] не присвается никакое значение
  // когда будет итерировать элемент   orange , тогда условие сработает и для
  // prev[orange] будет присвоено значение из  obj[orange]  которое равно 4
  const d = Object.keys(obj).reduce((prev, item) => {
    if(!c.hasOwnProperty(item)) prev[item] = obj[item];
    return prev;
  }, {});

  return d;
}
