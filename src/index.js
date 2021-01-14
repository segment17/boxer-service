const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + "/../proto/boxer-service.proto";
const controller = require('../src/controllers/controller');
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

function GetBoxerWithStandingAndMatches(call, callback) {
  callback(null, controller.guardGetBoxerWithStandingAndMatches(call.request.id));
}

function main() {
  server = new grpc.Server();
  server.addService(boxerservice_package.BoxerService.service, {
    getBoxerWithStandingAndMatches: GetBoxerWithStandingAndMatches
  });
  server.bind("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.ServerCredentials.createInsecure());
  server.start();
}

main();