import {
  ref,
  PropType,
  CSSProperties,
  defineComponent,
  ButtonHTMLAttributes,
  watch
} from "vue"

export default defineComponent({
  name: "header",
  props: {
    text: String
  },
  setup(props, { 
    emit,
    slots
  }) {
    return () => {
      return (
        <div>
          header
        </div>
      )
    }
  }
})
