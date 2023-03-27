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

// File转base64
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    // 创建一个新的 FileReader 对象
    const reader = new FileReader();
    // 读取 File 对象
    reader.readAsDataURL(file);
    // 加载完成后
    reader.onload = () => {
      // 将读取的数据转换为 base64 编码的字符串
      const base64String = reader.result;
      // 解析为 Promise 对象，并返回 base64 编码的字符串
      resolve(base64String);
    };

    // 加载失败时
    reader.onerror = () => {
      reject(new Error("Failed to load file"));
    };
  });
}