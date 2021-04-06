<template>
  <div class="login-form">
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="重复密码"
        label="重复密码"
        placeholder="重复密码"
        :rules="[{ required: true, message: '请填写重复密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, createApp } from 'vue'
import { Form, Field, Button } from 'vant'

import { useRouter } from 'vue-router'

export default {
  components: {
    'van-form': Form,
    'van-field': Field,
    'van-button': Button,
  },
  setup() {
    const state = reactive({
      username: '',
      password: '',
    })
    const onSubmit = (values: any) => {
      console.log('submit', values)
    }

    return {
      state,
      onSubmit,
    }
  },
}
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
