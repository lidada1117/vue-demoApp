<template>
  <div class="tmpl">
      <nav-vue text="商品评论"></nav-vue>
      <comment-vue :id="$route.query.id"></comment-vue>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  },
  created(){
     
  }
}
</script>

<style scoped>
</style>
