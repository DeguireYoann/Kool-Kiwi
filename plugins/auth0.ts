import {
    createAuth0,
} from "@auth0/auth0-vue";
import auth from "~/middleware/auth";

const runtimeConfig = useRuntimeConfig()

export default defineNuxtPlugin((app)=> {
    const auth0 = createAuth0({
        domain: runtimeConfig.AUTH0_DOMAIN,
        clientId: runtimeConfig.AUTH0_CLIENTID,
        authorizationParams: {
            redirect_uri: 'http://localhost:3000'
        }
    });
    
    app.vueApp.use(auth0);

    addRouteMiddleware('auth', auth, { global: true })
})