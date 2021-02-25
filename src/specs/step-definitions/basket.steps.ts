import { DataTable } from "@cucumber/cucumber";
import { defineFeature, loadFeature } from "jest-cucumber";
import { ShoppingBasket } from "../../main/basket";

const feature = loadFeature("./src/specs/features/basket.feature");

defineFeature(feature, test => {
  const mockLogger = {
    info: jest.fn,
  };

  let basket: ShoppingBasket;

  beforeEach(() => {
    basket = new ShoppingBasket(mockLogger);
  });

  test("Add items to Shopping Basket", ({ given, and, when, then }) => {
    let summary: string[];

    given(
      /^Client adds (\d+) units of "(.*)" to my shopping basket$/,
      (quantity: number, description: string) => {
        basket.addItem(description, quantity);
      }
    );

    and(
      /^Client adds (\d+) units of "(.*)" to my shopping basket$/,
      (quantity: number, description: string) => {
        basket.addItem(description, quantity);
      }
    );

    when("I check the content of my shopping basket", () => {
      summary = basket.summary();
    });

    then("they should see:", table => {
      const expected = table.map((row: any) => {
        return row.outputLines;
      });
      expect(summary).toEqual(expected);
    });
  });

  test("Log items added to shopping cart on the console", ({
    given,
    and,
    then,
  }) => {
    given("Client creates a basket", () => {
      return;
    });

    and(
      /^Client adds (\d+) units of "(.*)" to my shopping basket$/,
      (quantity, description) => {
        basket.addItem(description, quantity);
      }
    );

    then("I see a log entry for each action", table => {
      const expected = table.map((row: any) => {
        return row.logLine;
      });

      expect(mockLogger.info).toHaveBeenNthCalledWith(1, expected[0]);
      expect(mockLogger.info).toHaveBeenNthCalledWith(2, expected[1]);
    });
  });
});
