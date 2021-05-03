<template>
  <div id="item-wrapper" class="item-wrapper">
    <div class="style1">
      <div class="item-box">
        <div class="item-box-list" v-for="item in itemList" :key="item.id">
          <div class="img-info">
            <img :src="item.pic_url" alt="" />
          </div>
          <div class="item-info">
            <div class="item-info-main">
              <div class="title">{{ item.title }}</div>
              <div class="item-tips">
                <div class="item-tips-app fontZiy" v-if="item.is_self_support == 1">自营</div>
                <div class="item-tips-app fontBaoY">包邮</div>
                <div
                  class="item-tips-app fontHaiWZY"
                  v-if="
                    otherInfo.is_open_kuajing == 1 &&
                    item.item_config &&
                    item.item_config.kuajing_type == 2
                  "
                >
                  海外直邮
                </div>
                <a href="javascript:;" v-if="item.is_act == 1">
                  <!-- 以下为不可同时存在活动标签v-else-if -->
                  <div class="item-tips-app fontTry" v-if="item.is_try && item.is_try == 1">
                    试用
                  </div>
                  <div
                    class="item-tips-app fontMiaoS"
                    v-else-if="item.is_miao && item.is_miao == 1"
                  >
                    {{ item.actives_title }}
                  </div>
                  <div
                    class="item-tips-app fontXianSZ"
                    v-else-if="
                      item.discount &&
                      item.discount != 0 &&
                      item.discount != 10 &&
                      !item.rank_price &&
                      item.is_limit_discount &&
                      item.is_limit_discount == 1
                    "
                  >
                    <!-- 限时{{ item.discount }}折 -->
                    <span v-if="item.discount_sta == 1">限时 ¥{{ item.discount }}</span>
                    <span v-else>限时{{ item.discount }}折</span>
                  </div>
                  <div
                    class="item-tips-app fontKanj"
                    v-else-if="item.is_bargin && item.is_bargin == 1"
                  >
                    砍价
                  </div>
                  <div
                    class="item-tips-app fontZhouQG"
                    v-else-if="item.is_cycle && item.is_cycle == 1"
                  >
                    周期购
                  </div>
                  <!--<div
                  class="item-tips-app fontPingT">拼团</div>-->
                  <div
                    v-else-if="item.is_packageprice && item.is_packageprice == 1"
                    class="item-tips-app fontJiXj"
                  >
                    {{ item.package_label }}
                  </div>

                  <div
                    class="item-tips-app fontTuanG"
                    v-else-if="item.is_tuan && item.is_tuan == 1"
                  >
                    团购
                  </div>
                  <div
                    class="item-tips-app fontXianJiZ"
                    v-else-if="
                      item.discount &&
                      item.discount != 0 &&
                      item.discount != 10 &&
                      !item.rank_price
                    "
                  >
                    {{ item.discount }}折
                  </div>
                  <div
                    class="item-tips-app fontFuGYH"
                    v-else-if="item.is_repurchase && item.is_repurchase != 0"
                  >
                    复购优惠
                  </div>
                  <div
                    class="item-tips-app fontPaiM"
                    v-else-if="item.is_auction && item.is_auction != 0"
                  >
                    拍卖
                  </div>

                  <!-- 以下可同时存在活动标签 -->
                  <div class="item-tips-app fontYuS" v-if="item.is_presale">预售</div>
                  <div class="item-tips-app fontXianSG" v-if="item.is_time_purchase">
                    限时购
                  </div>
                </a>
              </div>
              <div
                class="level-price"
                v-if="!item.activity && item.dhs_item_price && item.dhs_item_price.dhsGrade"
              >
                <span class="level-icon">{{ item.dhs_item_price.dhsRank }}</span>
                <div
                  class="price"
                  v-html="scaleGoodsPriceFn(item.dhs_item_price.priceDhsRank)"
                ></div>
              </div>
              <div v-else-if="item.up_level_name && item.up_discount_price" class="level-price">
                <span class="level-vip-icon">{{ 'LV' + item.up_level_name }}</span>
                <div
                  class="price level-vip-price"
                  v-html="scaleGoodsPriceFn(item.up_discount_price)"
                ></div>
              </div>
              <div class="price-info">
                <div class="left-num">
                  <div class="item goods-price">
                    <div
                      v-if="item.miao_price"
                      class="price"
                      v-html="scaleGoodsPriceFn(item.miao_price)"
                    ></div>
                    <div
                      v-else-if="item.rank_price"
                      class="price"
                      v-html="scaleGoodsPriceFn(item.rank_price)"
                    ></div>
                    <div v-else class="price" v-html="scaleGoodsPriceFn(item.price)"></div>
                    <del class="origin-price" v-if="otherInfo.is_display_original_price == 1"
                      >&yen;{{ item.original_price }}</del
                    >
                  </div>
                  <div class="other-info">
                    <div class="item point" v-if="item.buy_need_points > 0">
                      +<span>{{ item.buy_need_points }}</span
                      ><span>{{ otherInfo.point_name }}</span>
                    </div>

                    <!--赚多少-->
                    <div class="item pre_commission" v-if="item.pre_commission > 0">
                      <span class="txt">{{ otherInfo.earn_alias }}</span>
                      <span class="price"
                        ><i>&yen;</i><span>{{ item.pre_commission }}</span></span
                      >
                    </div>
                    <div class="item sales-info" v-if="item.sale_num">
                      已售{{ item.sale_num }}件
                    </div>
                  </div>
                </div>
                <!-- <div v-else class="shop-car" @click="JumpName('item-detail',{'detailId':item.item_id})"></div> -->
                <div
                  class="shop-car"
                  v-if="
                    item.is_try == 1 ||
                    item.is_miao == 1 ||
                    item.is_bargin == 1 ||
                    item.is_crowd == 1 ||
                    item.is_limit_discount == 1 ||
                    item.is_group_shopping == 1 ||
                    item.is_auction == 1 ||
                    item.num <= 0
                  "
                  @click="linkToDetail(item)"
                ></div>

                <div class="shop-car" v-else @click="handleOpenSkuDialog(item)">
                  <!-- <svg-icon icon-class="icon_shopCar" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="no-data" v-show="isShowNoData">
      <!-- <no-data :noData="noData"></no-data> -->
    </div>

    <!-- <sku-dialog :visible.sync="skuDialogVisible" :itemId="itemId"></sku-dialog> -->
  </div>
