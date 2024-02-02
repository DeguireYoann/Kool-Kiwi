const runtimeConfig = useRuntimeConfig()

const commercetoolsProjectKey = runtimeConfig.CTP_PROJECT_KEY;
const commercetoolsClientSecret = runtimeConfig.CTP_CLIENT_SECRET;
const commercetoolsClientID = runtimeConfig.CTP_CLIENT_ID;
const commercetoolsAuthHost = runtimeConfig.CTP_AUTH_URL;
const commercetoolsApiHost = runtimeConfig.CTP_API_URL;

export {
    commercetoolsProjectKey,
    commercetoolsClientSecret,
    commercetoolsClientID,
    commercetoolsAuthHost,
    commercetoolsApiHost
}