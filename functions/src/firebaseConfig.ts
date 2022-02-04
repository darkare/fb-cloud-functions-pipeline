import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
/**
 * This is a recipe to initialise the firebase configuration I read from a tutorial.
 */
const apiFirebaseOptions = {
    ...functions.config().firebase,
    credential: admin.credential.applicationDefault()
}

admin.initializeApp(apiFirebaseOptions);
const auth = admin.auth();

// module.exports = {functions, auth, admin};
export  {functions, auth, admin};

