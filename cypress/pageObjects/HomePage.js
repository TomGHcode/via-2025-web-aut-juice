import { BasePage } from "C:/Users/tbrit/Desktop/via-2025-web-aut-juice/cypress/pageObjects/BasePage.js";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("button#navbarAccount");
  }

  static get loginButton() {
    return cy.get("button#navbarLoginButton");
  }

  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchField() {
    return cy.get("#searchQuery input");
  }

  static get productBox() {
    return cy.get("div.mdc-card");
  }

  static get productInfo() {
    return cy.get("app-product-details");
  }

  static get closeButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get addToBasketButton() {
    return cy.get("button[aria-label='Add to Basket']");
  }

  static get basketButton_1() {
    return cy.get("[aria-label='Show the shopping cart']");
  }


  static get basketButton() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }

  static get savedAddressesButton() {
    return cy.get("button[aria-label='Go to saved address page']")
  }

  static get paymentOptionsButton() { 
    return cy.get("button[aria-label='Go to saved payment methods page']")
  }
}