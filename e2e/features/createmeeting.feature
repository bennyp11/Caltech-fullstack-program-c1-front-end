Feature: Create a Meeting

  Scenario: Successful Meeting Creation
    Given I am logged into the admin dashboard
    When I click the 'Create a Meeting' button
    And I fill out the date, time, email, and description fields
    Then I should be taken to the dashboard page
    And I should see the meeting I created
