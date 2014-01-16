var Socks5ClientHttpAgent = require('socks5-http-client/lib/Agent'),
    request = require('request');

request({
    url: 'http://namemydaughter.com/vote.php?name=TROTT&type=first',
    agent: new Socks5ClientHttpAgent({
        socksHost: 'localhost', // Defaults to 'localhost'.
        socksPort: 9050 // Defaults to 1080.
    })
}, function(err, res, body) {
    var data = JSON.parse(body);
    console.log("Mission " + data.code + " Count " + data.votes + "!");
});