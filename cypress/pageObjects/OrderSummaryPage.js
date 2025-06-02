import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";

export class OrderSummaryPage extends BasePage {
    static get placeOrder() {
        return cy.get("[aria-label='Complete your purchase']");
    }
}