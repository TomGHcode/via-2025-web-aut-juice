import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";

export class BasketPage extends BasePage {

  static get url() {
    return "/#/";
  }

  static get CheckoutButton() {
    return cy.get("#checkoutButton");
  }
  
  static get BasketContinueButton() {
    return cy.get("button[aria-label='Proceed to payment selection']");
  }
}