<template>
  <div class="head-search">
    <div class="head-search-item" @click="handleOpenDialog">
      {{ showSearchDialog }}
      <input type="text" v-model="keywords" readonly placeholder="请输入商品/店铺名称" />
      <div class="icon">
        <van-icon name="search" />
      </div>
    </div>
    <van-popup
      class="search-pop"
      v-model:show="showSearchDialog"
      :overlay="false"
      position="top"
      :style="{ height: '40%' }"
    >
      <div class="head-search-dialog">
        <div class="head-wrap">
          <div class="head-search-item">
            <input
              ref="searchInput"
              type="search"
              v-model="keywords"
              placeholder="请输入商品/店铺名称"
              @keyup.enter="searchGoodsEvent"
            />
            <div class="icon" @click="searchGoodsEvent">
              <van-icon name="search" />
            </div>
          </div>
          <div class="head-search-cancel" @click="showSearchDialog = false">取消</div>
        </div>
        <div class="middle-wrap">
          <div class="search-tips">
            <div class="search-tips-title">
              <span>搜索历史</span>
              <span class="icon fr" @click="handleDeleteHistory"
                ><van-icon name="delete-o"
              /></span>
            </div>
            <div class="search-tips-wrap">
              <div
                class="search-tips-wrap-item"
                @click="handleClickHistory(item)"
                v-for="(item, index) in searchList"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang='ts'>
/**
 * @Author: yqe@360shop.cn
 * @Date: 2019-10-26 18:48:09
 * @Last Modified by: yqe@360shop.cn
 * @Last Modified time: 2019-10-26 18:48:09
 */
import { reactive, toRefs, defineComponent } from 'vue'
import { Popup, Icon, Dialog } from 'vant'
export default defineComponent({
  name: 'head-search',
  setup() {
    const state: any = reactive({
      showSearchDialog: false,
      keywords: '',
      searchList: [],
    })

    /**
     * 打开搜索弹层，输入框自动获取焦点
     */
    const handleOpenDialog = (): void => {
      state.showSearchDialog = true
    }
    /**
     * 打开搜索弹层，输入框自动获取焦点
     */
    const handleDeleteHistory = (): void => {
      Dialog.confirm({
        message: '确定删除全部搜索历史？',
        className: 'common-confirm',
        closeOnClickOverlay: true,
      })
        .then(() => {
          // on confirm
          state.searchList = []
          state.keywords = ''
          // StoreSave.saveLocal('searchHistory', this.searchList)
        })
        .catch(() => {
          // on cancel
        })
    }
    /**
     * 抛出refreshFn方法提供搜索
     */
    const searchGoodsEvent = () => {
      state.showSearchDialog = false
      // this.$emit('input', this.keywords)
      // this.$emit('refreshFn')
      if (state.keywords && state.keywords != '') {
        const searchList: string[] = state.searchList
        searchList.push(state.keywords)
        state.searchList = searchList
      }
      const arr = [...new Set(state.searchList)]
      state.searchList = arr
      // StoreSave.saveLocal('searchHistory', arr)
    }
    /**
     * 点击历史记录搜索
     */
    const handleClickHistory = (item: string): void => {
      state.keywords = item
      searchGoodsEvent()
    }
    const refData: any = toRefs(state)
    return {
      ...refData,
      handleOpenDialog,
      handleDeleteHistory,
      handleClickHistory,
      searchGoodsEvent,
    }
  },
  components: {
    'van-popup': Popup,
    'van-icon': Icon,
  },
})
// import StoreSave from '@/utils/store'
// import Store from '@/utils/store'
// export default {
//   watch: {
//     value() {
//       this.keywords = this.value
//     }
//   },
//   mounted() {
//     this.getHistory()
//     this.keywords = this.value
//   },
//   created() {
//     const shop = this.$route.query.sid
//     const aft_dz = this.$_shop('$_aft_dz', shop)
//     this.aftStatus = aft_dz// 南昌阿凡提
//   },
//   methods: {
//     // 删除历史搜索按钮
//     handleDeleteHistory() {
//       Dialog.confirm({
//         message: '确定删除全部搜索历史？',
//         className: 'common-confirm',
//         closeOnClickOverlay: true
//       }).then(() => {
//         // on confirm
//         this.searchList = []
//         this.keywords = ''
//         StoreSave.saveLocal('searchHistory', this.searchList)
//       }).catch(() => {
//         // on cancel
//       })
//     },
//     /**
//      * 打开搜索弹层，输入框自动获取焦点
//      */
//     handleClickOpenDialog() {
//       if (this.aftStatus) {
//         if (Store.fetchLocal('cityName') || Store.fetchLocal('adcode')) {
//           this.showSearchDialog = true
//           setTimeout(() => {
//             this.$refs.searchInput.focus()
//           }, 300)
//         } else {
//           this.$Error('请返回首页等待城市定位或者手动选择城市')
//         }
//       } else {
//         this.showSearchDialog = true
//         setTimeout(() => {
//           this.$refs.searchInput.focus()
//         }, 300)
//       }
//     },
//     /**
//      * 抛出refreshFn方法提供搜索
//      */
//     searchGoodsEvent() {
//       this.showSearchDialog = false
//       this.$emit('input', this.keywords)
//       this.$emit('refreshFn')
//       if (this.keywords && this.keywords != '') {
//         const searchList = this.searchList
//         console.log(searchList, 111)
//         searchList.push(this.keywords)
//         this.searchList = searchList
//       }
//       const arr = [...new Set(this.searchList)]
//       this.searchList = arr
//       StoreSave.saveLocal('searchHistory', arr)
//     },
//     /**
//      * 点击历史记录搜索
//      */
//     handleClickHistory(item) {
//       this.keywords = item
//       this.searchGoodsEvent()
//     },
//     /**
//      * 历史搜索
//      */
//     getHistory() {
//       const searchHistory = StoreSave.fetchLocal('searchHistory')
//       this.searchList = Array.isArray(searchHistory) ? searchHistory : []
//     }
//   }
// }
</script>

