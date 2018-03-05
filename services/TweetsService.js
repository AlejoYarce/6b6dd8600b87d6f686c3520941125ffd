const OAuth = require('../config/oauth');
const twitterAPI = require('node-twitter-api');
const twitter = new twitterAPI({
    consumerKey: OAuth.consumerKey,
    consumerSecret: OAuth.consumerSecret,
    callback: OAuth.callback
});

exports.tweets = (headers) => {
  return new Promise((resolve, reject) => {
    twitter.getTimeline('user_timeline',
      { screen_name: headers['screen_name'], count: 100 },
      headers['x-access-token'],
      headers['x-access-token-secret'],
      (error, data, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
  });
};
