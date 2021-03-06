
const GlobalObjects = require('./GlobalObjects');
var globalObjects = new GlobalObjects();
module.exports = globalObjects;

// GRPC SETUP
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/boxerservice.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const boxerservice_package = grpc.loadPackageDefinition(packageDefinition).boxerservice_package;
// GRPC SETUP

async function bindGetBoxerWithStandingAndMatches(call, callback) {
  let response = await globalObjects.controller.guardGetBoxerWithStandingAndMatches(call.request);
  callback(null, response);
}

function main() {
  console.log("Server running...");
  server = new grpc.Server();
  server.addService(boxerservice_package.BoxerService.service, {
    GetGreeting: bindGetBoxerWithStandingAndMatches
  });
  server.bindAsync("localhost:50001", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();