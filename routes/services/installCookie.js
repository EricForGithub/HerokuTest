
var fs = require('fs');
var util = require('./../util');
var USER_PATH = './database/user.json';


var User = {

  init: function (app) {

    app.get('/installCookie', this.installCookie);

    app.get('/checkCookieAndRedirect', this.checkCookieAndRedirect);


  },


  installCookie: function (req, res) {

    console.log(req.cookies);

    res.writeHead(200, {
      'Set-Cookie': 'mycookie=test',
      'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
  },


  checkCookieAndRedirect: function (req, res) {

    console.log(req.cookies);

    if (req.cookies.mycookie != null){

      console.log('cookie is found'+req.cookies.mycookie);
      // console.log('req.USER_PATH'+req.);

    
    }else{

      console.log('is null....');
    }

   
    res.end('1111111111111111\n');
  },



};


module.exports = User;