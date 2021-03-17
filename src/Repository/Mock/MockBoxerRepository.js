const BoxerRepository = require('../BoxerRepository');

class MockBoxerRepository extends BoxerRepository {

  constructor() {
    super();
    this.boxers = [];
  }

  checkAttributes(fullName, birthDate, height, weight) {
    if(fullName === "") {
      return false;
    }

    if(birthDate === "") {
      return false;
    }

    if(height && height <= 0) {
      return false;
    }

    if(weight && weight <= 0) {
      return false;
    }

    return true;
  }

  async runQueryForGetBoxerWithId(id) {
    console.log("Mock read from Boxer mock data with id: " + id);
    for (let i = 0; i < this.boxers.length; i++) {
      const element = this.boxers[i];
      if (element.id == id) {
        return [element];
      }
    }
    return [];
  }

  async runQueryForAddBoxerWithGivenData(fullName, birthDate, height, weight) {
    let newBoxerId = this.boxers[this.boxers.length - 1].id + 1;
    let newBoxer = {
      id: newBoxerId,
      fullName: fullName,
      birthDate: birthDate,
      height: height,
      weight: weight
    }
    if(!this.checkAttributes(fullName, birthDate, height, weight)) {
      newBoxer = {};
    }
    this.boxers.push(newBoxer);
    return newBoxer.id;
  }

  async runQueryForEditBoxerWithGivenData(id, fullName, birthDate, height, weight) {
    let editedBoxer = {}
    let index = null;
    for (let i in this.boxers) {
      if(this.boxers[i].id === id) {
        editedBoxer = this.boxers[i];
        index = i;
      }
    }
    if(index) {
      if(this.checkAttributes(fullName, birthDate, height, weight)) {
        editedBoxer = {
          id: id,
          fullName: fullName ? fullName : editedBoxer.fullName,
          birthDate: birthDate ? birthDate : editedBoxer.birthDate,
          height: height ? height : editedBoxer.height,
          weight: weight ? weight : editedBoxer.weight
        }
      }
    }

    this.boxers[index] = editedBoxer;
    return editedBoxer.id;
  }

  async runQueryForRemoveBoxerWithId(id) {
    let removedBoxer = {}
    for (let index in this.boxers) {
      if(this.boxers[index].id === id) {
        removedBoxer = this.boxers[index];
        this.boxers.splice(index, 1);
      }
    }
    return removedBoxer;
  }

  async setupAddBoxer(boxer) {
    this.boxers.push(boxer);
    return null;
  }

  async setupAddLatest(boxer) {
    this.setupAddBoxer(boxer);
    return null;
  }
}

module.exports = MockBoxerRepository;
