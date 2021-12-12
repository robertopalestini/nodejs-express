var express = require('express');
var router = express.Router();

/* GET soporte page. */
router.get('/soporte', function(req, res) {
  res.send('Soporte Tecnico');
});

module.exports = router;
