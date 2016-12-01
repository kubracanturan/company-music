const request = require('request');

request({
    method: 'POST',
    url: 'http://localhost:3000/api/sign-in',
    json: {
        "longUrl": "http://localhost:3000/"
    },
    form: {
        username: 'bhenav',
        password: '1'
    }
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});