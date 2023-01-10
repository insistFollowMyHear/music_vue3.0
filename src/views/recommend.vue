<script>
  import { getRecommend } from '../service/recommend';

  export default {
    created() {
      this.getRecommendInfo()
    },
    methods: {
      async getRecommendInfo() {
        const recommendObj = await getRecommend()
      }
    }
  }
</script>

<template>
  <div>
    <p>recommend</p>
  </div>
</template>

<style lang="scss" scoped>

</style>