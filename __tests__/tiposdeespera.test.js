const puppeteer = require('puppeteer')

describe.only(' Waiting methods', () => {
    it('Must show the different typs of waits', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewPort: null
            
        })
        
        const page = await browser.newPage()
        await page.goto('http://platzi.com', {waitUntil : 'networkidle2'} )

        //explicit wait
        await page.waitForTimeout(5000)

        //wait for selector
        await page.waitForSelector()

        await browser.close()
    },350000)
})