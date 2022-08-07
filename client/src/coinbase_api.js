import { Issuer, generators } from 'openid-client';

const googleIssuer = await Issuer.discover('https://accounts.google.com');
console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);

const client = new googleIssuer.Client({
    client_id: '35d87efcecbb2972bef8bcb67651aae707a2990fc3e4d016208d2dc9aa99f412',
    client_secret: 'd2a804700cc1dfdfde216a522c624a8e9bf36c93f95bbe8be95d4bd45a4332d3',
    redirect_uris: ['https://decentralizedangellist.web.app/coin-exchange'],
    response_types: ['code'],
    // id_token_signed_response_alg (default "RS256")
    // token_endpoint_auth_method (default "client_secret_basic")
}); // => Client

const code_verifier = generators.codeVerifier();
// store the code_verifier in your framework's session mechanism, if it is a cookie based solution
// it should be httpOnly (not readable by javascript) and encrypted.

const code_challenge = generators.codeChallenge(code_verifier);

client.authorizationUrl({
  scope: 'openid email profile',
  resource: 'https://my.api.example.com/resource/32178',
  code_challenge,
  code_challenge_method: 'S256',
});