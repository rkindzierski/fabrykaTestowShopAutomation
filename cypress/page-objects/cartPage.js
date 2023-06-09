import { Product } from "./homePage"

const productName = '.product-name'
const removeItemButton = '.remove'
const emptyCartAlert = '.cart-empty.woocommerce-info'
const goToPaymentsButton = '.checkout-button'

class CartPage {
    checkThatAddedProductIsInCart(HoodieWithZipper){
        cy.get(productName).contains(HoodieWithZipper.Name).should('exist')
    }

    removeItemFromCart(){
        cy.get(removeItemButton).click()
    }

    checkThatCartIsEmpty(){
        cy.get(emptyCartAlert).should('exist')
    } 

    clickGoToPaymentsButton(){
        cy.get(goToPaymentsButton).click()
    }
}

export default CartPage;