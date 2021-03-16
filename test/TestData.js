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
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
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
  edited_boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 110
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
  new_boxer: {
    id: Unit_Repository_Scenario1.boxer.id + 1,
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87
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
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
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
  expected_data: null
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
  edited_boxer: null
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
  edited_boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  }
}

const Unit_Repository_Scenario7_Fail1 = {
  existing_boxer: Unit_Repository_Scenario1.boxer,
  data_chunk: {
    fullName: "",
    birthDate: -772804800,
    height: 178,
    weight: 87
  },
  new_boxer: null
}

const Unit_Repository_Scenario7_Fail2 = {
  existing_boxer: Unit_Repository_Scenario1.boxer,
  data_chunk: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: -87
  },
  new_boxer: null
}

const Unit_Repository_Scenario8_Fail1 = {
  boxer: {
    id: 1,
    fullName: "Mike Tyson",
    birthDate: 127419968, // Timestamp
    height: 178,
    weight: 100
  },
  boxer_id: 2,
  expected_data: null
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
    standing: {},
    matches: []
  }
}

// UNIT AUTH SERVICE GATEWAY SUCCESS SCENARIOS

var Unit_AuthServiceGateway_Scenario1 = {
  token: "emanresu_ymmud_dummy_password",
  data_chunk: {
    token: "emanresu_ymmud_dummy_password"
  },
  expected_data: {
    code: 200,
    message: "success"
  }
}

// UNIT AUTH SERVICE GATEWAY FAIL SCENARIOS

var Unit_AuthServiceGateway_Scenario2_Fail1 = {
  token: "emanresu_ymmud_dummy_password",
  data_chunk: {
    token: "lorem_ipsum"
  },
  expected_data: {
    code: 403,
    message: "unauthorized"
  }
}

Unit_StandingsServiceGateway_Scenario1.expected_data = Unit_StandingsServiceGateway_Scenario1.standing_and_matches;

// B1 SUCCESS SCENARIOS

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
  token: "emanresu_ymmud_dummy_password",
  request_body: {
    id: 1,
    weight: 110
  },
  expected_response: {
    code: 201,
    message: 'edited',
    boxer: Unit_Repository_Scenario2.edited_boxer
  },
  edited_boxer: Unit_Repository_Scenario2.edited_boxer
}

// AddBoxer
const B3_Scenario1_Variation1 = {
  boxer: Unit_Repository_Scenario1.boxer,
  token: "emanresu_ymmud_dummy_password",
  request_body: {
    fullName: "Rocky Balboa",
    birthDate: -772804800,
    height: 178,
    weight: 87
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
  token: "emanresu_ymmud_dummy_password",
  request_body: { id: 1 },
  expected_response: {
    code: 201,
    message: 'removed',
    boxer: Unit_Repository_Scenario4.boxer
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
  Unit_Repository_Scenario7_Fail1,
  Unit_Repository_Scenario7_Fail2,
  Unit_Repository_Scenario8_Fail1,
  B1_Scenario1_Variation1,
  B2_Scenario1_Variation1,
  B3_Scenario1_Variation1,
  B4_Scenario1_Variation1,
  Unit_StandingsServiceGateway_Scenario1,
  Unit_StandingsServiceGateway_Scenario2_Fail1,
  Unit_AuthServiceGateway_Scenario1,
  Unit_AuthServiceGateway_Scenario2_Fail1
}