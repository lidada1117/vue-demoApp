<template>
  <div>
      <!-- 引入全局导航栏组件 -->
        <nav-vue text="新闻列表"></nav-vue>
      <!-- 新闻列表 -->
      <ul   class="mui-table-view">
				<li v-for="list in lists" :key="list.id" class="mui-table-view-cell mui-media">
					<router-link :to="{name:'newsDetails', query:{id:list.id}}">
						<img class="mui-media-object mui-pull-left" :src="list.img_url">
						<div class="mui-media-body">
							<span>{{list.title}}</span>
							<div class='news-desc'>
                                <p>点击数:{{list.click}}</p> 
                                <p>发表时间:{{list.add_time}}</p>
                            </div>
						</div>
					</router-link>
				</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        lists:[]
    }
  },
  components: {},
  created(){
      this.$axios.get("https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/news/list").then((res) => {
          this.lists = res.data.message;
      }).catch((err) => {
          
      });
  }
}
</script>

<style scoped>
.mui-media-body p{
    color: #0bb0f5;
}
.news-desc p:nth-child(1){
    float: left;
}
.news-desc p:nth-child(2){
    float: right;
}
</style>
