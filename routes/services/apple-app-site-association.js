
var fs = require('fs');

var USER_PATH = './apple-app-site-association';

var AppleAppSiteAssociation = {
  init: function(app){
    console.log('...........apple-app-site-association')
    app.get('/apple-app-site-association', this.doShow);
  },

  doShow: function(req, res){
    console.log('...........doShow')  ;
      fs.readFile(USER_PATH, function(err, data){

       console.log('...........11111');

      if(!err){

        console.log('...........correct');

        var obj = JSON.parse(data);

        return res.send({
            status: 1,
            data: obj
          });
        
      }else{

        console.log(err);
      }
    });
  }
};

module.exports = AppleAppSiteAssociation;