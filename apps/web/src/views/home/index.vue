<template>
  <img src="../../assets/logo.png" alt="Vue logo" />
  这里是首页
  <router-link to="/about">关于我们 </router-link>
</template>

<script setup lang="ts">
import axios from 'axios'

import { reactive, onBeforeMount, defineProps } from 'vue'

onBeforeMount(() => {})
</script>
