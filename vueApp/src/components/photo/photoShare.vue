<template>
  <div class="tmpl">
    <nav-vue text="图文分享"></nav-vue>
    <!-- 引入返回导航 -->
    <div class="photo-header">
      <ul>
        <li>
          <a @click="allData(0)" href="javascript:;">全部</a>
        </li>
        <li @click="allData(list.id)" v-for="list in lists" :key="list.id">
          <a href="javascript:;">{{ list.title }}</a>
        </li>
      </ul>
    </div>
    <div class="photo-list">
      <ul>
        <li v-for="allD in allDs" :key="allD.id">
          <router-link :to="{name:'photoDetail', query:{id:allD.id}}">
            <img v-lazy="allD.img" />
            <p>
              <span>{{allD.title}}</span>
              <br />
              <span>{{allD.zhaiyao}}</span>
            </p>
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
      lists: [],
      allDs:[]
    };
  },
  components: {},
  created() {
    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/photo/list"
      )
      .then(res => {
        this.lists = res.data.message;
      })
      .catch(err => {});

    //   this.$axios
    //     .get(
    //       "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/photo/" + 0
    //     )
    //     .then(res => {
    //       this.allDs = res.data.message;
    //     })
    //     .catch(err => {});
    //上面代码简写
    this.allData(0);
  },
  methods: {
    allData(arg) {
      this.$axios
        .get(
          "https://www.easy-mock.com/mock/5cd2c59b5110c02a69f7b4d8/example/photo/" + arg
        )
        .then(res => {
          this.allDs = res.data.message;
        })
        .catch(err => {});
    }
  }
};
</script>
<style>
.photo-header li {
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  height: 30px;
}

.photo-header ul {
  /*强制不换行*/
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 0px;
  margin: 5;
}

/*下面的图片*/

.photo-list li {
  list-style: none;
  position: relative;
}

.photo-list li img {
  width: 100%;
  height: 230px;
  vertical-align: top;
}

.photo-list ul {
  padding-left: 0px;
  margin: 0;
}

.photo-list p {
  position: absolute;
  bottom: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
  font-weight: bold;
  font-size: 16px;
}
/* 图片懒加载 */
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
