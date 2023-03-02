const puppeteer = require('puppeteer')

describe.only(' Open Browser with puppeteer', () => {
    it('Must open and close the browser', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewPort: null
            
        })
        
        const page = await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

        page.on('dialog', async(dialog) => {
            await dialog.accept()
        })
        //Test right click
        //await page.click('#authentication > span', { button: 'right', delay:500 })
        //await page.waitForTimeout(3000)

        //Test double click
        await page.click('#authentication > button', { clickCount: 2, delay:500 })
        await page.waitForTimeout(300)

        await page.goto('https://devexpress.github.io/testcafe/example/')
        
        await page.type('#developer-name', 'Hernaldo', {delay: 100})

        await page.click('#remote-testing')
        
        await page.select('#preferred-interface','Both')
       

        await page.click('#tried-test-cafe')
        await page.click('#slider','5')
        await page.type('#comments', 'This is a test')
        await page.click('#submit-button')
        await page.waitForTimeout(3000)
        await browser.close()
    },350000)
})