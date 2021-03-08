const Controller = require('./src/Controller');
const Mediator = require('./src/Mediator');

// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/boxerservice.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const boxerservice_package = grpc.loadPackageDefinition(packageDefinition).boxerservice_package;
// GRPC SETUP

class GlobalObjects {

  constructor() {
    this.result = null; // Result object that will be filled during tests.
    this.controller = new Controller();
    this.mediator = new Mediator();

    // Connect to Kubernetes if possible
    if (process.env.BOXER_SERVICE_SERVICE_PORT != undefined) {
      this.client = new boxerservice_package.BoxerService("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
    } else {
      this.client = new boxerservice_package.BoxerService("0.0.0.0:50001", grpc.credentials.createInsecure());
    }
  }

  // Mock everything...
  mock() {
    this.controller.mock();
    this.mediator.mock();
  }

  resetResult() {
    this.result = null;
  }

  setScenario(scenario) {
    this.scenario = scenario;
  }

  setScenarioTester(scenarioTester) {
    this.scenarioTester = scenarioTester;
  }

}

module.exports = GlobalObjects;
