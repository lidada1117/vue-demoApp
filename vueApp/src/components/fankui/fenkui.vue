<template>
  <div>
      <nav-vue text="反馈留言"></nav-vue>

      <mt-checklist title="你对本产品满意吗？" v-model="value" :options="['满意', '不满意', '一般']"></mt-checklist>
      <mt-checklist title="你的性别？" v-model="value" :options="['男', '女']"></mt-checklist>
      <mt-checklist title="给产品打个分" v-model="value" :options="['50', '80', '100']"></mt-checklist>

        <mt-button size="large" type="default" plain>谢谢配合</mt-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
        value: []
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
