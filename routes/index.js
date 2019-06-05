var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hero/:id', (req, res, next) => {
  const {id} = req.params;
  const {name} = req.query;

  if (id.toLowerCase() === 'hawkeye') {
    res.status(404);
    res.send(`${name} not found!`);
  } else {
    res.send({id, name});
  }

});

module.exports = router;
