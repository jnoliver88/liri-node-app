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

//gets Spotify/OMDB/Bands in town from key.js file//
var Spotify = new Spotify(keys.SPOTIFY_ID);

//command line arguments//
var text = process.argv[2];































module.exports = Spotify;

console.log("SPOTIFY_ID: " + process.env.SPOTIFY_ID);
console.log("SPOTIFY_SECRET: " + process.env.SPOTIFY_SECRET);

