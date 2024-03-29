const Controller = require('./src/Controller');
const Mediator = require('./src/Mediator');
const BoxerRepository = require('./src/Repository/BoxerRepository');
const MockBoxerRepository = require('./src/Repository/Mock/MockBoxerRepository');
const StandingsServiceGateway = require('./src/Gateway/StandingsServiceGateway');
const MockStandingsServiceGateway = require('./src/Gateway/Mock/MockStandingsServiceGateway');
const AuthServiceGateway = require('./src/Gateway/AuthServiceGateway');
const MockAuthServiceGateway = require('./src/Gateway/Mock/MockAuthServiceGateway');
const MatchServiceGateway = require('./src/Gateway/MatchServiceGateway');
const MockMatchServiceGateway = require('./src/Gateway/Mock/MockMatchServiceGateway');

// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/ubc.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const ubc_package = grpc.loadPackageDefinition(packageDefinition).ubc_package;

class GlobalObjects {

  constructor() {
    this.unreturnableContentForResult = "globalObjectsUnreturnableContent";
    this.done = false;
    this.result = this.unreturnableContentForResult; // Result object that will be filled during tests.
    this.controller = new Controller();
    this.mediator = new Mediator();
    this.boxerRepository = new BoxerRepository();
    this.standingsServiceGateway = new StandingsServiceGateway();
    this.authServiceGateway = new AuthServiceGateway();
    this.matchServiceGateway = new MatchServiceGateway();

    this.client = new ubc_package.BoxerService(process.env.BOXER_SERVICE_ADDR || "0.0.0.0:50052", grpc.credentials.createInsecure());
  }

  // Mock everything...
  mock() {
    this.mediator.mock();
    this.boxerRepository = new MockBoxerRepository();
    this.standingsServiceGateway = new MockStandingsServiceGateway();
    this.authServiceGateway = new MockAuthServiceGateway();
    this.matchServiceGateway = new MockMatchServiceGateway();
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

  reset() {
    this.result = this.unreturnableContentForResult; // Result object that will be filled during tests.
    this.controller = new Controller();
    this.mediator = new Mediator();
    this.boxerRepository = new BoxerRepository();
    this.standingsServiceGateway = new StandingsServiceGateway();
    this.authServiceGateway = new AuthServiceGateway();
    this.matchServiceGateway = new MatchServiceGateway();

    this.client = new ubc_package.BoxerService(process.env.BOXER_SERVICE_ADDR || "0.0.0.0:50052", grpc.credentials.createInsecure());
  }

  async cleanUp() {
    await this.boxerRepository.cleanUp();
    await this.standingsServiceGateway.cleanUp();
    await this.matchServiceGateway.cleanUp();
  }

}

module.exports = GlobalObjects;
