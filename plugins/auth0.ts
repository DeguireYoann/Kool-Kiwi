import {
    createAuth0,
} from "@auth0/auth0-vue";
import auth from "~/middleware/auth";


export default defineNuxtPlugin((app) => {
    const runtimeConfig = useRuntimeConfig()

    const auth0 = createAuth0({
        domain: runtimeConfig.public.AUTH0_DOMAIN,
        clientId: runtimeConfig.public.AUTH0_CLIENTID,
        authorizationParams: {
            redirect_uri: 'http://localhost:3000'
        }
    });
    if (process.client) {
        app.vueApp.use(auth0);
    }

    addRouteMiddleware('auth', auth, {
        global: true
    })
})