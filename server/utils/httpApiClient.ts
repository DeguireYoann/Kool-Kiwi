/* eslint-disable @typescript-eslint/no-unsafe-assignment */ // fetch type is unavailble

import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { AuthMiddlewareOptions, HttpMiddlewareOptions, ClientBuilder } from "@commercetools/sdk-client-v2";
import { commercetoolsApiHost, commercetoolsAuthHost, commercetoolsClientID, commercetoolsClientSecret, commercetoolsProjectKey } from "../../plugins/commercetools";

const createApiClient = () => {
	const authOptions: AuthMiddlewareOptions = {
		credentials: {
			clientId: commercetoolsClientID,
			clientSecret: commercetoolsClientSecret,
		},
		host: commercetoolsAuthHost,
		projectKey: commercetoolsProjectKey,
		fetch,
	};

	const httpOptions: HttpMiddlewareOptions = { host: commercetoolsApiHost, fetch };

	const client = new ClientBuilder().withClientCredentialsFlow(authOptions).withHttpMiddleware(httpOptions).build();

	return createApiBuilderFromCtpClient(client).withProjectKey({ projectKey: commercetoolsProjectKey});
};

export const apiRoot = createApiClient();
