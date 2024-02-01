import contentfulConfig from "~/.contentful.json"

const contentful = require('contentful');
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: contentfulConfig.CTF_SPACE_ID,
  accessToken: contentfulConfig.CTF_CDA_ACCESS_TOKEN,
};

// export `createClient` to use it in page components
module.exports = {
  createClient() {
    return contentful.createClient(config);
  },
};