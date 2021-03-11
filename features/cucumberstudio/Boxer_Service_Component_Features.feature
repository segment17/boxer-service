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
      | B1_Scenario1_Variation1.boxer | B1_Scenario1_Variation1.standing_and_matches | GetBoxerWithStandingAndMatches | B1_Scenario1_Variation1.request_body | B1_Scenario1_Variation1.expected_response | uid:125a7c1e-d47b-4833-a474-4ee5dd7411d1 |

  @B2 @B2_Scenario1
  Scenario Outline: Edit the details of a boxer in DB (1) (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    And there is a token such as "<token>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"
    And DB has boxer such as "<edited_boxer>"

    Examples:
      | boxer | token | endpoint | request_body | expected_response | edited_boxer | hiptest-uid |
      | B2_Scenario1_Variation1.boxer | B2_Scenario1_Variation1.token | EditBoxer | B2_Scenario1_Variation1.request_body | B2_Scenario1_Variation1.expected_response | B2_Scenario1_Variation1.edited_boxer | uid:a678e6fe-514b-4866-8026-b637ed47e299 |

  @B3 @B3_Scenario1
  Scenario Outline: Add a new boxer to DB (1) (<hiptest-uid>)
    Given the latest boxer in DB is such as "<boxer>"
    And there is a token such as "<token>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"
    And DB has boxer such as "<new_boxer>"

    Examples:
      | boxer | token | endpoint | request_body | expected_response | new_boxer | hiptest-uid |
      | B3_Scenario1_Variation1.boxer | B3_Scenario1_Variation1.token | AddBoxer | B3_Scenario1_Variation1.request_body | B3_Scenario1_Variation1.expected_response | B3_Scenario1_Variation1.new_boxer | uid:9e24e7d0-7535-48e5-93a6-bbbae040dcb6 |

  @B4 @B4_Scenario1
  Scenario Outline: Remove a boxer from DB (1) (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    And there is a token such as "<token>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"
    And DB does not have boxer such as "<boxer>"

    Examples:
      | boxer | token | endpoint | request_body | expected_response | hiptest-uid |
      | B4_Scenario1_Variation1.boxer | B4_Scenario1_Variation1.token | RemoveBoxer | B4_Scenario1_Variation1.request_body | B4_Scenario1_Variation1.expected_response | uid:eb31368c-bbd2-4f46-a7be-b4f1adab7cf2 |
