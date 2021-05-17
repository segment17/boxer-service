const GlobalObjects = require('./GlobalObjects');
var globalObjects = new GlobalObjects();
module.exports = globalObjects;

// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/boxerservice.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: false, oneofs: true });
const boxerservice_package = grpc.loadPackageDefinition(packageDefinition).boxerservice_package;
// GRPC SETUP


async function bindGetBoxerWithStandingAndMatches(call, callback) {
  let r = await globalObjects.controller.guardGetBoxerWithStandingAndMatches(call.request);
  callback(null, r);
}

async function bindGetBoxer(call, callback) {
  let r = await globalObjects.controller.guardGetBoxer(call.request);
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
  globalObjects.controller.guardSetupAddBoxer(call.request);
  callback(null, {code: 200})
}

async function bindSetupAddLatestBoxer(call, callback) {
  globalObjects.controller.guardSetupAddLatestBoxer(call.request);
  callback(null, {code: 200})
}

async function bindSetupClearBoxers(call, callback) {
  globalObjects.controller.guardSetupClearBoxers();
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

async function bindEnterIntegratedTestingEnvironment(call, callback) {
  await globalObjects.controller.enterIntegratedTestingEnvironment();
  callback(null, null);
}

function main() {
  console.log("Server running...");
  server = new grpc.Server();
  server.addService(boxerservice_package.BoxerService.service, {
    GetBoxer: bindGetBoxer,
    GetBoxerWithStandingAndMatches: bindGetBoxerWithStandingAndMatches,
    EditBoxer: bindEditBoxer,
    AddBoxer: bindAddBoxer,
    RemoveBoxer: bindRemoveBoxer,
    Mock: bindMock,
    SetupAddBoxer: bindSetupAddBoxer,
    SetupAddLatestBoxer: bindSetupAddLatestBoxer,
    SetupAddStandingAndMatches: bindSetupAddStandingAndMatches,
    SetupAddToken: bindSetupAddToken,
    SetupClearBoxers: bindSetupClearBoxers,
    EnterIntegratedTestingEnvironment: bindEnterIntegratedTestingEnvironment
  });

  if (process.env.BOXER_SERVICE_SERVICE_PORT != undefined) {
    server.bind("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.ServerCredentials.createInsecure());
  } else {
    server.bind("localhost:50002", grpc.ServerCredentials.createInsecure());
  }
  server.start();
}

main();
