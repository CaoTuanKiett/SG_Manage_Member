<template>
  <div class="w-full h-screen flex flex-col items-center justify-center ">

    <div class="box-border p-0 m-0 w-ful flex flex-col items-center justify-center">
      <h1 class="font-bold text-lg" >Home PAGE</h1>

      <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-500 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <router-link to="/login" class="text-white">ĐĂNG NHẬP</router-link>
      </button>

    </div>

  </div>

</template>

<script>
  import Cookies from 'js-cookie';
  import { onMounted } from 'vue';
  import {  useRouter } from 'vue-router';



export default {
  
  name: 'HomeView',
  components: {
  },
  setup() {

    const router = useRouter();

    const isLogin = () => {
      const token = Cookies.get('auth_token')
      if (token) {
        router.push({ name: 'UserView' });
      }
    }

    onMounted(() => {
      isLogin();
    });

    return {
      isLogin,
    }
  }
}

</script>