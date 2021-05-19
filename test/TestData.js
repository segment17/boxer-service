// UNIT REPOSITORY SUCCESS SCENARIOS

const Repository_Scenario1 = {
  boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  },
  boxer_id: 1,
  expected_data: {
    code: 200,
    message: "success",
    boxer: {
      id: 1,
      fullName: "Mike Tyson",
      birthDate: 127419968, // Timestamp
      height: 178,
      weight: 100
    }
  }
}

const Repository_Scenario2 = {
  boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  },
  edit_body: {
    id: 1,
    weight: 110
  },
  expected_data: {
    code: "201",
    message: "edited",
    boxer: {
      id: 1,
      fullName: "Mike Tyson",
      birthDate: 127419968, // Timestamp
      height: 178,
      weight: 110
    }
  }
}

const Repository_Scenario3 = {
  existing_boxer: Repository_Scenario1.boxer,
  data_chunk: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87
  },
  expected_data: {
    code: "201",
    message: "created",
    boxer: {
      id: Repository_Scenario1.boxer + 1,
      fullName: "Rocky Balboa",
      birthDate: -772804800,
      height: 178,
      weight: 87
    }
  }
}

const Repository_Scenario4 = {
  boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  },
  boxer_id: 1,
  expected_data: {
    code: "201",
    message: "removed",
    boxer: {
      id: 1,
      fullName: "Mike Tyson",
      birthDate: 127419968, // Timestamp
      height: 178,
      weight: 100
    }
  }
}

// UNIT REPOSITORY FAIL SCENARIOS

