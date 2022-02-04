// import * as functions from "firebase-functions";
import {functions} from './firebaseConfig'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello Daryl v1.2 from Firebase!");
});
