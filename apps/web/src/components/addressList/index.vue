<template>
  <div class="address-lists-container">
    <div class="address-header-container">
      <div class="address-header" v-if="addressInfo.showBackButton">
        <a @click="handleClickBackBtn" href="javascript:;" class="btn-back">
          <!-- <svg-icon icon-class="icon_back" class="icon-backg"></svg-icon> -->
        </a>
        <span>{{ addressInfo.headerTitle }}</span>
      </div>
      <!-- 搜索 -->
      <search :searchInfo="searchInfo" @search="searchAddress"></search>
    </div>

    <div v-if="addLists.length != 0">
      <div class="address-lists">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text=""
          @load="onLoad"
          :offset="offset"
          :immediate-check="immediateCheck"
        >
          <div class="address-item" v-for="(item, index) in addLists" :key="item.address_id">
            <div @click="selectAddress(item)" class="address-info">
              <p class="name-mobile clearfix">
                <span class="name fl">{{ item.name }}</span>
                <span class="mobile fr">{{ item.mobile }}</span>
              </p>
              <p class="addr-detail">
                {{ item.province }}{{ item.city }}{{ item.area }}{{ item.town
                }}{{ item.address }}
              </p>
            </div>
            <div class="actions clearfix">
              <div
                href="javascript:;"
                class="btn-check fl j-addrM-setDefault"
                :class="item.is_default_address == 1 ? 'checked' : ''"
                @click="clickDefault(index, item)"
              >
                <i class="icon-check bdbox"></i>
                <span>默认地址</span>
                <!-- <span v-if="item.is_default_address==1">默认</span>
                <span v-else>设为默认</span> -->
              </div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
    <div v-else>
      <div class="no-address">
        <img :src="noAddress" alt="" />
        <p>你还没有收货地址哟～</p>
        <!--<div class="no-address-btn"
             @click="clickAddAddress">
          <svg-icon icon-class="icon_add"
                    class="icon_add"></svg-icon>
          新增地址
        </div>-->
      </div>
    </div>
    <div class="address-add-btn">
      <div class="bottom red-gra-btn" @click="clickAddAddress"><i></i>添加新地址</div>
    </div>
    <edit-address :editInfo="editInfo" @init="init"></edit-address>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, getCurrentInstance, onMounted, defineComponent } from 'vue'
// import wxApi from '@/utils/wxApi'
// import { isWeixinCient } from '@/utils/validate'
import { List, Dialog } from 'vant'

export default defineComponent({
  name: 'address-list',
  props: {
    addressInfo: {
      type: Object,
      default: {
        showBackButton: 1,
        headerTitle: '收货地址',
        searchInfoText: '',
      },
    },
  },
  setup() {
    const state = reactive({
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
          is_default_address: 1,
          name: '夏夏',
          mobile: '15112121212',
          province: '浙江省',
          city: '杭州市',
          area: '西湖区',
          town: 'xh街道',
          address: '22号',
        },
      ],
    })

    const refData: any = toRefs(state)
    return {
      ...refData,
    }
  },
})

