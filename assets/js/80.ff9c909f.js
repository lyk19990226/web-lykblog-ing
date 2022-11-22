(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{669:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1、网络请求api和封装-wx-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、网络请求api和封装-wx-request"}},[t._v("#")]),t._v(" 1、网络请求API和封装 wx.request")]),t._v(" "),s("h3",{attrs:{id:"_1-1-网络请求-api参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-网络请求-api参数"}},[t._v("#")]),t._v(" 1.1.网络请求 – API参数")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.request"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("微信提供了专属的API接口,用于网络请求: "),s("strong",[t._v("wx.request(Object object)")])]),t._v(" "),s("li",[t._v("比较关键的几个属性解析:\n"),s("ul",[s("li",[t._v("➢ url: 必传, 不然请求什么.")]),t._v(" "),s("li",[t._v("➢ data: 请求参数")]),t._v(" "),s("li",[t._v("➢ method: 请求的方式")]),t._v(" "),s("li",[t._v("➢ success: 成功时的回调")]),t._v(" "),s("li",[t._v("➢ fail: 失败时的回调")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/16/1304329efd66d75f8.png",alt:"1304329efd66d75f8.png"}})]),t._v(" "),s("h3",{attrs:{id:"_1-2-网络请求-api使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-网络请求-api使用"}},[t._v("#")]),t._v(" 1.2.网络请求 – API使用")]),t._v(" "),s("ul",[s("li",[t._v("直接使用wx.request(Object object)发送请求：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/16/25bf6923dd0f447be.png",alt:"25bf6923dd0f447be.png"}})]),t._v(" "),s("h3",{attrs:{id:"_1-3-网络请求-api封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-网络请求-api封装"}},[t._v("#")]),t._v(" 1.3.网络请求 – API封装")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/18/3573e41916531cae7.png",alt:"3573e41916531cae7.png"}})]),t._v(" "),s("h3",{attrs:{id:"_1-4-网络请求域名配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-网络请求域名配置"}},[t._v("#")]),t._v(" 1.4.网络请求域名配置")]),t._v(" "),s("ul",[s("li",[t._v("每个微信小程序需要事先设置通讯域名，小程序只可以跟指定的域名进行网络通信。\n"),s("ul",[s("li",[t._v("小程序登录后台 – 开发管理 – 开发设置 – 服务器域名；")])])]),t._v(" "),s("li",[t._v("服务器域名请在 「小程序后台 - 开发 - 开发设置 - 服务器域名」 中进行配置，配置时需要注意：\n"),s("ul",[s("li",[t._v("域名只支持 https (wx.request、wx.uploadFile、wx.downloadFile) 和 wss (wx.connectSocket) 协议；")]),t._v(" "),s("li",[t._v("域名不能使用 IP 地址（小程序的局域网 IP 除外）或 localhost；")]),t._v(" "),s("li",[t._v("可以配置端口，如 "),s("code",[t._v("https://myserver.com:8080")]),t._v("，但是配置后只能向 "),s("code",[t._v("https://myserver.com:8080")]),t._v(" 发起请求。如果向"),s("code",[t._v("https://myserver.com、https://myserver.com:9091")]),t._v(" 等 URL 请求则会失败。")]),t._v(" "),s("li",[t._v("如果不配置端口。如 "),s("code",[t._v("https://myserver.com")]),t._v("，那么请求的 URL 中也不能包含端口，甚至是默认的 443 端口也不可以。如果向 "),s("code",[t._v("https://myserver.com:443")]),t._v("请求则会失败。")]),t._v(" "),s("li",[t._v("域名必须经过 ICP 备案；")]),t._v(" "),s("li",[t._v("出于安全考虑，api.weixin.qq.com 不能被配置为服务器域名，相关 API 也不能在小程序内调用。 开发者应将 AppSecret保存到后台服务器中，通过服务器使用 getAccessToken 接口获取 access_token，并调用相关 API；")]),t._v(" "),s("li",[t._v("不支持配置父域名，使用子域名")])])])]),t._v(" "),s("h2",{attrs:{id:"_2、展示弹窗和页面转发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、展示弹窗和页面转发"}},[t._v("#")]),t._v(" 2、展示弹窗和页面转发")]),t._v(" "),s("h3",{attrs:{id:"_2-1-展示弹窗api-wx-showtoast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-展示弹窗api-wx-showtoast"}},[t._v("#")]),t._v(" 2.1.展示弹窗API wx.showToast")]),t._v(" "),s("ul",[s("li",[t._v("小程序中展示弹窗有四种方式: showToast、showModal、showLoading、showActionSheet\n"),s("ul",[s("li",[t._v("显示消息提示框："),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.showToast(Object object)"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("显示模态对话框："),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.showModal(Object object)"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框："),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.showLoading(Object object)"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("显示操作菜单："),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.showActionSheet(Object object)"),s("OutboundLink")],1)])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/18/5c6d02c704a8a05cb.png",alt:"5c6d02c704a8a05cb.png"}})]),t._v(" "),s("ul",[s("li",[t._v("代码演示")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/18/451b68408c963fbcc.png",alt:"451b68408c963fbcc.png"}})]),t._v(" "),s("h3",{attrs:{id:"_2-2-页面转发api-转发功能-onshareappmessage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-页面转发api-转发功能-onshareappmessage"}},[t._v("#")]),t._v(" 2.2.页面转发API(转发功能)onShareAppMessage")]),t._v(" "),s("ul",[s("li",[t._v("分享是小程序扩散的一种重要方式，小程序中有两种分享方式：\n"),s("ul",[s("li",[t._v("方式一：点击右上角的菜单按钮，之后点击转发")]),t._v(" "),s("li",[t._v("方式二：点击某一个按钮，直接转发")])])]),t._v(" "),s("li",[t._v("当我们转发给好友一个小程序时，通常小程序中会显示一些信息：\n"),s("ul",[s("li",[t._v("如何决定这些信息的展示呢？通过 onShareAppMessage【是page页面的事件处理函数】")]),t._v(" "),s("li",[s("strong",[t._v("onShareAppMessage(Object object)")]),t._v("：监听用户点击页面内转发按钮（"),s("strong",[t._v('button 组件 open-type="share"')]),t._v("）或 "),s("strong",[t._v("右上角菜单“转发”按钮的行为")]),t._v("，"),s("strong",[t._v("并自定义转发内容")]),t._v("。")]),t._v(" "),s("li",[t._v("此事件处理函数需要 return 一个 Object，用于自定义转发内容；")]),t._v(" "),s("li",[s("strong",[t._v("注意：只有在定义了此事件处理函数，右上角菜单才会显示“转发”按钮")])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/18/688bd8623cce234bb.png",alt:"688bd8623cce234bb.png"}})]),t._v(" "),s("h2",{attrs:{id:"_3、设备信息和位置信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、设备信息和位置信息"}},[t._v("#")]),t._v(" 3、设备信息和位置信息")]),t._v(" "),s("h3",{attrs:{id:"_3-1-获取设备信息wx-getsysteminfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-获取设备信息wx-getsysteminfo"}},[t._v("#")]),t._v(" 3.1.获取设备信息wx.getSystemInfo")]),t._v(" "),s("ul",[s("li",[t._v("在开发中，我们需要经常获取当前设备的信息，用于手机信息或者进行一些适配工作。\n"),s("ul",[s("li",[t._v("小程序提供了相关个API："),s("strong",[t._v("wx.getSystemInfo(Object object)")])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/7.png",alt:"7.png"}})]),t._v(" "),s("h3",{attrs:{id:"_3-2-获取位置信息wx-getlocation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-获取位置信息wx-getlocation"}},[t._v("#")]),t._v(" 3.2.获取位置信息wx.getLocation")]),t._v(" "),s("ul",[s("li",[t._v("开发中我们需要经常获取用户的位置信息，以方便给用户提供相关的服务：\n"),s("ul",[s("li",[t._v("我们可以通过API获取："),s("strong",[t._v("wx.getLocation(Object object)")])])])]),t._v(" "),s("li",[t._v("对于用户的关键信息，需要获取用户的授权后才能获得：\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission",target:"_blank",rel:"noopener noreferrer"}},[t._v("位置相关权限声明：permission"),s("OutboundLink")],1)])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/8.png",alt:"8.png"}})]),t._v(" "),s("h2",{attrs:{id:"_4、小程序storage存储wx-setstoragesync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、小程序storage存储wx-setstoragesync"}},[t._v("#")]),t._v(" 4、小程序Storage存储wx.setStorageSync")]),t._v(" "),s("ul",[s("li",[t._v("在开发中，某些常见我们需要将一部分数据存储在本地：比如token、用户信息等。\n"),s("ul",[s("li",[t._v("小程序提供了专门的Storage用于进行本地存储。")])])]),t._v(" "),s("li",[t._v("同步存取数据的方法：设置好数据后，下面可以立即get获取到设置的数据\n"),s("ul",[s("li",[t._v("wx.setStorageSync(string key, any data)")]),t._v(" "),s("li",[t._v("wx.getStorageSync(string key)")]),t._v(" "),s("li",[t._v("wx.removeStorageSync(string key)")]),t._v(" "),s("li",[t._v("wx.clearStorageSync()")])])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置数据")]),t._v("\nwx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStorageSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStorageSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//19")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//移除某条数据")]),t._v("\nwx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearStorageSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//清空数据")]),t._v("\nwx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearStorageSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("ul",[s("li",[t._v("异步存储数据的方法：：设置好数据后，下面不一定可以立即get获取到设置的数据\n"),s("ul",[s("li",[t._v("wx.setStorage(Object object)")]),t._v(" "),s("li",[t._v("wx.getStorage(Object object)")]),t._v(" "),s("li",[t._v("wx.removeStorage(Object object)")]),t._v(" "),s("li",[t._v("wx.clearStorage(Object object)")])])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置数据")]),t._v("\nwx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStorage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取数据")]),t._v("\nwx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStorage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//{errMsg: "getStorage:ok", data: 19}')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//移除某条数据")]),t._v("\nwx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeStorage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//{errMsg: "removeStorage:ok"}')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//清空数据")]),t._v("\nwx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearStorage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br")])]),s("h2",{attrs:{id:"_5、页面跳转和数据传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、页面跳转和数据传递"}},[t._v("#")]),t._v(" 5、页面跳转和数据传递")]),t._v(" "),s("h3",{attrs:{id:"_5-1-界面跳转的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-界面跳转的方式"}},[t._v("#")]),t._v(" 5.1.界面跳转的方式")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("界面的跳转有两种方式：通过navigator组件 和 通过wx的API跳转")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("navigator组件的跳转方式："),s("code",[t._v('<navigator url="/pages/shop/shop">跳转到shop页面</navigator>')])]),t._v(" "),s("ul",[s("li",[t._v("navigator组件跳转页面的方式，不可跳转到tabbar页面")])])]),t._v(" "),s("li",[s("p",[t._v("下面我们开始学习wx的API：")])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/9.png",alt:"9.png"}})]),t._v(" "),s("h3",{attrs:{id:"_5-2-页面跳转-wx-navigateto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-页面跳转-wx-navigateto"}},[t._v("#")]),t._v(" 5.2.页面跳转 - wx.navigateTo")]),t._v(" "),s("ul",[s("li",[t._v("wx.navigateTo(Object object)\n"),s("ul",[s("li",[t._v("保留当前页面，跳转到应用内的某个页面；")]),t._v(" "),s("li",[s("strong",[t._v("但是不能跳到 tabbar 页面")]),t._v("； 【想要跳转到tabbar页面需要调用"),s("strong",[t._v("wx.switchTab")]),t._v(" API】")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/10.png",alt:"10.png"}})]),t._v(" "),s("h3",{attrs:{id:"_5-3-页面返回-wx-navigateback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-页面返回-wx-navigateback"}},[t._v("#")]),t._v(" 5.3.页面返回 - wx.navigateBack")]),t._v(" "),s("ul",[s("li",[t._v("wx.navigateBack(Object object)\n"),s("ul",[s("li",[t._v("关闭当前页面，返回上一页面或多级页面。")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/11.png",alt:"11.png"}})]),t._v(" "),s("h3",{attrs:{id:"_5-4-页面跳转之数据传递一-getcurrentpages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-页面跳转之数据传递一-getcurrentpages"}},[t._v("#")]),t._v(" 5.4.页面跳转之数据传递一 (getCurrentPages())")]),t._v(" "),s("p",[s("strong",[t._v("通过拿到跳转之前A页面的实例a，然后通过页面实例a的setData方法去改变A页面的data数据")])]),t._v(" "),s("ul",[s("li",[t._v("如何在界面跳转过程中我们需要相互传递一些数据，应该如何完成呢？\n"),s("ul",[s("li",[t._v("首页 -> 详情页：使用URL中的query字段")]),t._v(" "),s("li",[t._v("详情页 -> 首页：在详情页内部拿到首页的页面对象，直接修改数据\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/getCurrentPages.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getCurrentPages()"),s("OutboundLink")],1),t._v("：获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面")])])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/13.png",alt:"13.png"}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("代码演练")]),t._v(" "),s("ul",[s("li",[t._v("图片错误提醒：下图的 我是test页面 写错成 title页面")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/12.png",alt:"12.png"}})]),t._v(" "),s("h3",{attrs:{id:"_5-5-页面跳转之数据传递二-events-this-getopenereventchannel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-页面跳转之数据传递二-events-this-getopenereventchannel"}},[t._v("#")]),t._v(" 5.5.页面跳转之数据传递二 (events + this.getOpenerEventChannel())")]),t._v(" "),s("ul",[s("li",[t._v("早期数据的传递方式只能通过上述的方式（数据传递一）来进行，在小程序基础库 2.7.3 开始支持events参数，也可以用于数据的传递。")]),t._v(" "),s("li",[t._v("如果一个页面由另一个页面通过 "),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("wx.navigateTo")]),s("OutboundLink")],1),t._v(" 打开，这两个页面间将建立一条数据通道：\n"),s("ul",[s("li",[t._v("被打开的页面可以通过 "),s("code",[t._v("this.getOpenerEventChannel()")]),t._v(" 方法来获得一个 "),s("code",[t._v("EventChannel")]),t._v(" 对象；")]),t._v(" "),s("li",[s("code",[t._v("wx.navigateTo")]),t._v(" 的 "),s("code",[t._v("success")]),t._v(" 回调中也包含一个 "),s("code",[t._v("EventChannel")]),t._v(" 对象。这两个 "),s("code",[t._v("EventChannel")]),t._v(" 对象间可以使用 "),s("code",[t._v("emit")]),t._v(" 和 "),s("code",[t._v("on")]),t._v(" 方法相互发送、监听事件。")])])])]),t._v(" "),s("h5",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/14.png",alt:"14.png"}})]),t._v(" "),s("h3",{attrs:{id:"_5-6-界面跳转的方式-navigator组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-界面跳转的方式-navigator组件"}},[t._v("#")]),t._v(" 5.6.界面跳转的方式(navigator组件)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("navigator组件主要就是用于界面的跳转的，也可以跳转到其他小程序中：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("注意：navigator组件不可跳转到tabbar页面")])]),t._v(" "),s("li",[s("p",[s("code",[t._v('<navigator url="/pages/shop/shop">跳转到shop页面</navigator>')])])]),t._v(" "),s("li",[s("p",[t._v("当然navigator组件页面跳转也可以通过query传递数据至跳转后的页面："),s("code",[t._v('<navigator url="/pages/router/router?name=kobe&age=45">跳转到页面</navigator>')])]),t._v(" "),s("ul",[s("li",[t._v("可以在跳转后的页面的onLoad(options){}声明周期中，通过options拿到其他页面传递过来的数据")])])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/15.png",alt:"15.png"}})]),t._v(" "),s("h2",{attrs:{id:"_6、小程序登录流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、小程序登录流程"}},[t._v("#")]),t._v(" 6、小程序登录流程")]),t._v(" "),s("h3",{attrs:{id:"_6-1-小程序登录解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-小程序登录解析"}},[t._v("#")]),t._v(" 6.1.小程序登录解析")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("为什么需要用户登录？")]),t._v(" "),s("ul",[s("li",[t._v("增加用户的粘性和产品的停留时间；")])])]),t._v(" "),s("li",[s("p",[t._v("如何识别同一个小程序用户身份？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("获取code --\x3e 通过code去跟微信的服务器拿到 openid")])]),t._v(" "),s("li",[s("p",[t._v("openid和unionid")]),t._v(" "),s("ul",[s("li",[t._v("unionid是区别微信不同产品(如:小程序与公众号)之间识别同一个用户身份时用到的标识符")])])]),t._v(" "),s("li",[s("p",[t._v("换取authToken")])])])]),t._v(" "),s("li",[s("p",[t._v("用户身份多平台共享（比如PC端和小程序，怎么保持在这两个平台用户的数据一致） => 一般进入微信小程序 都是 "),s("strong",[t._v("静默登录")])]),t._v(" "),s("ul",[s("li",[t._v("账号绑定（需要在微信小程序中进行账号绑定，让 账号/用户名 跟小程序的openid绑定在一起）即可实现用户身份及用户的相关数据多平台共享")]),t._v(" "),s("li",[t._v("手机号绑定（需要在微信小程序中进行手机号绑定，让手机号跟小程序的openid绑定在一起）即可实现用户身份及用户的相关数据多平台共享； "),s("strong",[t._v("推荐")])]),t._v(" "),s("li",[t._v("第三方登录（微信登录）")])])])]),t._v(" "),s("h3",{attrs:{id:"_6-2-小程序用户登录的流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-小程序用户登录的流程"}},[t._v("#")]),t._v(" 6.2.小程序用户登录的流程")]),t._v(" "),s("ul",[s("li",[t._v("如下图的：自定义登录态 其实指的就是 token令牌")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.imagehub.cc/images/2022/11/19/16.png",alt:"16.png"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);