const GlobalObjects = require('./GlobalObjects');
var globalObjects = new GlobalObjects();
module.exports = globalObjects;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/ubc.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: false, oneofs: true });
const ubc_package = grpc.loadPackageDefinition(packageDefinition).ubc_package;

async function bindGetBoxerWithStandingAndMatches(call, callback) {
  await sleep(50);
  console.log('\n⚪GetBoxerWithStandingAndMatches⚪\t:: ', JSON.stringify(call.request));
  let r = await globalObjects.controller.guardGetBoxerWithStandingAndMatches(call.request);
  await sleep(50);
  console.log('🟢GetBoxerWithStandingAndMatches🟢\t:: ', JSON.stringify(r));
  callback(null, r);
}

async function bindGetBoxer(call, callback) {
  await sleep(50);
  console.log('\n⚪GetBoxer⚪\t:: ', JSON.stringify(call.request));
  let r = await globalObjects.controller.guardGetBoxer(call.request);
  await sleep(50);
  console.log('🟢GetBoxer🟢\t:: ', JSON.stringify(r));
  callback(null, r);
}

async function bindGetMultipleBoxers(call, callback) {
  await sleep(50);
  console.log('\n⚪GetMultipleBoxers⚪\t:: ', JSON.stringify(call.request));
  let r = await globalObjects.controller.guardGetMultipleBoxers(call.request);
  await sleep(50);
  console.log('🟢GetMultipleBoxers🟢\t:: ', JSON.stringify(r));
  callback(null, r);
}

async function bindEditBoxer(call, callback) {
  await sleep(50);
  console.log('\n⚪EditBoxer⚪\t:: ', JSON.stringify(call.request));
  let r = await globalObjects.controller.guardEditBoxer(call.request);
  await sleep(50);
  console.log('🟢EditBoxer🟢\t:: ', JSON.stringify(r));
  callback(null, r);
}

async function bindAddBoxer(call, callback) {
  await sleep(50);
  console.log('\n⚪AddBoxer⚪\t:: ', JSON.stringify(call.request));
  let r = await globalObjects.controller.guardAddBoxer(call.request);
  await sleep(50);
  console.log('🟢AddBoxer🟢\t:: ', JSON.stringify(r));
  callback(null, r);
}

async function bindRemoveBoxer(call, callback) {
  await sleep(50);
  console.log('\n⚪RemoveBoxer⚪\t:: ', JSON.stringify(call.request));
  let r = await globalObjects.controller.guardRemoveBoxer(call.request);
  await sleep(50);
  console.log('🟢RemoveBoxer🟢\t:: ', JSON.stringify(r));
  callback(null, r);
}

async function bindMock(call, callback) {
  await globalObjects.controller.mock();
  callback(null, null);
}

async function bindSetupAddBoxer(call, callback) {
  await globalObjects.controller.guardSetupAddBoxer(call.request);
  callback(null, {code: 200})
}

async function bindSetupAddLatestBoxer(call, callback) {
  await globalObjects.controller.guardSetupAddLatestBoxer(call.request);
  callback(null, {code: 200})
}

async function bindSetupClearBoxers(call, callback) {
  await globalObjects.controller.guardSetupClearBoxers();
  callback(null, {code: 200})
}

async function bindSetupAddStandingAndMatches(call, callback) {
  await globalObjects.controller.mediator.standingsServiceGateway.setupAddStandingAndMatches(call.request.standingAndMatches);
  callback(null, {code: 200})
}

async function bindSetupAddToken(call, callback) {
  await globalObjects.controller.mediator.authServiceGateway.setupToken(call.request.token);
  callback(null, {code: 200})
}

async function bindSetupAddMatches(call, callback) {
  await globalObjects.controller.mediator.matchServiceGateway.setupAddMatches(call.request.matches);
  callback(null, {code: 200})
}

async function bindEnterIntegratedTestingEnvironment(call, callback) {
  await globalObjects.controller.enterIntegratedTestingEnvironment();
  callback(null, null);
}

function main() {
  console.log("Server running...");
  server = new grpc.Server();
  server.addService(ubc_package.BoxerService.service, {
    GetBoxer: bindGetBoxer,
    GetMultipleBoxers: bindGetMultipleBoxers,
    GetBoxerWithStandingAndMatches: bindGetBoxerWithStandingAndMatches,
    EditBoxer: bindEditBoxer,
    AddBoxer: bindAddBoxer,
    RemoveBoxer: bindRemoveBoxer,
    Mock: bindMock,
    SetupAddBoxer: bindSetupAddBoxer,
    SetupAddLatestBoxer: bindSetupAddLatestBoxer,
    SetupAddStandingAndMatches: bindSetupAddStandingAndMatches,
    SetupAddToken: bindSetupAddToken,
    SetupAddMatches: bindSetupAddMatches,
    SetupClearBoxers: bindSetupClearBoxers,
    EnterIntegratedTestingEnvironment: bindEnterIntegratedTestingEnvironment
  });

  server.bind("0.0.0.0:50052", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
