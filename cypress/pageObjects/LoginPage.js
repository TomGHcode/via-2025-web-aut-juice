import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailField() {
    return cy.get("#email");
  }

  static  get passwordField() {
    return cy.get("#password");
  }   

  static get loginButton() {
    return cy.get("button#loginButton");
  }

  static get notYetCustomerLink() {
    return cy.get("#newCustomerLink");
  }
}
