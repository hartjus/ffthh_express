var express = require('express');
var router = express.Router();

const models = require('../models');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await models.user.findAll();
    res.send(users);

  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

module.exports = router;
