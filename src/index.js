import Vue from 'vue'
import 'mint-ui/lib/style.css'
//导入MUI的样式
import './mui/css/mui.min.css'
// 按需导入Mint-UI中的组件

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import app from './components/App.vue'

var vm=new Vue({
    el:'#app',
    render:c=>c(app)
})