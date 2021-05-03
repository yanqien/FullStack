<template>
  <div class="change-data-container">
    <section class="login-user">
      <section class="login-line">
        <section class="login-name"><label style="color: red">*</label>手机号码</section>
        <section class="login-val">
          <input type="text" v-model="user_info.mobile" id="number" placeholder="手机号码" />
        </section>
      </section>
      <div>
        <div v-if="user_info.password">
          <section class="login-line">
            <section class="login-name"><label style="color: red">*</label>原密码</section>
            <section class="login-val">
              <input
                type="text"
                name="old_password"
                placeholder="原密码"
                v-model="formData.old_password"
              />
            </section>
          </section>
          <section class="login-line">
            <section class="login-name">修改密码</section>
            <section class="login-val">
              <input
                type="text"
                name="new_password"
                placeholder="修改密码"
                v-model="formData.new_password"
              />
            </section>
          </section>
        </div>
        <div v-else>
          <section class="login-line">
            <section class="login-name"><label style="color: red">*</label>设置密码</section>
            <section class="login-val">
              <input
                type="text"
                name="set_password"
                placeholder="设置密码"
                v-model="formData.set_password"
              />
            </section>
          </section>
        </div>
      </div>

      <section class="login-line">
        <section class="login-name"><label style="color: red">*</label>姓名</section>
        <section class="login-val">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="您的姓名"
            v-model="user_info.name"
          />
        </section>
      </section>
      <section class="login-line">
        <section class="login-name">微信号</section>
        <section class="login-val">
          <input
            type="text"
            name="weixin_account"
            id="weixin_account"
            placeholder="您的微信号"
            v-model="user_info.weixin_account"
          />
        </section>
      </section>
      <section class="login-line" v-if="!data_type">
        <section class="login-name">生日</section>
        <section class="login-val">
          <input
            type="text"
            name="birthday"
            id="birthday"
            v-model="user_info.birthday"
            placeholder="您的生日"
            class="input birthday-input"
            @click="handleBirthdayInput"
          />
          <!-- <svg-icon icon-class="icon_calendar"
                    class="icon_calendar"></svg-icon> -->
          <!-- onclick="WdatePicker({ dateFmt:'yyyy-MM-dd'})" -->
        </section>
      </section>

      <section class="login-line">
        <section class="login-name">性别</section>
        <section class="login-val">
          <van-radio-group
            v-model="formData.gender"
            icon-size="16"
            color="#CCCCCC"
            checked-color="#F20B22"
            direction="horizontal"
          >
            <div class="freight-radio-box">
              <van-radio class="freight-radio" name="1">男</van-radio>
              <van-radio class="freight-radio" name="2">女</van-radio>
            </div>
          </van-radio-group>
        </section>
      </section>

      <section class="login-line">
        <section class="login-name">职业</section>
        <section class="login-val">
          <input
            type="text"
            name="weixin_account"
            placeholder="您的职业"
            v-model="user_info.occupation"
          />
        </section>
      </section>

      <section class="login-line">
        <section class="login-name">邮箱</section>
        <section class="login-val">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="邮箱帐号"
            v-model="user_info.email"
          />
        </section>
      </section>

      <van-popup v-model:show="showDatePop" teleport="body" round position="bottom">
        <van-datetime-picker
          v-model="curBirthday"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="handleDateConfirm"
          @cancel="handleDateCancel"
        />
      </van-popup>
    </section>

    <section class="btn-box">
      <div class="submit-btn red-gra-btn" @click="submitUserData">保存</div>
      <div class="forget-btn" v-if="!data_type && user_info.mobile">
        <a href="javascript:;" @click="Jump('resetPassword')">忘记密码？点击这里</a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
// import { mapGetters } from 'vuex'
// import { getUserData, changeUserData } from '@/api/user/member/memberApi'
// import { postMsgVerify } from '@/api/loginRegister/index'
// import { validLength, validateMobile } from '@/utils/validate'

import { createApp } from 'vue'
import { DatetimePicker, Popup, RadioGroup, Radio } from 'vant'

import { ref, reactive, toRefs, getCurrentInstance, onMounted } from 'vue'

export default {
  name: 'modifyuser',
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance()

    const state = reactive({
      showDatePop: false,
      data_type: 0,
      user_info: {},
      formData: {},
      curBirthday: new Date(),
      minDate: new Date(new Date().getFullYear() - 70, 1, 1),
      maxDate: new Date(),
    })
    const refData: any = toRefs(state)

    // 日期确定
    const handleDateConfirm = () => {
      // const date = this.formatTime(time)
      state.showDatePop = false
      // state.user_info.birthday = date
    }
    // 日期取消
    const handleDateCancel = () => {
      state.showDatePop = false
    }
    const handleBirthdayInput = (e: any) => {
      state.showDatePop = true
      e.srcElement.blur()
    }
    return {
      // 必须返回，模板才能使用
      ...refData,
      handleBirthdayInput,
      handleDateConfirm,
      handleDateCancel,
    }
  },
  components: {
    'van-popup': Popup,
    'van-datetime-picker': DatetimePicker,
    'van-radio': Radio,
    'van-radio-group': RadioGroup,
  },
}