<style scoped lang="scss">
@import 'src/assets/styles/mixin';
.head-search {
  padding: 20px;
  background: #fff;
  max-width: 750px;
  margin: 0 auto;
  &-item {
    /* padding: 15px 40px ;
      border:3px solid #ff5000;
      border-radius: 40px;
      position: relative;
      input{
        background: #fafafa;
        height: 36px;
        line-height: 36px;
        font-size: 26px;
        width: percentage(550/635);
        border: none;
      }
      .icon{
        width: 72px;
        height: 72px;
        line-height: 72px;
        text-align: center;
        position: absolute;
        right: 5px;
        top: -4px;
        font-size: 34px;
      } */
    position: relative;
    width: 100%;
    height: 72px;
    border-radius: 36px;
    font-size: 0;
    background: #f7f7f7;
    .icon {
      position: absolute;
      line-height: 72px;
      left: 28px;
      top: 0;
      color: #999999;
      font-size: 30px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      height: 100%;
      .icon_search {
        width: 28px;
        height: 28px;
      }
    }
    @include placeColor(#999);
    input {
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: 24px;
      padding: 15px 30px 14px 70px;
      border: 0;
      background: transparent;
    }
  }
  /* &-dialog{
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      height: 100vh;
      background: #fff;
      z-index: 11; */
  .search-pop {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: none;
    .head-wrap {
      font-size: 0;
      padding: 20px;
      .head-search-item {
        display: inline-block;
        width: calc(100% - 90px);
        // @include alignTop;
      }
      .head-search-cancel {
        display: inline-block;
        width: 90px;
        line-height: 72px;
        height: 72px;
        font-size: 26px;
        text-align: center;
        color: #333;
        @include alignTop;
      }
    }
    .middle-wrap {
      padding-top: 30px;
      border-radius: 40px;
      background: #fff;
      .search-tips {
        padding: 0 25px 30px;
        &-title {
          margin-bottom: 30px;
          span {
            display: inline-block;
            font-size: 26px;
            color: #333;
          }
          .icon {
            font-size: 32px;
            color: #999;
            padding: 10px;
          }
        }
        &-wrap {
          font-size: 0;
          &-item {
            padding: 12px 28px;
            display: inline-block;
            background: #f2f2f2;
            color: #666;
            border-radius: 60px;
            font-size: 24px;
            margin-right: 16px;
            margin-bottom: 16px;
          }
        }
      }
    }
  }
}
</style>
