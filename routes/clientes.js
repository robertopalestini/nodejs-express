var express = require('express');
var router = express.Router();

/* GET clientes page. */
router.get('/clientes', function(req, res, next) {
  res.render('clientes', { title: 'Express' });
});

module.exports = router;
