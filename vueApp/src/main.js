'use strict';

import Vue from "vue";
import App from "./app.vue";

import Router from "vue-router";
import Mint from "mint-ui";
import "../node_modules/mint-ui/lib/style.css"; //mint-ui
import "./static/vendor/mui/dist/css/mui.css"; //M-ui
import "./static/css/global.css"; 
import Axios from "axios";
import VuePreview from 'vue-preview';   //缩略图 

// import "./static/css/character.css"; //登录样式
// import "./static/css/theme.css";

 
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import "../node_modules/element-ui/lib/index.js";

Vue.use(ElementUI);

// 拦截器
Axios.interceptors.request.use(function (config) {
    Mint.Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
    return config;
});
Axios.interceptors.response.use(function (config) {
    Mint.Indicator.close();
    
    return config;
});
 
import VueHome from "./components/home/home.vue";
import vipVue from "./components/vip/vip.vue";
import shopVue from "./components/shop/shop.vue";
import searchVue from "./components/search/search.vue";
import newsListVue from "./components/newsList/newsList.vue";
import navVue from "./comment/nav.vue";
import newsDetails from "./components/newsList/newsDetails.vue";
import photoShareVue from "./components/photo/photoShare.vue";
import photoDetailVue from "./components/photo/photoDetail.vue";
import commentVue from "./comment/comment.vue";
import goodslistVue from "./components/goods/goodslist.vue";
import goodsdetailVue from "./components/goods/goodsdetail.vue";
import lunboVue from "./comment/lunbo.vue";
import goodsPlVue from "./components/goods/goodsPl.vue";
import fankui from "./components/fankui/fenkui.vue";
import pinglunVue from "./components/pinglun/pinglun.vue";
import lianxiVue from "./components/lianxi/lianxi.vue";


Vue.component("VueHome", VueHome);
Vue.component("vipVue", vipVue);
Vue.component("shopVue", shopVue);
Vue.component("searchVue", searchVue);
Vue.component("newsListVue", newsListVue);
Vue.component("navVue", navVue);
Vue.component("newsDetails", newsDetails);
Vue.component("photoShareVue", photoShareVue);
Vue.component("photoDetailVue", photoDetailVue);
Vue.component("commentVue", commentVue);
Vue.component("goodslistVue", goodslistVue);
Vue.component("goodsdetailVue", goodsdetailVue);
Vue.component("lunboVue", lunboVue);
Vue.component("goodsPlVue", goodsPlVue);
Vue.component("fankui", fankui);
Vue.component("pinglunVue", pinglunVue);
Vue.component("lianxiVue", lianxiVue);





Vue.use(Router);
Vue.use(Mint);
Vue.use(VuePreview);

Vue.prototype.$axios = Axios;

let router = new Router({
    linkActiveClass: 'mui-active',
    routes:[
        {path:"/", redirect:{name:"home"}}, //重定向
        {name:"home", path:"/home", component:VueHome},
        {name:"vip", path:"/vip", component:vipVue},
        {name:"shop", path:"/shop", component:shopVue},
        {name:"search", path:"/search", component:searchVue},
        {name:"newsList", path:"/newsList", component: newsListVue},
        {name:"newsDetails", path:"/newsList/newsDetails", component:newsDetails},
        {name:"photoShare", path:"/photoShare", component: photoShareVue},
        {name:"photoDetail", path:"/photoShare/photoDetail", component:photoDetailVue},
        {name:"goodsShow", path:"/goods/goodsShow", component:goodslistVue},
        {name:"goodsDetail", path:"/goods/goodsDetail", component:goodsdetailVue},
        {name:"goodsPl", path:"/goods/goodsPl", component:goodsPlVue},
        {name:"goodsJieshao", path:"/goods/jieshao", component:newsDetails},
        {name:"fankui", path:"/fankui", component:fankui},
        {name:"plllll", path:"/plllll", component:pinglunVue},
        {name:"lianxi", path:"/lianxi", component:lianxiVue}

        
    ]
});

new Vue({
    el:"#app",
    router,
    render: c => c(App)
});

