import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }

    static get chooseCard() {
        return cy.get("mat-cell")
    }

    static get proceedToReview() {
        return cy.get("[aria-label='Proceed to review']")
    }
}