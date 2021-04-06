<template>
  <div id="loginRegister" class="container">
    <!-- form表单容器 -->
    <div class="forms-container">
      <div class="forms-tabs">
        <span
          class="forms-tabs-item"
          :class="signUpMode ? '' : 'active'"
          @click="signUpMode = !signUpMode"
          >登录</span
        >
        <span
          class="forms-tabs-item"
          :class="signUpMode ? 'active' : ''"
          @click="signUpMode = !signUpMode"
          >注册</span
        >
      </div>
      <!-- 注册 -->
      <RegisterForm v-if="signUpMode" />
      <!-- 登录 -->
      <LoginForm v-else />
      <div class="signin-signup">
        <teleport to="body">
          <div class="login-bg">
            <!-- <video
              id="my-video"
              ref="my-video"
              class="video-js vjs-default-skin"
              preload="auto"
              muted
            >
              <source src="@/assets/video/shinoSwitch.mp4" />
            </video> -->
            <img src="@/assets/images/bg.jpeg" alt="" />
          </div>
        </teleport>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

export interface DataProps {
  state: boolean
  time: number
}

export default {
  name: 'LoginRegister',
  components: { LoginForm, RegisterForm },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance()
    const signUpMode = ref<boolean>(false)

    const videoFormat: DataProps = reactive({
      state: false,
      time: 0,
    })

    const refData: any = toRefs(videoFormat)

    return {
      // 必须返回，模板才能使用
      ...refData,
      signUpMode,
    }
  },
}
</script>
<style lang="scss" scoped>
.login-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.container {
  position: relative;
  width: 100%;
  padding: 0 20px;
  min-height: 100vh;
  overflow: hidden;
  z-index: 2;
  .forms-tabs {
    margin: 180px 20px 34px;
    padding: 20px 0;
    text-align: center;
    font-size: 0;
    &-item {
      display: inline-block;
      margin: 0 100px;
      line-height: 60px;
      color: #666666;
      font-size: 32px;
      &.active {
        font-size: 50px;
        font-weight: bold;
        /*border-bottom: 3px solid #F30C23;*/
        color: #333;
        position: relative;
        &:after {
          content: '';
          width: 100%;
          height: 5px;
          background: linear-gradient(to right, #f20b22, rgba(242, 11, 34, 0.2));
          position: absolute;
          left: 0;
          bottom: -10px;
        }
      }
    }
  }
}
</style>
