var express = require('express');
const { locals } = require('../app');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expres', messages: messages });
});

/* GET messages page. */
router.get('/messages', function(req, res, next) {
  res.render("form", { title: 'Messages', messages: messages });
});
router.get("/new",function(req,res,next){
  res.render("form")
})
module.exports = router;
