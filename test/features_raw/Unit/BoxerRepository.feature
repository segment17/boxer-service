@Unit @Repository @BoxerRepository
Feature: Boxer Repository Unit Feature

  #SUCCESS SCENARIOS

  @Repository_Scenario1
  Scenario Outline: Get boxer details from Boxer Repository
    #Set up mock Repository or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<boxer_id>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | boxer                      | repository_function | boxer_id                      | expected_data                      |
      | Repository_Scenario1.boxer | getBoxerWithId      | Repository_Scenario1.boxer_id | Repository_Scenario1.expected_data |

  @Repository_Scenario2
  Scenario Outline: Edit details of a boxer in Boxer Repository
    #Set up mock Repository or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<edit_body>"
    #Check
    Then returned data is as "<expected_data>"
    And DB has boxer such as "<edited_boxer>"

    Examples:
      | boxer                      | repository_function    | edit_body                      | expected_data                      | edited_boxer                             |
      | Repository_Scenario2.boxer | editBoxerWithGivenData | Repository_Scenario2.edit_body | Repository_Scenario2.expected_data | Repository_Scenario2.expected_data.boxer |

  @Repository_Scenario3
  Scenario Outline: Add a new boxer to DB
    #Set up mock repository or real database
    Given the latest boxer in DB is such as "<existing_boxer>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<data_chunk>"
    #Check
    Then returned data is as "<expected_data>"
    And DB has boxer such as "<new_boxer>"

    Examples:
      | existing_boxer                      | repository_function   | data_chunk                      | expected_data                      | new_boxer                                |
      | Repository_Scenario3.existing_boxer | addBoxerWithGivenData | Repository_Scenario3.data_chunk | Repository_Scenario3.expected_data | Repository_Scenario3.expected_data.boxer |

  @Repository_Scenario4
  Scenario Outline: Remove a boxer from Boxer Repository
    #Set up mock Repository or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<boxer_id>"
    #Check
    Then returned data is as "<expected_data>"
    And DB does not have boxer such as "<boxer>"

    Examples:
      | boxer                      | repository_function | boxer_id                      | expected_data                      |
      | Repository_Scenario4.boxer | removeBoxerWithId   | Repository_Scenario4.boxer_id | Repository_Scenario4.expected_data |

  #FAIL SCENARIOS

  @Repository_Scenario5
  Scenario Outline: Get boxer details from Boxer Repository failure
    #Set up mock Repository or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<boxer_id>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | boxer                            | repository_function | boxer_id                            | expected_data                            |
      | Repository_Scenario5_Fail1.boxer | getBoxerWithId      | Repository_Scenario5_Fail1.boxer_id | Repository_Scenario5_Fail1.expected_data |

