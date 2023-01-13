import { createApp } from "vue"
import Loading from './loading'

const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(Loading)
    console.log('app', app)
    const instance = app.mount(document.createElement('div'))
    console.log('instance', app)
    console.log('beforeOption-el', el)
    el.instance = instance

    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

function append(el) {
  console.log('append-el', el.instance.$el)
  el.appendChild(el.instance.$el)
}

function remove(el) {
  console.log('remove-el', el)
  el.removeChild(el.instance.$el)
}

export default loadingDirective