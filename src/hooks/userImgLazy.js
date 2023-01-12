import defaultImg from '../assets/images/logo.png'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  install(app) {
    app.directive('lazyImg', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
              el.onerror = function() {
                console.log(defaultImg)
                el.src = defaultImg
              }
              el.src = binding.value
              stop()
            }
          }
        )
      }
    })
  }
}