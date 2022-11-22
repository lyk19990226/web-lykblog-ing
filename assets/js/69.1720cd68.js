(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{661:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1、自定义指令directive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、自定义指令directive"}},[t._v("#")]),t._v(" 1、自定义指令directive")]),t._v(" "),a("h3",{attrs:{id:"_1-1-认识自定义指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-认识自定义指令"}},[t._v("#")]),t._v(" 1.1.认识自定义指令")]),t._v(" "),a("ul",[a("li",[t._v("在Vue的模板语法中我们学习过各种各样的指令：v-show、v-for、v-model等等，除了使用这些指令之外，Vue也允许我们来自定义自己的指令。\n"),a("ul",[a("li",[t._v("注意：在Vue中，代码的复用和抽象主要还是通过组件；")]),t._v(" "),a("li",[t._v("通常在某些情况下，你需要对DOM元素进行底层操作，这个时候就会用到自定义指令；")])])]),t._v(" "),a("li",[t._v("自定义指令分为两种：\n"),a("ul",[a("li",[t._v("自定义局部指令：组件中通过 directives 选项，只能在当前组件中使用；")]),t._v(" "),a("li",[t._v("自定义全局指令：app的 directive 方法，可以在任意组件中被使用；")])])]),t._v(" "),a("li",[t._v("比如我们来做一个非常简单的案例：当某个元素挂载完成后可以自定获取焦点\n"),a("ul",[a("li",[t._v("实现方式一：如果我们使用默认的实现方式；")]),t._v(" "),a("li",[t._v("实现方式二：自定义一个 v-focus 的局部指令；")]),t._v(" "),a("li",[t._v("实现方式三：自定义一个 v-focus 的全局指令；")])])]),t._v(" "),a("li",[a("strong",[t._v("注意：vue2跟vue3的自定义指令中的钩子即 生命周期是有一定的区别的；")])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-实现方式一-聚焦的默认实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-实现方式一-聚焦的默认实现"}},[t._v("#")]),t._v(" 1.2.实现方式一：聚焦的默认实现")]),t._v(" "),a("ul",[a("li",[t._v("vue3语法默认实现")])]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("inputRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onMounted "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" inputRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inputRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("less"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h3",{attrs:{id:"_1-3-实现方式二-局部自定义指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-实现方式二-局部自定义指令"}},[t._v("#")]),t._v(" 1.3.实现方式二：局部自定义指令")]),t._v(" "),a("ul",[a("li",[t._v("实现方式二：自定义一个 v-focus 的局部指令\n"),a("ul",[a("li",[t._v("这个自定义指令实现非常简单，我们只需要在"),a("strong",[t._v("组件选项中使用 directives 即可")]),t._v("；")]),t._v(" "),a("li",[t._v("它是一个对象，在对象中编写我们自定义指令的名称（注意：这里不需要加v-）；")]),t._v(" "),a("li",[t._v("自定义指令有一个生命周期，是在组件挂载后调用的 mounted，我们可以在其中完成操作；")])])]),t._v(" "),a("li",[a("strong",[t._v("Vue2实现")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://v2.cn.vuejs.org/v2/guide/custom-directive.html#ad",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue2.x的自定义指令"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/11afcd3cd78708e55.png",alt:"11afcd3cd78708e55.png"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Vue3实现")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cn.vuejs.org/guide/reusability/custom-directives.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.x的自定义指令"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/2019a97be7632492f.png",alt:"2019a97be7632492f.png"}})]),t._v(" "),a("h3",{attrs:{id:"_1-4-实现方式三-自定义全局指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-实现方式三-自定义全局指令"}},[t._v("#")]),t._v(" 1.4.实现方式三：自定义全局指令")]),t._v(" "),a("ul",[a("li",[t._v("自定义一个全局的v-focus指令可以让我们在任何地方直接使用")]),t._v(" "),a("li",[a("strong",[t._v("vue2实现")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/vue2.png",alt:"vue2.png"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("vue3实现")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/47ee1cf9667ac9f94.png",alt:"47ee1cf9667ac9f94.png"}})]),t._v(" "),a("h3",{attrs:{id:"_1-5-指令的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-指令的生命周期"}},[t._v("#")]),t._v(" 1.5.指令的生命周期")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一个指令定义对象可以提供如下几个钩子函数 (均为可选)："),a("strong",[t._v("（Vue2）")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("bind")]),t._v("：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。")]),t._v(" "),a("li",[a("code",[t._v("inserted")]),t._v("：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。")]),t._v(" "),a("li",[a("code",[t._v("update")]),t._v("：所在组件的 VNode 更新时调用，"),a("strong",[t._v("但是可能发生在其子 VNode 更新之前")]),t._v("。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。")]),t._v(" "),a("li",[a("code",[t._v("componentUpdated")]),t._v("：指令所在组件的 VNode "),a("strong",[t._v("及其子 VNode")]),t._v(" 全部更新后调用。")]),t._v(" "),a("li",[a("code",[t._v("unbind")]),t._v("：只调用一次，指令与元素解绑时调用。")]),t._v(" "),a("li",[t._v("具体每个钩子函数有哪些参数，具体参考："),a("a",{attrs:{href:"https://v2.cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue2钩子函数的参数"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("一个指令定义的对象，Vue提供了如下的几个钩子函数："),a("strong",[t._v("（Vue3）")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("created")]),t._v("：在绑定元素的 attribute 或事件监听器被应用之前调用；")]),t._v(" "),a("li",[a("code",[t._v("beforeMount")]),t._v("：当指令第一次绑定到元素并且在挂载父组件之前调用；")]),t._v(" "),a("li",[a("code",[t._v("mounted")]),t._v("：在绑定元素的父组件被挂载后调用；")]),t._v(" "),a("li",[a("code",[t._v("beforeUpdate")]),t._v("：在更新包含组件的 VNode 之前调用；")]),t._v(" "),a("li",[a("code",[t._v("updated")]),t._v("：在包含组件的 VNode 及其子组件的 VNode 更新后调用；")]),t._v(" "),a("li",[a("code",[t._v("beforeUnmount")]),t._v("：在卸载绑定元素的父组件之前调用；")]),t._v(" "),a("li",[a("code",[t._v("unmounted")]),t._v("：当指令与元素解除绑定且父组件已卸载时，只调用一次；")]),t._v(" "),a("li",[t._v("具体每个钩子函数有哪些参数，具体参考："),a("a",{attrs:{href:"https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3钩子函数的参数"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"_1-6-指令的参数和修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-指令的参数和修饰符"}},[t._v("#")]),t._v(" 1.6.指令的参数和修饰符")]),t._v(" "),a("ul",[a("li",[t._v("如果我们指令需要接受一些参数或者修饰符应该如何操作呢？结合下图进行学习\n"),a("ul",[a("li",[t._v("info是参数的名称；")]),t._v(" "),a("li",[t._v("nba,cba是修饰符的名称；")]),t._v(" "),a("li",[t._v("后面是传入的具体的值："),a("code",[t._v("'你好'")]),t._v("；")])])]),t._v(" "),a("li",[t._v("在我们的生命周期中，我们可以通过 "),a("strong",[t._v("binding")]),t._v(" 获取到对应的内容\n"),a("ul",[a("li",[a("code",[t._v("value")]),t._v("：传递给指令的值。例如在 "),a("code",[t._v('v-my-directive="1 + 1"')]),t._v(" 中，值是 "),a("code",[t._v("2")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("oldValue")]),t._v("：之前的值，仅在 "),a("code",[t._v("beforeUpdate")]),t._v(" 和 "),a("code",[t._v("updated")]),t._v(" 中可用。无论值是否更改，它都可用。")]),t._v(" "),a("li",[a("code",[t._v("arg")]),t._v("：传递给指令的参数 (如果有的话)。例如在 "),a("code",[t._v("v-my-directive:foo")]),t._v(" 中，参数是 "),a("code",[t._v('"foo"')]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("modifiers")]),t._v("：一个包含修饰符的对象 (如果有的话)。例如在 "),a("code",[t._v("v-my-directive.foo.bar")]),t._v(" 中，修饰符对象是 "),a("code",[t._v("{ foo: true, bar: true }")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("instance")]),t._v("：使用该指令的组件实例。")]),t._v(" "),a("li",[a("code",[t._v("dir")]),t._v("：指令的定义对象。")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/5f2abfe485741be3c.png",alt:"5f2abfe485741be3c.png"}})]),t._v(" "),a("ul",[a("li",[t._v("补充：钩子函数的el参数，表示的是使用该指令的元素对象")])]),t._v(" "),a("h3",{attrs:{id:"_1-7-自定义指令练习之时间格式化指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-自定义指令练习之时间格式化指令"}},[t._v("#")]),t._v(" 1.7.自定义指令练习之时间格式化指令")]),t._v(" "),a("ul",[a("li",[t._v("自定义指令案例：时间戳的显示需求：\n"),a("ul",[a("li",[t._v("在开发中，大多数情况下从服务器获取到的都是时间戳；")]),t._v(" "),a("li",[t._v("我们需要将时间戳转换成具体格式化的时间来展示；")]),t._v(" "),a("li",[t._v("在Vue2中我们可以通过过滤器来完成；")]),t._v(" "),a("li",[t._v("在Vue3中我们可以通过 计算属性（computed） 或者 自定义一个方法（methods） 来完成；")]),t._v(" "),a("li",[t._v("其实我们还可以通过一个自定义的指令来完成；")])])]),t._v(" "),a("li",[t._v("我们来实现一个可以自动对时间格式化的指令v-format-time：\n"),a("ul",[a("li",[t._v("这里我封装了一个函数，在首页中我们只需要调用这个函数并且传入app即可；")])])]),t._v(" "),a("li",[t._v("代码如下图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/6e88c1bc0fcbc1f1b.png",alt:"6e88c1bc0fcbc1f1b.png"}})]),t._v(" "),a("h2",{attrs:{id:"_2、内置组件teleport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、内置组件teleport"}},[t._v("#")]),t._v(" 2、内置组件Teleport")]),t._v(" "),a("h3",{attrs:{id:"_2-1-认识teleport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-认识teleport"}},[t._v("#")]),t._v(" 2.1.认识Teleport")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在组件化开发中，我们封装一个组件A，在另外一个组件B中使用：")]),t._v(" "),a("ul",[a("li",[t._v("那么组件A中template的元素，会被挂载到组件B中template的某个位置；")]),t._v(" "),a("li",[t._v("最终我们的应用程序会形成一颗DOM树结构；")])])]),t._v(" "),a("li",[a("p",[t._v("但是某些情况下，"),a("strong",[t._v("我们希望组件不是挂载在这个组件树上的")]),t._v("，"),a("strong",[t._v("可能是移动到Vue app之外的其他位置")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("比如移动到body元素上，或者我们有其他的div#app之外的元素上；")]),t._v(" "),a("li",[t._v("这个时候我们就可以通过teleport来完成；")]),t._v(" "),a("li",[a("strong",[t._v("注意：目标元素必须在安装组件之前存在，即目标不能由组件本身呈现，理想情况下应该位于整个Vue组件树之外")]),t._v(" "),a("ul",[a("li",[t._v("如果A组件中使用内置组件teleport时，目标不能由A组件本身呈现，否则会报错；理想情况下应该位于整个组件树/DOM树之外， 或该DOM树的根（指body的子元素）")])])])])]),t._v(" "),a("li",[a("p",[t._v("Teleport是什么呢？")]),t._v(" "),a("ul",[a("li",[t._v("它是一个Vue提供的内置组件，类似于react的Portals；")]),t._v(" "),a("li",[t._v("teleport翻译过来是心灵传输、远距离运输的意思；")]),t._v(" "),a("li",[t._v("teleport内置组件它有两个属性：\n"),a("ul",[a("li",[t._v("➢ to：指定将其中的内容移动到的"),a("strong",[t._v("目标元素")]),t._v("，可以使用选择器；")]),t._v(" "),a("li",[t._v("➢ disabled：是否禁用 teleport 的功能；")])])])])]),t._v(" "),a("li",[a("p",[t._v("我们来看下面代码的效果：")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/75ccbe728f442905a.png",alt:"75ccbe728f442905a.png"}})]),t._v(" "),a("h3",{attrs:{id:"_2-2-和组件结合使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-和组件结合使用"}},[t._v("#")]),t._v(" 2.2.和组件结合使用")]),t._v(" "),a("ul",[a("li",[t._v("当然，teleport也可以和组件结合一起来使用：\n"),a("ul",[a("li",[t._v("我们可以在 teleport 中使用组件，并且也可以给他传入一些数据；")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/8753f2b441ac37a42.png",alt:"8753f2b441ac37a42.png"}})]),t._v(" "),a("h3",{attrs:{id:"_2-3-内置组件teleport-避免错误使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-内置组件teleport-避免错误使用"}},[t._v("#")]),t._v(" 2.3.内置组件Teleport（避免错误使用）")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("注意：目标元素必须在安装组件之前存在，即目标不能由组件本身呈现，理想情况下应该位于整个Vue组件树之外")]),t._v(" "),a("ul",[a("li",[t._v("补充：如果A组件中使用内置组件teleport时，目标不能由A组件本身呈现，否则会报错；理想情况下 目标元素 应该位于整个组件树之外")]),t._v(" "),a("li",[t._v("或者如果沿着DOM树向上找不到的元素(即不是teleport内置组件的祖先元素)，也可以指定为目标元素：如下图案例的div.app1元素")]),t._v(" "),a("li",[t._v("像div.app元素，我们发现可以找到，即是teleport内置组件的祖先元素；所以不可指定为目标元素；\n"),a("ul",[a("li",[t._v("得出结论："),a("strong",[t._v("teleport内置组件的祖先元素不可指定为teleport的目标元素")])])])]),t._v(" "),a("li",[t._v("特殊情况：当然有一种情况，目标元素可以是teleport内置组件的祖先元素，这个目标祖先元素必须是body元素的子元素")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/9ecb09c9017a24889.png",alt:"9ecb09c9017a24889.png"}})]),t._v(" "),a("h3",{attrs:{id:"_2-4-多个teleport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-多个teleport"}},[t._v("#")]),t._v(" 2.4.多个teleport")]),t._v(" "),a("ul",[a("li",[t._v("如果我们将多个teleport应用到同一个目标上（to的值相同），"),a("strong",[t._v("那么这些目标会进行合并")]),t._v("：")]),t._v(" "),a("li",[t._v("实现效果如下：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/1062d294108238dd21.png",alt:"1062d294108238dd21.png"}})]),t._v(" "),a("h2",{attrs:{id:"_3、异步组件和suspense内置组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、异步组件和suspense内置组件"}},[t._v("#")]),t._v(" 3、异步组件和Suspense内置组件")]),t._v(" "),a("ul",[a("li",[t._v("注意：目前（2022-08-28）Suspense显示的是一个"),a("strong",[t._v("实验性的特性")]),t._v("，API随时可能会修改。"),a("a",{attrs:{href:"https://cn.vuejs.org/guide/built-ins/suspense.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Suspense内置组件"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Suspense是一个内置的全局组件，该组件有两个插槽：\n"),a("ul",[a("li",[t._v("default：如果default可以显示，那么显示default的内容；")]),t._v(" "),a("li",[t._v("fallback：如果default无法显示，那么会显示fallback插槽的内容；")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/119afa2130eab58af3.png",alt:"119afa2130eab58af3.png"}})]),t._v(" "),a("h2",{attrs:{id:"_4、认识vue插件-vue-use-object-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、认识vue插件-vue-use-object-function"}},[t._v("#")]),t._v(" 4、认识Vue插件(vue.use(object/function))")]),t._v(" "),a("h3",{attrs:{id:"_4-1-认识vue插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-认识vue插件"}},[t._v("#")]),t._v(" 4.1.认识Vue插件")]),t._v(" "),a("ul",[a("li",[t._v("通常我们向Vue全局添加一些功能时，会采用插件的模式，它有两种编写方式：\n"),a("ul",[a("li",[t._v("对象类型：一个对象，但是必须包含一个 install 的函数，该函数会在安装插件时执行；")]),t._v(" "),a("li",[t._v("函数类型：一个function，这个函数会在安装插件时自动执行；")])])]),t._v(" "),a("li",[t._v("插件可以完成的功能没有限制，比如下面的几种都是可以的：\n"),a("ul",[a("li",[t._v("添加全局方法或者 property，通过把它们添加到 config.globalProperties 上实现；")]),t._v(" "),a("li",[t._v("添加全局资源：指令/过滤器/过渡等；")]),t._v(" "),a("li",[t._v("通过全局 mixin 来添加一些组件选项；")]),t._v(" "),a("li",[t._v("一个库，提供自己的 API，同时提供上面提到的一个或多个功能；")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-2-插件的编写方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-插件的编写方式"}},[t._v("#")]),t._v(" 4.2.插件的编写方式")]),t._v(" "),a("ul",[a("li",[t._v("对象类型的写法")]),t._v(" "),a("li",[t._v("函数类型的写法")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.对象类型的写法 ")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kobe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'kobe'")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当我使用use安装插件,且传入的是对象时,会调用该对象的install方法;且会将app作为install方法的参数传入'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.函数类型的写法")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当我使用use安装插件,且传入的是函数时,会直接调用该函数;且会将app作为该函数的参数传入'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/22/12585728a97016504a.png",alt:"12585728a97016504a.png"}})]),t._v(" "),a("h2",{attrs:{id:"_5、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、"}},[t._v("#")]),t._v(" 5、")]),t._v(" "),a("h2",{attrs:{id:"_6、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、"}},[t._v("#")]),t._v(" 6、")]),t._v(" "),a("h2",{attrs:{id:"_7、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、"}},[t._v("#")]),t._v(" 7、")]),t._v(" "),a("h2",{attrs:{id:"_8、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、"}},[t._v("#")]),t._v(" 8、")]),t._v(" "),a("h2",{attrs:{id:"_9、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、"}},[t._v("#")]),t._v(" 9、")]),t._v(" "),a("h2",{attrs:{id:"_10、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、"}},[t._v("#")]),t._v(" 10、")]),t._v(" "),a("h2",{attrs:{id:"_11、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、"}},[t._v("#")]),t._v(" 11、")]),t._v(" "),a("h2",{attrs:{id:"_12、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、"}},[t._v("#")]),t._v(" 12、")])])}),[],!1,null,null,null);s.default=n.exports}}]);