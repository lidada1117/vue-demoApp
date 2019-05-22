<template>
  <div>
    <!-- 顶部导航栏 mint-ui-->
    <mt-header class="color" title="×××系统"></mt-header>

  <transition name="router" mode="out-in">
    <router-view></router-view>
  </transition>

    <!-- 底部切换页面 Mui-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active" :to="{name:'home'}">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'vip'}">
        <span class="mui-icon icon-huiyuan"> </span>
        <span class="mui-tab-label">我的</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'shop'}">
        <span class="mui-icon icon-gouwuche">
          <span class="mui-badge">{{shu}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'search'}">
        <span class="mui-icon icon-chazhao"></span>
        <span class="mui-tab-label">查找</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import connect from "./comment/connect.js";
import prods from "./comment/prodstools.js";

export default {
  data() {
    return {
      shu: prods.getAllnum()
    };
  },
  components: {},
  created(){
    connect.$on('gouwuche',  par => {
      this.shu = this.shu + par;
    });
  }
};
</script>

<style scoped>
.router-enter-active,.router-leave-active{
  transition: opacity 1s;
}
.router-enter,.router-leave-to{
  opacity: 0;
}
.color{
  background-color: steelblue;
}
</style>
