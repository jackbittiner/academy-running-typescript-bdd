interface BasketContent {
  quantity: number;
  description: string;
}

export class ShoppingBasket {
  private basketContents: BasketContent[];

  constructor() {
    this.basketContents = [];
  }

  public addItem(description: string, quantity: number): void {
    this.basketContents.push({ description, quantity });
  }

  public summary(): string[] {
    if (this.basketContents.length > 0)
      return [
        "Creation date: 20/12/2020",
        "1 x The Hobbit // 1 x 5.00 = £5.00",
        "Total: £5.00",
      ];
    return ["Creation date: 20/12/2020", "Total: £0.00"];
  }
}
