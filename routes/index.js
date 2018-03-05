const LoginController = require('../controllers/LoginController');
const TweetsController = require('../controllers/TweetsController');

module.exports = (app) => {
  app.route('/')
    .get((req, res) => {
      res.status(200).json({ message: 'Connected!' });
    });

  app.route('/oauth_request')
    .get(LoginController.requestAuthToken);

  app.route('/connect')
    .post(LoginController.connect);

  app.route('/tweets')
    .get(TweetsController.tweets);

  app.route('/tweet')
    .post(TweetsController.tweet);

};
