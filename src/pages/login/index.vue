<script setup lang="ts">
import { useLogin } from './composables/login'

const { form, loading, onSubmit } = useLogin()
</script>

<template>
  <div class="login-container">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="form.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="form.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" :loading="loading" native-type="submit" @click="onSubmit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped lang="less">
.login-container{
    @apply min-h-screen bg-indigo-500 flex justify-center items-center;
    .left{
      @apply flex items-center justify-center;
        .left-text{
            div:first-child{
                @apply font-bold text-5xl text-light-50 mb-4;
            }
            div:last-child{
                @apply text-gray-200 text-sm;
            }
        }
    }
    .right{
        @apply bg-light-50 flex items-center justify-center flex-col;
        .title{
            @apply font-bold text-3xl text-gray-800;
        }
        .right-text{
          @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
        }
    }
}
</style>
