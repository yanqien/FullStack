<template>
  <div class="member-container">
    <!-- 头部 -->
    <!-- style2-top header_bg_cure -->
    <div
      class="header style1-top padding110"
      :style="{ backgroundImage: 'url(' + bgImg + ')' }"
    >
      <section class="infoPanel">
        <div class="avatar-box fl">
          <div
            class="avatar j-render"
            :style="{
              backgroundImage: memberInfo.avatar ? 'url(' + memberInfo.avatar + ')' : '',
            }"
          ></div>
          <div class="outer" v-show="outerShow"></div>
        </div>
        <ul class="userinfo fl">
          <!-- 昵称 -->
          <li class="nickname">
            <span class="nickname-title" v-if="memberInfo.nickname">{{
              memberInfo.nickname
            }}</span>
            <span class="nickname-title" v-else>{{ memberInfo.mobile }}</span>
            <span round class="lit-spn bor">黄金{{ memberInfo.rank_name }}</span>
          </li>

          <li>
            <!-- 注册时间 -->
            <span class="mgr15">用户ID：{{ memberInfo.user_id }}</span>
            <!-- 消费金额 -->
            <span>消费金额：{{ memberInfo.total_price }}</span>
          </li>
          <li class="">注册：{{ memberInfo.create_time }}</li>
        </ul>
        <div class="gotoMail">
          <span class="num fontAliBaba" v-if="letterCount > 99">99</span>
          <span class="num fontAliBaba" v-else-if="letterCount > 0">{{ letterCount }}</span>
        </div>

        <div class="hd-input">
          <!--签到-->
          <div>
            <a href="javascript:;" class="change_qiandao">
              <div class="qiandao">
                <div class="qd-btn btn">
                  <i></i>
                  <span>签到</span>
                  <!-- <svg-icon icon-class="icon_linkto" class="icon_linkto"></svg-icon> -->
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <!-- 头部导航 -->
      <div class="head-nav">
        <div class="link" @click="Jump('mycoupon')">
          <span class="title_num">99</span>
          <span class="title">优惠券</span>
        </div>
        <div class="link" @click="Jump('point')">
          <span class="title_num">99</span>
          <span class="title">积分</span>
        </div>
        <div class="link" @click="Jump('collectionGoods')">
          <span class="title_num">99</span>
          <span class="title">收藏</span>
        </div>
        <div class="link" @click="Jump('myBalance')">
          <span class="title_num">9999</span>
          <span class="title">账户</span>
        </div>
      </div>
      <!-- 会员卡特权 -->
      <div class="membership-card">
        <div :class="['card-text']">
          {{ memberInfo.rank_name ? '会员等级：' + memberInfo.rank_name : '开通会员立享特权' }}
        </div>
        <div class="card-btn">
          {{ memberInfo.rank_name ? '查看权益' : '立即开通' }}
        </div>
      </div>
      <div class="cover"></div>
    </div>
    <!-- 导航 -->

    <member-index :memberInfo="memberInfo" @loginOut="loginOut"></member-index>
    <!-- <member-index2 v-if="false" :memberInfo="memberInfo" @loginOut="loginOut"></member-index2> -->
  </div>
</template>

<script lang="ts">
import bg_img from '@img/user/member/user_style3_bg_black.png'
import avatar from '@img/user/member/default_avatar.jpg'
import memberIndex from './components/memberIndex/index.vue'
// import memberIndex2 from './components/memberIndex2/index'
import { ref, reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
export default {
  name: 'usercenter',
  components: { memberIndex },
  setup() {
    const state = reactive({
      letterCount: 0,
      outerShow: false,
      memberInfo: {
        nickname: '违心丶',
        avatar: avatar,
        user_id: 10472,
      },
      bgImg: bg_img,
    })

    const refData: any = toRefs(state)

    // 退出登录
    const loginOut = () => {}
    return {
      ...refData,
      loginOut,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/user/index.scss';
.member-container {
  padding-bottom: 1px;
  .detail_qrcode_box {
    overflow: initial;
    width: 80%;
    height: 70%;
    background: #f00d3a;
    .content {
      width: 100%;
      height: 80%;
      position: relative;
      overflow: hidden;
      .h {
        width: 200%;
        height: 100%;
        border-radius: 0 0 50% 50%;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        .detail_qrcode_content {
          width: 40%;
          position: absolute;
          top: 7%;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          .title {
            font-size: 40px;
            line-height: 1.3;
            font-family: '黑体';
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            margin-top: 20px;
            font-size: 26px;
            color: #9c9c9c;
          }
          div {
            width: 90%;
            margin: 5% auto 0;
            border: 1px solid #3f4251;
            border-radius: 10px;
            overflow: hidden;
            box-sizing: content-box;
            img {
              display: block;
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
    .btn {
      width: 80%;
      margin: 0 auto;
      button {
        width: 100%;
        height: 60px;
        border: 2px solid #f00d3a;
        border-radius: 30px;
        border: none;
        outline: none;
        margin-top: 3%;
        font-family: '黑体';
      }
      .copy {
        font-size: 28px;
        background-color: #fff;
        color: #f00d3a;
        font-weight: 700;
      }

      .noWarn {
        border: 2px solid #fff;
        background-color: #f00d3a;
        color: #fff;
      }
    }
  }
  // 修改userid
  .edit-userid-btn {
    font-size: 35px;
    display: inline-block;
    .icon-edituserid {
      margin-bottom: 5px;
    }
  }
}
</style>
