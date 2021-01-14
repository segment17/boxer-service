
function getStandingAndMatchesOfABoxer(id) {
  return {
    standing: {
      boxer: {
        id: id,
        fullName: "Mike Tyson",
        birthDate: 127419968, // Timestamp
        height: 178,
        weight: 100
      },
      winCount: 1,
      lossCount: 1,
      score: 0.5
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
          id: 4,
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
          id: 4,
          fullName: "Dwayne \"The Rock\" Johnson",
          birthDate: 127419968, // Timestamp
          height: 196,
          weight: 118
        },
        matchTime: 127419968,
        isFinished: false
      }
    ]
  }
}


module.exports = {
  getStandingAndMatchesOfABoxer
}