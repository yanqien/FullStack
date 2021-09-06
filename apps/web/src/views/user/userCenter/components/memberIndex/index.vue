<template>
  <!-- 会员中心模板1 -->
  <div>
    <div class="u-id-s2-links clearfix style2">
      <div class="u-id-s2-links-title">
        <h3>我的订单</h3>
        <p @click="handleClickJump('orderList')">查看全部</p>
      </div>
      <!-- 待付款 -->
      <div class="link" @click="handleClickJump('orderList')">
        <i class="icon-links icon1_1"></i>
        <span class="title">待付款</span>
        <span class="num">{{ memberInfo.wait_total }}</span>
      </div>
      <!-- 已付款 -->
      <div class="link" @click="handleClickJump('orderList', { type: 1 })">
        <i class="icon-links icon1_2"></i>
        <span class="title">待付款</span>
        <span class="num">{{ memberInfo.ispay_total }}</span>
      </div>
      <!-- 已发货 -->
      <div class="link" @click="handleClickJump('orderList', { type: 2 })">
        <i class="icon-links icon1_5"></i>
        <span class="title">已发货</span>
        <span class="num">{{ memberInfo.send_total }}</span>
      </div>
      <!-- 待评价 -->
      <div class="link" @click="handleClickJump('commentList', { type: 'evaluate' })">
        <i class="icon-links icon2_2"></i>
        <span class="title">待评价</span>
        <span class="num">{{ memberInfo.wait_comment_list }}</span>
      </div>
      <!-- 已完成 -->
      <div class="link" @click="handleClickJump('orderList', { type: 3 })">
        <i class="icon-links icon1_3"></i>
        <span class="title">已完成</span>
        <span class="num" v-if="memberInfo.fina_total != 0">{{ memberInfo.fina_total }}</span>
      </div>
      <!-- 全部 -->
    </div>
    <section class="mainmodule">
      <!-- 图片广告 -->
      <div class="mianad" v-if="false">
        <a :href="memberInfo.user_img_link">
          <img :src="memberInfo.user_img_ggt" width="100%" />
        </a>
      </div>
      <div class="lunbo">
        <marquee direction="left" onmouseover="stop()" onmouseout="start()" scrollamount="3">
          文字轮播
        </marquee>
      </div>
      <div class="mainlist">
        <ul>
          <li>
            <div class="icon_jf">
              我的积分
              <img class="icon_right" src="@img/public/icon_right.svg" alt="" />
            </div>
          </li>
          <li>
            <div class="icon_vip">
              会员卡
              <img class="icon_right" src="@img/public/icon_right.svg" alt="" />
            </div>
          </li>
          <li>
            <div class="icon_hydj">
              会员权益
              <img class="icon_right" src="@img/public/icon_right.svg" alt="" />
            </div>
          </li>
        </ul>
        <ul>
          <li @click="handleClickJump('modifyUser')">
            <div class="icon_xgzl">
              修改资料
              <img class="icon_right" src="@img/public/icon_right.svg" alt="" />
            </div>
          </li>
          <li @click="handleClickJump('userAddress')">
            <div class="icon_dzgl">
              地址管理
              <img class="icon_right" src="@img/public/icon_right.svg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="mlogin-but style1">
      <a href="javascript:;" class="red-gra-btn" @click="loginOutChild">退出登录</a>
    </section>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs, getCurrentInstance, onMounted, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'memberindex',
  setup() {
    const router = useRouter()
    const state = reactive({
      letterCount: 0,
      outerShow: false,
      memberInfo: {},
    })

    // 路由跳转
    const handleClickJump = (url: string, param: any): void => {
      router.push({
        name: url,
      })
    }
    const refData: any = toRefs(state)
    return {
      ...refData,
      handleClickJump,
    }
  },
})
</script>
<style lang="scss" scoped>
@import 'src/assets/styles/user/index.scss';
@import 'src/assets/styles/user/member/index.scss';
</style>
