const request = require('request');
request.post({url:'http://localhost:3000/api/sign-in', form: {
    username: 'bhenav',
    password: '1'
}}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});