const Url = require('../model/url');

module.exports = {

  index: (req, res) => {
    res.render('index');
  },

  shorten: (req, res) => {
    // check if short url has already exist
    Url
      .findAll({
        where: {
          urlOriginal: req.body.longUrl
        }
      })
      .then(data => {
        res.send(data[0].urlChar);
      })
      .catch(error => {throw error})

    // if not, create short url
    generateChar(6, char => {
      // and insert into database
      Url
      .create({
        urlChar: char,
        urlOriginal: req.body.longUrl
      })
      .then(() => {
        res.send(char);
      })
      .catch(error => {throw error})
    })
  }
}

// functions

function generateChar(digits, callback) {
  const char = makeRandom(digits);

  Url
    .count({
      where: {
        urlChar: char
      }
    })
    .then(count => {
      // if the result has not been used, callback
      if (count === 0 ) {
        callback(char);

      // if the result has already been used, keep generating
      } else {
        return generateChar(digits, callback)
      }
    })
    .catch(error => {throw error})
}

function makeRandom(digits) {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < digits; i++) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return result;
}