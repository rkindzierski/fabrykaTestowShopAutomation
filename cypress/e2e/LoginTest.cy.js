import HomePage from "../page-objects/homePage"
import AccountPage from "../page-objects/myAccountPage"


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


})