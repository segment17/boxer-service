@Unit @Repository @BoxerRepository
Feature: Boxer Repository Unit Feature


  @Unit_Repository_Scenario1
  Scenario Outline: Get boxer details from Boxer Repository (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    When "<repository_function>" is invoked with "<boxer_id>"
    Then returned data is as "<expected_data>"

    Examples:
      | boxer | repository_function | boxer_id | expected_data | hiptest-uid |
      | Unit_Repository_Scenario1.boxer | getBoxerWithId | Unit_Repository_Scenario1.boxer_id | Unit_Repository_Scenario1.expected_data | uid:df9360ae-5efc-42fa-b4e1-5a6ee4d73b5d |

  @Unit_Repository_Scenario2
  Scenario Outline: Edit details of a boxer in Boxer Repository (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    When "<repository_function>" is invoked with "<edit_body>"
    Then returned data is as "<edited_boxer>"
    And DB has boxer such as "<edited_boxer>"

    Examples:
      | boxer | repository_function | edit_body | edited_boxer | hiptest-uid |
      | Unit_Repository_Scenario2.boxer | editBoxerWithGivenData | Unit_Repository_Scenario2.edit_body | Unit_Repository_Scenario2.edited_boxer | uid:3f4398db-591a-4619-9c50-dd935244ff13 |

  @Unit_Repository_Scenario3
  Scenario Outline: Add a new boxer to DB (2) (<hiptest-uid>)
    Given the latest boxer in DB is such as "<existing_boxer>"
    When "<repository_function>" is invoked with "<data_chunk>"
    Then returned data is as "<new_boxer>"
    And DB has boxer such as "<new_boxer>"

    Examples:
      | existing_boxer | repository_function | data_chunk | new_boxer | hiptest-uid |
      | Unit_Repository_Scenario3.existing_boxer | addBoxerWithGivenData | Unit_Repository_Scenario3.data_chunk | Unit_Repository_Scenario3.new_boxer | uid:a4aeceb2-5b81-48fb-a3a4-4859d9fd7b24 |

  @Unit_Repository_Scenario4
  Scenario Outline: Remove a boxer from Boxer Repository (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    When "<repository_function>" is invoked with "<boxer_id>"
    Then returned data is as "<expected_data>"
    And DB does not have boxer such as "<boxer>"

    Examples:
      | boxer | repository_function | boxer_id | expected_data | hiptest-uid |
      | Unit_Repository_Scenario4.boxer | removeBoxerWithId | Unit_Repository_Scenario4.boxer_id | Unit_Repository_Scenario4.expected_data | uid:748731f8-d786-4be2-b2cc-be5e307a32ea |
