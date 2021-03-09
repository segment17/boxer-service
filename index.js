const GlobalObjects = require('./GlobalObjects');
var globalObjects = new GlobalObjects();
module.exports = globalObjects;

// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/boxerservice.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const boxerservice_package = grpc.loadPackageDefinition(packageDefinition).boxerservice_package;
// GRPC SETUP


async function bindGetBoxerWithStandingAndMatches(call, callback) {
  let r = await globalObjects.controller.guardGetBoxerWithStandingAndMatches(call.request);
  callback(null, r);
}

async function bindEditBoxer(call, callback) {
  let r = await globalObjects.controller.guardEditBoxer(call.request);
  callback(null, r);
}

async function bindAddBoxer(call, callback) {
  let r = await globalObjects.controller.guardAddBoxer(call.request);
  callback(null, r);
}

function main() {
  console.log("Server running...");
  server = new grpc.Server();
  server.addService(boxerservice_package.BoxerService.service, {
    GetBoxerWithStandingAndMatches: bindGetBoxerWithStandingAndMatches,
    EditBoxer: bindEditBoxer,
    AddBoxer: bindAddBoxer
  });

  if (process.env.BOXER_SERVICE_SERVICE_PORT != undefined) {
    server.bind("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.ServerCredentials.createInsecure());
  } else {
    server.bind("localhost:50001", grpc.ServerCredentials.createInsecure());
  }
  server.start();
}

main();
