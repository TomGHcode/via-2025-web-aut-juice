import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";
export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "/#/delivery-method";
    }
    static get chooseDeliverySpeed() {
        return cy.get("mat-row[role=row]");
    }

    static get proceedToDelivery() {
        return cy.get("[aria-label='Proceed to delivery method selection']")
    }
}