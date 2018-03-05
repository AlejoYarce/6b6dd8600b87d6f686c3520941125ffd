const LoginService = require('../services/LoginService');


exports.requestAuthToken = (req, res) => {
  LoginService.requestAuthToken()
    .then(result => res.json(result))
    .catch(error => res.json(error));
};


exports.connect = async (req, res) => {
  const { body } = req;
  const { oauth_token, oauth_verifier } = body;

  const result = await LoginService.connect(oauth_token, oauth_verifier)
    .catch(error => error);

  if (!result.status) {
    return res.json(result);
  }

  const { accessToken, accessTokenSecret } = result;
  const credentials = await LoginService.credentials(accessToken, accessTokenSecret);

  return res.json(credentials);  
};
