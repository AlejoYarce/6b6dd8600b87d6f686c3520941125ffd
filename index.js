const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

/**
 * Express App Config
 */
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('express-session')({
  secret: 'super-secret-key',
  resave: true,
  saveUninitialized: true
}));

/**
 * Routes Config
 */
routes(app);

/**
 * Server Config
 */
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Tech Task API listening on port ${port}!`));
