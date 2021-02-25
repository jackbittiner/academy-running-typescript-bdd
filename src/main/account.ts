import {TransactionRepository} from "./transactionRepository";
import {StatementPrinter} from "./statementPrinter";

export interface Printer {
    printline(line: string): void
}

export class Account {
    private transactionRepository: TransactionRepository;
    private statementPrinter: StatementPrinter;

    constructor(transactionRepository: TransactionRepository, statementPrinter: StatementPrinter) {
        this.transactionRepository = transactionRepository;
        this.statementPrinter = statementPrinter;
    }

    deposit(amount: number): void {
        this.transactionRepository.addDeposit(amount)
    }
    withdraw(amount: number): void {
        this.transactionRepository.addWithdrawal(amount)
    }
    printStatement(): void {
        this.statementPrinter.print(this.transactionRepository.allTransactions())
    }

}