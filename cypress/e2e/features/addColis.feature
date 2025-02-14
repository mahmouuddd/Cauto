Feature: Add package

    Scenario: Add package
        Given I Login to the application
        When I navigate to the dashboard
        And I navigate to the add package page
        And I fill the form with valid data
        Then I see the package added to the list