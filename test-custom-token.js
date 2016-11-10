var firebase = require("firebase");
require("firebase/auth");
require("firebase/database");

var config = require("./customTokenRuleConfig.json");
firebase.initializeApp(config);

if(process.argv.length < 4) {
  console.log("node test-custom-token.js <custom-token> <ref>");
  return null;
}
var token = process.argv[2];
var ref = process.argv[3];

firebase.auth().signInWithCustomToken(token).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("errorCode: "+errorCode+" message : "+errorMessage);
});

var spotRef = firebase.database().ref(ref)

spotRef.on('value', function(snapshot) {
 console.log("retrieved data : "+JSON.stringify(snapshot.val()));
}, function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("errorCode: "+errorCode+" message : "+errorMessage);
});

console.log("Firebase custom token test is running!");

