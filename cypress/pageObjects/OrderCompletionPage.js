import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";

export class OrderCompletionPage extends BasePage {
    static get orderConfirmationMessage() {
        return cy.get(".confirmation");
    }
}