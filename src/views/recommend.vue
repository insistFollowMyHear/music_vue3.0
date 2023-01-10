<script>
  import { getRecommend } from '../service/recommend';
  import Slider from '../components/base/slider/slider.vue'

  export default {
    components: {
      Slider
    },
    data() {
      return {
        sliders: []
      }
    },
    created() {
      this.getRecommendInfo()
    },
    methods: {
      async getRecommendInfo() {
        const recommendObj = await getRecommend()
        this.sliders = recommendObj.sliders
      }
    }
  }
</script>

<template>
  <Slider v-if="sliders.length > 0" :sliders="sliders"></Slider>
</template>

<style lang="scss" scoped>

</style>