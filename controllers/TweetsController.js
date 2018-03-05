const TweetsService = require('../services/TweetsService');


exports.tweets = async (req, res) => {
  const { headers } = req;

  const result = await TweetsService.tweets(headers)
    .catch(error => error);

  return res.json(result);
};


exports.tweet = async (req, res) => {
  const { body, headers } = req;

  const result = await TweetsService.tweet(body.content, headers)
    .catch(error => error);

  return res.json(result);
};
