interface BasketContent {
  quantity: number;
  description: string;
  price: number;
}

const Products: { [description: string]: number} = {
  ["Lord of the Rings"]: 10.00,
  ["The Hobbit"]: 5.00,
  ["Game of Thrones"]: 9.00,
  ["Breaking Bad"]: 7.00
}

export class ShoppingBasket {
  private basketContents: BasketContent[];

  constructor() {
    this.basketContents = [];
  }

  public addItem(description: string, quantity: number): void {
    this.basketContents.push({ description, quantity, price: 1.0 * quantity * Products[description] });
  }

  private formatLineItem(basketContent: BasketContent) {
    const amountPerItem = Products[basketContent.description].toFixed(2);
    const price = basketContent.price.toFixed(2);
    return `${basketContent.quantity} x ${basketContent.description} // ${basketContent.quantity} x ${amountPerItem} = £${price}`;
  }

  public summary(): string[] {
    if (this.basketContents.length > 0)
      return [
        "Creation date: 20/12/2020",
        this.formatLineItem(this.basketContents[0]),
        `Total: £${this.basketContents[0].price.toFixed(2)}`,
      ];
    return ["Creation date: 20/12/2020", "Total: £0.00"];
  }
}
