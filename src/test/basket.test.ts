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

  it.each([
    [1, "The Hobbit", "5.00", "5.00"],
    [2, "The Hobbit", "5.00", "10.00"],
    [3, "Lord of the Rings", "10.00", "30.00"],
  ])(
    "should add a single item type into the basket and update the total",
    (amount, description, price, total) => {
      basket.addItem(description, amount);

      expect(basket.summary()).toEqual([
        "Creation date: 20/12/2020",
        `${amount} x ${description} // ${amount} x ${price} = £${total}`,
        `Total: £${total}`,
      ]);
    }
  );

  it("should add different item types into the basket and update the total", () => {
    basket.addItem("The Hobbit", 1);
    basket.addItem("Lord of the Rings", 1);

    expect(basket.summary()).toEqual([
      "Creation date: 20/12/2020",
      "1 x The Hobbit // 1 x 5.00 = £5.00",
      "1 x Lord of the Rings // 1 x 10.00 = £10.00",
      "Total: £15.00",
    ]);
  });

  it("should increment the same item when added separately", () => {
    basket.addItem("The Hobbit", 1);
    basket.addItem("The Hobbit", 1);

    expect(basket.summary()).toEqual([
      "Creation date: 20/12/2020",
      "2 x The Hobbit // 2 x 5.00 = £10.00",
      "Total: £10.00",
    ]);
  });
});
