//pulls personal keys from .env file//
require("dotenv").config();

//read random.txt file//
var fs = require("fs");

//this reads the key.js file//
var keys = require("./keys.js");

//gets info from OMDB and Band API//
var request = require("request");

//gets info from spotify API
var Spotify = require('node-spotify-api');

//require to convert date using moment.js
var moment = require('moment');

//command line arguments//
var command = process.argv[2]; 
var artist = process.argv[3];
var spotify = new Spotify(keys.spotify);
var movie = newMovie;

//var spotify = new Spotify({
    //id:'50108489e3f34819a5af4c4fafbf83d3',
    //secret:f21f0eb97e3c47118ef9f0dff6a17bf7

 // });

// Grab the axios package...
// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
//need to create a function to pull Spotify concert this information//

var axios = require("axios");

function doSpotify() {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    //console.log(response.data);
    console.log(`
        location: ${response.data[0].venue.country}, ${response.data[0].venue.city}, 
    `)
  })
}

  //need help to create the argument for the command line//
    if(command === 'concert-this') {
        doSpotify();
  };

  function newMovie(){
  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
  if(command === 'movie-this'){
      newMovie();
  }
};