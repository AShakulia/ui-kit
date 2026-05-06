import type { App } from 'vue'
import '../styles/style.css'
import UIButton from '@/components/UIButton/UIButton.vue'


const UiKit = {
  install(app: App) {
    app.component('UIButton', UIButton)
  }
}

export default UiKit

export {
  UIButton
}