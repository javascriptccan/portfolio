// JavaScript Document
const request = require('request');

const options = {
    method: 'GET',
    url: 'https://XsiteNameBeingScrapedX.com/api/v1/timelines/public',
    json: true,
};


request(options, function(err, res, body) {
    if (err) {
        console.dir(err);
        return;
    }
    
    obj = JSON.parse(JSON.stringify(body));
     
    for(i in obj) {
    console.log(obj[i].account.acct);
    console.log('headers', res.headers);
    console.log('status code', res.statusCode);
    
    }
    
});