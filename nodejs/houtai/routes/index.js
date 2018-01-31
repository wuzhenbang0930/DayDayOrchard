var express = require('express');
var router = express.Router();
var UserModel = require("../model/User");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dashboard', function(req, res, next) {
	//判断用户是否登录，如果没登录跳转到login页面。
	// if(req.session == null || req.session.username == null) {
	// 	// res.render('login', { title: '登录页面' });
	// 	res.redirect("/login"); // 重定向
	// 	return;
	// }
	// res.render('dashboard', {});
	res.send(req.session)
});
router.get('/first', function(req, res, next) {
	console.log(req.session)
  var name = req.query.name;
  var password = req.query.password;
 var result = {
		code: 1,
		message: "登录成功"
	};
	UserModel.find({name: name, password: password}, (err, docs)=>{
		if(docs.length == 0) {
			result.code = -101;
			result.message = "您的账号或密码错误。请重新登录。"
		} else {
			// 登录成功的时候，生成session
			req.session.name = name;
			console.log(req.session);
		}
		res.json(result);
	})
	
});

module.exports = router;
