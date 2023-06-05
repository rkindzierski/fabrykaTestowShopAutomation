import CartPage from "../page-objects/cartPage"
import HomePage from "../page-objects/homePage"

describe ('basket tests', () => {
    const homePage = new HomePage()
    const cartPage = new CartPage()

    before(function () {
        cy.fixture('products.json').as('productData')
    })

    it('should add product to cart and delete it from there', function (){
        homePage.visitPage()
        homePage.addProductToCart(this.productData.HoodieWithZipper)
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart(this.productData.HoodieWithZipper)
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()
    })
})