// export default {
//   name: 'index',
//   components: {},
//   computed: {
//     ...mapGetters(['wxConfig']),
//   },
//   data() {
//     return {
//       query: '',
//       data_type: 0,
//       is_buy: 0, // 判断是否是结算中心跳转过来的0 否  1 是
//       msgVerifyTxt: '获取验证码',
//       user_info: {
//         mobile: '',
//         password: '',
//         name: '',
//         id_card: '',
//         weixin_account: '',
//         email: '',
//         // gender: '1'
//       },
//       gender: 1,
//       check_apply_mobile: '',
//       free_logistics_type: '',
//       is_need_idCard: '',
//       ftitle_change_data: '',
//       card_alias: '身份证',
//       is_pay_password: '',
//       formData: {
//         mobile: '',
//         old_password: '',
//         new_password: '',
//         set_password: '',
//         code: '', // 验证码
//         name: '',
//         id_card: '',
//         weixin_account: '',
//         birthday: '',
//         email: '',
//         old_pay_password: '',
//         new_pay_password: '',
//         set_pay_password: '',
//       },
//       showDatePop: false,
//       curBirthday: new Date(),
//       minDate: new Date(new Date().getFullYear() - 70, 1, 1),
//       maxDate: new Date(),
//     }
//   },
//   methods: {
//     Jump(url, data) {
//       this.$JumpPath(this, url, data)
//     },
//     init() {
//       this.query = this.$route.query
//       if (this.query.data_type) {
//         this.data_type = this.query.data_type
//       }
//       if (this.query.is_buy) {
//         this.is_buy = this.query.is_buy
//       }
//       this.$loadingWrap.show()
//       setTimeout(() => {
//         this.$loadingWrap.close()
//       }, 10000)
//       getUserData().then((res) => {
//         this.$loadingWrap.close()
//         if (res.status == 1) {
//           const resData = res.data
//           if (resData.ftitle_change_data) {
//             this.ftitle_change_data = resData.ftitle_change_data
//             document.title = this.ftitle_change_data
//           }
//           this.gender = resData.user_info.sex
//           this.user_info = Object.assign({}, resData.user_info, true)
//           this.check_apply_mobile = resData.check_apply_mobile
//           this.free_logistics_type = resData.free_logistics_type
//           this.is_need_idCard = resData.is_need_idCard
//           this.card_alias = resData.card_alias
//           this.is_pay_password = resData.is_pay_password
//         } else {
//           this.$Error(res.msg)
//         }
//       })
//     },
//     formatTime(time) {
//       const t = time.getTime()
//       return formatDay(t)
//     },
//     // 输入生日日期
//     handleBirthdayInput(e) {
//       this.showDatePop = true
//       e.srcElement.blur()
//     },
//     // 日期确定
//     handleDateConfirm(time) {
//       const date = this.formatTime(time)
//       this.showDatePop = false
//       this.user_info.birthday = date
//     },
//     // 日期取消
//     handleDateCancel() {
//       this.showDatePop = false
//     },
//     // 获取验证码倒计时
//     setTimeoutVerify() {
//       let count = 60
//       this.msgVerifyTxt = count + '秒后重新获取'
//       const timer = setInterval(() => {
//         this.msgVerifyTxt = count + '秒后重新获取'
//         if (count <= 0) {
//           this.msgVerifyTxt = '获取验证码'
//           clearInterval(timer)
//         }
//         count--
//       }, 1000)
//     },
//     // 获取验证码
//     getVcode() {
//       if (this.msgVerifyTxt == '获取验证码') {
//         const mobile = this.user_info.mobile
//         if (validateMobile(mobile)) {
//           const data = {
//             mobile: mobile,
//           }
//           postMsgVerify(data).then((res) => {
//             if (res.status === 1) {
//               this.setTimeoutVerify()
//               this.$Error('发送成功')
//             } else {
//               this.$Error(res.msg)
//             }
//           })
//         } else {
//           this.$Error('请输入正确的手机号码')
//           return false
//         }
//       }
//     },
//     // 点击保存
//     submitUserData() {
//       this.formData.mobile = this.user_info.mobile
//       this.formData.name = this.user_info.name
//       this.formData.id_card = this.user_info.id_card
//       this.formData.weixin_account = this.user_info.weixin_account
//       this.formData.birthday = this.user_info.birthday
//       this.formData.email = this.user_info.email
//       this.formData.gender = this.gender
//       this.formData.occupation = this.user_info.occupation
//       // console.log(this.formData)
//       if (!validLength(this.formData.mobile)) {
//         this.$Error('手机号码不能为空')
//         return false
//       }
//       if (!this.data_type) {
//         if (this.user_info.password) {
//           if (!validLength(this.formData.old_password)) {
//             this.$Error('原密码不能为空')
//             return false
//           }
//         } else {
//           if (!validLength(this.formData.set_password)) {
//             this.$Error('密码不能为空')
//             return false
//           }
//         }
//       }
//       if (this.free_logistics_type > 0) {
//         if (!validLength(this.formData.name)) {
//           this.$Error('姓名不能为空')
//           return false
//         }
//       }
//       const postData = {}
//       postData.mobile = this.formData.mobile
//       postData.name = this.formData.name
//       postData.weixin_account = this.formData.weixin_account
//       if (this.data_type) {
//         postData.data_type = this.data_type
//       }
//       if (!this.data_type) {
//         if (this.user_info.password) {
//           postData.old_password = this.formData.old_password
//           postData.new_password = this.formData.new_password
//         } else {
//           postData.set_password = this.formData.set_password
//         }
//         postData.birthday = this.formData.birthday
//         if (this.is_pay_password == 1) {
//           if (this.user_info.pay_password) {
//             postData.old_pay_password = this.formData.old_pay_password
//             postData.new_pay_password = this.formData.new_pay_password
//           } else {
//             postData.set_pay_password = this.formData.set_pay_password
//           }
//         }
//       } else if (this.data_type == 2) {
//         postData.email = this.formData.email
//       }
//       if (this.is_need_idCard == 1) {
//         postData.id_card = this.formData.id_card
//       }
//       postData.mobile = this.formData.mobile
//       postData.gender = this.formData.gender
//       postData.occupation = this.formData.occupation
//       this.$loadingWrap.show()
//       setTimeout(() => {
//         this.$loadingWrap.close()
//       }, 10000)
//       changeUserData(postData).then((res) => {
//         this.$loadingWrap.close()
//         if (res.status == 1) {
//           this.$Error('保存成功')
//           if (this.is_buy == 1) {
//             // 当是从结算中心跳转过来的直接返回结算中心
//             if (isIOS()) {
//               this.$JumpHref(this, '/mb/order/buy')
//             } else {
//               this.$JumpName(this, 'buy')
//             }
//           } else {
//             // 否则全部返回到会员中心
//             window.location.href = this.wxConfig.user_index_link
//           }
//         } else {
//           this.$Error(res.msg)
//         }
//       })
//     },
//   },
//   created() {
//     if (this.user_info.birthday) {
//       this.curBirthday = new Date(this.user_info.birthday)
//     }
//     this.init()
//   },
// }
</script>

