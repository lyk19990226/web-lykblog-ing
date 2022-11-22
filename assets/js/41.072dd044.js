(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{633:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1、网页被解析的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、网页被解析的过程"}},[t._v("#")]),t._v(" 1、网页被解析的过程")]),t._v(" "),a("ul",[a("li",[t._v("大家有没有深入思考过：一个网页URL从输入到浏览器中，到显示经历过怎么样的解析过程呢？\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_49821579/article/details/113874364",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考该文章"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("strong",[t._v("解析过程描述（不包含js文件解析过程）")]),t._v(" "),a("ol",[a("li",[t._v("用户输入域名")]),t._v(" "),a("li",[t._v("浏览器通过DNS域名解析系统 返回该域名对应的ip地址（就可以找到对应的服务器了）然后从ip地址对应的主机发送http请求 获取对应的静态资源")]),t._v(" "),a("li",[t._v("默认情况下服务器会给浏览器返回index.html文件（下载index.html文件）")]),t._v(" "),a("li",[t._v("下载完成后，浏览器的渲染引擎 会对该html文件进行解析，解析HTML，会构建"),a("strong",[t._v("DOM Tree")])]),t._v(" "),a("li",[t._v("在解析的过程中，如果遇到CSS的link元素，那么会由浏览器负责下载对应的CSS文件（浏览器下载完CSS文件后，就会对CSS文件进行解析，解析出对应的规则树"),a("strong",[t._v("CSSOM Tree")]),t._v("）；\n"),a("ul",[a("li",[t._v("注意：但是下载CSS和CSS解析是不会影响DOM的解析的；")]),t._v(" "),a("li",[t._v("注意：link元素不会阻塞DOM Tree的构建过程，但是会阻塞Render Tree的构建过程（这是因为Render Tree在构建时，需要对应的CSSOM Tree； ）")])])]),t._v(" "),a("li",[t._v("当有了DOM Tree和 CSSOM Tree后，就可以两个结合来构建"),a("strong",[t._v("Render Tree")]),t._v("了\n"),a("ul",[a("li",[t._v("注意：Render Tree和DOM Tree并不是一一对应的关系，比如对于display为none的元素，压根不会出现在render tree中；")])])]),t._v(" "),a("li",[t._v("当有了Render Tree后，渲染引擎会在渲染树（Render Tree）上运行布局（Layout）以计算每个节点的几何体。\n"),a("ul",[a("li",[t._v("渲染树会表示显示那些节点以及其他样式，但是不表示每个节点的尺寸、位置等信息；")]),t._v(" "),a("li",[t._v("布局是确定呈现树中所有节点的宽度、高度和位置信息；")])])]),t._v(" "),a("li",[t._v("当运行布局完成后，渲染引擎会将每个节点绘制（Paint）到屏幕上\n"),a("ul",[a("li",[t._v("在绘制阶段，浏览器将布局阶段计算的每个frame转为屏幕上实际的像素点；")]),t._v(" "),a("li",[t._v("包括将元素的可见部分进行绘制，比如文本、颜色、边框、阴影、替换元素（比如img）")])])]),t._v(" "),a("li")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jLXtR1.png",alt:"jLXtR1.png"}})]),t._v(" "),a("ul",[a("li",[t._v("要想深入理解下载的过程，我们还要先理解，一个index.html被下载下来后是如何被解析和显示在浏览器上的")])]),t._v(" "),a("h2",{attrs:{id:"_2、浏览器的内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、浏览器的内核"}},[t._v("#")]),t._v(" 2、浏览器的内核")]),t._v(" "),a("ul",[a("li",[t._v("常见的浏览器内核有\n"),a("ul",[a("li",[t._v("Trident （ 三叉戟）：IE、360安全浏览器、搜狗高速浏览器、百度浏览器、UC浏览器；")]),t._v(" "),a("li",[t._v("Gecko（ 壁虎） ：Mozilla Firefox；")]),t._v(" "),a("li",[t._v("Presto（急板乐曲）-> Blink （眨眼）：Opera")]),t._v(" "),a("li",[t._v("Webkit ：Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器（Android、iOS）")]),t._v(" "),a("li",[t._v("Webkit -> Blink ：Google Chrome，Edge")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jLjqtH.png",alt:"jLjqtH.png"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("我们经常说的浏览器内核指的是浏览器的排版引擎：【浏览器内核包含：渲染引擎和JS引擎(v8)】")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("排版引擎")]),t._v("（layout engine），也称为"),a("strong",[t._v("浏览器引擎")]),t._v("（browser engine）、"),a("strong",[t._v("页面渲染引擎")]),t._v("（rendering engine）或"),a("strong",[t._v("样版引擎")]),t._v("。")])])]),t._v(" "),a("li",[a("p",[t._v("也就是一个网页下载下来后，就是由我们的渲染引擎来帮助我们解析的。")])])]),t._v(" "),a("h2",{attrs:{id:"_3、渲染引擎如何解析页面呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、渲染引擎如何解析页面呢"}},[t._v("#")]),t._v(" 3、渲染引擎如何解析页面呢？")]),t._v(" "),a("ul",[a("li",[t._v("渲染引擎在拿到一个页面后，如何解析整个页面并且最终呈现出我们的网页呢？\n"),a("ul",[a("li",[t._v("我们之前学习过下面的这幅图，现在让我们更加详细的学习它的过程；")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jLxDdU.png",alt:"jLxDdU.png"}})]),t._v(" "),a("h2",{attrs:{id:"_4、渲染页面的详细流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、渲染页面的详细流程"}},[t._v("#")]),t._v(" 4、渲染页面的详细流程")]),t._v(" "),a("ul",[a("li",[t._v("更详细的解析过程如下：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jLzj39.png",alt:"jLzj39.png"}})]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.html5rocks.com/en/tutorials/internals/howbrowserswork",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解该图，可以参考该文章"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_5、渲染引擎解析页面的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、渲染引擎解析页面的过程"}},[t._v("#")]),t._v(" 5、渲染引擎解析页面的过程")]),t._v(" "),a("h3",{attrs:{id:"_5-1-解析一-html解析过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-解析一-html解析过程"}},[t._v("#")]),t._v(" 5.1.解析一：HTML解析过程")]),t._v(" "),a("ul",[a("li",[t._v("因为默认情况下服务器会给浏览器返回index.html文件，所以解析HTML是所有步骤的开始：")]),t._v(" "),a("li",[t._v("解析HTML，会构建DOM Tree：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jOFOZn.png",alt:"jOFOZn.png"}})]),t._v(" "),a("h3",{attrs:{id:"_5-2-解析二-生成css规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-解析二-生成css规则"}},[t._v("#")]),t._v(" 5.2.解析二 – 生成CSS规则")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在解析的过程中，如果遇到CSS的link元素，那么会由浏览器负责下载对应的CSS文件：")]),t._v(" "),a("ul",[a("li",[t._v("注意：下载CSS文件是不会影响DOM的解析的；")])])]),t._v(" "),a("li",[a("p",[t._v("浏览器下载完CSS文件后，就会对CSS文件进行解析，解析出对应的规则树：")]),t._v(" "),a("ul",[a("li",[t._v("我们可以称之为 CSSOM（CSS Object Model，CSS对象模型）；")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jOkpzF.png",alt:"jOkpzF.png"}})]),t._v(" "),a("h3",{attrs:{id:"_5-3-解析三-构建render-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-解析三-构建render-tree"}},[t._v("#")]),t._v(" 5.3.解析三 – 构建Render Tree")]),t._v(" "),a("ul",[a("li",[t._v("当有了DOM Tree和 CSSOM Tree后，就可以两个结合来构建Render Tree了")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jOkkZR.png",alt:"jOkkZR.png"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("注意一：link元素不会阻塞DOM Tree的构建过程，但是会阻塞Render Tree的构建过程")]),t._v(" "),a("ul",[a("li",[t._v("这是因为Render Tree在构建时，需要对应的CSSOM Tree；")])])]),t._v(" "),a("li",[a("p",[t._v("注意二：Render Tree和DOM Tree并不是一一对应的关系，比如对于display为none的元素，压根不会出现在render tree中；")])])]),t._v(" "),a("h3",{attrs:{id:"_5-4-解析四-布局-layout-和绘制-paint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-解析四-布局-layout-和绘制-paint"}},[t._v("#")]),t._v(" 5.4.解析四 – 布局（layout）和绘制（Paint）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第四步是在渲染树（Render Tree）上运行布局（Layout）以计算每个节点的几何体。")]),t._v(" "),a("ul",[a("li",[t._v("渲染树会表示显示哪些节点以及其他样式，但是不表示每个节点的尺寸、位置等信息；")]),t._v(" "),a("li",[t._v("布局是确定呈现树中所有节点的宽度、高度和位置信息；")])])]),t._v(" "),a("li",[a("p",[t._v("第五步是将每个节点绘制（Paint）到屏幕上")]),t._v(" "),a("ul",[a("li",[t._v("在绘制阶段，浏览器将布局阶段计算的每个frame转为屏幕上实际的像素点；")]),t._v(" "),a("li",[t._v("包括将元素的可见部分进行绘制，比如文本、颜色、边框、阴影、替换元素（比如img）")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jOkAd1.png",alt:"jOkAd1.png"}})]),t._v(" "),a("h2",{attrs:{id:"_6、回流和重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、回流和重绘"}},[t._v("#")]),t._v(" 6、回流和重绘")]),t._v(" "),a("h3",{attrs:{id:"_6-1-回流-重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-回流-重排"}},[t._v("#")]),t._v(" 6.1.回流（重排）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("理解回流reflow：（也可以称之为重排）")]),t._v(" "),a("ul",[a("li",[t._v("第一次确定节点的大小和位置，称之为布局（layout）。")]),t._v(" "),a("li",[t._v("之后对节点的大小、位置修改重新计算称之为回流。")])])]),t._v(" "),a("li",[a("p",[t._v("什么情况下引起回流呢？")]),t._v(" "),a("ul",[a("li",[t._v("比如DOM结构发生改变（添加新的节点或者移除节点）；")]),t._v(" "),a("li",[t._v("比如改变了布局（修改了width、height、padding、font-size等值）")]),t._v(" "),a("li",[t._v("比如窗口resize（修改了窗口的尺寸等）")]),t._v(" "),a("li",[t._v("比如调用getComputedStyle方法获取尺寸、位置信息；")])])])]),t._v(" "),a("h3",{attrs:{id:"_6-2-重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-重绘"}},[t._v("#")]),t._v(" 6.2.重绘")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("理解重绘repaint：")]),t._v(" "),a("ul",[a("li",[t._v("第一次渲染内容称之为绘制（paint）。")]),t._v(" "),a("li",[t._v("之后重新渲染称之为重绘。")])])]),t._v(" "),a("li",[a("p",[t._v("什么情况下会引起重绘呢？")]),t._v(" "),a("ul",[a("li",[t._v("比如修改背景色、文字颜色、边框颜色、样式等；")])])])]),t._v(" "),a("h3",{attrs:{id:"_6-3-尽可能减少回流重绘的办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-尽可能减少回流重绘的办法"}},[t._v("#")]),t._v(" 6.3.尽可能减少回流重绘的办法")]),t._v(" "),a("ul",[a("li",[t._v("回流一定会引起重绘，所以回流是一件很消耗性能的事情。所以在开发中要尽量避免发生回流：\n"),a("ul",[a("li",[t._v("1.修改样式时尽量一次性修改\n"),a("ul",[a("li",[t._v("比如通过cssText修改，比如通过添加class修改")])])]),t._v(" "),a("li",[t._v("2.尽量避免频繁的操作DOM\n"),a("ul",[a("li",[t._v("我们可以在一个DocumentFragment或者父元素中将要操作的DOM操作完成，再一次性的操作；")])])]),t._v(" "),a("li",[t._v("3.尽量避免通过getComputedStyle获取尺寸、位置等信息；")]),t._v(" "),a("li",[t._v("4.对某些元素使用position的absolute或者fixed\n"),a("ul",[a("li",[t._v("并不是不会引起回流，而是开销相对较小，不会对其他元素造成影响。")])])])])])]),t._v(" "),a("h2",{attrs:{id:"_7、特殊解析-composite合成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、特殊解析-composite合成"}},[t._v("#")]),t._v(" 7、特殊解析 – composite合成")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("绘制的过程，可以将布局后的元素绘制到多个合成图层中。")]),t._v(" "),a("ul",[a("li",[t._v("这是浏览器的一种优化手段；")])])]),t._v(" "),a("li",[a("p",[t._v("默认情况下，标准流中的内容都是被绘制在同一个图层（Layer）中的；")])]),t._v(" "),a("li",[a("p",[t._v("而一些特殊的属性，会创建一个新的合成层（ CompositingLayer ），并且新的图层可以利用GPU来加速绘制；")]),t._v(" "),a("ul",[a("li",[t._v("因为每个合成层都是单独渲染的；")])])]),t._v(" "),a("li",[a("p",[t._v("那么哪些属性可以形成新的合成层呢？常见的一些属性：")]),t._v(" "),a("ul",[a("li",[t._v("3D transforms")]),t._v(" "),a("li",[t._v("video、canvas、iframe")]),t._v(" "),a("li",[t._v("opacity 动画转换时；")]),t._v(" "),a("li",[t._v("position: fixed")]),t._v(" "),a("li",[t._v("will-change：一个实验性的属性，提前告诉浏览器元素可能发生哪些变化；")]),t._v(" "),a("li",[t._v("animation 或 transition 设置了opacity、transform；")])])]),t._v(" "),a("li",[a("p",[t._v("分层确实可以提高性能，但是它以内存管理为代价，因此不应作为 web 性能优化策略的一部分而过度使用。")]),t._v(" "),a("ul",[a("li",[t._v("由于合成层本身是占用内存的，当浏览器出现大量无法被压缩的合成层时（层爆炸），会导致内存紧张，GPU资源过度消耗等问题，")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/79881310",target:"_blank",rel:"noopener noreferrer"}},[t._v("composite合成可参考该文章"),a("OutboundLink")],1)])])])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box:hover + .bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("-50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transform 10s ease-in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jOMa4J.png",alt:"jOMa4J.png"}})]),t._v(" "),a("h2",{attrs:{id:"_8、script元素和页面解析的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、script元素和页面解析的关系"}},[t._v("#")]),t._v(" 8、script元素和页面解析的关系")]),t._v(" "),a("ul",[a("li",[t._v("我们现在已经知道了页面的渲染过程，但是JavaScript在哪里呢？\n"),a("ul",[a("li",[t._v("事实上，浏览器在解析HTML的过程中，遇到了script元素是不能继续构建DOM树的；")]),t._v(" "),a("li",[t._v("它会停止继续构建，首先下载JavaScript代码，并且执行JavaScript的脚本；")]),t._v(" "),a("li",[t._v("只有等到JavaScript脚本执行结束后，才会继续解析HTML，构建DOM树；")]),t._v(" "),a("li",[t._v("如下图：(注：我这里用debugger来让js脚本停留在执行过程中)")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jOQqL6.png",alt:"jOQqL6.png"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("为什么要这样做呢？")]),t._v(" "),a("ul",[a("li",[t._v("这是因为JavaScript的作用之一就是操作DOM，并且可以修改DOM；")]),t._v(" "),a("li",[t._v("如果我们等到DOM树构建完成并且渲染再执行JavaScript，会造成严重的回流和重绘，影响页面的性能；")]),t._v(" "),a("li",[t._v("所以会在遇到script元素时，优先下载和执行JavaScript代码，再继续构建DOM树；")])])]),t._v(" "),a("li",[a("p",[t._v("但是这个也往往会带来新的问题，特别是现代页面开发中：")]),t._v(" "),a("ul",[a("li",[t._v("在目前的开发模式中（比如Vue、React），脚本往往比HTML页面更“重”，处理时间需要更长；")]),t._v(" "),a("li",[t._v("所以会造成页面的解析阻塞，在脚本下载、执行完成之前，用户在界面上什么都看不到；")])])]),t._v(" "),a("li",[a("p",[t._v("为了解决这个问题，script元素给我们提供了两个属性（attribute）：defer和async。")])])]),t._v(" "),a("h2",{attrs:{id:"_9、script元素的defer属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、script元素的defer属性"}},[t._v("#")]),t._v(" 9、script元素的defer属性")]),t._v(" "),a("ul",[a("li",[t._v("defer 属性告诉浏览器不要等待脚本下载，而继续解析HTML，构建DOM Tree**。**\n"),a("ul",[a("li",[t._v("脚本会由浏览器来进行下载，但是不会阻塞DOM Tree的构建过程；")]),t._v(" "),a("li",[t._v("如果脚本提前下载好了，它会等待DOM Tree构建完成，在DOMContentLoaded事件之前先执行defer中的代码；")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jOlvn0.png",alt:"jOlvn0.png"}})]),t._v(" "),a("ul",[a("li",[t._v("所以DOMContentLoaded总是会等待defer中的代码先执行完成。才会触发回调")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2022/07/22/jO1F39.png",alt:"jO1F39.png"}})]),t._v(" "),a("ul",[a("li",[t._v("另外多个带defer的脚本是可以保持正确的顺序执行的。")]),t._v(" "),a("li",[t._v("从某种角度来说，defer可以提高页面的性能，并且推荐放到head元素中；")]),t._v(" "),a("li",[t._v("注意：defer仅适用于外部脚本，对于script默认内容会被忽略。\n"),a("ul",[a("li",[a("code",[t._v('<script src="./test.js" defer><\/script>')]),t._v(" 适用于外部脚本")]),t._v(" "),a("li",[a("code",[t._v("<script defer><\/script>")]),t._v("  会被忽略，defer属性不起作用")])])])]),t._v(" "),a("h2",{attrs:{id:"_10、script元素的async属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、script元素的async属性"}},[t._v("#")]),t._v(" 10、script元素的async属性")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("async 特性与 defer 有些类似，它也能够让脚本不阻塞页面。")])]),t._v(" "),a("li",[a("p",[t._v("async是让一个脚本完全独立的：")]),t._v(" "),a("ul",[a("li",[t._v("浏览器不会因 async 脚本而阻塞（与 defer 类似）；")]),t._v(" "),a("li",[t._v("async脚本不能保证顺序，它是独立下载、独立运行，不会等待其他脚本；")]),t._v(" "),a("li",[t._v("async不会能保证在DOMContentLoaded之前或者之后执行；")])])]),t._v(" "),a("li",[a("p",[t._v("defer通常用于需要在文档解析后操作DOM的JavaScript代码，并且对多个script文件有顺序要求的；")])]),t._v(" "),a("li",[a("p",[t._v("async通常用于独立的脚本，对其他脚本，甚至DOM没有依赖的；")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);