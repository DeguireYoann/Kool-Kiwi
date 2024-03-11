const express = require('express');
const app = express();
const {
    auth
} = require('express-oauth2-jwt-bearer');

const port = process.env.PORT || 8080;
const {
    requiredScopes
} = require('express-oauth2-jwt-bearer');
const productListScope = requiredScopes('read:products');
const accountScope = requiredScopes('read:account');

const jwtCheck = auth({
    audience: 'http:localhost:3000/api/auth',
    issuerBaseURL: 'https://dev-khvneu6jloaumhns.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);

console.log('Running on port ', port);

app.get('/account', jwtCheck, accountScope, function(req, res) {
    res.send('This is your account information');
});

// This route doesn't need authentication
// app.get('/api/public', function (req, res) {
//     res.json({
//         message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
//     });
// });

// // This route needs authentication
// app.get('/api/private', checkJwt, function (req, res) {
//     res.json({
//         message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//     });
// });

// app.get('/api/private-scoped', checkJwt, checkScopes, function (req, res) {
//     res.json({
//         message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
//     });
// })