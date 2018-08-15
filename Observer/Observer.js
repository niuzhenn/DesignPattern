/*
  观察者模式，又称发布/订阅模式，当发布者的状态发生改变时，所有订阅者都会得到通知并刷新自己的状态。
  应用场景：一般用于需要用户订阅的场景，一旦订阅的信息有更新，就会通知所有的订阅者。
*/

var publisher = {};

(function (q) {
  var fnList = [];
  
  q.publish = function (type, content) {
    if (!fnList[type]) return false;
    var subscribers = list[type],
        len = subscribers ? subscribers.length : 0;
    while (len--) {
      subscribers[len].func(type, content);
    }
  }
  
  q.subscribe = function (type, func) {
    if (!list[type]) {
      list[type] = [];
    }
    
    list[type].push(func);
  }
  
  q.unsubscribe = function () {
    for (var m in fnList) {
      if (fnList[m]) {
        
      }
    }
  }
  
}(publisher))

var A = publisher.subscribe('type1', function(type, content) {
  console.log(type + ' has been subscrbed!' + content);
})

publisher.publish('type1', 'type1 has done!');
