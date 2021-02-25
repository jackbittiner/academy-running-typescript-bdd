Feature: Shopping Basket

  Scenario: Add items to Shopping Basket
    Given Client adds 2 units of "The Hobbit" to my shopping basket
    And Client adds 5 units of "Breaking Bad" to my shopping basket
    When I check the content of my shopping basket 
    Then they should see:
        | outputLines |
        | Creation date: 20/12/2020 |
        | 2 x The Hobbit // 2 x 5.00 = £10.00 |
        | 5 x Breaking Bad // 5 x 7.00 = £35.00 |
        | Total: £45.00 |
