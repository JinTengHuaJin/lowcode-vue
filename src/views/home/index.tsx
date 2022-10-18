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
          <div style={{ height: '1200px'}} class="header-editor-container h-100 bg-gray-700">
            home
          </div>
        </div>
      )
    }
  }
})
