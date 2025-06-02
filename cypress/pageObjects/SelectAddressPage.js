import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }

  static get selectAddress() {
    return cy.get("mat-row[role=row]");
  }

  static get proceedToPayment() {
    return cy.get("[aria-label='Proceed to payment selection']");
  }
}