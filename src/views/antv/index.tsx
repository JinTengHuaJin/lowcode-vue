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
        width: 50,
        height: 50,
        component: "nodeComponent",
        movable: false,
        draggable: true,
        data: {
          "jjfd": 'fjfdk'
        }
    });
    }, 3000)
    function addNode(type: string) {
      debugger
      console.log(type, 'addNode');
    }
    return () => {
      return (
        <div class="strategic-canvas">
          <section class="left">
            <strategicMenu onAddNode={addNode}/>
          </section>
          <section class="right">
            <div ref="picture" class="picture" id="picture"></div>
          </section>
        </div>
      )
    }
  }
})
