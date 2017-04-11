var request = require('request');
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');
var keys = require('./keys.js');

var command = process.argv[2];
var argument = process.argv[3];
var output;


if (command == "movie-this"){
request('http://www.omdbapi.com/?t=' + argument, function (error, response, body) {
	if (error){
  	console.log('error:', error); // Print the error if one occurred 
  } else {
  	console.log('body:', body); // Print the HTML for the Google homepage. 
  }


});
}

if (command == "my-tweets"){	
//creating a new object that allows my-tweets
var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
});

var params = {screen_name: 'jenesis5829'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    //console.log(tweets);
    for(var i=0; i<tweets.length; i++){
      console.log(tweets[i].created_at);
      console.log(' ');
      console.log(tweets[i].text);
    }
  }
 });
}
//still working on this 

if (command == "spotify-this-song"){
	spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } else {

 // Do something with 'data' 
    console.log(data.tracks.items[0]);
    
  }

  });
}

//still working on random
   
// if (command == "do-what-it-says"){



// }









