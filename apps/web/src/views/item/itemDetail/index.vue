<template></template>

<script lang="ts">
import { ref, reactive, toRefs, defineComponent } from 'vue'
export default defineComponent({
  name: 'index',
  setup() {
    const state = reactive({
      data: '',
    })

    const refData: any = toRefs(state)
    return {
      ...refData,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
