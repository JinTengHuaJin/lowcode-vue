import {
  ref,
  PropType,
  CSSProperties,
  defineComponent,
  ButtonHTMLAttributes,
  watch
} from "vue"
import "./index.less";
import headerUse from "./header";

export default defineComponent({
  name: "HelloWorld",
  setup(props, { 
    emit,
    slots 
  }) {
    return () => {
      return (
        <div class="workbench-section">
          <div class="header-editor-container">
            <headerUse/>
          </div>
        </div>
      )
    }
  }
})
