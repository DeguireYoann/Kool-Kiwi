<script setup lang="ts">
import {useAuth0} from "@auth0/auth0-vue";
// const { loggedIn, user, session, clear } = useUserSession();

const auth0 = useAuth0();

const isAuthenticated = auth0.isAuthenticated;
const user = auth0.user;

const login = () => {
  auth0?.checkSession()
  if (!auth0?.isAuthenticated.value) {
    auth0?.loginWithPopup()
  }
}
console.log(user)
</script>

<template>
    <header class="flex flex-col items-center justify-center w-full shadow-lg">
        <!-- Navbar -->
        <nav class="flex flex-col w-full max-w-7xl">
            <!-- Logo Container -->
            <div class="flex justify-around w-full space-x-16 py-6 border-b-2">
                <AppHeaderLogo />
                <AppHeaderSearchBar />
                <!-- Icon Menu Section -->
                <div class="flex items-center space-x-5">
                    <!-- Login -->
                    <a v-if="!isAuthenticated" @click="() => login()" class="flex text-gray-600 hover:text-green-500
                    cursor-pointer transition-colors duration-300
                    font-semibold text-green-600">
                        <svg class="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path
                                d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                        </svg>
                        Login
                    </a>
                    <div v-if="isAuthenticated">
                        <AppHeaderUserInfo :user="user"/>
                    </div>
                </div>
            </div>
            <div class="flex w-full py-2">
                <AppHeaderMainNavigation />
            </div>
        </nav>
    </header>
</template>