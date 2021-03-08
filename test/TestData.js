


const Unit_Repository_Scenario1 = {
  boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  },
  boxer_id: 1,
  expected_data: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  }
}

const B1_Scenario1_Variation1 = {
  boxer: Unit_Repository_Scenario1.boxer
}

module.exports = { Unit_Repository_Scenario1, B1_Scenario1_Variation1 }