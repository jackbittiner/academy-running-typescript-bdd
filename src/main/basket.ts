interface BasketContent {
  quantity: number;
  description: string;
  price: number;
}

const Products: { [description: string]: number } = {
  ["Lord of the Rings"]: 10.0,
  ["The Hobbit"]: 5.0,
  ["Game of Thrones"]: 9.0,
  ["Breaking Bad"]: 7.0,
};

export class ShoppingBasket {
  private basketContents: BasketContent[];

  constructor() {
    this.basketContents = [];
  }

  public addItem(description: string, quantity: number): void {
    this.basketContents.push({
      description,
      quantity,
      price: 1.0 * quantity * Products[description],
    });
  }

  private formatLineItem(basketContent: BasketContent) {
    const amountPerItem = Products[basketContent.description].toFixed(2);
    const price = basketContent.price.toFixed(2);
    return `${basketContent.quantity} x ${basketContent.description} // ${basketContent.quantity} x ${amountPerItem} = £${price}`;
  }

  public summary(): string[] {
    if (this.basketContents.length > 0) {
      let total = 0;
      let lines = ["Creation date: 20/12/2020"];
      for (const content of this.basketContents) {
        lines.push(this.formatLineItem(content));
        total += content.price;
      }
      return [...lines, `Total: £${total.toFixed(2)}`];
    }
    return ["Creation date: 20/12/2020", "Total: £0.00"];
  }
}
