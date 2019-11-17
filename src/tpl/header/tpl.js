import tpl from './tpl.tpl'
import './tpl.css'

console.log("ddd", tpl)

const data = {
    title: "关于",
    lists: ["第一", "喝奶茶", "吃辣条"],
    html: '<p>我是一个p标签</p>'
};

export default tpl(data)