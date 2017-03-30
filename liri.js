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
    console.log(tweets);
  }
  if (error){
  	console.log(error);
  }
 
});
}

// if (command == "spotify-this-song"){
// 	spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data' 
// output = ('\nSong Info \n\nArtist: ' + artistConcat + '\n\nSong Title: ' + thisSong.name + '\n\nOriginal Album: ' + thisSong.album.name + '\n\nPreview: ' + thisSong.preview_url + '\n');
// 				console.log(output);
// 				append();
			
// 			} else {

// 			{
// 				console.log('spotify error or there is no song matching that title.');
// 			}
// 		};

// }); 

// }





