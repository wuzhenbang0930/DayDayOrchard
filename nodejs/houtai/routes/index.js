var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/first', function(req, res, next) {
  var name = req.query.name;
  var password = req.query.password;
 var result = {
		code: 1,
		message: "登录成功"
	};
	if(name !== "1388888888" && password !== "123"){
		result.code = -101;
		result.message = '用户名密码错误'
	}else{
		res.json(result)
	}
	res.json(result)
});

module.exports = router;
