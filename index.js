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



/*
  组合模式是将对象组合成树形结构以表示“部分整体”的层次结构，组合模式使得用户对单个对象和组合对象的使用具有一致性。
*/

var News = function () {
  this.children = [];
  this.element = null;
}

News.prototype = {
  init: function () {
    throw new Error('请重写你的init方法');
  },
  add: function () {
    throw new Error('请重写你的add方法');
  },
  getElement: function () {
    throw new Error('请重写你的getElement方法');
  }
}

var Container = function (id, parent) {
  News.call(this);
  this.id = id;
  this.parent = parent;
  this.init();
}
