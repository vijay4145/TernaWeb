
var admin = require("firebase-admin");
require('dotenv').config();

var serviceAccount = {
  "type": "service_account",
  "project_id": "ternaweb",
  "private_key_id": "91ee4d443a1509da0e8fe22d4ed769cb9cbdcc47",
  "private_key": process.env.PRIVATE_KEY,
  "client_email": process.env.CLIENT_EMAIL,
  "client_id": process.env.CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.CLIENT_CERT,
  "universe_domain": "googleapis.com"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


module.exports = {admin};