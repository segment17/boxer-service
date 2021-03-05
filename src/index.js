const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + "/../proto/boxer-service.proto";
const Controller = require('../src/controllers/controller');
const Mediator = require('./services/mediator');
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const boxerservice_package = grpc.loadPackageDefinition(packageDefinition).boxerservice_package;
var server;
let controller = new Controller();
let mediator = new Mediator();

module.exports = { controller, mediator }

async function GetBoxerWithStandingAndMatches(call, callback) {
  let r = await controller.guardGetBoxerWithStandingAndMatches(call.request.id);
  callback(null, r);
}

function main() {
  console.log("Server running...");
  server = new grpc.Server();
  server.addService(boxerservice_package.BoxerService.service, {
    getBoxerWithStandingAndMatches: GetBoxerWithStandingAndMatches
  });
  if (process.env.BOXER_SERVICE_SERVICE_PORT != undefined) {
    server.bind("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.ServerCredentials.createInsecure());
  } else {
    server.bind("localhost:50001", grpc.ServerCredentials.createInsecure());
  }
  server.start();
}

main();
