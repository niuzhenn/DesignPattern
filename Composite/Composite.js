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