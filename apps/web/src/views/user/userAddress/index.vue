<template>
  <div class="address-box">
    <address-list :addressInfo="addressInfo" @selectAddress="selectAddress"></address-list>
  </div>
</template>

<script lang="ts">
import addressList from '@/components/addressList/index.vue'

import { ref, reactive, toRefs, getCurrentInstance, onMounted, defineComponent } from 'vue'
export default defineComponent({
  name: 'useraddress',
  components: {
    addressList,
  },
  setup() {
    const state = reactive({
      searchInfo: {
        placeholder: '请输入姓名或者手机号',
      },

      addressInfo: {
        showBackButton: 0,
        headerTitle: '收货地址',
        searchInfoText: '',
        addLists: [
          {
            address_id: '11',
            is_default_address: 1,
            name: '夏夏',
            mobile: '15112121212',
            province: '浙江省',
            city: '杭州市',
            area: '西湖区',
            town: 'xh街道',
            address: '22号',
          },
          {
            address_id: '12',
            is_default_address: 0,
            name: '夏夏2',
            mobile: '15112121212',
            province: '浙江省',
            city: '杭州市',
            area: '西湖区',
            town: 'xh街道',
            address: '22号',
          },
        ],
      },
    })
  },
})
</script>

<style scoped lang="scss">
.aaa {
  color: #fff;
}
.address-box {
  height: 100vh;
  overflow-y: auto;
}
</style>
