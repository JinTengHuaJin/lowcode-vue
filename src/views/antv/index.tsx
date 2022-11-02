import {
  ref,
  PropType,
  CSSProperties,
  defineComponent,
  ButtonHTMLAttributes,
  watch,
  onMounted
} from "vue"
import "./index.less";
import strategicMenu from "./components/strategicMenu.vue"
import { initPicture } from "./actions";

export default defineComponent({
  name: "antv",
  components: {
    strategicMenu
  },
  setup(props, { 
    emit,
    slots
  }) {
    onMounted(() => {
      initPicture();
    })
    return () => {
      return (
        <div class="strategic-canvas">
          <section class="left">
            <strategicMenu/>
          </section>
          <section class="right">
            <div ref="picture" class="picture" id="picture"></div>
          </section>
        </div>
      )
    }
  }
})
