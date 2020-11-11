//为组件提供install方法，供组件对外按需引入
//给组件扩展一个 install 方法，至于为什么要扩展这个方法，文章开头已经说到了，是因为 Vue.use() 的需要，use 会默认调用 install 方法安装，
import DuTest from './src/test'
DuTest.install = Vue =>{
    Vue.component(DuTest.name,DuTest)
}
export default DuTest