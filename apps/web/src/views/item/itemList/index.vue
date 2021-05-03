<template>
  <div class="itemlist">
    <list-wrapper></list-wrapper>
  </div>
</template>

<script lang="ts">
import listWrapper from './listWrapper/index.vue'
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
  components: {
    'list-wrapper': listWrapper,
  },
})
</script>

<style lang="scss" scoped>
</style>
