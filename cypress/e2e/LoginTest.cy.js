import HomePage from "../page-objects/homePage"
import AccountPage from "../page-objects/myAccountPage"
import { faker } from '@faker-js/faker'


describe('login scenario', () => {
    const homePage = new HomePage
    const accountPage = new AccountPage

    before(function () {
        cy.fixture('users.json').as('userData')
    })

    it('should login to the application', function () {
        homePage.visitPage()
        homePage.clickmyAccountHeaderButton()
        accountPage.fillUsernameFieldWithEmail(this.userData.email)
        accountPage.fillPasswordField(this.userData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyAccountNavigation()
    })

    it('should not login to the application', function () {
        accountPage.visitPage()
        accountPage.fillUsernameFieldWithEmail(faker.internet.email())
        accountPage.fillPasswordField(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfErrorAfterWrongLogin()
    })


})