</template>

<script lang="ts">
/**
 * @Author: yanqien
 * @Date: 2021-04-24 19:14:46
 * @Last Modified by: yanqien
 * @Last Modified time: 2021-04-24 19:14:46
 */

import { scaleGoodsPrice } from '@/utils'
import { reactive, toRefs, defineComponent } from 'vue'
export default defineComponent({
  name: 'index',
  props: {
    itemList: {
      type: Array,
      default: [],
    },
    isShowNoData: {
      type: Boolean,
      default: false,
    },
    listStyle: {
      type: Boolean,
      default: false,
    },
    otherInfo: {
      type: Object,
      default() {
        return {
          is_display_original_price: '',
          earn_alias: '',
          is_open_kuajing: '',
          point_name: '',
        }
      },
    },
  },
  setup() {
    const state = reactive({
      listParams: {
        p: 1,
        type: '1',
        keyword: '',
      },
    })

    /**
     * 商品价格 整数放大
     */
    const scaleGoodsPriceFn = (price: any, className: any): string => {
      return scaleGoodsPrice(price, className)
    }

    const refData: any = toRefs(state)
    return {
      ...refData,
      scaleGoodsPriceFn,
    }
  },
  components: {
    // 'vue-waterfall-easy': vueWaterfallEasy,
  },
})

// import skuDialog from '../../../components/skuDialog'
// import { scaleGoodsPrice } from '@/utils/index'
// import noDataImg from '@img/no_goods.png'
// import noData from '@/components/noData/index'
// import { mapGetters } from 'vuex'
// import ShopCode from '@/components/ShopCode'
// export default {
//   name: 'index',
//   components: {
//     vueWaterfallEasy,
//     skuDialog,
//     noData,
//     ShopCode,
//   },
//   props: {
//     itemList: {
//       type: Array,
//       default: [],
//     },
//     isShowNoData: {
//       type: Boolean,
//       default: false,
//     },
//     listStyle: {
//       type: Boolean,
//       default: false,
//     },
//     otherInfo: {
//       type: Object,
//       default() {
//         return {
//           is_display_original_price: '',
//           earn_alias: '',
//           is_open_kuajing: '',
//           point_name: '',
//         }
//       },
//     },

