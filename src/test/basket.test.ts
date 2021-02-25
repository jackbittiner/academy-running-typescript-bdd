import { ShoppingBasket } from "../main/basket";

describe("Shopping Basket Test", () => {
  it("should summarise when nothing has been added to basket", () => {
    let basket: ShoppingBasket = new ShoppingBasket();
    expect(basket.summary()).toBe([
      "Creation date: 20/12/2020",
      "Total: £0.00",
    ]);
  });
});
