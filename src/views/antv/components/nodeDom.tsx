import {
  ref,
  PropType,
  CSSProperties,
  defineComponent,
  ButtonHTMLAttributes,
  watch,
  onMounted
} from "vue"
import "@antv/x6-vue-shape";
import { getIcon } from "@/utils";
import "./nodeDom.less";

export default defineComponent({
  name: "antv",
  components: {
  },
  setup(props, { 
    emit,
    slots
  }) {
    return () => {
      return (
        <div class="node-component" data-type="addComponent">
          <img src={getIcon(`../assets/icon/clear.png`)}/>
        </div>
      )
    }
  }
})
