<template>
  <button 
  class="du-button" 
  :class="[type ? 'du-button--' + type:'',
  {
      'is-plain':plain,
      'is-round':round,
      'is-circle':circle
  }
  ]"
  @click="handleClick"
  >
  <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
    name:'DuButton',
    props:{
        type:{
            type:String,
            default:'default'
        },
        plain:Boolean,
        round:Boolean,
        circle:Boolean
    },
    // computed:{
    //     buttonDisabled(){
    //         return this.disabled || (this.duForm || {}).disabled;
    //     }
    // },
    methods:{
        handleClick(evt){
            this.$emit('click',evt)
            console.log('button click');
        }
    }

}
</script>

<style>
.du-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.du-button + .du-button {
  margin-left: 10px;
}
.du-button.is-round {
  padding: 12px 20px;
}
.du-button:focus,
.du-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.du-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}
.du-button::-moz-focus-inner {
  border: 0;
}
.du-button [class*="el-icon-"] + span {
  margin-left: 5px;
}
.du-button.is-plain:focus,
.du-button.is-plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
.du-button.is-plain:active {
  background: #fff;
  outline: none;
}
.du-button.is-active,
.du-button.is-plain:active {
  border-color: #3a8ee6;
  color: #3a8ee6;
}
.du-button.is-disabled,
.du-button.is-disabled:focus,
.du-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.du-button.is-disabled.du-button--text {
  background-color: transparent;
}
.du-button.is-disabled.is-plain,
.du-button.is-disabled.is-plain:focus,
.du-button.is-disabled.is-plain:hover {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}
.du-button.is-loading {
  position: relative;
  pointer-events: none;
}
.du-button.is-loading:before {
  pointer-events: none;
  content: "";
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: hsla(0, 0%, 100%, 0.35);
}
.du-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.du-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.du-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.du-button--primary:focus,
.du-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.du-button--primary:active {
  outline: none;
}
.du-button--primary.is-active,
.du-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}
.du-button--primary.is-disabled,
.du-button--primary.is-disabled:active,
.du-button--primary.is-disabled:focus,
.du-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.du-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.du-button--primary.is-plain:focus,
.du-button--primary.is-plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}
.du-button--primary.is-plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
  outline: none;
}
.du-button--primary.is-plain.is-disabled,
.du-button--primary.is-plain.is-disabled:active,
.du-button--primary.is-plain.is-disabled:focus,
.du-button--primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.du-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.du-button--success:focus,
.du-button--success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}
.du-button--success:active {
  outline: none;
}
.du-button--success.is-active,
.du-button--success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
}
.du-button--success.is-disabled,
.du-button--success.is-disabled:active,
.du-button--success.is-disabled:focus,
.du-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.du-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}
.du-button--success.is-plain:focus,
.du-button--success.is-plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}
.du-button--success.is-plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: none;
}
.du-button--success.is-plain.is-disabled,
.du-button--success.is-plain.is-disabled:active,
.du-button--success.is-plain.is-disabled:focus,
.du-button--success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.du-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.du-button--warning:focus,
.du-button--warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}
.du-button--warning:active {
  outline: none;
}
.du-button--warning.is-active,
.du-button--warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
}
.du-button--warning.is-disabled,
.du-button--warning.is-disabled:active,
.du-button--warning.is-disabled:focus,
.du-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.du-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}
.du-button--warning.is-plain:focus,
.du-button--warning.is-plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}
.du-button--warning.is-plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
  outline: none;
}
.du-button--warning.is-plain.is-disabled,
.du-button--warning.is-plain.is-disabled:active,
.du-button--warning.is-plain.is-disabled:focus,
.du-button--warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.du-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.du-button--danger:focus,
.du-button--danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}
.du-button--danger:active {
  outline: none;
}
.du-button--danger.is-active,
.du-button--danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
}
.du-button--danger.is-disabled,
.du-button--danger.is-disabled:active,
.du-button--danger.is-disabled:focus,
.du-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
.du-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}
.du-button--danger.is-plain:focus,
.du-button--danger.is-plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
.du-button--danger.is-plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
  outline: none;
}
.du-button--danger.is-plain.is-disabled,
.du-button--danger.is-plain.is-disabled:active,
.du-button--danger.is-plain.is-disabled:focus,
.du-button--danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}
.du-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.du-button--info:focus,
.du-button--info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}
.du-button--info:active {
  outline: none;
}
.du-button--info.is-active,
.du-button--info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
}
.du-button--info.is-disabled,
.du-button--info.is-disabled:active,
.du-button--info.is-disabled:focus,
.du-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.du-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.du-button--info.is-plain:focus,
.du-button--info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}
.du-button--info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: none;
}
.du-button--info.is-plain.is-disabled,
.du-button--info.is-plain.is-disabled:active,
.du-button--info.is-plain.is-disabled:focus,
.du-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}
.du-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.du-button--medium.is-round {
  padding: 10px 20px;
}
.du-button--medium.is-circle {
  padding: 10px;
}
.du-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.du-button--small.is-round {
  padding: 9px 15px;
}
.du-button--small.is-circle {
  padding: 9px;
}
.du-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.du-button--mini.is-round {
  padding: 7px 15px;
}
.du-button--mini.is-circle {
  padding: 7px;
}
.du-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
}
.du-button--text:focus,
.du-button--text:hover {
  color: #66b1ff;
  border-color: transparent;
  background-color: transparent;
}
.du-button--text:active {
  color: #3a8ee6;
  background-color: transparent;
}
.du-button--text.is-disabled,
.du-button--text.is-disabled:focus,
.du-button--text.is-disabled:hover,
.du-button--text:active {
  border-color: transparent;
}
.du-button-group {
  display: inline-block;
  vertical-align: middle;
}
.du-button-group:after,
.du-button-group:before {
  display: table;
  content: "";
}
.du-button-group:after {
  clear: both;
}
.du-button-group > .du-button {
  float: left;
  position: relative;
}
.du-button-group > .du-button + .du-button {
  margin-left: 0;
}
.du-button-group > .du-button.is-disabled {
  z-index: 1;
}
.du-button-group > .du-button:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.du-button-group > .du-button:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.du-button-group > .du-button:first-child:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.du-button-group > .du-button:first-child:last-child.is-round {
  border-radius: 20px;
}
.du-button-group > .du-button:first-child:last-child.is-circle {
  border-radius: 50%;
}
.du-button-group > .du-button:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.du-button-group > .du-button:not(:last-child) {
  margin-right: -1px;
}
.du-button-group > .du-button.is-active,
.du-button-group > .du-button:active,
.du-button-group > .du-button:focus,
.du-button-group > .du-button:hover {
  z-index: 1;
}
.du-button-group > .du-dropdown > .du-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--primary:first-child {
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--primary:last-child {
  border-left-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--primary:not(:first-child):not(:last-child) {
  border-left-color: hsla(0, 0%, 100%, 0.5);
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--success:first-child {
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--success:last-child {
  border-left-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--success:not(:first-child):not(:last-child) {
  border-left-color: hsla(0, 0%, 100%, 0.5);
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--warning:first-child {
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--warning:last-child {
  border-left-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--warning:not(:first-child):not(:last-child) {
  border-left-color: hsla(0, 0%, 100%, 0.5);
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--danger:first-child {
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--danger:last-child {
  border-left-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--danger:not(:first-child):not(:last-child) {
  border-left-color: hsla(0, 0%, 100%, 0.5);
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--info:first-child {
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--info:last-child {
  border-left-color: hsla(0, 0%, 100%, 0.5);
}
.du-button-group .du-button--info:not(:first-child):not(:last-child) {
  border-left-color: hsla(0, 0%, 100%, 0.5);
  border-right-color: hsla(0, 0%, 100%, 0.5);
}
/* .du-button{
    display: inline-block;
    -webkit-appearance: none; 
    line-height: 1;
    padding: 12px 20px;
    white-space:nowrap;
    cursor: pointer;
    background-color:#fff;
    border: 1px solid #dcdfe6;
    text-align: center;
    outline: none;
    margin:0;
    transition:0.1s;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
}
.du-button:focus,el-button:hover{
    color:#69cfff;
    border-collapse: #85b8cf;
    background-color:#ecf5ff ;
}
.du-button:active{
    color:#3a8ee6;
    border-color: #3a8ee6;
    outline:none;
}
.du-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.du-button--primary:focus, .du-button--primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}
.du-button+.du-button {
    margin-left: 10px;
} */

</style>