// import EditAddress from '@/components/EditAddress/index'
// import noAddress from '@img/user/no-address.png'
// import Search from '@/components/Search/index'
// import {
//   getAddressList,
//   setDefaultAddress,
//   delAddress,
//   sysncrWxAddress
// } from '@/api/user/address.js'
// export default {
//   name: 'index',
//   components: {
//     EditAddress,
//     Search
//   },
//   props: {
//     addressInfo: {
//       type: Object,
//       default: {
//         showBackButton: 1,
//         headerTitle: '收货地址',
//         searchInfoText: ''
//         /* addLists: [
//           {
//             address_id: '11',
//             is_default_address: 1,
//             name: '夏夏',
//             mobile: '15112121212',
//             province: '浙江省',
//             city: '杭州市',
//             area: '西湖区',
//             town: 'xh街道',
//             address: '22号'
//           }
//         ]*/
//       }
//     },
//     changeTitle: {
//       type: Boolean,
//       default: true
//     }
//   },
//   data() {
//     return {
//       searchInfo: {
//         placeholder: '请输入姓名或者手机号'
//       },
//       noAddress,
//       can_not_add_address_dz: false,
//       showSyncWechatAddressBtn: '0',
//       isWxBtn: false,
//       loading: false,
//       finished: false,
//       offset: 20,
//       immediateCheck: false,
//       p: 1,
//       editInfo: {
//         isNeedAddress: 1,
//         isNeedTown: 1,
//         isNeedTownMust: 1,
//         type: 'add',
//         show: false,
//         areaBtnTextEdit: '',
//         areaBtnTextEditTown: '',
//         TextareaDel: false,
//         addrDetail: {}
//       },
//       addLists: []
//     }
//   },
//   methods: {
//     // 处理
//     openAddressSta(res) {
//       if (res.errMsg == 'openAddress:ok') {
//         const data = {
//           name: res.userName,
//           mobile: res.telNumber,
//           province: res.provinceName,
//           city: res.cityName,
//           area: res.countryName,
//           address: res.detailInfo,
//           zip: res.postalCode
//         }
//         sysncrWxAddress(data).then(res => {
//           if (res.status == 1) {
//             this.init(1)
//             this.$Error('同步微信地址成功')
//           } else {
//             this.$Error('获取地址失败')
//           }
//         })
//       } else {
//         this.$Error('获取地址失败!')
//       }
//     },
//     searchAddress(key) {
//       this.addressInfo.searchInfoText = key
//     },
//     // 点击返货按钮
//     handleClickBackBtn() {
//       this.$emit('backEvent')
//     },
//     // 同步微信地址方法
//     getWxAddressLists() {
//       const option = {
//         success: res => {
//           this.openAddressSta(res)
//         }
//       }
//       wxApi.wxRegister(() => {
//         setTimeout(() => {
//           wxApi.openAddress(option)
//         }, 600)
//       })
//     },
//     init(onload) {
//       this.$loadingWrap.show()
//       setTimeout(() => {
//         this.$loadingWrap.close()
//       }, 10000)
//       if (onload == 1) {
//         this.p = 1
//         this.addLists = []
//       }
//       const data = {
//         p: this.p,
//         key: this.addressInfo.searchInfoText
//       }
//       getAddressList(data).then(res => {
//         this.$loadingWrap.close()
//         if (res.status == 1) {
//           const resData = res.data
//           if (this.changeTitle) {
//             document.title = resData.ftitle_address
//           }
//           this.editInfo.isNeedAddress = resData.is_select_psq
//           this.editInfo.isNeedTown = resData.is_select_town
//           this.editInfo.isNeedLatLng = resData.is_store_fn_pt // 是否开通蜂鸟配送，需要获取地址的经纬度
//           this.showSyncWechatAddressBtn = resData.is_get_wxaddress
//           if (resData.addressList && resData.addressList.length) {
//             var length = resData.addressList.length
//           } else {
//             this.finished = true
//             return
//           }
//           if (length < 20) this.finished = true
//           this.addLists = this.addLists.concat(resData.addressList)
//           this.p += 1
//         } else {
//           this.$Error(res.msg)
//         }
//       })
//     },
//     // 点击同步微信地址
//     addrMSyncWechat() {
//       this.getWxAddressLists()
//     },
//     // 点击添加新地址
//     clickAddAddress() {
//       this.editInfo.addrDetail = {
//         address_id: '',
//         name: '',
//         mobile: '',
//         province: '',
//         city: '',
//         area: '',
//         town: '',
//         zip: '', // 邮政编码
//         address: ''
//       }
//       this.editInfo.areaBtnTextEdit = ''
//       this.editInfo.show = true
//       this.editInfo.TextareaDel = true
//     },
//     // 设为默认地址
//     clickDefault(index, item) {
//       const data = {
//         id: item.address_id
//       }
//       // for (let i = 0; i < this.addLists.length; i++) {
//       //   this.$set(this.addLists[i], 'is_default_address', '0')
//       // }
//       const addLists = this.addLists
//       addLists.forEach((element, num) => {
//         this.$set(this.addLists[num], 'is_default_address', '0')
//       })
//       this.addLists[index].is_default_address == '1'
//       this.$set(this.addLists[index], 'is_default_address', '1')
//       this.$loadingWrap.show()
//       setTimeout(() => {
//         this.$loadingWrap.close()
//       }, 10000)

