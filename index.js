/*
  外观模式可以为一系列复杂的子系统接口提供一个更高级的统一接口，通过这个接口对子系统接口的访问更容易
  Javascript中常用外观模式来解决兼容性问题
*/

function addEvent (dom, type, fn) {
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  } else {
    dom[type] = fn;
  }
}

/*
  上述方法是外面模式应用的一部分，还可以使用单例模式+外观模式来封装一些代码库
*/

export default Code = {
  addEvent: addEvent(dom, type, fn)
}
