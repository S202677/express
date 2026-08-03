const express =require('express');
const router = express.Router();
const request = require('request');

router.get('/', function(req, res){
request('https://dog.ceo/api/breeds/image/random', function(error, response, body) {
if(!error&& response.statusCode== 200) {
const data = JSON.parse(body);
const dogImageUrl = data.message;
res.send('<img src="'+ dogImageUrl + '">');
}
});
});

module.exports = router;