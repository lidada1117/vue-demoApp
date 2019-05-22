<template>
  <div>
       <!-- 轮播图 -->
    <mt-swipe :auto="4000" style="height:187px">
      <mt-swipe-item v-for="(img, index) in imgs" :key="index">
        <a :href="img.url"><img :src="img.img" alt=""/></a>
      </mt-swipe-item>
    </mt-swipe>

  </div>
</template>

<script>
export default {
  data() {
    return {
        imgs:""
    }
  },
  components: {

  },
  props:['url'],
  created(){
       this.$axios
      .get(this.url).then(res => {
        this.imgs = res.data.message;
      });
  }
}
</script>

<style scoped>
.mint-swipe img {
  height: 100%;
  width: 100%;
}
</style>
