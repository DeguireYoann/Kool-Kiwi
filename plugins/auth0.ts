import {
    createAuth0,
} from "@auth0/auth0-vue";

import auth from "~/middleware/auth";

export default defineNuxtPlugin((app)=> {
    const auth0 = createAuth0({
        domain: "dev-khvneu6jloaumhns.us.auth0.com",
        clientId: "MlIwYA8Y10LCdcz4vMd4T6AzSOssNboI",
        authorizationParams: {
            redirect_uri: 'http://localhost:3000'
        }
    });

    app.vueApp.use(auth0);

    addRouteMiddleware('auth', auth, { global: true })
})