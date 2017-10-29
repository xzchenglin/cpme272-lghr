// created by Yu Xu

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    console.log(req.user);

    //res.send(req.user);

    const token = req.user.token
    const tokenSecret = req.user.tokenSecret
    const id_str = req.user.id_str
    const provider = req.user.provider

    const url = 'http://www.teamlghr.site/#/?token=' + token + "&tokenSecret=" + tokenSecret + "&id_str=" + id_str + "&provider=" + provider;

    res.writeHead(302,
	  {Location: url}
	);
	res.end();

});

module.exports = router;
