import {
  ref,
  PropType,
  CSSProperties,
  defineComponent,
  ButtonHTMLAttributes,
  watch
} from "vue"
import "./index.less";

export default defineComponent({
  name: "antv",
  setup(props, { 
    emit,
    slots 
  }) {
    return () => {
      return (
        <div class="strategic-canvas">
          <section class="left">
          </section>
        </div>
      )
    }
  }
})
