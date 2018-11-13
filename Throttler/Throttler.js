/*
  节流模式一般适用于会频繁重复触发的事件进行控制，执行最后一次操作并取消其他的操作，以提高性能。
  常称之为节流函数。
*/

var throttle = function () {
  var isClear = arguments[0], fn;
}