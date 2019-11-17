import hmrtest from './hmrtest.js' 

import '../css/reset.css'
import '../css/style.css'
import '../css/style.scss'
import '../css/style.less'
import '../iconfont/iconfont.css'

$("#hello").append($("<p>子元素</p>"));

// if(NODE_ENV==="development"){
//     console.log("现在是开发环境")
// }else{
//     console.log("现在是生产环境")
// }

let el_note = document.getElementById("content-note");
el_note.innerHTML = '2019/08/26 这是我用<a href="https://www.webpackjs.com/" target="_blank">webpack</a>做的一个页面';

// 异步加载一个js文件，并且执行里面的方法
import('./async.js').then(({
    default: fun
}) => {
    fun();
})

// 修改js时，不刷新网页
if(module.hot) {
    module.hot.accept('./hmrtest.js',()=>{
        console.log("没有刷新")
    })
}