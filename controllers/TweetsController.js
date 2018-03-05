const TweetsService = require('../services/TweetsService');


exports.tweets = async (req, res) => {
  const { headers } = req;

  const result = await TweetsService.tweets(headers)
    .catch(error => error);

  return res.json(result);
};
