var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/clientes', function(req, res, next) {
  res.render('clientes', { title: 'Express' });
});

/* GET productos page. */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Express' });
});

/* GET soporte page. */
router.get('/soporte', function(req, res) {
  res.send('Soporte Tecnico');
});


module.exports = router;