const Repository_Scenario5_Fail1 = {
  boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  },
  boxer_id: 2,
  expected_data: {
    code: "404",
    message: "not_found",
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

const Repository_Scenario6_Fail1 = {
  boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  },
  edit_body: {
    id: 2,
    weight: 110
  },
  expected_data: {
    code: "404",
    message: "not_found",
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

const Repository_Scenario6_Fail2 = {
  boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  },
  edit_body: {
    id: 1,
    weight: -20
  },
  expected_data: {
    code: "400",
    message: "bad_request",
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

/* const Repository_Scenario7_Fail1 = {
  existing_boxer: Repository_Scenario1.boxer,
  data_chunk: {
    fullName: "",
    birthDate: -772804800,
    height: 178,
    weight: 87
  },
  expected_data: {
    code: "400",
    message: "bad_request",
    boxer:{ id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
} */

/* const Repository_Scenario7_Fail2 = {
  existing_boxer: Repository_Scenario1.boxer,
  data_chunk: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: -87
  },
  expected_data: {
    code: "400",
    message: "bad_request",
    boxer:{ id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
} */

const Repository_Scenario8_Fail1 = {
  boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  },
  boxer_id: 2,
  expected_data: {
    code: "404",
    message: "not_found",
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

let exampleMatches = [
  {
    id: 1,
    homeBoxerId: 1,
    awayBoxerId: 4,
    matchTime: 127419968,
    isFinished: true,
    winnerBoxerId: 4,
  },
  {
    id: 2,
    awayBoxerId: 1,
    homeBoxerId: 6,
    matchTime: 127419968,
    isFinished: true,
    winnerBoxerId: 1
  },
  {
    id: 3,
    awayBoxerId: 1,
    homeBoxerId: 8,
    matchTime: 129419968,
    isFinished: false
  }
];

// UNIT STANDINGS SERVICE GATEWAY SUCCESS SCENARIOS
let exampleStandingAndMatches = {
  standing: {
    boxerId: 1,
    winCount: 1,
    lossCount: 1,
    score: 0.5,
  },
  matches: exampleMatches
}

var StandingsServiceGateway_Scenario1 = {
  boxer_id: 1,
  standing_and_matches: exampleStandingAndMatches,
  expected_data: exampleStandingAndMatches
}

// UNIT STANDINGS SERVICE GATEWAY FAIL SCENARIOS

var StandingsServiceGateway_Scenario2_Fail1 = {
  boxer_id: 2,
  standing_and_matches: exampleStandingAndMatches,
  expected_data: {
    standing: { boxerId: 0, winCount: 0, lossCount: 0, score: 0 },
    matches: []
  }
}

// UNIT AUTH SERVICE GATEWAY SUCCESS SCENARIOS

var AuthServiceGateway_Scenario1 = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  data_chunk: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  expected_data: {
    code: 200,
    message: "success"
  }
}

// UNIT AUTH SERVICE GATEWAY FAIL SCENARIOS

var AuthServiceGateway_Scenario2_Fail1 = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  data_chunk: "lorem_ipsum",
  expected_data: {
    code: 403,
    message: "forbidden"
  }
}

StandingsServiceGateway_Scenario1.expected_data = StandingsServiceGateway_Scenario1.standing_and_matches;

let exampleToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0"
// Unit MatchSeriveGateway
MatchServiceGateway_Scenario1 = {
  boxer: Repository_Scenario1.boxer,
  matches: exampleMatches,
  token: exampleToken,
  data_chunk: { boxerId: Repository_Scenario1.boxer.id, token: exampleToken },
  expected_data: { code: 200, message: 'deleted' }
}

// COMPONENT SUCCESS SCENARIOS

// GetBoxer
const B1_Scenario1_Variation1 = {
  request_body: { id: 1 },
  boxer: Repository_Scenario1.boxer,
  standing_and_matches: StandingsServiceGateway_Scenario1.standing_and_matches,
  expected_response: {
    code: 200,
    message: 'success',
    boxer: Repository_Scenario1.boxer,
    standingAndMatches: StandingsServiceGateway_Scenario1.standing_and_matches
  }
}

// COMPONENT SUCCESS SCENARIOS

// GetBoxer
const B0_Scenario1_Variation1 = {
  request_body: { id: 1 },
  boxer: Repository_Scenario1.boxer,
  expected_response: {
    code: 200,
    message: 'success',
    boxer: Repository_Scenario1.boxer
  }
}

// EditBoxer
const B2_Scenario1_Variation1 = {
  boxer: Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    id: 1,
    fullName: null,
    weight: 110,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  expected_response: {
    code: 201,
    message: 'edited',
    boxer: Repository_Scenario2.expected_data.boxer
  },
  edited_boxer: Repository_Scenario2.expected_data.boxer
}

// AddBoxer
const B3_Scenario1_Variation1 = {
  boxer: Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  new_boxer: {
    id: Repository_Scenario1.boxer.id + 1,
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87
  },
  expected_response: {
    code: 201,
    message: 'created',
    boxer: {
      id: Repository_Scenario1.boxer.id + 1,
      fullName: "Rocky Balboa",
      birthDate: -772804800,
      height: 178,
      weight: 87
    }
  }
}

// RemoveBoxer
const B4_Scenario1_Variation1 = {
  boxer: Repository_Scenario4.boxer,
  matches: exampleMatches,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    id: 1,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  expected_response: {
    code: 201,
    message: 'removed',
    boxer: Repository_Scenario4.boxer
  }
}

// COMPONENT FAIL SCENARIOS

// GetBoxer
const B1_Scenario2_Fail1 = {
  request_body: { id: 2 },
  boxer: Repository_Scenario1.boxer,
  standing_and_matches: {
    standing: { boxer: null, winCount: 0, lossCount: 0, score: 0 },
    matches: []
  },
  expected_response: {
    code: 404,
    message: 'not_found',
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 },
    standingAndMatches: {
      standing: { boxer: null, winCount: 0, lossCount: 0, score: 0 },
      matches: []
    }
  }
}

// EditBoxer
const B2_Scenario2_Fail1 = {
  boxer: Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    id: 2,
    weight: 110,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  expected_response: {
    code: 404,
    message: 'not_found',
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

const B2_Scenario2_Fail2 = {
  boxer: Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    id: 1,
    weight: -110,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  expected_response: {
    code: 400,
    message: 'bad_request',
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

const B2_Scenario2_Fail3 = {
  boxer: Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    id: 1,
    weight: 110,
    token: "lorem_ipsum",
  },
  expected_response: {
    code: 403,
    message: 'forbidden',
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

// AddBoxer
const B3_Scenario2_Fail1 = {
  boxer: Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    birthDate: -772804800,
    height: 178,
    weight: 87,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  new_boxer: {
    id: Repository_Scenario1.boxer.id + 1,
    fullName: "",
    birthDate: -772804800,
    height: 178,
    weight: 87
  },
  expected_response: {
    code: 400,
    message: 'bad_request',
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

const B3_Scenario2_Fail2 = {
  boxer: Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: -87,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  new_boxer: {
    id: Repository_Scenario1.boxer.id + 1,
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: -87
  },
  expected_response: {
    code: 400,
    message: 'bad_request',
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

const B3_Scenario2_Fail3 = {
  boxer: Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87,
    token: "lorem_ipsum",
  },
  new_boxer: {
    id: Repository_Scenario1.boxer.id + 1,
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87
  },
  expected_response: {
    code: 403,
    message: 'forbidden',
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

// RemoveBoxer
const B4_Scenario2_Fail1 = {
  boxer: Repository_Scenario4.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    id: 2,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  expected_response: {
    code: 404,
    message: 'not_found',
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

const B4_Scenario2_Fail2 = {
  boxer: Repository_Scenario4.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    id: 1,
    token: "lorem_ipsum",
  },
  expected_response: {
    code: 403,
    message: 'forbidden',
    boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

module.exports = {
  Repository_Scenario1,
  Repository_Scenario2,
  Repository_Scenario3,
  Repository_Scenario4,
  Repository_Scenario5_Fail1,
  Repository_Scenario6_Fail1,
  Repository_Scenario6_Fail2,
  //Repository_Scenario7_Fail1,
  //Repository_Scenario7_Fail2,
  Repository_Scenario8_Fail1,
  B1_Scenario1_Variation1,
  B2_Scenario1_Variation1,
  B3_Scenario1_Variation1,
  B4_Scenario1_Variation1,
  B1_Scenario2_Fail1,
  B2_Scenario2_Fail1,
  B2_Scenario2_Fail2,
  B2_Scenario2_Fail3,
  B3_Scenario2_Fail1,
  B3_Scenario2_Fail2,
  B3_Scenario2_Fail3,
  B4_Scenario2_Fail1,
  B4_Scenario2_Fail2,
  StandingsServiceGateway_Scenario1,
  StandingsServiceGateway_Scenario2_Fail1,
  AuthServiceGateway_Scenario1,
  AuthServiceGateway_Scenario2_Fail1,
  B0_Scenario1_Variation1,
  MatchServiceGateway_Scenario1
}