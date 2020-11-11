```js
//除了具名插槽还有其他内容就显示<slot></solt>
<span v-if="$slots.default"><slot></slot></span>
```