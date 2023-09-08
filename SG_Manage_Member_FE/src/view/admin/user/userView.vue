<script>
import axios from "axios";
import { computed, defineComponent, onMounted, ref} from "vue";
import Cookies from 'js-cookie';
import {  useRouter } from 'vue-router';
import { notify } from "@kyvg/vue3-notification";

import { useAuthStore } from "../../../store/authStore"

import AddUserCard from "../../../components/itemComponents/AddUserCard.vue";
import AddSearch from "../../../components/itemComponents/AddSearch.vue";

export default defineComponent({
    name: "UserView",
    components: {
        AddUserCard,
        AddSearch,
    },
    emits: ['clickShowPopup', 'clickCloseAllPopup', 'clickOnDelete', 'clickEditUser', 'update:searchKeyword'],
    setup() {
        const userData = ref([]);
        const searchKeyword = ref("");
        const router = useRouter();
        const authStore = useAuthStore();
        const tableColumns = [
            "user",
            "role",
            "status",
            "last activity",
            "join date",
            "actions",
        ];
        const isLogin = () => {
            const token = Cookies.get('auth_token');
            if (!token) {
                router.push({ name: 'Home' });
            }
        };
        onMounted(() => {
            isLogin();
        });
        const closeAllPopup = () => {
            console.log("closeAllPopup");
            var popups = document.querySelectorAll('.boxAction');
            let overlay = document.querySelector(".overlay");
            overlay.style.display = "none";
            popups.forEach(p => p.style.display = "none");
        };
        const autoClosePopup = (e) => {
            if (e.target.classList.contains('.boxAction'))
                return;
            closeAllPopup();
            console.log("autoClosePopup");
        };
        const showPopup = (id) => {
            closeAllPopup();
            var popup = document.querySelector("#action-" + id);
            let overlay = document.querySelector(".overlay");
            if (popup.dataset.display == "none") {
                popup.style.display = "block";
                popup.dataset.display = "block";
                overlay.style.display = "block";
            }
            else {
                popup.style.display = "none";
                popup.dataset.display = "none";
                overlay.style.display = "none";
            }
        };
        const onDelete = (id) => {
            closeAllPopup();
            axios
                .delete("http://localhost:3000/api/v1/users/" + id)
                .then((response) => {
                notify({
                    title: "Delete Success",
                    text: "User deleted",
                    type: "success",
                });
                console.log(response.data);
                fetchData();
            })
                .catch((error) => {
                notify({
                    title: "Delete Failed",
                    text: error.response.data.message,
                    type: "error",
                });
            });
        };
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/users");
                return userData.value = response.data;
            }
            catch (error) {
                return [];
            }
        };
        const filteredUsers = computed(() => {
            if (!searchKeyword.value) {
                return userData.value;
            }
            const keyword = searchKeyword.value.toLowerCase();
            return userData.value.filter((user) => {
                return user.name.toLowerCase().includes(keyword) || user.email.toLowerCase().includes(keyword) || user.role.toLowerCase().includes(keyword);
            });
        });
        onMounted(() => {
            fetchData();
        });
        const editUser = (id) => {
            closeAllPopup();
            router.push({ name: 'UserDetail', params: { id: id } });
        };
        const addUser = () => {
            console.log(authStore.isAuth);
            router.push({ name: 'UserDetail', params: { id: 0 } });
        };
        return {
            tableColumns,
            closeAllPopup,
            autoClosePopup,
            showPopup,
            onDelete,
            searchKeyword,
            filteredUsers,
            router,
            editUser,
            addUser,
        };
    },
});

</script>

<template>
 <div class="box-border p-0 m-0 flex items-center justify-center w-full">
  <div  class="w-3/5 " >

<div class="container-header pt-10 flex justify-between ">
      
    <div class="relative">
        <AddSearch
            v-model="searchKeyword"
        />
    </div>

  <button type="button" class="flex justify-end px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-500 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      @click="addUser()"
      >
      Thêm Mới
    </button>
  
</div>

<div class="container-body" >

    <div v-for="user in filteredUsers"
    :key="user.id">

        <AddUserCard 
        :DataUser="user"
        @clickShowPopup="showPopup"
        @clickCloseAllPopup="closeAllPopup"
        @clickOnDelete="onDelete"
        @clickEditUser="editUser"
        />

    </div>
    

</div>

  
</div>
  
 </div>
  
</template>