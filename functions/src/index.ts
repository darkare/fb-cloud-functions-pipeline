import * as functions from "firebase-functions";
// import {functions} from './firebaseConfig'
// const publicIp = require ('public-ip');
// import * as publicIp from 'public-ip';
import axios from 'axios'
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
let runTimeOpts = {
  vpcConnector: 'vpc-connector-uscentral1',
  vpcConnectorEgressSettings: 'ALL_TRAFFIC' as 'ALL_TRAFFIC'
}

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello Daryl from Firebase!");
});

export const helloWorld_au = functions.https.onRequest((request, response) => {
  response.send("Hello Daryl from Firebase!");
});

export const version = functions.https.onRequest(async (request, response) => {
  let resp = await axios.get('http://api.ipify.org/');
  console.log('--version--',resp.data);
  response.send(resp.data);
});



export const myIp = functions.https.onRequest(async(request, response) => {
   console.log('function run check ip address now');
  //  console.dir( ip.address());
  let resp = await axios.get('http://api.ipify.org/');
  console.log('--myIp--',resp.data);
  response.send(resp.data);
})


// export const myIp = functions.runWith(runTimeOpts).https.onRequest(async(request, response) => {
//    console.log('function run check ip address now');
//   //  console.dir( ip.address());
//   let resp = await axios.get('http://api.ipify.org/');
//   console.log('--myIp--',resp.data);
//   response.send(resp.data);
// })
