<template>
  <div class="loadingx" @touchmove.prevent v-if="loadingVisible">
    <div class="loadingx-wrap">
      <div class="loadingx-wrap-box">
        <div class="loadingx-wrap-app"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @Author: yanqien
 * @Date: 2021年05月04日23:26:59
 * @Last Modified by: yanqien
 * @Last Modified time: 2021年05月04日23:26:59
 */
import { ref, reactive, toRefs, defineComponent, onUnmounted } from 'vue'
export default defineComponent({
  name: 'index',
  setup() {
    const state: any = reactive({
      loadingVisible: false,
    })
    /**
     * 打开弹层
     */
    const show = () => {
      state.loadingVisible = true
    }
    /**
     * 关闭弹层
     */
    const close = () => {
      state.loadingVisible = false
    }

    const refData: any = toRefs(state)
    return {
      ...refData,
      show,
      close,
    }
  },
})

// export default {
//   name: 'index',
//   data() {
//     return {
//       loadingVisible: true
//     }
//   },
//   methods: {
//     /**
//      * 打开弹层
//      */
//     show() {
//       this.loadingVisible = true
//     },
//     /**
//      * 关闭弹层
//      */
//     close() {
//       this.loadingVisible = false
//     }
//   },
//   destroy: function() {
//     this.$destroy()
//     document.body.removeChild(this.$el)
//   }
// }
</script>

<style scoped lang="scss">
.loadingx {
  position: fixed;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  &-wrap {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &-box {
      position: relative;
      width: 76px;
      height: 76px;
      margin: 2px;
      border: 4px solid #ededed;
      border-radius: 50%;
    }
    &-app {
      position: absolute;
      left: -4px;
      top: -3px;
      width: 76px;
      height: 76px;
      border: 4px solid #f21329;
      border-bottom-color: transparent;
      border-radius: 50%;
      -webkit-animation: rotates 0.75s 0s linear infinite;
      animation: rotates 0.75s 0s linear infinite;
    }
    @keyframes rotates {
      0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
      }
      25% {
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
      }
      50% {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
      }
      75% {
        transform: rotate(270deg);
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -o-transform: rotate(270deg);
      }
      100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
      }
    }
  }
}
</style>
