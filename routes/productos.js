var express = require('express');
var router = express.Router();

/* GET productos page. */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Express' });
});

module.exports = router;
