<template>
    <div class="tmpl">
        <nav-vue :text="title"></nav-vue>
        <div class="news-title">
            <p v-text="details.title"></p>
            <div>
                <span>{{details.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{details.add_time}}</span>
            </div>
        </div>
        <div v-html="details.content" class="news-content"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        details:[],
        title:''
    }
  },
  components: {},
  created(){
      let id = this.$route.query.id;
     
      this.$axios.get("https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/newslist/"+id).then((res) => {
          this.details = res.data.message;
          
      }).catch((err) => {
          
      });
  },
  beforeRouteEnter (to, from, next) {

      let mytitle = '';
      if(from.name === 'newsList'){
          mytitle = "新闻详情"
      }
      else if(from.name === 'goodsDetail'){
          mytitle = "图文详情"
      }
  next(vm => {
    // 通过 `vm` 访问组件实例
    vm.title = mytitle;
  })
}

 
}
</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}
</style>
