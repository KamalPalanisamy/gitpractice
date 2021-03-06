/*This changes were done on Jan 24 2021, 6:15 PM EST*/

describe("Using_Assertions", function()
    {
        it("Enter_Text_in_TextBox", function()
            {
                /*"cy" in Cypress is just like "driver" in Selenium.  We don't need to create an user-defined object
                for "cy", since it was already in-built.  We just have to use "cy." to call any "Cypress Methods".

                 To open a "URL" of a website we use the inbuilt method "cy.visit()". This is similar
                  to "driver.get()" method in selenium*/
                cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

                /* Inbuilt "get()" method in Cypress helps to identify webelement in cypress. This is
                similar to "driver.findelement()" method in selenium.*/

                /*Inbuilt "type()" method in Cypress helps to enter the text in the textbox. This is
                similar to "sendkeys()" method in Selenium. */
                cy.get("input[type='search']").type("ca");



                /*Below is the code for assertion to check whether particular full text is matching
                in "Cypress". Since 'should()' is inbuilt chai method, it takes care of automatic
                promise handling of "text()" method which is "Non-Cypress" method.*/
                cy.get("div[class='brand greenLogo']").should('have.text','SUNCART')

                /*Hello Kamal Palanisamy. Welcome to Self-made Millionares Club.*/
                /*Hello Barani Palanisamy. Welcome to Millionares Club.*/

                cy.get("div[class='product']").should('have.length',4);

                /*Kamal's life will become very good.*/

                cy.wait(6000);

                /*If we want to eliminate invisible webelement and include only visible webelement,
                then in "Cypress Automation" we have to use "JQUERY Selector" command  :visible
                to include only visible webelement.*/

                cy.get("div[class='product']:visible").should('have.length',4);

                /*If you want to compare whether two integers are matching in "Javascript"
                using Assertions. Then please use the below Syntax.

                expect(actual_amount).to.equal(final_expected_amount);

                Note: In above syntax, expect(), to.equal() are the keywords.*/

            }
        )


    }



)
