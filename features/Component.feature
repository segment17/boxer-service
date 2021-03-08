@Component
Feature: Boxer Service Component Features

  @B1 @B1_Scenario1
  Scenario Outline: Get the details of a boxer from DB
    #Set up mock repository or real database
    Given there is a boxer such as "<boxer>"
    #Set up mock gateway or real service
    And there is a standing with matches such as "<standing_with_matches>"
    #Controller.endpoint()
    When "<endpoint>" is called with "<request_body>"
    #Check
    Then response is as "<expected_response>"

    Examples:
      | boxer                         | standing_with_matches                         | endpoint                       | request_body                         | expected_response                         |
      | B1_Scenario1_Variation1.boxer | B1_Scenario1_Variation1.standing_with_matches | GetBoxerWithStandingAndMatches | B1_Scenario1_Variation1.request_body | B1_Scenario1_Variation1.expected_response |

  @B2 @B2_Scenario1
  Scenario Outline: Edit the details of a boxer in DB
    #Set up mock repository or real database
    Given there is a boxer such as "<boxer>"
    #Set up mock gateway or real service
    And there is a token such as "<token>"
    #Controller.endpoint()
    When "<endpoint>" is called with "<request_body>"
    #Check
    Then response is as "<expected_response>"
    And DB has "<edited_boxer>"

    Examples:
      | boxer                         | token                         | endpoint  | request_body                         | expected_response                         | edited_boxer                         |
      | B2_Scenario1_Variation1.boxer | B2_Scenario1_Variation1.token | EditBoxer | B2_Scenario1_Variation1.request_body | B2_Scenario1_Variation1.expected_response | B3_Scenario1_Variation1.edited_boxer |

  @B3 @B3_Scenario1
  Scenario Outline: Add a new boxer to DB
    #Set up mock repository or real database
    Given the latest boxer in DB is such as "<boxer>"
    #Set up mock gateway or real service
    And there is a token such as "<token>"
    #Controller.endpoint()
    When "<endpoint>" is called with "<request_body>"
    #Check
    Then response is as "<expected_response>"
    And DB has "<new_boxer>"

    Examples:
      | boxer                         | token                         | endpoint | request_body                         | expected_response                         | new_boxer                         |
      | B3_Scenario1_Variation1.boxer | B3_Scenario1_Variation1.token | AddBoxer | B3_Scenario1_Variation1.request_body | B3_Scenario1_Variation1.expected_response | B3_Scenario1_Variation1.new_boxer |

  @B4 @B4_Scenario1
  Scenario Outline: Remove a boxer from DB
    #Set up mock repository or real database
    Given there is a boxer such as "<boxer>"
    #Set up mock gateway or real service
    And there is a token such as "<token>"
    #Controller.endpoint()
    When "<endpoint>" is called with "<request_body>"
    #Check
    Then response is as "<expected_response>"
    And DB does not have "<boxer>"

    Examples:
      | boxer                         | token                         | endpoint    | request_body                         | expected_response                         |
      | B4_Scenario1_Variation1.boxer | B4_Scenario1_Variation1.token | RemoveBoxer | B4_Scenario1_Variation1.request_body | B4_Scenario1_Variation1.expected_response |