import {DataTable} from '@cucumber/cucumber'
import {defineFeature, loadFeature} from "jest-cucumber";

const feature = loadFeature('./src/specs/features/basket.feature')

class ShoppingBasket {
    public addItem(description: string, amount: number): void {
        throw new Error("Not Implemented");
    }

    public summary(): string {
        throw new Error("Not Implemented");
    }
}

defineFeature(feature, test => {
    const mockPrintline = jest.fn()
   
    let basket: ShoppingBasket;

    beforeEach(() => {
        basket = new ShoppingBasket();
    })


    test('Add items to Shopping Basket', ({ given, and, when, then }) => {
        let summary: string;

        given(/^Client adds (\d+) units of "(.*)" to my shopping basket$/, (quantity: number, description: string) => {
            basket.addItem(description, quantity);
        });

        and(/^Client adds (\d+) units of "(.*)" to my shopping basket$/, (quantity: number, description: string) => {
            basket.addItem(description, quantity);
        });

        when('I check the content of my shopping basket', () => {
            summary = basket.summary();
        });

        then('they should see:', (table) => {
            expect(summary).toEqual("");
        });
    });
})