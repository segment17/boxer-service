// UNIT REPOSITORY SUCCESS SCENARIOS

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

const Unit_Repository_Scenario2 = {
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

const Unit_Repository_Scenario3 = {
  existing_boxer: Unit_Repository_Scenario1.boxer,
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
      id: Unit_Repository_Scenario1.boxer + 1,
      fullName: "Rocky Balboa",
      birthDate: -772804800,
      height: 178,
      weight: 87
    }
  }
}

const Unit_Repository_Scenario4 = {
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

const Unit_Repository_Scenario5_Fail1 = {
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

const Unit_Repository_Scenario6_Fail1 = {
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
    boxer:{ id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
}

const Unit_Repository_Scenario6_Fail2 = {
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
    boxer:{ id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
  }
} 

/* const Unit_Repository_Scenario7_Fail1 = {
  existing_boxer: Unit_Repository_Scenario1.boxer,
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

/* const Unit_Repository_Scenario7_Fail2 = {
  existing_boxer: Unit_Repository_Scenario1.boxer,
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

const Unit_Repository_Scenario8_Fail1 = {
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

// UNIT STANDINGS SERVICE GATEWAY SUCCESS SCENARIOS

var Unit_StandingsServiceGateway_Scenario1 = {
  boxer_id: 1,
  standing_and_matches: {
    standing: {
      boxer: {
        id: 1,
        fullName: "Mike Tyson",
        birthDate: 127419968, // Timestamp
        height: 178,
        weight: 100
      },
      winCount: 1,
      lossCount: 1,
      score: 0.5,
    },
    matches: [
      {
        id: 1,
        homeBoxer: {
          id: 1,
          fullName: "Mike Tyson",
          birthDate: 127419968, // Timestamp
          height: 178,
          weight: 100
        },
        awayBoxer: {
          id: 4,
          fullName: "Connor McGregor",
          birthDate: 127419968, // Timestamp
          height: 175,
          weight: 80
        },
        matchTime: 127419968,
        isFinished: true,
        winnerBoxer: {
          id: 4,
          fullName: "Connor McGregor",
          birthDate: 127419968, // Timestamp
          height: 175,
          weight: 80
        }
      },
      {
        id: 1,
        awayBoxer: {
          id: 1,
          fullName: "Mike Tyson",
          birthDate: 127419968, // Timestamp
          height: 178,
          weight: 100
        },
        homeBoxer: {
          id: 6,
          fullName: "Logan Paul",
          birthDate: 127419968, // Timestamp
          height: 195,
          weight: 120
        },
        matchTime: 127419968,
        isFinished: true,
        winnerBoxer: {
          id: 1,
          fullName: "Mike Tyson",
          birthDate: 127419968, // Timestamp
          height: 178,
          weight: 100
        }
      },
      {
        id: 1,
        awayBoxer: {
          id: 1,
          fullName: "Mike Tyson",
          birthDate: 127419968, // Timestamp
          height: 178,
          weight: 100
        },
        homeBoxer: {
          id: 8,
          fullName: "Dwayne \"The Rock\" Johnson",
          birthDate: 127419968, // Timestamp
          height: 196,
          weight: 118
        },
        matchTime: 129419968,
        isFinished: false
      }
    ]
  }
}

// UNIT STANDINGS SERVICE GATEWAY FAIL SCENARIOS

var Unit_StandingsServiceGateway_Scenario2_Fail1 = {
  boxer_id: 2,
  standing_and_matches: {
    standing: {
      boxer: {
        id: 1,
        fullName: "Mike Tyson",
        birthDate: 127419968, // Timestamp
        height: 178,
        weight: 100
      },
      winCount: 1,
      lossCount: 1,
      score: 0.5,
    },
    matches: [
      {
        id: 1,
        homeBoxer: {
          id: 1,
          fullName: "Mike Tyson",
          birthDate: 127419968, // Timestamp
          height: 178,
          weight: 100
        },
        awayBoxer: {
          id: 4,
          fullName: "Connor McGregor",
          birthDate: 127419968, // Timestamp
          height: 175,
          weight: 80
        },
        matchTime: 127419968,
        isFinished: true,
        winnerBoxer: {
          id: 4,
          fullName: "Connor McGregor",
          birthDate: 127419968, // Timestamp
          height: 175,
          weight: 80
        }
      },
      {
        id: 1,
        awayBoxer: {
          id: 1,
          fullName: "Mike Tyson",
          birthDate: 127419968, // Timestamp
          height: 178,
          weight: 100
        },
        homeBoxer: {
          id: 6,
          fullName: "Logan Paul",
          birthDate: 127419968, // Timestamp
          height: 195,
          weight: 120
        },
        matchTime: 127419968,
        isFinished: true,
        winnerBoxer: {
          id: 1,
          fullName: "Mike Tyson",
          birthDate: 127419968, // Timestamp
          height: 178,
          weight: 100
        }
      },
      {
        id: 1,
        awayBoxer: {
          id: 1,
          fullName: "Mike Tyson",
          birthDate: 127419968, // Timestamp
          height: 178,
          weight: 100
        },
        homeBoxer: {
          id: 8,
          fullName: "Dwayne \"The Rock\" Johnson",
          birthDate: 127419968, // Timestamp
          height: 196,
          weight: 118
        },
        matchTime: 129419968,
        isFinished: false
      }
    ]
  },
  expected_data: {
    standing: { boxer: null, winCount: 0, lossCount: 0, score: 0 },
    matches: []
  }
}

// UNIT AUTH SERVICE GATEWAY SUCCESS SCENARIOS

var Unit_AuthServiceGateway_Scenario1 = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  data_chunk: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  expected_data: {
    code: 200,
    message: "success"
  }
}

// UNIT AUTH SERVICE GATEWAY FAIL SCENARIOS

var Unit_AuthServiceGateway_Scenario2_Fail1 = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  data_chunk: "lorem_ipsum",
  expected_data: {
    code: 403,
    message: "forbidden"
  }
}

Unit_StandingsServiceGateway_Scenario1.expected_data = Unit_StandingsServiceGateway_Scenario1.standing_and_matches;

// COMPONENT SUCCESS SCENARIOS

// GetBoxer
const B1_Scenario1_Variation1 = {
  request_body: { id: 1 },
  boxer: Unit_Repository_Scenario1.boxer,
  standing_and_matches: Unit_StandingsServiceGateway_Scenario1.standing_and_matches,
  expected_response: {
    code: 200,
    message: 'success',
    boxer: Unit_Repository_Scenario1.boxer,
    standingAndMatches: Unit_StandingsServiceGateway_Scenario1.standing_and_matches
  }
}

// EditBoxer
const B2_Scenario1_Variation1 = {
  boxer: Unit_Repository_Scenario1.boxer,
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
    boxer: Unit_Repository_Scenario2.expected_data.boxer
  },
  edited_boxer: Unit_Repository_Scenario2.expected_data.boxer
}

// AddBoxer
const B3_Scenario1_Variation1 = {
  boxer: Unit_Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  new_boxer: {
    id: Unit_Repository_Scenario1.boxer.id + 1,
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87
  },
  expected_response: {
    code: 201,
    message: 'created',
    boxer: {
      id: Unit_Repository_Scenario1.boxer.id + 1,
      fullName: "Rocky Balboa",
      birthDate: -772804800,
      height: 178,
      weight: 87
    }
  }
}

// RemoveBoxer
const B4_Scenario1_Variation1 = {
  boxer: Unit_Repository_Scenario4.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: { 
    id: 1, 
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  expected_response: {
    code: 201,
    message: 'removed',
    boxer: Unit_Repository_Scenario4.boxer
  }
}

// COMPONENT FAIL SCENARIOS

// GetBoxer
const B1_Scenario2_Fail1 = {
  request_body: { id: 2 },
  boxer: Unit_Repository_Scenario1.boxer,
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
  boxer: Unit_Repository_Scenario1.boxer,
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
  boxer: Unit_Repository_Scenario1.boxer,
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
  boxer: Unit_Repository_Scenario1.boxer,
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
  boxer: Unit_Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    birthDate: -772804800,
    height: 178,
    weight: 87,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  new_boxer: {
    id: Unit_Repository_Scenario1.boxer.id + 1,
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
  boxer: Unit_Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: -87,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  },
  new_boxer: {
    id: Unit_Repository_Scenario1.boxer.id + 1,
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
  boxer: Unit_Repository_Scenario1.boxer,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0",
  request_body: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87,
    token: "lorem_ipsum",
  },
  new_boxer: {
    id: Unit_Repository_Scenario1.boxer.id + 1,
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
  boxer: Unit_Repository_Scenario4.boxer,
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
  boxer: Unit_Repository_Scenario4.boxer,
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
  Unit_Repository_Scenario1,
  Unit_Repository_Scenario2,
  Unit_Repository_Scenario3,
  Unit_Repository_Scenario4,
  Unit_Repository_Scenario5_Fail1,
  Unit_Repository_Scenario6_Fail1,
  Unit_Repository_Scenario6_Fail2,
  //Unit_Repository_Scenario7_Fail1,
  //Unit_Repository_Scenario7_Fail2,
  Unit_Repository_Scenario8_Fail1,
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
  Unit_StandingsServiceGateway_Scenario1,
  Unit_StandingsServiceGateway_Scenario2_Fail1,
  Unit_AuthServiceGateway_Scenario1,
  Unit_AuthServiceGateway_Scenario2_Fail1
}