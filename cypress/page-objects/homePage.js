import Urls from "./urls";

const myAccountHeaderButton ='#menu-item-100'

class HomePage{

    clickmyAccountHeaderButton(){
        cy.get(myAccountHeaderButton).click()
    }

    visitPage(){
        const urls = new Urls
        urls.visitHopePage()
    }
}

export default HomePage;