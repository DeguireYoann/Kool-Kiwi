<script setup lang="ts">
import {useAuth0} from "@auth0/auth0-vue";

const auth0 = useAuth0();

const logOut = () => {
    auth0.logout();
}

const props = defineProps({
  user: {
    type: Object as () => any,
    required: true,
  },
});
</script>

<template>
    <div class="flex flex-shrink-0 items-center ml-auto">
        <NuxtLink to="/account" class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
            <span class="sr-only">User Menu</span>
            <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span v-if="user.name" class="font-semibold">{{user.name}}</span>
            </div>
            <span class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <NuxtImg v-if="user.picture" :src="user.picture" alt="user profile photo"
                    class="h-full w-full object-cover" />
            </span>
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor"
                class="hidden sm:block h-6 w-6 text-gray-300">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </NuxtLink>
        <div class="border-l pl-3 ml-3 space-x-1">
            <button
                class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span class="sr-only">Notifications</span>
                <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            </button>
            <button @click="logOut()"
                class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span class="sr-only">Log out</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </button>
        </div>
    </div>
</template>