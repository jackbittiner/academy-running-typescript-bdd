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
  private basketContents: Map<string, BasketContent>;

  constructor() {
    this.basketContents = new Map<string, BasketContent>();
  }

  public addItem(description: string, quantity: number): void {
    const price = 1.0 * quantity * Products[description];
    let data = this.basketContents.get(description);
    if (data) {
      data.quantity += quantity;
      data.price += price;
      this.basketContents.set(description, data);
    } else {
      this.basketContents.set(
        description, 
        {
          description,
          quantity,
          price,
        }
      );
    }
  }

  private formatLineItem(basketContent: BasketContent) {
    const amountPerItem = Products[basketContent.description].toFixed(2);
    const price = basketContent.price.toFixed(2);
    return `${basketContent.quantity} x ${basketContent.description} // ${basketContent.quantity} x ${amountPerItem} = £${price}`;
  }

  public summary(): string[] {
    if (this.basketContents.size > 0) {
      let total = 0;
      let lines = ["Creation date: 20/12/2020"];
      for (const [ _, value ] of this.basketContents.entries()) {
        lines.push(this.formatLineItem(value));
        total += value.price;
      }
      return [...lines, `Total: £${total.toFixed(2)}`];
    }
    return ["Creation date: 20/12/2020", "Total: £0.00"];
  }
}
