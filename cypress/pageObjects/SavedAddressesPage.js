import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";

export class SavedAddressesPage extends BasePage {
    static get newAdress() {
        return cy.get("[aria-label='Add a new address']");
    }
}