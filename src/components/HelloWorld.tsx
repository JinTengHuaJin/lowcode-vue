import {
  ref,
  PropType,
  CSSProperties,
  defineComponent,
  ButtonHTMLAttributes,
  watch
} from "vue"

export default defineComponent({
  name: "HelloWorld",
  setup(props, { emit, slots }) {
    return () => {
      return (
        <div>
          HelloWorld
        </div>
      )
    }
  }
})
