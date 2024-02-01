import commercetoolsConfig from "~/.commercetools.json"

const commercetoolsProjectKey = commercetoolsConfig.CTP_PROJECT_KEY;
const commercetoolsClientSecret = commercetoolsConfig.CTP_CLIENT_SECRET;
const commercetoolsClientID = commercetoolsConfig.CTP_CLIENT_ID;
const commercetoolsAuthHost = commercetoolsConfig.CTP_AUTH_URL;
const commercetoolsApiHost = commercetoolsConfig.CTP_API_URL;

export {
    commercetoolsProjectKey,
    commercetoolsClientSecret,
    commercetoolsClientID,
    commercetoolsAuthHost,
    commercetoolsApiHost
}