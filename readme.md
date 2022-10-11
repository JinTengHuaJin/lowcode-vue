import { useMainStore } from "@/store"
import { storeToRefs } from "pinia"
defineProps<{ msg: string }>()
const count = ref(0)
const mainStore = useMainStore()
//const storeCount = mainStore.count
const { count: storeCount } = storeToRefs(mainStore)

const add = () => {
  //适合多字段改变
  mainStore.$patch({
    name: "arch",
    count: mainStore.count + 1
  })
}
const add2 = () => {
  //适合多字段改变
  mainStore.$patch((state) => ({
    name: "arch2",
    count: mainStore.count + 2
  }))
}

 <div>
   <p>name:{{ mainStore.name }}</p>
   <p>count:{{ mainStore.count }}</p>
   <p>count:{{ storeCount }}</p>
   <button @click="mainStore.count++">mainStore.count++</button>
   <button @click="add()">add()</button>
   <button @click="add2()">add2()</button>
   <button @click="mainStore.addAmount(3)">mainStore.addAmount(3)</button>
   <p>name:{{ mainStore.name }}</p>
 </div>
 