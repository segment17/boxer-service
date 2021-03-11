@Unit @Repository @BoxerRepository
Feature: Boxer Repository Unit Feature


  @Unit_Repository_Scenario1
  Scenario Outline: Get boxer details from Boxer Repository (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    When "<repository_function>" is invoked with "<boxer_id>"
    Then returned data is as "<expected_data>"

    Examples:
      | boxer | repository_function | boxer_id | expected_data | hiptest-uid |
      | Unit_Repository_Scenario1.boxer | getBoxerWithId | Unit_Repository_Scenario1.boxer_id | Unit_Repository_Scenario1.expected_data | uid:f06b38be-8d00-4cdb-bf2e-a19a13bf29de |

  @Unit_Repository_Scenario2
  Scenario Outline: Edit details of a boxer in Boxer Repository (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    When "<repository_function>" is invoked with "<edit_body>"
    Then returned data is as "<edited_boxer>"
    And DB has boxer such as "<edited_boxer>"

    Examples:
      | boxer | repository_function | edit_body | edited_boxer | hiptest-uid |
      | Unit_Repository_Scenario2.boxer | editBoxerWithGivenData | Unit_Repository_Scenario2.edit_body | Unit_Repository_Scenario2.edited_boxer | uid:4f5842e9-8eaa-48b5-9dc4-91f344494016 |

  @Unit_Repository_Scenario3
  Scenario Outline: Add a new boxer to DB (2) (<hiptest-uid>)
    Given the latest boxer in DB is such as "<existing_boxer>"
    When "<repository_function>" is invoked with "<data_chunk>"
    Then returned data is as "<new_boxer>"
    And DB has boxer such as "<new_boxer>"

    Examples:
      | existing_boxer | repository_function | data_chunk | new_boxer | hiptest-uid |
      | Unit_Repository_Scenario3.existing_boxer | addBoxerWithGivenData | Unit_Repository_Scenario3.data_chunk | Unit_Repository_Scenario3.new_boxer | uid:c14987e0-167c-43b1-a135-8b173a07e4fa |

  @Unit_Repository_Scenario4
  Scenario Outline: Remove a boxer from Boxer Repository (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    When "<repository_function>" is invoked with "<boxer_id>"
    Then returned data is as "<expected_data>"
    And DB does not have boxer such as "<boxer>"

    Examples:
      | boxer | repository_function | boxer_id | expected_data | hiptest-uid |
      | Unit_Repository_Scenario4.boxer | removeBoxerWithId | Unit_Repository_Scenario4.boxer_id | Unit_Repository_Scenario4.expected_data | uid:e8d04173-138f-4dda-9016-4e5f115adf12 |