//     vanList: {
//       type: Object,
//       default: {
//         loading: false,
//         error: false,
//         finished: false,
//       },
//     },
//   },
//   data() {
//     return {
//       noData: {
//         text: '暂无商品数据',
//         img: noDataImg,
//         width: '214px',
//         marginTop: '60px',
//         txtMarginTop: '-30px',
//       },
//       skuDialogVisible: false,
//       itemId: 0,
//       loadingDotStyle: {
//         background: '#e43',
//         display: 'none',
//       },
//       // p: 2,
//       listParams: {
//         p: 1,
//         type: this.type,
//         keyword: '',
//       },
//       mmxxStatus: false,
//     }
//   },
//   methods: {
//     JumpName(url, data) {
//       this.$JumpName(this, url, data)
//     },
//     linkTo(url) {
//       window.location.href = url
//     },
//
//     /**
//      * 滑到底部
//      */
//     getData() {
//       this.$emit('scrollReachBottom')
//     },
//     // 样式二加载更多
//     onLoad() {
//       this.$emit('scrollReachBottom')
//     },
//     // 跳转商品详情页
//     linkToDetail(item) {
//       let link = ''
//       if (item.buy_method == 2) {
//         link = item.buy_url
//         window.location.href = link
//       } else {
//         link = item.link_item
//         if (this.mmxxStatus) {
//           // TODO 妈妈心选还是用的老的链接跳转
//           window.location.href = link
//         } else {
//           let _path = '/mb/item/item-detail'
//           if (link.indexOf('/mb/item/item-group') > -1) {
//             _path = '/mb/item/item-group'
//           } else if (link.indexOf('/mb/item/item-invite-bargain') > -1) {
//             _path = '/mb/item/item-invite-bargain'
//           } else if (link.indexOf('/mb/item/itemCourse') > -1) {
//             _path = '/mb/item/itemCourse'
//           }
//           // href改成路由跳转
//           this.$router.push({
//             path: _path,
//             query: this.getQueryParams('?' + link.split('?')[1]),
//           })
//         }
//       }
//       // window.location.href = link
//     },
//     getQueryParams(url) {
//       // TODO 获取url中"?"符后的字串
//       if (typeof url === 'string') {
//         const theRequest = {}
//         if (url.indexOf('?') != -1) {
//           const str = url.substr(1)
//           const strs = str.split('&')
//           for (let i = 0; i < strs.length; i++) {
//             theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]) || 0
//           }
//         }
//         return theRequest
//       }
//     },

//     /**
//      * 打开SKU弹窗
//      */
//     handleOpenSkuDialog(data) {
//       const buy_need_fans = this.$store.getters.wxConfig.buy_need_fans
//       const that = this
//       if (buy_need_fans == 1) {
//         that.$isFans(
//           () => {
//             this.$Error('请先等待商家绑定公众号')
//             return false
//           },
//           () => {
//             that.$refs.shopCode.dialogVisible = true
//             return false
//           },
//           () => {
//             // 打开sku弹窗
//             that.skuDialogVisible = true
//             that.itemId = Number(data.item_id)
//           },
//         )
//       } else {
//         // 打开sku弹窗
//         that.skuDialogVisible = true
//         that.itemId = Number(data.item_id)
//       }
//     },
//   },
//   mounted() {
//     console.log(this.itemList, 'bbb')
//   },
//   created() {
//     console.log(this.otherInfo, '11111111')
//     console.log(this.itemList, 'aaaaaa')
//     const shop = this.$route.query.sid
//   },
//   activated() {
//     // TODO layout重新加载 瀑布流滚动到上次位置
//     this.$Bus.$emit('reloadLayout')
//   },
//   computed: {
//     // 获取自定义符号
//     ...mapGetters(['mSymbol']),
//   },
// }
</script>

