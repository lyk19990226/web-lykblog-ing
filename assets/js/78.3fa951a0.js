(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{672:function(t,a,s){"use strict";s.r(a);var e=s(5),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1、小程序的事件监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、小程序的事件监听"}},[t._v("#")]),t._v(" 1、小程序的事件监听")]),t._v(" "),s("ul",[s("li",[t._v("什么时候会产生事件呢？\n"),s("ul",[s("li",[t._v("小程序需要经常和用户进行某种交互，比如点击界面上的某个按钮或者区域，比如滑动了某个区域；")]),t._v(" "),s("li",[t._v("事件是视图层到逻辑层的通讯方式；")]),t._v(" "),s("li",[t._v("事件可以将用户的行为反馈到逻辑层进行处理；")]),t._v(" "),s("li",[t._v("事件可以绑定在组件上，当触发事件时，就会执行逻辑层中对应的事件处理函数；")]),t._v(" "),s("li",[t._v("事件对象可以携带额外信息，如 id, dataset, touches；")])])]),t._v(" "),s("li",[t._v("事件时如何处理呢？\n"),s("ul",[s("li",[t._v("事件是通过 bind/catch 这个属性绑定在组件上的（和普通的属性写法很相似, 以 key=“value”形式）；")]),t._v(" "),s("li",[t._v("key 以 bind 或 catch 开头, 从 1.5.0 版本开始, 可以在 bind 和 catch 后加上一个冒号；")]),t._v(" "),s("li",[t._v("同时在当前页面的 Page 构造器中定义对应的事件处理函数, 如果没有对应的函数, 触发事件时会报错；")]),t._v(" "),s("li",[t._v("比如当用户点击该 button 区域时，达到触发条件生成事件 tap，该事件处理函数会被执行，同时还会收到一个"),s("strong",[t._v("事件对象 event")]),t._v("。")])])])]),t._v(" "),s("h2",{attrs:{id:"_2、常见事件类型划分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、常见事件类型划分"}},[t._v("#")]),t._v(" 2、常见事件类型划分")]),t._v(" "),s("h3",{attrs:{id:"_2-1-组件的特殊事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-组件的特殊事件"}},[t._v("#")]),t._v(" 2.1.组件的特殊事件")]),t._v(" "),s("ul",[s("li",[t._v("某些组件会有自己特性的事件类型，大家可以在使用组件时具体查看对应的文档\n"),s("ul",[s("li",[t._v("比如 input 有 bindinput/bindblur/bindfocus 等")]),t._v(" "),s("li",[t._v("比如 scroll-view 有 bindscrolltowpper/bindscrolltolower 等")])])]),t._v(" "),s("li",[t._v("这里我们讨论几个组件都有的, 并且也比较常见的事件类型：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/14/1a2e408b62374bde4.png",alt:"1a2e408b62374bde4.png"}})]),t._v(" "),s("h2",{attrs:{id:"_3、事件对象属性分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、事件对象属性分析"}},[t._v("#")]),t._v(" 3、事件对象属性分析")]),t._v(" "),s("h3",{attrs:{id:"_3-1-事件对象-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-事件对象-event"}},[t._v("#")]),t._v(" 3.1.事件对象 event")]),t._v(" "),s("ul",[s("li",[t._v("当某个事件触发时, 会产生一个事件对象, 并且这个对象被传入到回调函数中, 事件对象有哪些常见的属性呢?")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/14/25d429fb20c17bd10.png",alt:"25d429fb20c17bd10.png"}})]),t._v(" "),s("h3",{attrs:{id:"_3-2-currenttarget-和-target-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-currenttarget-和-target-的区别"}},[t._v("#")]),t._v(" 3.2.currentTarget 和 target 的区别")]),t._v(" "),s("ul",[s("li",[t._v("currentTarget：处理该点击事件的元素对象")]),t._v(" "),s("li",[t._v("target：点击的目标元素对象")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/14/302c526d2797a98ff.png",alt:"302c526d2797a98ff.png"}})]),t._v(" "),s("h3",{attrs:{id:"_3-3-event-中-touches-和-changedtouches-属性的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-event-中-touches-和-changedtouches-属性的区别"}},[t._v("#")]),t._v(" 3.3.event 中 touches 和 changedTouches 属性的区别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("touches 和 changedTouches 属性值是数组，记录着手指触摸点（一个或多个）的位置信息")])]),t._v(" "),s("li",[s("p",[t._v("在 touchend(手指触摸动作结束)中不同")]),t._v(" "),s("ul",[s("li",[t._v("touches 为空；")]),t._v(" "),s("li",[t._v("changedTouches 为动作结束前手指在指定区域的触摸个数")])])]),t._v(" "),s("li",[s("p",[t._v("多手指触摸时不同")]),t._v(" "),s("ul",[s("li",[t._v("如果刚开始触摸点只有 1 个（a），则 touches 和 changedTouches 都记录着(a)触摸点的位置信息")]),t._v(" "),s("li",[t._v("如果在触摸点只有 1 个（a）的前提下，又加了两个触摸点（b,c）,则 touches 记录着(a,b,c)触摸点的位置信息；则 changedTouches 记录着(b,c)触摸点的位置信息")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/15/40cc243dc23201170.png",alt:"40cc243dc23201170.png"}})]),t._v(" "),s("h2",{attrs:{id:"_4、事件参数传递方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、事件参数传递方法"}},[t._v("#")]),t._v(" 4、事件参数传递方法")]),t._v(" "),s("h3",{attrs:{id:"_4-1-事件参数传递data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-事件参数传递data"}},[t._v("#")]),t._v(" 4.1.事件参数传递"),s("code",[t._v("data-*")])]),t._v(" "),s("ul",[s("li",[t._v("当视图层发生事件时，某些情况需要事件携带一些参数到执行的函数中, 这个时候就可以通过 data-属性来完成：\n"),s("ul",[s("li",[t._v("格式：data-属性的名称")]),t._v(" "),s("li",[t._v("获取：e.currentTarget.dataset.属性的名称")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/15/592043a05b1aab167.png",alt:"592043a05b1aab167.png"}})]),t._v(" "),s("h3",{attrs:{id:"_4-2-事件参数传递-mark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-事件参数传递-mark"}},[t._v("#")]),t._v(" 4.2.事件参数传递 mark")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/15/6cd392d178a019cde.png",alt:"6cd392d178a019cde.png"}})]),t._v(" "),s("h3",{attrs:{id:"_4-3-事件传递案例练习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-事件传递案例练习"}},[t._v("#")]),t._v(" 4.3.事件传递案例练习")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/15/7.png",alt:"7.png"}})]),t._v(" "),s("h2",{attrs:{id:"_5、冒泡和捕获的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、冒泡和捕获的区别"}},[t._v("#")]),t._v(" 5、冒泡和捕获的区别")]),t._v(" "),s("h3",{attrs:{id:"_5-1-冒泡和捕获的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-冒泡和捕获的区别"}},[t._v("#")]),t._v(" 5.1.冒泡和捕获的区别")]),t._v(" "),s("ul",[s("li",[t._v("当界面产生一个事件时，事件分为了捕获阶段和冒泡阶段。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/15/8.png",alt:"8.png"}})]),t._v(" "),s("ul",[s("li",[t._v("事件捕获与事件传递；如下图所示")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/15/9.png",alt:"9.png"}})]),t._v(" "),s("h3",{attrs:{id:"_5-2-catch-阻止事件传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-catch-阻止事件传递"}},[t._v("#")]),t._v(" 5.2.catch 阻止事件传递")]),t._v(" "),s("ul",[s("li",[t._v("在 js 原生开发中，我们使用 event.stopPropagation 方法：阻止事件的进一步传递（冒泡或者捕获都可以阻止）；这里的 "),s("code",[t._v("catch:事件类型")]),t._v(" 同理")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/15/10.png",alt:"10.png"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);