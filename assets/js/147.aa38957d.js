(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{533:function(a,t,e){"use strict";e.r(t);var n=e(42),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mern构建环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mern构建环境"}},[a._v("#")]),a._v(" MERN构建环境")]),a._v(" "),e("blockquote",[e("p",[a._v("自己用此工具，发现 webpack 依赖问题总得不到解决，已放弃，转向 react-starter-kit")])]),a._v(" "),e("h2",{attrs:{id:"资料地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资料地址"}},[a._v("#")]),a._v(" 资料地址")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"http://mern.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MERN官网"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/Hashnode/mern-starter",target:"_blank",rel:"noopener noreferrer"}},[a._v("mern-starter GitHub"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://docs.mongodb.com/v3.0/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装mongoDB"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"安装步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[a._v("#")]),a._v(" 安装步骤")]),a._v(" "),e("ol",[e("li",[a._v("安装 "),e("code",[a._v("MongoDB")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("brew update #更新homebrew\n\nbrew install mongodb #如需安装其他版本，TLS/SSL支持等，请查看官网。\n\nmkdir -p ~/data/db #创建DATA目录\n\nmongod -dbpath ~/data/db #运行Mongod\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("安装 "),e("code",[a._v("MERN")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm install -g mern-cli\nmern init your_new_app\ncd your_new_app\nnpm install\nnpm start\n")])])]),e("h2",{attrs:{id:"遇到问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遇到问题"}},[a._v("#")]),a._v(" 遇到问题")]),a._v(" "),e("ol",[e("li",[e("code",[a._v("npm install")]),a._v(" 时报错")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm WARN babel-plugin-webpack-loaders@0.7.0 requires a peer of webpack@>=1.12.9 <3.0.0 but none was installed.\nnpm WARN chunk-manifest-webpack-plugin@0.1.0 requires a peer of webpack@^1.4.0-beta6 but none was installed.\nnpm WARN extract-text-webpack-plugin@1.0.1 requires a peer of webpack@^1.9.11 but none was installed.\n")])])]),e("p",[a._v("解决方法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm install webpack@1.13.1 #由于以上三者都依赖 webpack@1.X.X\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("又出现")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("问题原因，由于多个插件所依赖的 webpack 版本不同，修改config.json\n替换问题插件版本。\nUNMET PEER DEPENDENCY webpack@2.1.0-beta.17\n\n# 运行\nnpm install webpack@2.1.0-beta.17\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("更新 "),e("a",{attrs:{href:"http://bytearcher.com/articles/ways-to-get-the-latest-node.js-version-on-a-mac/",target:"_blank",rel:"noopener noreferrer"}},[a._v("node"),e("OutboundLink")],1)])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm install -g nstall -g n\n\nsudo n latest\n")])])]),e("h2",{attrs:{id:"最终-放弃此工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最终-放弃此工具"}},[a._v("#")]),a._v(" 最终，放弃此工具")])])}),[],!1,null,null,null);t.default=r.exports}}]);