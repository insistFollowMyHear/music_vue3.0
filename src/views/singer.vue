<script>
  import { getSingerList } from '@/service/singer.js'

  export default {
    data() {
      return {
      }
    },
    async created() {
      const result = await getSingerList()
      console.log(result)
    },
    methods: {
    }
  }
</script>

<template>
  <div>
    <p>signer</p>
  </div>
</template>

<style lang="scss" scoped>

</style>