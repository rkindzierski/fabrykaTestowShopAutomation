import Urls from "./urls";

const myAccountHeaderButton ='#menu-item-100'
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCarFromProductLevel = '.added_to_cart.wc-forward'

// Products were moved to products.json fixture
//
// export const Product = {
//     HoodieWithZipper: {
//         Locator: 'a[data-product_id="51"]',
//         Name: 'Hoodie with Zipper'
//     },
//     Polo: {
//         Locator: 'a[data-product_id="53"]',
//         Name: 'Polo'
//     },
//     Sunglasses: {
//         Locator: 'a[data-product_id="49"]',
//         Name: 'Sunglasses'
//     }
// }



class HomePage{

    clickmyAccountHeaderButton(){
        cy.get(myAccountHeaderButton).click()
    }

    addProductToCart(HoodieWithZipper) {
        cy.get(dataBlockNameNew).within(()=>{
            cy.get(HoodieWithZipper.Locator).click()
        })
    }

    clickGoToCartFromProductButton(){
        cy.get(dataBlockNameNew).within(()=>{
            cy.get(checkCarFromProductLevel).click()
        })
    }

    visitPage(){
        const urls = new Urls
        urls.visitHopePage()
    }
}

export default HomePage;