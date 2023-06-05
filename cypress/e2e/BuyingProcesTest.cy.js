import CartPage from "../page-objects/cartPage"
import HomePage from "../page-objects/homePage"
import OrderPage from "../page-objects/orderPage"

describe('testing successful buying process', () => {
    const homePage = new HomePage
    const cartPage = new CartPage
    const orderPage = new OrderPage

    before(function () {
        cy.fixture('products.json').as('productData')
    })

    it('should order a product from the shop', function(){
        homePage.visitPage()
        homePage.addProductToCart(this.productData.HoodieWithZipper)
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart(this.productData.HoodieWithZipper)
        cartPage.clickGoToPaymentsButton()
        orderPage.fillAllRequiredFields()
        orderPage.clickOrderFinishButton()
        orderPage.checkOrderFinishedNumber()
    })
})