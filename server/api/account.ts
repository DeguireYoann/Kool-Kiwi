export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig();

    let token;
    var request = require("request");

    var options = { method: 'POST',
      url: 'https://dev-khvneu6jloaumhns.us.auth0.com/oauth/token',
      headers: { 'content-type': 'application/json' },
      body: `{"client_id":${runtimeConfig.AUTH0_CLIENTID},"client_secret":${runtimeConfig.AUTH0_CLIENTSECRET},"audience":"http:localhost:3000/api/auth","grant_type":"client_credentials"}` };
    
    request(options, function (error: any, response: any, body: any) {
      if (error) throw new Error(error);
    
      console.log(body, "BUUUUUUUUUUUUUUUUUDY");
      token = JSON.parse(body).access_token ?? "";
    });

    if (!token) {
        return {
            route: '/'
        };
    }
})