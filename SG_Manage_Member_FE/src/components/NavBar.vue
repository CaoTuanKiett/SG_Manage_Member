<template>
  <div>

  <div class="header_container flex  justify-between px-10 py-6 ">

    <div class="header_search w-6/12 flex relative  ">
      <!-- <input type="text" placeholder="Search" class="w-full py-3 px-4 pr-12 rounded-md border-[1px] placeholder:text-slate-600 placeholder:italic shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black text-base">
      <font-awesome-icon 
        :icon="['fas', 'magnifying-glass']" 
        class="absolute right-3 bottom-3 text-xl text-slate-500 cursor-pointer"
      /> -->
      <div class="container__sidebar--logo flex justify-center items-center ">
        <img 
          src="../assets/img/logoSGr.png" alt="logo"
          class="w-10 rounded-md">
        <p class="font-bold text-3xl ml-2 text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] ">S-GROUP</p>
      </div>
    </div>

    <div class="header_infor flex justify-center items-center ">
      <li class="infor_item ml-3 w-14  flex items-center ">
        <font-awesome-icon :icon="['fas', 'phone']" class="text-xl p-3 hover:bg-[var(--color-opacity)]  hover:rounded-full hover:border-2  hover:shadow-md" />
        <!-- <p class="pl-2 font-semibold text-base">1800 1515</p> -->
      </li>
      <li class="infor_item ml-3 w-14  flex items-center  " >
        <font-awesome-icon :icon="['fas', 'bell']" class="text-xl py-3 px-3.5 hover:bg-[var(--color-opacity)]  hover:rounded-full hover:border-2  hover:shadow-md" />
        <!-- <p class="pl-2 font-semibold text-base">Thông báo</p> -->
      </li>
      <li class="infor_item ml-3 w-14 flex items-center  ">
        <i class="fa-brands fa-facebook-messenger text-xl  px-3 py-2 hover:bg-[var(--color-opacity)]  hover:rounded-full hover:border-2  hover:shadow-md"></i>
        <!-- <p class="pl-2 font-semibold text-base">Tin Nhắn</p> -->
      </li>
      <li class="infor_item ml-8  flex items-center">
        <img 
          src="../assets/img/dog.jpg" alt="avt" 
          class="w-9 rounded-full">
        <p class="pl-2 font-semibold text-base"><a class="navbar-brand font-semibold text-base" href="view_Admin">Hi! Tuấn Kiệt </a></p>
      </li>
      
      <img 
        src="../assets/img/lacovn.jpg" alt=""
        class="w-15 h-9 ml-3" >
    </div>
  </div>

</div>
</template>