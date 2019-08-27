# "webpack": "^4.39.2",
# "webpack-cli": "^3.3.7",

# 此文档是学习笔记，部分内容是前期配置记录，不需要理会，分割线后面的是使用备注

# 1、全局安装
升级最新版node：
npm install npm@latest -g

安装webpack 和 webpack脚手架：
npm install -g webpack webpack-cli

# 2、项目初始化
npm init --y

# 3、package.json
删除"main": "index.js",
添加"private":true, // 防止发布意外的私有包

# 4、在工程项目下安装webpack 和 webpack脚手架
npm install --save-dev webpack webpack-cli

## 开发环境和生产环境
开发环境运行：
npm run dev

生产压缩运行：
npm run build

# babel转译es
安装babel：
npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

npm install -S @babel/runtime

# css 处理
css: npm install -D css-loader style-loader
sass: npm install -D sass sass-loader

//因为sass-loader依赖于node-sass，所以还要安装node-sass
npm install --save-dev node-sass

less: npm install --save-dev less-loader less

postcss:自动添加前缀，css模块化等
npm install -D postcss-loader
npm install -D autoprefixer (添加css3前缀)


-------------------------------------------------------------------------------

# src/static 目录是不做处理的
src/assets中的文件会经过webpack打包，重新编译，推荐该方式。
而static中的文件，不会经过编译。
项目在经过打包后，会生成dist文件夹，static中的文件只是复制一遍而已。
简单来说，static中建议放一些外部第三方，自己的放到assets，别人的放到static中。

# 关于配置文件
webpack.config.common.js  公共配置文件
webpack.config.dev.js     开发模式配置文件
webpack.config.prod.js    生产模式配置文件
postcss.config.js         样式添加前缀配置文件

# 支持提取公共文件
# 样式文件、js文件压缩
# 创建环境变量

# 添加页面
1、先在entry配置入口文件
2、在plugins里面 new HtmlWebpackPlugin({option...}) 配置新页面

# 入口文件引用图片等资源
import book from '../img/book.png'
document.body.style.backgroundImage = `url(${book})`;
document.body.style.backgroundRepeat = 'no-repeat';

# publicPath
webpack.config.common.js 的output中，修改publicPath
www.a.com       默认 '/'
www.a.com/demo  即 '/demo/'

---------------------------------
git init 
git add .
git status
git commit -m "first commit"
git remote add origin https://github.com/ywc150148/webpack-demo.git
git push -u origin master