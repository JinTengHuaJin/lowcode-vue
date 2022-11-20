import {
  ref,
  reactive,
  PropType,
  CSSProperties,
  defineComponent,
  inject,
  ButtonHTMLAttributes,
  watch,
  onMounted
} from "vue"
// import {reactive,provide} from 'vue';
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
    const getNode:any = inject("getNode");
    const getGraph:any = inject("getGraph");
    let state = reactive({type: ''})
    let node = getNode();
    let graph = getGraph();
    node.on('change:data', () => {
      let { id } = node;
      console.log('change:data', id, node.data);
    })
    state.type = node.data.type;
    console.log('nodeDom',node.data.type);
    return () => {
      const { type } = state;
      return (
        <div class="node-component" data-type={type}>
          {/* <div v-if={true}>{type}</div> */}
          {/* <div>+{type}</div> */}
          <img src={getIcon(`../assets/icon/${type}.png`)}/>
        </div>
      )
    }
  }
})
