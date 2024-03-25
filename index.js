var express = require('express');
const { I18n } = require('i18n');
const path = require('path');
var app = express();
const cookieParser = require('cookie-parser');
const port = 4000;
//set language
app.use(cookieParser());
const i18n = new I18n({
  locales: ['en', 'vi'],
  directory: path.join(__dirname, '/locales'),
  cookie: 'lang',
});
app.use(i18n.init);

app.use('/change-lang/:lang', (req, res) => {
  res.cookie('lang', req.params.lang, { maxAge: 1000000 });
  res.redirect('back');
});
// set the view engine to ejs
app.use(express.static('public'));

//ejs setup
app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
  res.render('pages/index', {
    cookies: req.cookies,
  });
});

// index page
app.get('/download', function (req, res) {
  res.render('pages/download', {
    cookies: req.cookies,
  });
});
app.get('/term-of-service', function (req, res) {
  if (req && req.cookies && req.cookies.lang === 'vi') {
    res.render(path.join(__dirname, 'views/pages/TermOfService/termOfServiceVi.ejs'));
  } else {
    res.render(path.join(__dirname, 'views/pages/TermOfService/termOfServiceEn.ejs'));
  }
});

app.get('/private-policy', function (req, res) {
  if (req && req.cookies && req.cookies.lang === 'vi') {
    res.render(path.join(__dirname, 'views/pages/PrivatePolicy/privatePolicyVi.ejs'));
  } else {
    res.render(path.join(__dirname, 'views/pages/PrivatePolicy/privatePolicyEn.ejs'));
  }
});

app.get('/refund-policy', function (req, res) {
  if (req && req.cookies && req.cookies.lang === 'vi') {
    res.render(path.join(__dirname, 'views/pages/refundPolicy/Vie.ejs'));
  } else {
    res.render(path.join(__dirname, 'views/pages/refundPolicy/Eng.ejs'));
  }
});

app.listen(port);
console.log('Server is listening on port ' + port);
