
var fs = require('fs');

var USER_PATH = '../apple-app-site-association';

var Test = {
  init: function(app){
    app.get('/apple-app-site-association', this.doShow);
  },

  // doTest: function(req, res){
  //   res.send({
  //     status: 1,
  //     info: '测试服务doTest'
  //   });
  // },

  doShow: function(req, res){

      fs.readFile(USER_PATH, function(err, data){
      if(!err){

        var obj = JSON.parse(data);

        return res.send({
            status: 1,
            data: obj
          });
        
      }
    });
  }
};

module.exports = Test;