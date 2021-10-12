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
  装饰者模式：在不变原对象的基础上，通过对其进行包装拓展（添加属性或方法）使原有对象可以满足用户的更复杂需求。
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
  组合模式：将对象组合成树形结构以表示“部分整体”的层次结构，组合模式使得用户对单个对象和组合对象的使用具有一致性。
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



/*
  观察者模式：又称发布/订阅模式，当发布者的状态发生改变时，所有订阅者都会得到通知并刷新自己的状态。
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


/**
 * 策略模式：将算法的使用和算法的实现分离开来。
    一个基于策略模式的程序至少由两部分组成：
    第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。
    第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。要做到这点，说明Context 中要维持对某个策略对象的引用
    优点
    可以有效地避免多重条件语句，将一系列方法封装起来也更直观，利于维护
    缺点
    往往策略集会比较多，我们需要事先就了解定义好所有的情况
 */
// 加权映射关系
var levelMap = {
    S: 10,
    A: 8,
    B: 6,
    C: 4
};

// 组策略
var scoreLevel = {
    basicScore: 80,

    S: function() {
        return this.basicScore + levelMap['S']; 
    },

    A: function() {
        return this.basicScore + levelMap['A']; 
    },

    B: function() {
        return this.basicScore + levelMap['B']; 
    },

    C: function() {
        return this.basicScore + levelMap['C']; 
    }
}

// 调用
function getScore(level) {
    return scoreLevel[level] ? scoreLevel[level]() : 0;
}

console.log(
    getScore('S'),
    getScore('A'),
    getScore('B'),
    getScore('C'),
    getScore('D')
); // 90 88 86 84 0


/**
 * 代理模式：实现对访问对象返回一个代替对象的模式
 */


/**
 * 外观模式：为子系统中的一组接口提供一个一致的界面，定义一个高层接口，这个接口使子系统更加容易使用
 */
// 三个处理函数
function start() {
    console.log('start');
}

function doing() {
    console.log('doing');
}

function end() {
    console.log('end');
}

// 外观函数，将一些处理统一起来，方便调用
function execute() {
    start();
    doing();
    end();
}


// 调用init开始执行
function init() {
    // 此处直接调用了高层函数，也可以选择越过它直接调用相关的函数
    execute();
}

init(); // start doing end


/**
 * 适配器模式：是解决两个软件实体间的接口不兼容的问题，对不兼容的部分进行适配
 */

// 渲染数据，格式限制为数组了
function renderData(data) {
    data.forEach(function(item) {
        console.log(item);
    });
}

// 对非数组的进行转换适配
function arrayAdapter(data) {
    if (typeof data !== 'object') {
        return [];
    }

    if (Object.prototype.toString.call(data) === '[object Array]') {
        return data;
    }

    var temp = [];

    for (var item in data) {
        if (data.hasOwnProperty(item)) {
            temp.push(data[item]);
        }
    }

    return temp;
}

var data = {
    0: 'A',
    1: 'B',
    2: 'C'
};

renderData(arrayAdapter(data)); // A B C
