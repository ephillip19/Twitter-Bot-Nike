/**
 * Twitter Bot
 *
 * Retrieves data from Twitter about Nike
 *
 * @author Evan Phillips
 */

console.log("The bot is starting!");

var Twit = require("twit");
// reminders: make sure you are in cd twitter_api or it won't work

var T = new Twit({
  consumer_key: "...",
  consumer_secret: "...",
  access_token: "...",
  access_token_secret: "..."
});

var params = {
  query: "Nike",
  lang: "en",
  maxResults: 500,
  fromDate: "201801010000",
  toDate: "2018030100000"
};

T.get("search/tweets", params, gotData);
fs = require("fs");

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    fs.appendFile("nike_test_1.txt", tweets[i].text, function(err, result) {
      if (err) console.log("error", err);
    });
  }
}
