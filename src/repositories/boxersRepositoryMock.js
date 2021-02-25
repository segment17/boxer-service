function getBoxerWithId(id) {
  console.log("MOxk is called");
  return {
    id: id,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  };
}


module.exports = {
  getBoxerWithId
}