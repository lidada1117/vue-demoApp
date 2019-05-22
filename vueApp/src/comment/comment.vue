<template>
  <div>
      <div class="tmpl">
      <div class="photo-bottom">
        <ul>
          <li class="photo-comment">
            <div>
              <span>提交评论</span>
              <span>
                <a @click="go">返回</a>
                </span>
            </div>
          </li>
          <li class="txt-comment">
            <textarea v-model="mes"></textarea>
          </li>
          <li>
            <mt-button @click="dianjiPl" size="large" type="primary">发表评论</mt-button>
          </li>
          <li class="photo-comment">
            <div>
              <span>评论列表</span>
              <span>44条评论</span>
            </div>
          </li>
        </ul>
        <ul class="comment-list">
          <li v-for="(connentIfo, index) in connentIfos" :key="index">
            {{ connentIfo.uesr_name }}：{{ connentIfo.content }}
            {{ connentIfo.add_time }}
          </li>
        </ul>
        <mt-button @click="loadBy" size="large" type="danger" plain>加载更多</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connentIfos: [], //评论的
      pageindex: 1,
      mes:' '
    }
  },
  components: {

  },
  props:['id'],
  methods:{
      //点击加载更多拼接页面
      loadBy() {
      this.$axios
        .get(
          "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/getcomments/" +
            this.id +
            "?pageindex=" + (++this.pageindex)
        )
        .then(res => {
          this.connentIfos = this.connentIfos.concat(res.data.message); //将第二页的数据拼接到第一页，返回1~2页
        })
        .catch(err => {});
    },
    //第一次刷新评论页面
    loadFir(){
        this.$axios
      .get(
        "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/getcomments/" +
          this.id +
          "?pageindex=1"
      )
      .then(res => {
        this.connentIfos = res.data.message;
      })
      .catch(err => {});
    },
    //点击评论
    dianjiPl() {
      this.$axios
      .post(
        "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/postcomment/" +
          this.id,'content=' + this.mes)
      .then(res => {
        this.loadFir(); //刷新页面
        this.mes = '';  //清空文本框
      }).catch(err => {});
    },
  //点击返回
    go(){
      this.$router.go(-1);
    }
  },
  created(){
    //   评论相关
   this.loadFir();
  }
}
</script>

<style scoped>
    /* 发表评论的样式开始 */
.photo-comment > div span:nth-child(1) {
  float: left;
  font-weight: bold;
  margin-left: 5px;
}

.photo-comment > div span:nth-child(2) {
  float: right;
}

.photo-comment {
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  line-height: 30px;
  margin-bottom: 5px;
}

.txt-comment {
  padding: 5 5;
}

.txt-comment textarea {
  margin-bottom: 5px;
}

.comment-list li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
}

li {
  list-style: none;
}

ul {
  margin: 0;
  padding: 0;
}
/*发表评论样式结束*/
</style>
