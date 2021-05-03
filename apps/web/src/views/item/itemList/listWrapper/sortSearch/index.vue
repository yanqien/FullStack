<template>
  <div :class="typeLength" class="sort-search">
    <div
      v-for="(item, index) in typeLists"
      :key="index"
      class="sort-search-item"
      :class="item.active ? 'active' : ''"
      @click="handleClickSort(item, index)"
    >
      <span
        class="type-txt"
        :class="item.prop == 'listStyle' ? 'style' : ''"
        :id="item.prop == 'listStyle' && listStyle ? 'style2' : ''"
        >{{ item.label }}
        <div class="sort-icon" v-if="item.sort !== 'none'">
          <div class="icon up" :class="item.sort == 'ascending' ? 'selected' : ''"></div>
          <div class="icon down" :class="item.sort == 'descending' ? 'selected' : ''"></div>
        </div>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @Author: yanqien
 * @Date: 2021-04-24 19:10:57
 * @Last Modified by: yanqien
 * @Last Modified time: 2021-04-24 19:10:57
 */
import { reactive, toRefs, defineComponent, computed, watch, onMounted } from 'vue'
export interface propsArray {
  label: string
  active: boolean
  type: number
  prop: string
  sort: string
}
export default defineComponent({
  name: 'sort-search',
  props: {
    typeList: {
      type: Array,
      default: () => {
        const array: propsArray[] = [
          { label: '默认', active: false, type: 0, prop: 'default', sort: 'none' },
          { label: '价格', active: false, type: 1, prop: 'price', sort: '' },
          { label: '销量', active: false, type: 2, prop: 'sales', sort: '' },
          { label: '新品', active: false, type: 3, prop: 'new', sort: '' },
        ]
        return array
      },
    },
    listStyle: {
      type: Boolean,
      default: false,
    },
    aftDetailedList: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['pullItem'],
  setup(props, { emit }) {
    const state: any = reactive({
      indexNum: '',
      typeLists: [],
    })

    // 计算排序类型的个数
    const typeLength = computed(() => {
      const len = props.typeList.length
      return `type-len-${len}`
    })

    watch(props, (newProps, oldProps) => {
      state.typeLists = props.typeList
    })

    onMounted(() => {
      state.typeLists = props.typeList
    })
    /**
     * 排序搜索
     * @param sort: ascending 升序/ descending 降序
     * @param prop: 类型
     */
    const handleClickSort = (param: any, index: any) => {
      const indexNum = state.indexNum
      if (param.prop == 'listStyle') {
        emit('pullItem', param)
        return false
      }
      if (indexNum == index) {
        if (param.prop !== 'default') {
          if (param.sort === 'ascending') {
            state.typeLists[index].sort = 'descending'
            state.typeLists[index].active = true
          } else if (param.sort === 'descending') {
            // 重置为默认
            state.typeLists[index].sort = 'ascending'
            state.typeLists[index].active = true
          } else if (param.sort === '') {
            state.typeLists[index].sort = 'ascending'
            state.typeLists[index].active = true
          }
        }
      } else {
        const typeLists = state.typeLists
        typeLists.forEach((item: any, num: any) => {
          state.typeLists[num].active = false
          if (typeLists[num].sort != 'none') {
            state.typeLists[num].sort = 'false'
          }
        })
        state.typeLists[index].active = true
        if (param.prop !== 'default') {
          state.typeLists[index].sort = 'ascending'
        }
      }
      state.indexNum = index
      emit('pullItem', param)
      // console.log(param.sort, 'sort类型', param.prop)
    }
    const refData: any = toRefs(state)
    return {
      ...refData,
      typeLength,
      handleClickSort,
    }
  },
})
</script>

<style scoped lang="scss">
@import 'src/assets/styles/mixin';
@import 'src/assets/styles/variables';
.sort-search {
  font-size: 0;
  padding: 20px 0 16px;
  @for $i from 1 through 5 {
    &.type-len-#{$i} {
      .sort-search-item {
        width: percentage(1 / $i);
      }
    }
  }

  &-item {
    display: inline-block;
    font-size: 24px;
    text-align: center;
    color: #666;
    &.active {
      color: #f20e25;
      font-weight: bold;
      .icon.selected {
        color: #f20e25;
        font-weight: bold;
      }
    }
    .type-txt {
      position: relative;
      display: inline-block;
      width: 130px;
      line-height: 1.5;
      @include showEllipsis;
      // vertical-align: -1px;
      &.style {
        display: inline-block;
        width: 32px;
        height: 32px;
        vertical-align: -2px;
        background: url(src/assets/images/item/list/style1.png) no-repeat;
        background-size: 100%;
      }
      &#style2 {
        background: url(src/assets/images/item/list/style2.png) no-repeat;
        background-size: 100%;
      }
    }
    .sort-icon {
      display: inline-block;
      margin-left: 2px;
      // vertical-align: 2px;
      /* .icon {
        height: 16px;
        // display: inline-block;
        color: #666;
        font-size: 10px;
        &:first-child {
          margin-bottom: -2px;
        }
        .svg-icon {
          height: 8px;
        }
        .rotate180 {
          transform: rotate(180deg);
        }
      } */
      .icon {
        width: 12px;
        height: 6px;
        background: url(src/assets/images/public/sort_up.png) no-repeat;
        background-size: 100% 100%;
        &.up {
          &.selected {
            background-image: url(src/assets/images/public/sort_up2.png);
          }
        }
        &.down {
          margin-top: 4px;
          background-image: url(src/assets/images/public/sort_down.png);
          &.selected {
            background-image: url(src/assets/images/public/sort_down2.png);
          }
        }
      }
    }
  }
}
</style>
