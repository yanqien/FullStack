<template>
	<div class="address-dailog">
    <van-popup v-model="dialogVisible" position="right" :style="{ height: '100%', width: '100%' }" @close="closeClick">
      
      <!--地址列表-->
      <div class="address-list-wrap">
        <address-lists
          :addressInfo="addressInfo"
          @backEvent="dialogVisible = false"
          @selectAddress="selectAddress"
          :changeTitle="false"></address-lists>
      </div>
      
    </van-popup>
  </div>
  
</template>

<script>
  /**
   * @Author: yqe@360shop.cn
   * @Date: 2020-05-28 20:45:34
   * @Last Modified by: yqe@360shop.cn
   * @Last Modified time: 2020-05-28 20:45:39
   */
  import Vue from 'vue'
  import { Popup } from 'vant'
  Vue.use(Popup)
  
  import addressLists from '@/components/AddressLists'
  export default {
    name: 'index',
    components: {
      addressLists
    },
    data() {
      return {
        dialogVisible: false,
        addressInfo: {
          showBackButton: 1,
          headerTitle: '选择地址',
          searchInfoText: ''
        }
      }
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.dialogVisible = this.visible
    },
    watch: {
      dialogVisible(val) {
        this.$emit('update:visible', val)
      },
      visible(val) {
        this.dialogVisible = val
      }
    },
    methods: {
      closeClick() {
        this.$emit('closeClick')
      },
      /**
       * 关闭弹窗
       */
      handleCloseDialog() {
        this.dialogVisible = false
      },
      /**
       * 选择地址抛出的地址数据
       */
      selectAddress(val) {
        this.$emit('selectAddress', val)
        this.dialogVisible = false
      },
      /**
       * 弹窗中的输入框失去焦点时页面复原
       */
      blurEvent() {
        window.scroll(0, 0)
      }
    }
  }
</script>

<style lang="scss">
  .address-dailog{
    width: 100%;
    .address-list-wrap{
      background: #f4f4f4;
      // padding: 100px 0 70px;
      height: 100%;
      overflow: auto;
      overflow: hidden;
      .address-lists-container{
        padding-top: 0;
        .address-lists{
          padding:230px 0 120px ;
          height:100vh;
          overflow-y: scroll;
          // box-sizing: border-box;
        }
      }
      
    }
  }
</style>
