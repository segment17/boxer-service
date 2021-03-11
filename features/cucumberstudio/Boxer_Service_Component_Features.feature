@Component
Feature: Boxer Service Component Features


  @B1 @B1_Scenario1
  Scenario Outline: Get the details of a boxer from DB (1) (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    And there is a standing with matches such as "<standing_and_matches>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"

    Examples:
      | boxer | standing_and_matches | endpoint | request_body | expected_response | hiptest-uid |
      | B1_Scenario1_Variation1.boxer | B1_Scenario1_Variation1.standing_and_matches | GetBoxerWithStandingAndMatches | B1_Scenario1_Variation1.request_body | B1_Scenario1_Variation1.expected_response | uid:439544b3-2410-47ba-8bef-43da547f2e22 |

  @B2 @B2_Scenario1
  Scenario Outline: Edit the details of a boxer in DB (1) (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    And there is a token such as "<token>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"
    And DB has boxer such as "<edited_boxer>"

    Examples:
      | boxer | token | endpoint | request_body | expected_response | edited_boxer | hiptest-uid |
      | B2_Scenario1_Variation1.boxer | B2_Scenario1_Variation1.token | EditBoxer | B2_Scenario1_Variation1.request_body | B2_Scenario1_Variation1.expected_response | B2_Scenario1_Variation1.edited_boxer | uid:3fbc2a94-877a-4790-bb25-918ce78090c3 |

  @B3 @B3_Scenario1
  Scenario Outline: Add a new boxer to DB (1) (<hiptest-uid>)
    Given the latest boxer in DB is such as "<boxer>"
    And there is a token such as "<token>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"
    And DB has boxer such as "<new_boxer>"

    Examples:
      | boxer | token | endpoint | request_body | expected_response | new_boxer | hiptest-uid |
      | B3_Scenario1_Variation1.boxer | B3_Scenario1_Variation1.token | AddBoxer | B3_Scenario1_Variation1.request_body | B3_Scenario1_Variation1.expected_response | B3_Scenario1_Variation1.new_boxer | uid:7822b834-2e19-4d19-8347-e3a5f29efa21 |

  @B4 @B4_Scenario1
  Scenario Outline: Remove a boxer from DB (1) (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    And there is a token such as "<token>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"
    And DB does not have boxer such as "<boxer>"

    Examples:
      | boxer | token | endpoint | request_body | expected_response | hiptest-uid |
      | B4_Scenario1_Variation1.boxer | B4_Scenario1_Variation1.token | RemoveBoxer | B4_Scenario1_Variation1.request_body | B4_Scenario1_Variation1.expected_response | uid:a5711491-3c4f-4030-a0e9-8bbae1be1692 |