<style scoped lang="scss">
@import 'src/assets/styles/mixin';
.change-data-container {
  @include placeColor(#999);
  input:disabled {
    background: transparent;
  }
  .login-user {
    background: #fff;
    margin-top: 20px;
    width: 100%;
    overflow: hidden;
  }
  .login-line {
    display: flex;
    width: 100%;
    font-size: 32px;
    border-bottom: 1px solid #ededed;
    padding: 0 30px;
    box-sizing: border-box;
    .freight-radio-box {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      .freight-radio {
        height: 96px;
        display: flex;
        margin-right: 20px;
        font-size: 26px;
        color: #666;
      }
    }
    .login-name {
      float: left;
      width: 30%;
      line-height: 96px;
      font-size: 28px;
      font-weight: bold;
      color: #333333;
    }
    .login-val {
      float: right;
      width: 70%;
      padding-right: 30px;
      position: relative;
      input {
        display: block;
        width: 100%;
        font-size: 26px;
        color: #666666;
        border: 0;
        text-align: right;
        padding: 20px 0;
        height: 96px;
        background: transparent;
        // &.birthday-input{
        //   padding-right: 50px;
        // }
      }
      // .icon_calendar {
      //   font-size: 36px;
      //   position: absolute;
      //   right: 0;
      //   top: 50%;
      //   transform: translateY(-50%);
      // }
      &::after {
        content: '';
        position: absolute;
        top: 40px;
        right: -4px;
        width: 16px;
        height: 16px;
        // background: url('src/assets/images/public/arrow_R.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    &.login-line-verify {
      display: flex;
      align-items: center;
      .msg-verify-input {
        width: 50%;
      }
      .msg-verify-btn {
        display: inline-block;
        // width:45%;
        height: 56px;
        line-height: 56px;
        text-align: center;
        padding: 0 10px;
        border-radius: 6px;
        font-size: 28px;
        background: #ff7d00;
        color: #fff;
      }
    }
  }
  .btn-box {
    padding: 40px 50px;
    // height: 90px;
    font-size: 32px;
    text-align: center;
    .submit-btn {
      margin-bottom: 20px;
      border-radius: 96px;
      line-height: 96px;
      color: #fff;
      box-sizing: border-box;
    }
    .forget-btn {
      border-radius: 94px;
      border: 2px solid #f20c20;
      line-height: 92px;
      color: #f20c20;
    }
  }
}
</style>
