export class InventoryPage {
    constructor(page) {
        this.page = page;
    }

    async addProductToCart(productName) {
        const productContainer = this.page.locator('.inventory_item', { hasText: productName });
        await productContainer.locator('button').click();
    }

    async goToCart() {
        await this.page.locator('.shopping_cart_link').click();
    }
}