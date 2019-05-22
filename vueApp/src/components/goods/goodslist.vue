<template>
  <div class="tmpl">
    <nav-vue text="商品列表"></nav-vue>

    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">
    <ul class="mui-table-view mui-grid-view">
      <li v-for="list in lists" :key="list.id" class="mui-table-view-cell mui-media mui-col-xs-6">
        <router-link :to="{name: 'goodsDetail', query:{id:list.id}}">
          <img class="mui-media-object":src="list.img_url"/>
          <div class="mui-media-body">{{list.title}}</div>
          <div class="desc">
            <div class="sell">
              <span>￥{{list.low_price}}</span>
              <s>￥{{list.high}}</s>
            </div>
            <div class="detail">
              <div class="hot">
                热卖中
              </div>
              <div class="count">
                剩{{list.kucun}}件
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  data() {
    return {
        pageindex: 1,
        lists:[],
        allLoaded: false,
    };
  },
  methods:{
    loadBottom(){
       console.log("触发上拉");

      //  this.allLoaded = true;// 若数据已全部获取完毕

      //  this.$refs.loadmore.onBottomLoaded();

    }
  },
  components: {},
  created(){
      this.$axios.get("https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/getgoods?pageindex="
       + this.pageindex).then((res) => {
          this.lists = res.data.message;
      }).catch((err) => {
          
      });
  }
};
</script>
<style scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
  margin: 0px;
  padding: 0px;
  border: 1px solid #5c5c5c;
  box-shadow: 0 0 4px #666;
}

.sell > span {
  float: left;
  color: red;
  text-align: left;
}

.detail > .hot {
  float: left;
  text-align: left;
  font-size: 15px;
}

.detail > .count {
  float: right;
  text-align: right;
  font-size: 15px;
}

/*撑开，去除浮动没有的高度*/

.detail {
  overflow: hidden;
}

.desc {
  color: rgba(92, 92, 92, 0.8);
  background-color: rgba(0, 0, 0, 0.2);
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
  height: 200px;
}
</style>
