
// // GRPC SETUP
// const grpc = require('grpc');
// const protoLoader = require('@grpc/proto-loader');
// const PROTO_PATH = __dirname + '/proto/authservice.proto';
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
// const authservice_package = grpc.loadPackageDefinition(packageDefinition).authservice_package;
// // GRPC SETUP

// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/boxerservice.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const boxerservice_package = grpc.loadPackageDefinition(packageDefinition).boxerservice_package;
// GRPC SETUP
let client;
if (process.env.BOXER_SERVICE_SERVICE_PORT != undefined) {
  client = new boxerservice_package.BoxerService("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
} else {
  client = new boxerservice_package.BoxerService("0.0.0.0:50002", grpc.credentials.createInsecure());
}

client.SetupAddBoxer({boxer: {
  id: 1,
  fullName: "Mike Tyson",
  birthDate: 127419968, // Timestamp
  height: 178,
  weight: 100
}}, function (err, res) {
  console.log(err);
  console.log(res);
  // resolve(res);
});

// client.SetupClearBoxers({}, function (err, res) {
//   console.log(err);
//   console.log(res);
//   // resolve(res);
// });

// class AuthServiceGateway {

//   // Template code

//   // Gateway exposed function
//   async getValidation(token) {
//     let response = await this.doCallForGetValidation(token);
//     return response;
//   }

//   async doCallForGetValidation(obj) {
//     // Connect to Kubernetes if possible
//     if (this.client == undefined || this.client == null) {
//       if (process.env.AUTH_SERVICE_SERVICE_PORT != undefined) {
//         this.client = new authservice_package.AuthService(process.env.AUTH_SERVICE_SERVICE_HOST + ":" + process.env.AUTH_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
//       } else {
//         this.client = new authservice_package.AuthService("0.0.0.0:50001", grpc.credentials.createInsecure());
//       }
//     }

//     console.log(this.client);

//     let response = await this.PROMISE_doCallForGetValidation(obj);
//     console.log(response);

//     return response;
//   }
// // 
//   async PROMISE_doCallForGetValidation (obj) {
//     return new Promise((resolve, reject) => {
//       this.client.Validate({token: obj}, function (err, res) {
//         console.log(res);
//         resolve(res);
//       });
//     });
//   }

//   async setupToken(obj) {
//     return null;
//   }

// }

// let x = new AuthServiceGateway();
// let r =  x.doCallForGetValidation("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0");
// console.log(r);
// module.exports = AuthServiceGateway;