//       setDefaultAddress(data).then(res => {
//         this.$loadingWrap.close()
//         if (res.status == 1) {
//           this.$Error('设置成功')
//         } else {
//           this.$Error(res.msg)
//         }
//       })
//     },
//     // 编辑地址
//     clickEditAddress(item) {
//       this.editInfo.show = true
//       this.editInfo.TextareaDel = true
//       this.editInfo.type = 'edit'
//       this.editInfo.areaBtnTextEditTown = item.town
//       this.editInfo.addrDetail = {
//         address_id: item.address_id,
//         name: item.name,
//         mobile: item.mobile,
//         province: item.province,
//         city: item.city_id,
//         area: item.area_id,
//         town: item.town_id,
//         zip: item.zip, // 邮政编码
//         address: item.address,
//         latitude: item.latitude,
//         longitude: item.longitude
//       }
//       this.editInfo.areaBtnTextEdit =
//         item.province + '\xa0\xa0' + item.city + '\xa0\xa0' + item.area
//       // if (this.editInfo.isNeedTown == '0') this.editInfo.addrDetail.address = item.address
//       console.log(item, '.......')
//     },
//     // 删除地址
//     clickDelAddress(item) {
//       Dialog.confirm({
//         message: '确定删除吗？',
//         confirmButtonText: '确定',
//         className: 'common-confirm',
//         closeOnClickOverlay: true
//       }).then(() => {
//         const data = {
//           address_id: item.address_id
//         }
//         delAddress(data).then(res => {
//           if (res.status == 1) {
//             this.init(1)
//             this.$Error('删除地址成功')
//           } else {
//             this.$Error(res.msg)
//           }
//         })
//       })
//     },
//     onLoad() {
//       setTimeout(() => {
//         this.init()
//         this.loading = false
//       }, 500)
//     },
//     // 选择地址
//     selectAddress(item) {
//       this.$emit('selectAddress', item)
//     }
//   },
//   watch: {
//     // 监听县区的变化
//     'addressInfo.searchInfoText': {
//       handler(val) {
//         console.log(val)
//         this.init(1)
//       },
//       deep: true
//     }
//   },
//   created() {
//     const shop = this.$route.query.sid
//     const one_address_dz = this.$_shop('$_one_address_dz', shop)
//     this.can_not_add_address_dz = one_address_dz
//     // 判断微信环境 决定同步微信地址按钮
//     if (isWeixinCient()) {
//       this.isWxBtn = true
//     } else {
//       this.isWxBtn = false
//     }
//     this.init()
//   }
// }
</script>

<style scoped lang="scss">
.address-lists-container {
  border-top: 2px solid #f5f5f5;
  padding-bottom: 130px;
  padding: 20px 25px;
  .address-header-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 11;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
  }
  .address-lists {
    padding: 108px 0 108px;
  }
  .address-header {
    width: 100%;
    height: 100px;
    line-height: 94px;
    background: #fff;
    border-bottom: 2px solid #f5f5f5;
    text-align: center;
    .btn-back {
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 80px;
      height: 94px;
      padding-top: 4px;
    }
    .icon-backg {
      font-size: 40px;
    }
    span {
      font-size: 32px;
    }
  }
  .address-item {
    margin-bottom: 20px;
    padding: 30px;
    background: #fff;
    border-radius: 20px;
    .address-info {
      border-bottom: 1px solid #f5f5f5;
      .name-mobile {
        font-size: 32px;
        line-height: 50px;
        color: #333;
        .name {
          font-weight: bold;
        }
      }
      .addr-detail {
        font-size: 26px;
        line-height: 1.4;
        color: #999999;
        padding: 20px 0 30px;
      }
    }
    .actions {
      padding-top: 26px;
      color: #999;
      font-size: 28px;
      line-height: 36px;
      .btn-check {
        .icon-check {
          float: left;
          width: 36px;
          height: 36px;
          margin-right: 8px;
          border: 3px solid #cecece;
          border-radius: 50%;
          vertical-align: middle;
        }
        &.checked {
          .icon-check {
            border: 0;
            background: url('src/assets/images/public/selected.png') no-repeat;
            background-size: 100% 100%;
          }
          span {
            color: #f20b22;
          }
        }
      }
      .btn {
        a {
          display: block;
          padding: 0 30px;
        }
        .del-btn {
          padding-right: 0;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            width: 2px;
            height: 26px;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: #999999;
          }
        }
      }
    }
  }
  .address-add-btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 32px;
    text-align: center;
    color: #fff;
    background: #fff;
    padding: 11px 25px;
    .bottom {
      height: 76px;
      line-height: 76px;
      border-radius: 76px;
      // box-shadow: 0 5px 13px rgba(199, 67, 0, 0.5);
      i {
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-right: 8px;
        background: url('src/assets/images/public/icon_add.png') no-repeat;
        background-size: 100% 100%;
        vertical-align: -2px;
      }
    }
    .twobtn {
      margin: 0 20px;
      height: 80px;
      line-height: 80px;
      font-size: 28px;
      font-weight: bold;
      a {
        width: 50%;
        &.add-btn {
          border-radius: 0 80px 80px 0;
          i {
            display: inline-block;
            width: 28px;
            height: 28px;
            margin-right: 8px;
            background: url('src/assets/images/public/icon_add.png') no-repeat;
            background-size: 100% 100%;
            vertical-align: -2px;
          }
        }
        &.wechat-btn {
          background: linear-gradient(to right, #ffae00, #ff8a02);
          border-radius: 80px 0 0 80px;
        }
      }
    }
  }
  .no-address {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 178px;
      height: 186px;
      margin: 0 auto;
    }
    p {
      font-size: 28px;
      color: #666666;
      margin-top: 35px;
    }
    .no-address-btn {
      width: 226px;
      line-height: 72px;
      border: 2px solid #f20b22;
      border-radius: 38px;
      text-align: center;
      font-size: 28px;
      color: #f20b22;
      margin: 64px auto 0;
      .icon_add {
        color: #f20b22;
      }
    }
  }
}
</style>
