# duui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 包含内容
1. Radio单选框
2. Checkbox多选框
3. Input输入框
4. InputNumber计数器
5. Select选择器
6. Cascader级联选择器
7. Switch开关
8. Slider滑块
9. TimePicker时间选择器
10. DatePicker日期选择器
11. DateTimePicker日期时间选择器
12. Upload上传
13. Rate评分
14. ColorPicker颜色选择器
15. Transfer 穿梭框

16. 典型表单实例

[设计规则](./design.md)

## 目录结构
vue-cli3  
src --> examples 测试组件  
新增packages存放组件
新增vue.config.js配置




## 碎片式记忆点
1. 引入组件
```js
import Loading from '../components/loading'
// 方法一：name 是组件的名字
Vue.component(Loading.name, Loading)
// 方法二：前提是 Loading 有提供 install 这个方法
Vue.use(Loading);
```
2. $slots.default
```js
//除了具名插槽还有其他内容就显示<slot></solt>
<span v-if="$slots.default"><slot></slot></span>
```
3. v-bind="$attrs" 跨级组件通信



