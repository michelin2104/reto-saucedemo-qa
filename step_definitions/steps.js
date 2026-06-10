import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage.js';
import { InventoryPage } from '../page_objects/InventoryPage.js';
import { CartPage } from '../page_objects/CartPage.js';

let browser, context, page;
let loginPage, inventoryPage, cartPage;

Before(async function () {
    browser = await chromium.launch({ headless: false, slowMo: 400 }); 
    context = await browser.newContext();
    page = await context.newPage();
    
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
});

After(async function () {
    await browser.close();
});

Given('que el usuario navega a la página de Sauce Demo', async function () {
    await loginPage.navigate();
});

When('ingresa el usuario {string} y la contraseña {string}', async function (username, password) {
    await loginPage.login(username, password);
});

When('agrega el producto {string} al carrito', async function (productName) {
    await inventoryPage.addProductToCart(productName);
});

When('visualiza el producto en el carrito de compras', async function () {
    await inventoryPage.goToCart();
});

When('completa el proceso de compra con los datos {string}, {string} y {string}', async function (first, last, zip) {
    await cartPage.checkout(first, last, zip);
    await cartPage.finishOrder();
});

Then('el sistema debería mostrar el mensaje de confirmación {string}', async function (expectedMessage) {
    const actualMessage = await cartPage.getConfirmationMessage();
    expect(actualMessage).toContain(expectedMessage);
});

Then('debería ver un mensaje de error que contiene {string}', async function (expectedError) {
    const actualError = await loginPage.getErrorMessage();
    expect(actualError).toContain(expectedError);
});