var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://"+serviceAccount.project_id+".firebaseio.com"
});
var uid = "98f94bc2-7118-47a6-98f0-fc65149713e0";
var additionalClaims = {
  role: 'shaman'
};

admin.auth().createCustomToken(uid, additionalClaims)
  .then(function(customToken) {
    console.log(customToken);
    // Send token back to client
  })
  .catch(function(error) {
    console.log("Error creating custom token:", error);
  });