<style lang="scss">
#item-wrapper {
  .vue-waterfall-easy-container {
    overflow: hidden;
    .vue-waterfall-easy a.img-inner-box {
      // box-shadow: 0 1px 6px rgba(228, 226, 226, 0.3) !important;
      overflow: hidden;
      box-shadow: none;
      border-radius: 12px;
      background: #fff;
      border: none;
      width: 100%;
      .alink.img-wraper {
      }
    }
  }
  .level-price {
    .level-price-item {
      .price-scale {
        color: #ffb400;
      }
    }
  }
  //售罄商品样式
  .item-info {
    &.gray {
      .shop-car {
        -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
        filter: grayscale(100%);
      }
      // }
    }
  }
  .level-vip-price {
    .price-scale {
      color: #d1ab78;
    }
  }
}
</style>
<style scoped lang="scss">
@import 'src/assets/styles/mixin';
@import 'src/assets/styles/variables';
#item-wrapper {
  padding-bottom: 100px;
  .style1 {
    // height: 100vh;
    padding: 10px;
  }
  .item-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-list {
      width: 48%;
      background: #fff;
      margin: 1%;
    }
    .img-info {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .item-info {
    .item-sold-out {
      /* display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        position: absolute;
        left: 120px;
        top:100px;
        min-width:120px;
        height:120px;
        font-size:18px;
        color:#fff;
        background:rgba(0,0,0,1);
        opacity:0.5;
        border-radius:50%;
        .em{
          font-size:26px;
        }
        .sub{
          margin-top:2px;
          opacity:0.6;
        } */
      position: absolute;
      width: 200px;
      height: 50px;
      background: rgba(0, 0, 0, 0.5);
    }
    .item-timer {
      position: relative;
      // top:-52px;
      margin-top: -50px;
      z-index: 1;
      height: 52px;
      line-height: 52px;
      width: 100%;
      color: #fff;
      text-align: center;
      font-size: 20px;
      @include gradient(right, #ff2a40, #fe3c70);
    }
    &-main {
      padding: 14px 20px 30px;
      // font-size: 0;
      position: relative;
      // font-family: Gilroy-Regular;
      .title {
        font-size: 28px;
        color: #333;
        margin-bottom: 16px;
        @include lineClamp($font-size: 24px, $line-height: 1.3, $lines-to-show: 2);
      }
      .item-tips {
        font-size: 0;
        margin-bottom: 6px;
        &-app {
          @include alignTop;
          font-size: 20px;
          line-height: 24px;
          padding: 5px 12px;
          background: #ddd;
          margin-right: 10px;
          margin-bottom: 12px;
          border-radius: 24px;
          @include btnGroup($fontDefault, $bgDefault);
          &.fontZiy {
            color: #fff;
            @include gradient(right, #ff2a40, #fe3c70);
          }
          &.fontTry {
            @include btnGroup($fontTry, $bgTry);
          }
          &.fontBaoY {
            @include btnGroup($fontBaoY, $bgBaoY);
          }
          /* &.fontMiaoS{
              @include btnGroup($fontMiaoS, $bgMiaoS);
            } */
          &.fontZhouQG {
            @include btnGroup($fontZhouQG, $bgZhouQG);
          }
          &.fontXianSZ {
            @include btnGroup($fontXianSZ, $bgXianSZ);
          }
          /* &.fontPingT{
              @include btnGroup($fontPingT, $bgPingT);
            }
            &.fontKanj{
              @include btnGroup($fontKanj, $bgKanj);
            }
            &.fontXianSZ{
              @include btnGroup($fontXianSZ, $bgXianSZ);
            }
            &.fontTuanG{
              @include btnGroup($fontTuanG, $bgTuanG);
            }
            &.fontJiXj{
              @include btnGroup($fontJiXj, $bgJiXj);
            } */
          &.fontFuGYH {
            @include btnGroup($fontFuGYH, $bgFuGYH);
          }
          /* &.fontYuS{
              @include btnGroup($fontYuS, $bgYuS);
            }
            &.fontPaiM{
              @include btnGroup($fontPaiM, $bgPaiM);
            } */
          &.fontXianSG {
            @include btnGroup($fontXianSG, $bgXianSG);
          }
          &.fontXianJiZ {
            @include btnGroup($fontXianJiZ, $bgXianJiZ);
          }
        }
      }
      .level-price {
        display: flex;
        align-items: center;
        margin: 8px 0 6px;
        .level-icon {
          position: relative;
          display: block;
          // width:28px;
          height: 30px;
          line-height: 30px;
          padding: 0 6px;
          // margin-right:4px;
          font-size: 20px;
          color: #885a0b;
          @include gradient(right, #fff289, #fccd56);
          @for $i from 1 through 5 {
            &.icon#{$i} {
              background-image: url(~@/assets/images/item/list/list_price#{$i}.png);
            }
          }
          &::after {
            content: '';
            position: absolute;
            top: 6px;
            right: -7px;
            width: 0;
            height: 0;
            border: 8px solid transparent;
            border-right: 0;
            border-left-color: #fccd56;
          }
        }
        .price {
          display: inline-block;
          font-size: 28px;
          color: #ffb400;
          margin-left: 14px;
          vertical-align: 4px;
          /* i{
              display: inline-block;
              transform: scale(0.7);
              vertical-align: -2px;
            } */
        }
        .level-vip-icon {
          color: #d1ab79;
          font-size: 22px;
          font-weight: bold;
          padding-left: 34px;
          padding-right: 10px;
          display: block;
          background-image: url(../../../../../assets/images/item/list/vip-icon.png),
            linear-gradient(to right, #f4e4cc, #fff9ef);
          background-repeat: no-repeat;
          background-size: 29px 29px, 100% 100%;
          background-position: center;
          background-position-x: -1px;
          border-color: #d1ab79;
          border-width: 1px;
          border-radius: 29px;
          border-style: solid;
          border-left: none;
        }
      }
      .price-info {
        display: flex;
        align-items: flex-end;
        .left-num {
          flex: 1;
          // display:flex;
          // flex-direction: column;
          flex-wrap: wrap;
          .item {
            margin-top: 8px;
            margin-right: 8px;
            font-size: 22px;
            &.goods-price {
              margin-top: 0;
            }
          }
          .other-info {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
      }
      .goods-price {
        .price {
          display: inline-block;
          // color:#F30C23;
        }
        .origin-price {
          margin-left: 4px;
          font-size: 22px;
          color: #999;
        }
        /* &-item{
            display: inline-block;
            .point{
              display: inline-block;
              color: $warning;
              font-size: 30px;
              margin-right: 5px;
              margin-bottom: 10px;
            }
            .price{
              font-size: 24px;
              color: $warning;
              display: inline-block;
              margin-right: 10px;
              .num-front{
                font-size: 32px;
              }
              .num-back{
                font-weight: bold;
              }
            }
            .origin-price{
              display: inline-block;
              width: 160px;
              color: #8b8b8b;
              font-size: 28px;
            }
          } */
      }
      //积分
      .point {
        color: #ffa101;
      }
      //预计佣金
      .pre_commission {
        color: #94734d;
      }
      .sales-info {
        color: #999;
      }
      .shop-car {
        width: 56px;
        height: 56px;
        background: url(~@/assets/images/item/list/cart.png) no-repeat;
        background-size: 100%;
      }
    }
  }

  //样式二
  .style2 {
    padding: 20px 0;
    .item-info-style2 {
      display: flex;
      background: #fff;
      .img-box {
        overflow: hidden;
        width: 240px;
        height: 240px;
        padding: 20px;
        .img-inner-box {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }
        /* .item-sold-out{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
          } */
        .item-sold-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          opacity: 0.4;
        }
        .item-sold-out {
          position: absolute;
          top: 20px;
          left: -46px;
          width: 180px;
          height: 50px;
          line-height: 50px;
          transform: rotate(-45deg);
          font-size: 24px;
          text-align: center;
          color: #fff;
          background: #000;
          opacity: 0.5;
        }
      }
      .item-info-main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 30px 20px 0;
        flex: 1;
        border-bottom: 2px solid #ededed;
        .title {
          margin-bottom: 10px;
        }
        .item-timer {
          height: auto;
          line-height: 1;
          margin: 0 0 8px;
          text-align: left;
          font-size: 20px;
          color: #f30c23;
          background: transparent;
        }
        .left-num {
          flex-direction: row;
          align-items: flex-end;
          .other-info {
            .item {
              margin-bottom: 3px;
            }
          }
        }
        .price-info {
          position: relative;
          .shop-car {
            position: absolute;
            right: 0;
            bottom: 38px;
          }
        }
      }
    }
  }
}
</style>
