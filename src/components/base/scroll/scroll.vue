<script>
  import { ref } from '@vue/reactivity'
  import useScroll from './useScroll.js'
  
  export default {
    props: {
      click: {
        type: Boolean,
        default: true
      }
    },
    setup(props) {
      const rootRef = ref(null)
      const scroll = useScroll(rootRef, props)

      return {
        rootRef,
        scroll
      }
    }
  }
</script>

<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>