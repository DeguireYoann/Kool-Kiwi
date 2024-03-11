var axios = require("axios").default;

export default defineEventHandler((event) => {
    let token;
    var request = require("request");

    var options = { method: 'POST',
      url: 'https://dev-khvneu6jloaumhns.us.auth0.com/oauth/token',
      headers: { 'content-type': 'application/json' },
      body: '{"client_id":"59eMskyJP5y5rfTSQ6AgUTymHALqaIxi","client_secret":"xfhpjWSo4AgZ_X0l2V4PuluTSRYOHXP7r5cIjj7OGd0Zfz3b5YSGc5ejuEIUeElJ","audience":"http:localhost:3000/api/auth","grant_type":"client_credentials"}' };
    
    request(options, function (error: any, response: any, body: any) {
      if (error) throw new Error(error);
    
      console.log(body);
      token = JSON.parse(body).access_token ?? "";
    });

    if (!token) {
        return {
            route: '/'
        };
    }

    axios.request({
        method: 'GET',
        url: 'http://localhost:3010/api/private',
        headers: {
            authorization: token
        }
    }).then(function (response: any) {
        console.log(response.data);
    }).catch(function (error: any) {
        console.error(error);
    });

    return {
        hello: 'world'
    }
})