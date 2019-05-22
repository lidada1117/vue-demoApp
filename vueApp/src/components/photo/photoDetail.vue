<template>
  <div class="tmpl">
    <!-- 引入全局组件 -->
    <nav-vue text="图片详情"></nav-vue>

    <div class="photo-title">
      <p>{{ datas.title }}</p>
      <span>发起日期：{{ datas.add_time }}</span>
      <span>{{ datas.click }}次浏览</span>
      <span>分类：民生经济</span>
    </div>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <!-- <li v-for="(img, index) in imgs" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"> -->
      <vue-preview :slides="imgs" @close="handleClose"></vue-preview>
      <!-- </li> -->
    </ul>
    <div class="photo-desc">
      <p v-html=""></p>
    </div>

    <!-- 引入评论组件 -->
    <comment-vue :id="id"></comment-vue>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: {},
      id: this.$route.query.id,
      imgs: [] //图文的
    };
  },
  components: {},
  methods: {
    handleClose() {
      console.log("点击缩略图");
    },
  },
  created() {
    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/photo/detaildata/" +
          this.id
      )
      .then(res => {
        this.datas = res.data.message[0];
      })
      .catch(err => {});

    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/photo/detailimg/" +
          this.id
      )
      .then(res => {
        this.imgs = res.data.message;

        this.imgs.forEach(ele => {
          (ele.w = 500), (ele.h = 400), (ele.msrc = ele.img);
        });
      })
      .catch(err => {});

  }
};
</script>
<style scoped>
li {
  list-style: none;
}

ul {
  margin: 0;
  padding: 0;
}

.photo-title {
  overflow: hidden;
}

.photo-title,
.photo-desc {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
}

.photo-title p {
  color: #13c2f7;
  font-size: 20px;
  font-weight: bold;
}

.photo-title span {
  margin-right: 20px;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
  border: 0;
}

.photo-desc p {
  font-size: 18px;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
  padding: 2 2;
}
</style>
