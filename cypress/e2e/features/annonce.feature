Feature:Verifier les annonces
    Background: User can login 
        Given I visit the login page
        When I enter valid credentials
        Then I should see the dashboard
    Scenario: Verifier les annonces
        Given I navigate to the annonces page
        And I see the list of annonces
        Then I should see the details of the annonce