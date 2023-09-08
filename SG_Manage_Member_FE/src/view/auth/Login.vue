
<script>
  import { ref, unref } from "vue";
  import axios from "axios";
  import { notify } from "@kyvg/vue3-notification";
  import Cookies from 'js-cookie';
  import {  useRouter } from 'vue-router';

  import AuthLayout from "../../layouts/AuthLayout.vue";
  import { useAuthStore } from "../../store/authStore.js"

  export default {
    name: "LoginView",
    setup() {
        const username = ref("");
        const password = ref("");
        const router = useRouter();
        const authStore = useAuthStore();
        const onNoti = (message, data) => {
            if (message == "Login Success") {
                notify({
                    title: "Login Success",
                    text: "helloo " + data,
                    type: "success",
                });
            }
            else if (message == "Login Failed") {
                notify({
                    title: "Login Failed",
                    text: data,
                    type: "error",
                });
            }
            else if (message == "Register Success") {
                notify({
                    title: "Register Success",
                    text: "You are registered",
                    type: "success",
                });
            }
            else if (message == "Register Failed") {
                notify({
                    title: "Register Failed",
                    text: "Username or password is incorrect",
                    type: "error",
                });
            }
        };
        const toggle = () => {
            const titleSignIn = document.querySelector('.title-SignIn');
            const titleSignUn = document.querySelector('.title-SignUp');
            const btnSignIn = document.querySelector('.btn-SignIn');
            const btnSignUn = document.querySelector('.btn-SignUp');
            titleSignIn.classList.toggle('hidden');
            titleSignUn.classList.toggle('hidden');
            btnSignIn.classList.toggle('hidden');
            btnSignUn.classList.toggle('hidden');
        };
        const login = () => {
            axios
                .post("http://localhost:3000/api/v1/auth/login", {
                username: username.value,
                password: password.value,
            })
                .then((response) => {
                  console.log(response.data.token);
                const token = response.data.token.token;
                if (token) {
                    console.log(token);
                    authStore.setToken(token);
                    Cookies.set("auth_token", token, { expires: 1 });
                    onNoti(response.data.message, response.data.token.username);
                    router.push({ name: 'AdminView' });
                }
            })
                .catch((error) => {
                if (error.response) {
                    onNoti(error.response.data.message, error.response.data.error.message);
                }
            });
        };
        
        
        const signUp = () => {
            axios
                .post("http://localhost:3000/api/v1/auth/register", {
                username: username.value,
                password: password.value,
            })
                .then((response) => {
                onNoti(response.data.message, "Register Success");
                toggle();
            })
                .catch((error) => {
                onNoti(error.response.data.message, error.response.data.error.message);
            });
        };
        return {
            username,
            password,
            login,
            signUp,
            toggle,
            onNoti,
            router,
        };
    },
    components: { AuthLayout }
};
</script>

<template>
  <AuthLayout> 
    <div class=" w-1/3 shadow-2xl border-2 rounded-md py-8 px-10">
    <div class="flex justify-center">
      <h1 class="title-SignIn  text-black text-xl font-bold mb-6">LOG IN</h1>
      <h1 class="title-SignUp hidden text-black text-xl font-bold mb-6">REGISTER</h1>
    </div>
    
    <form @submit.prevent="" >
    <div class="input border-2 p-2 rounded flex mb-4">
      <i class="fa-regular fa-envelope mr-3 text-base text-slate-500"></i>
      <input class="focus:outline-none placeholder:text-slate-500 w-full" v-model="username" name="username" type="text" placeholder="Username" />
    </div>

    <div class="input border-2 p-2 rounded  flex mb-4">
      <i class="fa-regular fa-envelope mr-3 text-base text-slate-500"></i>
      <input class="focus:outline-none placeholder:text-slate-500 w-full" v-model="password"  name="password" type="password" placeholder="Password" />
    </div>

    <div class="flex justify-between  ">
      <div class="flex items-center hover:opacity-70 cursor-pointer" >
        <input class="mr-1" type="checkbox" id="remember" name="remember" value="remember" />
        <label for="remember" class="text-gray-950 text-sm font-medium">Remember me</label>
      </div>

      <div class="flex justify-between">
        <a href="#" class="hover:opacity-70 hover:bg-white text-sm text-blue-800 font-medium">Forgot password?</a>
      </div>
    </div>

    <div class="flex justify-center mt-6 w-full">
      <button type="submit" @click="login()" class="btn-SignIn hover:opacity-90 bg-blue-800 text-white font-bold py-2 px-4 rounded w-full">
        Sign in
      </button>

      <button type="submit" @click="signUp()" class="btn-SignUp hidden hover:opacity-90 bg-blue-800 text-white font-bold py-2 px-4 rounded w-full">
        Sign Up
      </button>
    </div>

    <div class="mt-2  w-full">
      <a href="#" @click="toggle()" class="flex hover:opacity-70 hover:bg-white text-xs text-blue-800 font-medium">
        <p class="mr-1 hover:opacity-100">Not registered yet?</p>
        Create an account</a>
    </div>
    </form>
  </div>
  </AuthLayout>
  
</template>
<style scoped>
  
</style>