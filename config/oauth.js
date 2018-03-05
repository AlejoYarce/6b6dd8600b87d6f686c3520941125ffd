exports.consumerKey = process.env.CONSUMER_KEY;
exports.consumerSecret = process.env.CONSUMER_SECRET;
exports.callback = process.env.CALLBACK_URL;

exports.auth_url = 'https://api.twitter.com/oauth/authenticate?oauth_token=';


exports.oauth_token = null;
exports.oauth_secretToken = null;
exports.accessToken = null;
exports.accessTokenSecret = null;

exports.setOauth = (oauth_token, oauth_secretToken) => {
  this.oauth_token = oauth_token;
  this.oauth_secretToken = oauth_secretToken;
};

exports.setAccessToken = (accessToken, accessTokenSecret) => {
  this.accessToken = accessToken;
  this.accessTokenSecret = accessTokenSecret;
};
