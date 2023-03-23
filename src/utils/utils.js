// 函数防抖
export const debounce = (callback, wait) => {
  let timeoutId = null;

  return (...args) => {
    window.clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

// 函数节流
export const throttle = (callback, wait) => {
  let timeoutId = null;

  return (...arg) => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        callback.apply(null, arg);
      }, wait)
    }
  }
}