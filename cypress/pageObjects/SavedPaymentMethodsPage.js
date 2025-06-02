import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";

export class SavedPaymentMethodsPage extends BasePage {
    
    static get newCard() {
        return cy.get("mat-expansion-panel").contains("Add new card");
    }

    static get nameField() {
        return cy.contains("mat-form-field", "Name").find("input");
    }

    static get cardNumberField() {
        return cy.contains("mat-form-field", "Card Number").find("input");
    }

    static get expiryMonth() {
        return cy.contains("mat-form-field", "Expiry Month").find("select");
    }

    static get expiryYear() {
        return cy.contains("mat-form-field", "Expiry Year").find("select");
    }

    static get submitButton() {
        return cy.get("#submitButton");
    }

    static get savedCards() {
        return cy.get("mat-row[role=row]");
    }
}