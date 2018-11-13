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