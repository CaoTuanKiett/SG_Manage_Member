<template>
  <div class="container__sidebar w-full ">
    <div class="container__sidebar--menu">

      <div class="container__sidebar--avt p-2 pt-6 mt-8  flex flex-col justify-center items-center  border-b-2">
        <img src="../assets/img/avt.jpg" alt="avt"
          class="w-[150px] rounded-full shadow-md">
        <div class="avt_text pt-2 flex flex-col justify-center items-center">
          <span class="font-semibold text-base">Admin</span>
          <p class="font-bold text-xl">CAO TUAN KIET</p>
        </div>
      </div>

      <ul class="menu mt-10 ">

        <div class="menu_list">
          <li class="menu_item ">
              <AddRouterView 
                :to="{ name: 'AdminView' }"
                :isActive="isActive({ name: 'AdminView' })"
                classesRouter="navbar-brand flex items-center pl-4 py-3 hover:bg-gray-200"
                classesIcon="icon pr-2 text-black text-2xl"
                iconWeight="fas"
                icon="house"
                classesP="text-black text-base font-normal">
                TRANG CHỦ
              </AddRouterView>
          </li>
          <li class="menu_item">
              <AddRouterView 
                :to="{ name: 'Profile' }"
                :isActive="isActive({ name: 'Profile' })"
                classesRouter="navbar-brand flex items-center pl-4 py-3 hover:bg-gray-200"
                classesIcon="icon pr-2 text-black text-2xl"
                iconWeight="fas"
                icon="user"
                classesP="text-black text-base font-normal">
                THÔNG TIN CÁ NHÂN
              </AddRouterView>

              
          </li>

          <li>
            <AddButton
              @click-something="showBtn()"
              :type="'button'"
              classesButton="w-full relative cursor-pointer nav-link flex items-center pl-4 py-3 hover:bg-gray-200"
              classesIcon="icon pr-2 text-black text-2xl"
              iconWeight="fas"
              icon="bars-progress"
              classesP="text-black text-base font-normal"
              
            >
              QUẢN LÝ
              <font-awesome-icon 
                class="absolute top-3 right-3  text-black text-2xl ease-in-out" 
                :class="{'rotate-180': isToggle}"
                :icon="['fas', 'angle-down']" />
            </AddButton>
          </li>

          <li class=" item-manage hidden ease-in-out delay-150 "
              >
            <ul>
              <li class="menu_item pl-4 ">
              <AddRouterView 
                  :to="{ name: 'UserView' }"
                  :isActive="isActive({ name: 'UserView' })"
                  classesRouter="navbar-brand flex items-center pl-4 py-3 hover:bg-gray-200"
                  classesIcon="icon pr-2 text-black text-2xl"
                  iconWeight="fas"
                  icon="users"
                  classesP="text-black text-base font-normal">
                  QUẢN LÝ NHÂN VIÊN
                </AddRouterView>
              </li>
              <li class="menu_item pl-4 ">
                  <a class="navbar-brand flex items-center pl-4 py-3 hover:bg-gray-200" href="view_AdminReceipt">
                    <font-awesome-icon class= "icon pr-2 text-black text-2xl" :icon="['fas', 'box']" />
                      <p class="text-black text-base font-normal">QUẢN LÝ KHO</p>
                </a>
              </li>
            </ul>
          </li>
            <li class="menu_item">
              <a class="navbar-brand flex items-center pl-4 py-3 hover:bg-gray-200" href="thongke">
                <font-awesome-icon class= "icon pr-2 text-black text-2xl" :icon="['fas', 'chart-line']" />
                <p class="text-black text-base font-normal">THỐNG KÊ</p>
              </a> 
            </li>
          
          
          
        </div>

        <div class="menu_list">
          <li class="menu_item">
            <a class="nav-link flex items-center pl-4 py-3 hover:bg-gray-200" href="logout">
              <font-awesome-icon class= "icon pr-2 text-black text-2xl" :icon="['fas', 'gear']" />
              <p class="text-black text-base font-normal">CÀI ĐẶT</p>
            </a>
          </li>
          <li class="menu_item">
            <AddButton
              :type="'button'"
              @click="logout()"
              classesButton="w-full cursor-pointer nav-link flex items-center pl-4 py-3 hover:bg-gray-200"
              classesIcon="icon pr-2 text-black text-2xl"
              iconWeight="fas"
              icon="right-from-bracket"
              classesP="text-black text-base font-normal">
              ĐĂNG XUẤT

            </AddButton>
          </li>
        </div>
      </ul>

    </div>

  </div>
</template>

<script setup>
  import {  useRoute, useRouter } from "vue-router";
  import { notify } from "@kyvg/vue3-notification";
  import Cookies from "js-cookie";
  import { useAuthStore } from "../store/authStore";
  import { ref } from "vue";

  import AddRouterView from "./itemComponents/AddRouterView.vue";
  import AddButton from "./itemComponents/AddButton.vue";

  const route = useRoute();
  const router = useRouter();
  const authStore = useAuthStore();
  const isToggle = ref(false);


  const isActive = (url) => {
    return route.path === router.resolve(url).fullPath;
  }

  const showBtn = () => {
    const btn = document.querySelector('.item-manage');
    btn.classList.toggle('hidden');
    
    isToggle.value = !isToggle.value;
    // if(isToggle.value){
    //   btn.classList.remove('hidden');
    //   btn.classList.add('block');
    // }else{
    //   btn.classList.remove('block');
    //   btn.classList.add('hidden');
    // }
  }

  const logout = () => {
      Cookies.remove('auth_token');
      // authStore.setToken('');
      notify({
        title: "Logout Success",
        text: "You are logged out",
        type: "success",
      });

      router.push({ name: 'Home' });
    }




</script>

<style scoped>
  
  
</style>