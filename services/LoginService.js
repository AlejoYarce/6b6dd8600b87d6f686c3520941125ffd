const OAuth = require('../config/oauth');
const twitterAPI = require('node-twitter-api');
const twitter = new twitterAPI({
  consumerKey: OAuth.consumerKey,
  consumerSecret: OAuth.consumerSecret,
  callback: OAuth.callback
});

exports.requestAuthToken = () => {
  return new Promise((resolve, reject) => {
    twitter.getRequestToken((error, oauth_token, oauth_secretToken) => {
      if (error) {
        reject('Error getting OAuth request token : ' + error);
      } else {
        OAuth.setOauth(oauth_token, oauth_secretToken);

        resolve({
          oauth_token,
          oauth_secretToken,
          authUrl: `${OAuth.auth_url}${oauth_token}`,
        });
      }
    });
  });
};

exports.connect = (oauth_token, oauth_verifier) => {
  return new Promise((resolve, reject) => {
    twitter.getAccessToken(oauth_token, OAuth.oauth_secretToken, oauth_verifier,
      (error, accessToken, accessTokenSecret, results) => {
        if (error) {
          reject({
            status: false,
            error,
          });
        } else {
          OAuth.setAccessToken(accessToken, accessTokenSecret);

          resolve({
            status: true,
            accessToken,
            accessTokenSecret,
          });
        }
      });
  });
};

exports.credentials = (accessToken, accessTokenSecret) => {
  return new Promise((resolve, reject) => {
    twitter.verifyCredentials(accessToken, accessTokenSecret, {},
      (error, profile, response) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            accessToken,
            accessTokenSecret,
            profile
          });
        }
      });
  });
};
