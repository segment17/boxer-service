const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + "/../proto/boxer-service.proto";
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const boxerservice_package = grpc.loadPackageDefinition(packageDefinition).boxerservice_package;

function GetBoxer() {

}

function main() {
  const server = new grpc.Server();
  server.addService(boxerservice_package.BoxerService.service, {
    GetBoxer: GetBoxer
  });
  server.bind(process.env.BOXERSERVICE_SERVICE_ADDR + ":" + process.env.BOXERSERVICE_SERVICE_PORT, grpc.ServerCredentials.createInsecure());
  server.start();
}

main();