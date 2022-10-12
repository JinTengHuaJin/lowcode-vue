import { defineStore } from "pinia"
import { ref } from "vue";

export const useMainStore = defineStore('common', () => {
  let siderIsCollapse = ref(true);
  function setCollapse(value: boolean) {
    siderIsCollapse.value = value;
  }
  return {
    siderIsCollapse,
    setCollapse
  }
})
