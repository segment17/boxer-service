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

async function bindRemoveBoxer(call, callback) {
  let r = await globalObjects.controller.guardRemoveBoxer(call.request);
  callback(null, r);
}

async function bindMock(call, callback) {
  await globalObjects.controller.mock();
  callback(null, null);
}

async function bindSetupAddBoxer(call, callback) {
  globalObjects.controller.mediator.boxerRepository.setupAddBoxer(call.request.boxer);
  callback(null, {code: 200})
}

async function bindSetupAddStandingAndMatches(call, callback) {
  globalObjects.controller.mediator.standingsServiceGateway.setupAddStandingAndMatches(call.request.standingAndMatches);
  callback(null, {code: 200})
}

async function bindSetupAddToken(call, callback) {
  globalObjects.controller.mediator.authServiceGateway.setupToken(call.request.token);
  callback(null, {code: 200})
}

function main() {
  console.log("Server running...");
  server = new grpc.Server();
  server.addService(boxerservice_package.BoxerService.service, {
    GetBoxerWithStandingAndMatches: bindGetBoxerWithStandingAndMatches,
    EditBoxer: bindEditBoxer,
    AddBoxer: bindAddBoxer,
    RemoveBoxer: bindRemoveBoxer,
    Mock: bindMock,
    SetupAddBoxer: bindSetupAddBoxer,
    SetupAddStandingAndMatches: bindSetupAddStandingAndMatches,
    SetupAddToken: bindSetupAddToken
  });

  if (process.env.BOXER_SERVICE_SERVICE_PORT != undefined) {
    server.bind("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.ServerCredentials.createInsecure());
  } else {
    server.bind("localhost:50001", grpc.ServerCredentials.createInsecure());
  }
  server.start();
}

main();
