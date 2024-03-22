import {
    createAuth0,
} from "@auth0/auth0-vue";
import auth from "~/middleware/auth";


export default defineNuxtPlugin((app)=> {
    const runtimeConfig = useRuntimeConfig();

    const auth0 = createAuth0({
        domain: runtimeConfig.AUTH0_DOMAIN ?? process.env.AUTH0_DOMAIN,
        clientId: runtimeConfig.AUTH0_CLIENTID ?? process.env.AUTH0_CLIENTID,
        authorizationParams: {
            redirect_uri: 'http://localhost:3000'
        }
    });
    console.log(auth0, runtimeConfig.AUTH0_CLIENTID, "YEEEEEEEEEEEEEEEEEEEET")
    app.vueApp.use(auth0);

    addRouteMiddleware('auth', auth, { global: true })
})