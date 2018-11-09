const Url = require('../model/url');

module.exports = (req, res) => {

  const char = req.params.value;
  if (char && char !== 'undefined') {
    Url
      .findAll({
        where: {
          urlChar: char
        }
      })
      .then(data => {
        const url = data[0].urlOriginal;
        if (url && url !== 'undefined') {
          res.redirect(url);
        }
      })
      .catch(error => {throw error})
  }
}