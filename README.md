fortunecookie
=========

[![Issues](https://img.shields.io/github/issues/wh-iterabb-it/fortunecookie.svg)](https://github.com/wh-iterabb-it/fortunecookie/issues)
[![License](https://img.shields.io/badge/license-GPL-blue.svg)](https://github.com/wh-iterabb-it/fortunecookie/blob/main/LICENSE)
![Known Vulnerabilities](https://snyk.io/test/github/wh-iterabb-it/fortunecookie/badge.svg)
[![codecov](https://codecov.io/gh/free-ignorance/fortunecookie/branch/main/graph/badge.svg)](https://codecov.io/gh/free-ignorance/fortunecookie)


🥠 Fortunecookie API
=========


## Description:

This RESTful API returns a json object with aphorisms, much like a opening a fortune cookie. 


### Basic usage


```bash 
curl https://aphorismcookie.herokuapp.com
```

Response

```json
{
  "data": {
    "message": "Everything will now come your way.",
  },
  "meta": {
    "status": 200,
  }
}
```

Also has a slack friendly endpoint!

```bash 
curl https://aphorismcookie.herokuapp.com/slack
```

Response

```json
{
  "response_type": "in_channel",
  "text": "🥠 your fortune reads: 'Everything has beauty but not everyone sees it.'"
}
```


### Documentation

<div align="center">
  <p>
    <a href="https://rapidapi.com/wh-iterabb-it-wh-iterabb-it-default/api/fortune-cookie4/">
      <img width="200" height="52" src="https://rapidapi.com/static-assets/default/dark-logo-78e48dc1-ca3f-4d67-a6f5-74032f439c8b.svg" />
    </a>
  </p>
</div>

## Local Development

### Installation

```
npm install
```
### Example Usage

Basic usage
```
npm run start
```
