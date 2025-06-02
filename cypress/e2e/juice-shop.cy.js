import { homedir } from "os";
import { HomePage } from "../pageObjects/HomePage";
import { RegistrationPage } from "../pageObjects/registrationPage";
import { LoginPage } from "../pageObjects/LoginPage";
import { BasketPage } from "../pageObjects/BasketPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const randomNumber = Math.floor(Math.random() * 900000) + 100000;
      // Save that email address to some variable
      const emailAddress = `email_$(randomNumber)@ebox.com`;
      const password = "ABC123#()";
      RegistrationPage.emailField.type(emailAddress);
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions
      .contains("Name of your favorite pet?")
      .click();
      // Fill in answer
      RegistrationPage.answerField.type("Beethoven");
      // Click Register button
      RegistrationPage.registrationButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(emailAddress);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should("contain.text", emailAddress);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });


    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it.only("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
    });

    // Create scenario - Search 500ml and validate cards
    it.only("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productInfo.should(
        "contain.text",
        "Now with even more exotic flavour."
      )
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productBox.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productInfo.should("contain.text", "Sweet & tasty!");
    });

    // Create scenario - Read a review
    it.only ("Read a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productBox.contains("OWASP Juice Shop \"King of the Hill\" Facemask").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.productInfo.find("mat-expansion-panel-header").should("be.visible").click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.productInfo.should(
        "contain.text",
        "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
      );
    });

    // Create scenario - Add a review
    it.only("Add a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      HomePage.productInfo.find("textarea").click().type("Tastes like metal");
      // Click Submit
      HomePage.productInfo.find("#submitButton").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.productInfo.find("mat-expansion-panel-header").should("be.visible").click();
      // Validate review -  "Tastes like metal"
      HomePage.productInfo.should(
        "contain.text",
        "Tastes like metal"
      );
    });

    // Create scenario - Validate product card amount
    it.only("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.productBox.should("have.length", 12);
      // Change items per page (at the bottom of page) to 24
      cy.get("div.mat-mdc-paginator-touch-target").click();
      cy.get("mat-option[role='option']").contains("24").click();
      // Validate that the amount of cards is 24
      HomePage.productBox.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      cy.get("div.mat-mdc-paginator-touch-target").click();
      cy.get("mat-option[role='option']").contains("36").click();
      // Validate that the amount of cards is 35
      HomePage.productBox.should("have.length", 36);

    });



    // Create scenario - Buy Girlie T-shirt
    it.only("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Girlie
      HomePage.searchField.type("Girlie{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasketButton.click();
      // Click on "Your Basket" button
      HomePage.basketButton_1.click();
      // Create page object - BasketPage
      
      // Click on "Checkout" button
      BasketPage.CheckoutButton.click();
      // Create page object - SelectAddressPage

      // Select address containing "United Fakedom"
      SelectAddressPage.selectAddress.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.proceedToPayment.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.chooseDeliverySpeed.contains("Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.proceedToDelivery.click();

      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.chooseCard.contains("5678").siblings().children("mat-radio-button").click();

      // Click Continue button
      PaymentOptionsPage.proceedToReview.click();

      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeOrder.click();

      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.orderConfirmationMessage.should("contain.text", "Thank you for your purchase!");
      });

    // Create scenario - Add address
    it.only("Add adress", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.basketButton.click();
      // Click on My saved addresses
      HomePage.savedAddressesButton.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.newAdress.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      const randomNumber = Math.floor(Math.random() * 9000000);
      const randomAddressNumber = Math.floor(Math.random() * 100) + 1;
      const randomAddress = `Something street ${randomAddressNumber}`;

      CreateAddressPage.countryField.type("Latvia");
      CreateAddressPage.nameField.type("Royce");
      CreateAddressPage.mobileNumberField.type(randomNumber);
      CreateAddressPage.zipCodeField.type("LV-4201");
      CreateAddressPage.addressField.type(randomAddress);
      CreateAddressPage.cityField.type("Valmiera");
      CreateAddressPage.stateField.type("Vidzeme");

      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      CreateAddressPage.getAddress.should("contain", randomAddress);
    });

      // Create scenario - Add payment option
    it.only("Add payment option", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.basketButton.click();
      // Click on My payment options
      HomePage.paymentOptionsButton.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.newCard.click();
      // Fill in Name
      SavedPaymentMethodsPage.nameField.type("Royce");
      // Fill in Card Number
      SavedPaymentMethodsPage.cardNumberField.type("1234567890125678");
      // Set expiry month to 7
      SavedPaymentMethodsPage.expiryMonth.select("7");
      // Set expiry year to 2090
      SavedPaymentMethodsPage.expiryYear.select("2090");
      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.savedCards.should("contain.text", "Royce").should("contain.text", "7/2090");
      }
    );
  });
});
