<template>
  <!-- 会员中心模板2 -->
  <div>
    <!-- 定制 松鼠小屋  start -->
    <section class="u-id-s2-card"
             v-if="memberInfo.xiaowu_dz==1">
      <div class="u-id-s2-actions-title">
        我是您的松鼠小屋团长
        <i>购买、售后、取货，任何不懂的联系我</i>
      </div>
      <div class="card-item clearfix">
        <div class="card-img fl">
          <a href="javascript:;">
            <img :src="memberInfo.my_agent.headimgurl"
                 width="60"
                 height="60"
                 alt />
          </a>
        </div>
        <div class="card-text">
          <p>
            <i>微信昵称：</i>
            <span>{{memberInfo.my_agent.nickname}}</span>
          </p>
          <p>
            <i>微信号：</i>
            <span>{{memberInfo.my_agent.weixin_account}}</span>
          </p>
          <p>
            <i>手机号：</i>
            <span>{{memberInfo.my_agent.mobile}}</span>
          </p>
        </div>
      </div>
    </section>
    <!-- 定制 松鼠小屋  end -->
    <div class="u-id-s2-links clearfix style2">
      <div class="u-id-s2-links-title">
        <h3>我的订单</h3>
        <p @click="Jump('/mb/order/order-lists')">查看全部</p>
      </div>
      <!-- 待付款 -->
      <div class="link"
           @click="Jump('/mb/order/order-lists?type=2')">
        <i class="icon-links icon1_1"></i>
        <span class="title">{{memberInfo.ftitle_pending_pay}}</span>
        <span class="num"
              v-if="memberInfo.wait_total!=0">{{memberInfo.wait_total}}</span>
      </div>
      <!-- 已付款 -->
      <div class="link"
           @click="Jump('/mb/order/order-lists?type=6')">
        <i class="icon-links icon1_2"></i>
        <span class="title">{{memberInfo.ftitle_has_pay}}</span>
        <span class="num"
              v-if="memberInfo.ispay_total!=0">{{memberInfo.ispay_total}}</span>
      </div>
      <!-- 已发货 -->
      <div class="link"
           @click="Jump('/mb/order/order-lists?type=3')">
        <i class="icon-links icon1_5"></i>
        <span class="title">{{memberInfo.ftitle_has_shipped}}</span>
        <span class="num"
              v-if="memberInfo.send_total!=0">{{memberInfo.send_total}}</span>
      </div>
      <!-- 待评价 -->
      <div class="link"
           @click="Jump('commentList',{type:'evaluate'})">
        <i class="icon-links icon2_2"></i>
        <span class="title">{{memberInfo.ftitle_comment_list}}</span>
        <span class="num"
              v-if="memberInfo.wait_comment_list!=0">{{memberInfo.wait_comment_list}}</span>
      </div>
      <!-- 退换货 -->
      <div class="link"
           v-if="memberInfo.is_allow_exchange==1 && memberInfo.is_allow_return==1"
           @click="Jump('/mb/order/order-lists?type=4')">
        <i class="icon-links icon1_3"></i>
        <span class="title">{{memberInfo.ftitle_return_goods}}</span>
        <span class="num"
              v-if="memberInfo.return_total!=0">{{memberInfo.return_total}}</span>
      </div>
      <!-- 换货 -->
      <div class="link"
           v-else-if="memberInfo.is_allow_exchange==1"
           @click="Jump('/mb/order/order-lists?type=4')">
        <i class="icon-links icon1_3"></i>
        <span class="title">换货</span>
        <span class="num"
              v-if="memberInfo.return_total!=0">{{memberInfo.return_total}}</span>
      </div>
      <!-- 退货 -->
      <div class="link"
           v-else-if="memberInfo.is_allow_return==1"
           @click="Jump('/mb/order/order-lists?type=4')">
        <i class="icon-links icon1_3"></i>
        <span class="title">退货</span>
        <span class="num"
              v-if="memberInfo.return_total!=0">{{memberInfo.return_total}}</span>
      </div>
      <!-- 已完成 -->
      <div class="link"
           v-else
           @click="Jump('/mb/order/order-lists?type=7')">
        <i class="icon-links icon1_3"></i>
        <span class="title">已完成</span>
        <span class="num"
              v-if="memberInfo.fina_total!=0">{{memberInfo.fina_total}}</span>
      </div>
      <!-- 全部 -->
      <!-- <div class="link master"
           @click="Jump('/mb/order/order-lists')">
        <i class="icon-links icon1_4"></i>
        <span class="title">{{memberInfo.ftitle_all_orders}}</span>
        <span class="num"
              v-if="memberInfo.all_total!=0">{{memberInfo.all_total}}</span>
      </div> -->

      <!-- <div class="link"
           @click="Jump('mycoupon')">
        <i class="icon-links icon2_1"></i>
        <span class="title">{{memberInfo.ftitle_coupon}}</span>
        <span class="title_detail">{{memberInfo.coupon_num}}张可用</span>
      </div>
      
      <div class="link"
           @click="Jump('collectionGoods')">
        <i class="icon-links icon2_4"></i>
        <span class="title">{{memberInfo.ftitle_collection}}</span>
        <span class="title_detail">{{memberInfo.collection_num}}</span>
      </div>
      <div class="link"
           @click="Jump('balanceTx')">
        <i class="icon-links icon2_3"></i>
        <span class="title">{{memberInfo.account_balance}}</span>
        <span class="title_detail">{{memberInfo.balance}}</span>
      </div> -->
    </div>
    <section class="mainmodule">
      <!-- 普通会员 -->
      <div class="mianad mianad2"
           v-if="memberInfo.is_user_img == 1">
        <a :href="memberInfo.user_img_link">
          <img v-lazy="memberInfo.user_img_ggt"
               width="100%"
               alt
               v-if="memberInfo.user_img_ggt" />
        </a>
      </div>
      <div class="lunbo"
           :style="{color:'#'+ memberInfo.affiche_color}"
           v-if="memberInfo.is_affiche==1">
        <!-- <van-notice-bar
					:color="affiche_color"
					:speed="affiche_speed"
				><span>{{affiche_con}}</span>
        </van-notice-bar>-->
        <marquee direction="left"
                 onmouseover="stop()"
                 onmouseout="start()"
                 scrollamount="3">
          <span v-for="item in memberInfo.affiche"
                :key>{{item}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </marquee>
      </div>

      <div class="style2-actions clearfix mgt10">
        <div class="style2-actions-title">我的服务</div>
        <div v-if="memberInfo.show_point"
             class="action"
             @click="Jump('point')">
          <span class="icon-action icon1_1"></span>
          <span class="title">{{memberInfo.ftitle_point}}</span>
        </div>
        <div v-if="memberInfo.show_virtual && memberInfo.is_virtual_currency"
             class="action"
             @click="Jump('virtualCurrency')">
          <span class="icon-action icon1_14"></span>
          <span class="title">{{memberInfo.virtual_currency_title}}</span>
        </div>
        <!-- 定制 奇异国预存款定制 start -->
        <div v-if="memberInfo.show_recharge && memberInfo.is_yck_dz==1"
             class="action"
             @click="Jump('rechargeList',{type:1})">
          <span class="icon-action icon1_3"></span>
          <span class="title">{{memberInfo.ftitle_recharge}}</span>
        </div>
        <!-- 定制 奇异国预存款定制 end -->
        <div v-else-if="memberInfo.show_recharge"
             class="action"
             @click="Jump('rechargeList')">
          <span class="icon-action icon1_3"></span>
          <span class="title">{{memberInfo.ftitle_recharge}}</span>
        </div>
        <!-- 定制 薇曼 start -->
        <div class="action"
             v-if="memberInfo.is_wm_dz"
             @click="handleLinkTo('balanceSend')">
          <span class="icon-action icon1_9"></span>
          <span class="title">余额赠送</span>
        </div>
        <!-- 定制 薇曼 end -->
        <!-- <div v-if="memberInfo.show_myOrder"
             class="action"
             @click="Jump('/mb/order/order-lists?type=6')">
          <span class="icon-action icon1_5"></span>
          <span class="title">{{memberInfo.ftitle_has_pay}}</span>
        </div> -->
        <div v-if="memberInfo.has_duodian && memberInfo.is_show_collection_shop && memberInfo.show_collection_shop"
             class="action"
             @click="Jump('collectionShop')">
          <span class="icon-action icon1_16"></span>
          <span class="title">{{memberInfo.ftitle_collection_shop}}</span>
        </div>
        <div v-if="memberInfo.is_member_card"
             class="action"
             @click="onVipCardJump('cardDetail')">
          <span class="icon-action icon7_1"></span>
          <span class="title">会员卡</span>
        </div>
        <div v-if="memberInfo.is_try"
             class="action"
             @click="Jump('tryList')">
          <span class="icon-action icon1_8"></span>
          <span class="title">试用活动</span>
        </div>
        <div v-if="memberInfo.show_modify"
             class="action"
             @click="Jump('changeUserData')">
          <span class="icon-action icon1_10"></span>
          <span class="title">{{memberInfo.ftitle_change_data}}</span>
        </div>
        <div v-if="memberInfo.show_address"
             class="action"
             @click="JumpHref('/mb/user/addressList')">
          <span class="icon-action icon1_11"></span>
          <span class="title">{{memberInfo.ftitle_address}}</span>
        </div>
        <div v-if="memberInfo.show_privilege"
             class="action"
             @click="Jump('memberBenefits')">
          <span class="icon-action icon1_12"></span>
          <span class="title">{{memberInfo.ftitle_rank}}</span>
        </div>
        <div v-if="memberInfo.show_interaction"
             class="action"
             @click="Jump('/mb/marketGame/game-list')">
          <span class="icon-action icon1_13"></span>
          <span class="title">{{memberInfo.ftitle_game}}</span>
        </div>
        <div v-if="memberInfo.friend_count && memberInfo.show_myFriend"
             class="action"
             @click="Jump('myFriend')">
          <span class="icon-action icon2_7"></span>
          <span class="title">{{memberInfo.ftitle_friend}}</span>
        </div>
        <div v-if="memberInfo.show_auction"
             class="action"
             @click="Jump('/mb/activity/myAuction')">
          <span class="icon-action icon1_15"></span>
          <span class="title">拍卖</span>
        </div>
        <!-- 我的服务 -->
        <div v-if="memberInfo.show_myService"
             class="action"
             @click="Jump('/mb/user/my-serve')">
          <span class="icon-action icon1_30"></span>
          <span class="title">{{memberInfo.ftitle_my_serve}}</span>
        </div>
        <a :href="memberInfo.chuan_bo_bao_url"
             v-if="memberInfo.open_chuan_bo_bao==1"
             class="action">
          <span class="icon-action icon1_17"></span>
          <span class="title">传播宝</span>
        </a>

      </div>
    </section>

    <!-- <input type="hidden" value="{$code}" id="check_code"> -->
    <section class="mlogin-but"
             v-if="memberInfo.is_wx && memberInfo.is_wx!=1 && memberInfo.isAfb!=1">
      <a href="javascript:;"
         class="red-gra-btn"
         v-if="memberInfo.isAppIos"
         @click="loginOutChild">退出登录</a>
      <a href="javascript:;"
         class="red-gra-btn"
         v-else-if="!memberInfo.isAppIos && memberInfo.is_priview"
         @click="loginOutChild">退出登录</a>
      <a href="javascript:;"
         class="red-gra-btn"
         v-else-if="!memberInfo.isAppIos"
         @click="loginOutChild">退出登录</a>
    </section>
    <!-- <div style="display: none;">{$random_content}</div> -->
  </div>
</template>
<script>
export default {
  props: {
    memberInfo: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    Jump(url, data) {
      this.$JumpPath(this, url, data)
    },
    JumpUrl(url) {
      window.location.href = url
    },
    handleLinkTo(url, data) {
      this.$JumpName(this, url, data)
    },
    JumpHref(url, data) {
      this.$JumpHref(this, url, data)
    },
    onVipCardJump(path) {
      this.memberInfo.is_show_buy_card ? this.Jump('card-list') : this.Jump(path)
    },
    loginOutChild() {
      this.$emit('loginOut')
    },
    // 欧普定制增加绑定手机号
    showVerifyMobilePop() {
      this.$Bus.$emit('showVerifyMobilePop', { show: true })
    }
  }
  /* mounted() {
    console.log(this.memberInfo)
  } */
}
</script>
<style lang="scss" scoped>
@import "../../../../../styles/user/index.scss";
@import "../../../../../styles/user/member/index";
</style>
