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
import "./index.less";
import strategicMenu from "./components/strategicMenu.vue"
import { initPicture, initGraphAction } from "./actions";

export default defineComponent({
  name: "antv",
  components: {
    strategicMenu
  },
  setup(props, { 
    emit,
    slots
  }) {
    let graph: any = null;
    onMounted(() => {
      graph = initPicture();
      initGraphAction(graph);
    });
    setTimeout(() => {
      graph.addNode({
        id: 'header',
        shape: "vue-shape",
        x: 200,
        y: 200,
        width: 200,
        height: 200,
        component: "nodeComponent",
        movable: false,
        draggable: true,
        data: {
          "jjfd": 'fjfdk'
        }
    });
    }, 3000)
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
