
var fs = require("fs");

module.exports = function (app) {
  var FS_PATH_SERVICES = './routes/services/';
  var REQUIRE_PATH_SERVICES = './services/';

  fs.readdir(FS_PATH_SERVICES, function (err, list) {
    if (err) {
      console.log(err);
      throw '没有找到该文件夹，请检查12......'
    }
    for (var e; list.length && (e = list.shift());) {

      var service = require(REQUIRE_PATH_SERVICES + e);
      console.log('test:' + REQUIRE_PATH_SERVICES + e);
      service.init && service.init(app);
    }
  });
};