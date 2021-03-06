const G1_Scenario1_Variation1 = {
  user: {
    id: 1,
    name: 'John'
  },
  greeting: {
    id: 1,
    owner: 1,
    content: 'Hello from John!'
  },
  request_body: {
    id: 1
  },
  expected_response: {
    code: 200,
    greeting: {
      id: 1,
      owner: 1,
      content: 'Hello from John!'
    },
    ownerName: 'John'
  }
}

const Unit_Gateway_Scenario1 = {
  user: {
    id: 1,
    name: 'John'
  },
  expected_data: {
    id: 1,
    name: 'John'
  },
  data_chunk: {
    id: 1
  }
}

module.exports = { G1_Scenario1_Variation1, Unit_Gateway_Scenario1 }
