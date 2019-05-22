<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <a @click="go" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">{{text}}</h1>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props:['text'],
  methods:{
      go(){
          this.$router.go(-1);
      }
  }
};
</script>

<style scoped>
.mui-bar.mui-bar-nav{
    position: relative;
}
</style>
