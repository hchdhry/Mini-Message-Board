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


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expres', messages: messages });
});

router.get('/messages', function(req, res, next) {
  res.render("form", { title: 'Messages', messages: messages });
});

router.get("/new", function(req, res, next) {
  res.render("form", { title: "New Page", messages: messages });
});

router.post("/new", function(req, res) {
 
  const name = req.body.name;
  const message = req.body.message;

messages.push({
    "text":message,
    "user":name,
    "added":new Date()
})
res.redirect('/')
});

module.exports = router;
