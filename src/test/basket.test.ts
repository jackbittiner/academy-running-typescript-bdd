import { ShoppingBasket } from "../main/basket";

describe("Shopping Basket Test", () => {
  let basket: ShoppingBasket;

  beforeEach(() => {
    basket = new ShoppingBasket();
  });

  it("should summarise when nothing has been added to basket", () => {
    expect(basket.summary()).toEqual([
      "Creation date: 20/12/2020",
      "Total: £0.00",
    ]);
  });

  it("should add an item into the basket and update the total", () => {
    basket.addItem("The Hobbit", 1);

    expect(basket.summary()).toEqual([
      "Creation date: 20/12/2020",
      "1 x The Hobbit // 1 x 5.00 = £5.00",
      "Total: £5.00",
    ]);
  });

  it("should add two of the same item into the basket and update the total", () => {
    basket.addItem("The Hobbit", 2);

    expect(basket.summary()).toEqual([
      "Creation date: 20/12/2020",
      "2 x The Hobbit // 2 x 5.00 = £10.00",
      "Total: £10.00",
    ]);
  });
});
