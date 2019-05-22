<template>
  <div>
      <nav-vue text="评论留言"></nav-vue>
        <comment-vue :id="id"></comment-vue>
  </div>
</template>

<script>
export default {
  data() {
    return {
        id:1
    }
  },
  components: {

  }
}
</script>

<style scoped>
</style>
