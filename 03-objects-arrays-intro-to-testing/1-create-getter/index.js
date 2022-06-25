/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export   function createGetter(path) {
  const pathArray  = path.split('.'); // получаем в pathArray массив имен из пути
  return (obj) => {
      const handler = (acc, curr, index) =>
      {
        if (acc !== undefined){
          const res = acc[curr];
          console.log('res',res);
          console.log('curr',curr);
          console.log('acc',acc);
          return res
        }};

    const res = pathArray.reduce(handler,obj)
    return res;
  }
}
