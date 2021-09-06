<template>
  <div class="login-form">
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
    <loading-wrap ref="loadingWrap"></loading-wrap>
  </div>
</template>

<script lang="ts">
import LoadingWrap from '@/components/loading/index.vue'
import { userLogin } from '@/api/login'
import { setToken } from '@/utils/auth'

import { ref, reactive, createApp, defineComponent, onMounted } from 'vue'
import { Form, Field, Button, Toast } from 'vant'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    'van-form': Form,
    'van-field': Field,
    'van-button': Button,
    'loading-wrap': LoadingWrap,
  },
  setup(props, content) {
    const router = useRouter()
    const state = reactive({
      userName: '',
      password: '',
    })

    const loadingWrap = ref<any>(null)

    const onSubmit = (values: any) => {
      console.log('submit', values, loadingWrap.value)
      loadingWrap.value.show()

      const formData = values
      userLogin(formData).then((res: any) => {
        console.log(res, 'res')
        if (res.code == 200) {
          Toast('登录成功')
          setToken(res.token)
          setTimeout(() => {
            router.push({
              name: 'userCenter',
            })
          }, 500)
        } else {
          Toast(res.message)
        }
      })
    }

    onMounted(() => {})
    return {
      state,
      onSubmit,
      loadingWrap,
    }
  },
})
</script>
<style scoped lang="scss">
.login-form {
  padding: 20px 0 1px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  .van-cell {
    background: transparent;
  }
}
</style>
