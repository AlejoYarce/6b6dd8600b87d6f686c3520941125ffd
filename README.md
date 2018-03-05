# Tech Task API
> Node API with Express using Twitter API


## Prerequisites

### Setup Twitter APP
- Create a new app [here](https://apps.twitter.com/)
- Keep the generated **CONSUMER_KEY** and **CONSUMER_SECRET**
- Export variables **CONSUMER_KEY**, **CONSUMER_SECRET** and **CALLBACK_URL**
-- For dev, **CALLBACK_URL** must be **http://localhost:3000/**

## Project Structure
- **Controllers**
  - Login and Tweets Controller
- **Services**
  - Login and Tweets Service to auth and get info from Twitter
- **Routes**
  - `/oauth_request`
  - `/connect`
  - `/tweets`
- **Config**
  - `/oauth` --> set/get keys for Twitter API

## Build Setup

``` bash
# install dependencies
$ npm install

# serve at localhost:4000
$ npm run start

# serve with hot reload (nodemon) at localhost:4000
$ npm run dev
```
