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
export default Code = {
  addEvent: addEvent(dom, type, fn)
}
/*
  上述方法是外面模式应用的一部分，还可以使用单例模式+外观模式来封装一些代码库
*/




/*
  装饰者模式是在不变原对象的基础上，通过对其进行包装拓展（添加属性或方法）使原有对象可以满足用户的更复杂需求。
*/
var decorator = function (input, fn) {
  var input = document.getElementById(input);
  if ('function' === typeof input.onclick) {
    var oldFn = input.onclick;
    input.onclick = function () {
      oldFn();
      fn();
    }
  } else {
    input.onclick = fn;
  }
}

decorator('input1', function () {
  console.log('do something');
})

decorator('input', function () {
  console.log('do something2');
})
