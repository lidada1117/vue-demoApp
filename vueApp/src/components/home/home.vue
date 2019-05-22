<template>
  <div>
   
    <lunbo-vue :url="url"></lunbo-vue>
    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'newsList'}">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'photoShare'}">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图文分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name: 'goodsShow'}">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品展示</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'fankui'}" href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'plllll'}" href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">评论留言</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'lianxi'}" href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [],
      url:"https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/getlunbo"
    };
  },
  components: {},
  created() {
   
  }
};
</script>

<style scoped>

/* 九宫格样式 */
.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: white;
  margin-top: 0px;
}
.mui-table-view.mui-grid-view.mui-grid-9 li {
  border: 0px;
}
.mui-icon-home:before {
  content: "";
}
.mui-icon-email:before {
  content: "";
}
.mui-icon-chatbubble:before {
  content: "";
}
.mui-icon-location:before {
  content: "";
}
.mui-icon-search:before {
  content: "";
}
.mui-icon-phone:before {
  content: "";
}


.mui-icon.mui-icon-home{
    background-image: url("../../static/img/news.png");
    height: 50px;
    width: 50px;
    background-repeat:round;
  }
  .mui-icon.mui-icon-email{
    background-image: url("../../static/img/picShare.png");
    height: 50px;
    width: 50px;
    background-repeat:round;
  }
  .mui-icon.mui-icon-chatbubble{
    background-image: url("../../static/img/goodShow.png");
    height: 50px;
    width: 50px;
    background-repeat:round;
  }
  .mui-icon.mui-icon-location{
    background-image: url("../../static/img/feedback.png");
    height: 50px;
    width: 50px;
    background-repeat:round;
  }
  .mui-icon.mui-icon-search{
    background-image: url("../../static/img/search.png");
    height: 50px;
    width: 50px;
    background-repeat:round;
  }
  .mui-icon.mui-icon-phone{
    background-image: url("../../static/img/callme.png");
    height: 50px;
    width: 50px;
    background-repeat:round;
  }
</style>
