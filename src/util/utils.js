/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const Debounce = (fn, t) => {
  let delay = t || 500;
  let timer;
  console.log(fn)
  console.log(typeof fn)
  return function () {
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  }
};
/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const Throttle = (fn, t) => {
  let last;
  let timer;
  let interval = t || 500;
  return function () {
    let args = arguments;
    let now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, interval);
    } else {
      last = now;
      fn.apply(this, args);
    }
  }
};
/**
 * 一维数组转换为二维数组
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const arrTrans = (num, arr) => { // 一维数组转换为二维数组
  const iconsArr = []; // 声明数组
  arr.forEach((item, index) => {
    const page = Math.floor(index / num); // 计算该元素为第几个素组内
    if (!iconsArr[page]) { // 判断是否存在
      iconsArr[page] = [];
    }
    iconsArr[page].push(item);
  });
  return iconsArr;
}
export function getDateTime() {
  var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours() + 1,
    minute = date.getMinutes(),
    second = date.getSeconds();
  month = checkTime(month);
  day = checkTime(day);
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
}

