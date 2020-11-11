## 目录结构
vue-cli3  
src --> examples测试组件  
新增packages存放组件
新增vue.config.js配置

## 碎片式记忆点
1. $slots.default
```js
//除了具名插槽还有其他内容就显示<slot></solt>
<span v-if="$slots.default"><slot></slot></span>
```
2. v-bind="$attrs"
