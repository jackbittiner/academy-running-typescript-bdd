export class ShoppingBasket {
  public addItem(description: string, amount: number): void {
    throw new Error("Not Implemented");
  }

  public summary(): string[] {
    return [
      "Creation date: 20/12/2020",
      "Total: £0.00",
    ]
  }
}
