import {useAuth0} from "@auth0/auth0-vue";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth0 = useAuth0();

    if (to.path === '/account' && !auth0.isAuthenticated) {
        return navigateTo('/')
    }
  })
  