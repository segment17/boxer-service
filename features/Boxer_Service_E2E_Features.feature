@E2E
Feature: Boxer Service E2E Features


  Background:
    Given "BoxerService" is running
    And "AuthService" is running
    And "MatchService" is running
    And "StandingsService" is running

  @B1 @B1_Scenario1
  Scenario Outline: Get the details of a boxer from DB (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    And there are matches such as "<matches>"
    And there is a standing such as "<standing>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"

    Examples:
      | boxer | matches | standing | endpoint | request_body | expected_response | hiptest-uid |
      | B1_Scenario1_Variation1.boxer | B1_Scenario1_Variation1.matches | B1_Scenario1_Variation1.standing | GetBoxerWithStandingAndMatches | B1_Scenario1_Variation1.request_body | B1_Scenario1_Variation1.expected_response | uid:b5e1acc5-781a-4152-82d9-3cfddaf71b1d |

  @B2 @B2_Scenario1
  Scenario Outline: Edit the details of a boxer in DB (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    And there is a token such as "<token>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"
    And DB has boxer such as "<edited_boxer>"

    Examples:
      | boxer | token | endpoint | request_body | expected_response | edited_boxer | hiptest-uid |
      | B2_Scenario1_Variation1.boxer | B2_Scenario1_Variation1.token | EditBoxer | B2_Scenario1_Variation1.request_body | B2_Scenario1_Variation1.expected_response | B2_Scenario1_Variation1.edited_boxer | uid:12fd1130-e47c-4468-aa86-adeaf94b2b82 |

  @B3 @B3_Scenario1
  Scenario Outline: Add a new boxer to DB (<hiptest-uid>)
    Given the latest boxer in DB is such as "<boxer>"
    And there is a token such as "<token>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"
    And DB has boxer such as "<new_boxer>"

    Examples:
      | boxer | token | endpoint | request_body | expected_response | new_boxer | hiptest-uid |
      | B3_Scenario1_Variation1.boxer | B3_Scenario1_Variation1.token | AddBoxer | B3_Scenario1_Variation1.request_body | B3_Scenario1_Variation1.expected_response | B3_Scenario1_Variation1.new_boxer | uid:4fe8fab4-7659-4a3d-8613-66e8086ea595 |

  @B4 @B4_Scenario1
  Scenario Outline: Remove a boxer from DB (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    And there is a token such as "<token>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"
    And DB does not have boxer such as "<boxer>"

    Examples:
      | boxer | token | endpoint | request_body | expected_response | hiptest-uid |
      | B4_Scenario1_Variation1.boxer | B4_Scenario1_Variation1.token | RemoveBoxer | B4_Scenario1_Variation1.request_body | B4_Scenario1_Variation1.expected_response | uid:04584fef-4c50-4e4a-98f2-c351c6ad15c1 |
