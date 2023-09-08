<template>
    <div class="w-full flex">
      <div class="w-1/6 h-screen  shadow-md border-[0.1px] m-2 rounded-md">
        <SideBar />
      </div>
      <div class="w-5/6 h-screen min-h-screen">
        <div class=" shadow-md border-[0.1px] m-2 rounded-md">
          <NavBar />
        </div>
        <div class="h-fit min-h-full shadow-md border-[0.1px] m-2 rounded-md ">
          <slot />
        </div>
      </div>
    </div>
    <FooterVue /> 
</template>

<script setup>
  import SideBar from '../components/SideBar.vue';
  import NavBar from '../components/NavBar.vue';
  import FooterVue from '../components/Footer.vue';

</script>