const BoxerRepository = require('../BoxerRepository');

class MockBoxerRepository extends BoxerRepository {

  constructor() {
    super();
    this.boxers = [];
  }

  async runQueryForGetBoxerWithId(id) {
    for (let i = 0; i < this.boxers.length; i++) {
      if (this.boxers[i].id == id) {
        return [this.boxers[i]];
      }
    }
    return [];
  }

  async runQueryForAddBoxerWithGivenData(fullName, birthDate, height, weight) {
    let newBoxerId = 1;
    if (this.boxers.length != 0) {
      newBoxerId = this.boxers[this.boxers.length - 1].id + 1;
    }
    let newBoxer = {
      id: newBoxerId,
      fullName: fullName,
      birthDate: birthDate,
      height: height,
      weight: weight
    }
    this.boxers.push(newBoxer);
    return [newBoxer];
  }

  async runQueryForEditBoxerWithGivenData(id, fullName, birthDate, height, weight) {
    let editedBoxer = { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
    let index = null;
    for (let i in this.boxers) {
      if(this.boxers[i].id === id) {
        editedBoxer = this.boxers[i];
        index = i;
      }
    }
    if(index) {
      editedBoxer = {
        id: id,
        fullName: fullName ? fullName : editedBoxer.fullName,
        birthDate: birthDate ? birthDate : editedBoxer.birthDate,
        height: height ? height : editedBoxer.height,
        weight: weight ? weight : editedBoxer.weight
      }
      this.boxers[index] = editedBoxer;
      return [editedBoxer];
    }
    this.boxers[index] = editedBoxer;
    return [];
  }

  async runQueryForRemoveBoxerWithId(id) {
    let removedBoxer = { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
    for (let index in this.boxers) {
      if(this.boxers[index].id === id) {
        removedBoxer = this.boxers[index];
        this.boxers.splice(index, 1);
      }
    }
    if(removedBoxer.id === 0) {
      return [];
    }
    return [removedBoxer];
  }

  async setupAddBoxer(boxer) {
    this.boxers.push(boxer);
    return null;
  }

  async getLatestId() {
    return this.boxers.length == 0 ? null : this.boxers[this.boxers.length - 1].id;
  }

  async setupAddLatest(boxer) {
    this.setupAddBoxer(boxer);
    return null;
  }
}

module.exports = MockBoxerRepository;
