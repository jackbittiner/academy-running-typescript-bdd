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

  Scenario: Log items added to shopping cart on the console
    Given A user creates a basket
    And the user adds an item to the basket
    Then I see a log entry for each action
      | logLine |
      | [BASKET CREATED]: Created[<"YYYY-07-12">], User[] |
      | [ITEM ADDED TO SHOPPING CART]: Added[<"YYYY-07-12">], User[], Product[], Quantity[], Price[<£12.00>] |
