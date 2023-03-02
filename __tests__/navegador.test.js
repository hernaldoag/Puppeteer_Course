const puppeteer = require('puppeteer')

/* describe(' My first test using puppeteer', () => {

    it('Must open and close the browser', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            devtools: false,
            /* defaultViewport:{
                width: 2100,
                height: 1000
            } */
            //args:['--window-size=1920,1080']
            // defaultViewport: null
       /*  })
        
        const page = await browser.newPage()
        await page.goto('https://www.saucedemo.com/')
        await page.waitForTimeout()
        await browser.close()
    },10000)
}) 
**/ 

describe(' Open Browser with puppeteer', () => {
    it('Must open and close the browser', async () => {
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewPort: null
            
        })
        
        const page = await browser.newPage()
        await page.goto('https://yahoo.com/')
        //await page.waitForTimeout() 
        await page.waitForSelector('img')
        
        //Reload Page
        await page.reload()

        await page.waitForSelector('img')
        //Navigate to other site
        await page.goto('https://platzi.com/')

        await page.waitForSelector('#home-public > div > div.BaseLayout > div.Header-v2.Header-v2-content.is-dark-header > div.Logo > div > a > div > figure.LogoHeader-name > img')
        //Navigate Back
        await page.goBack()
        await page.goForward()
        //await page.waitForSelector('img')

        const page2 = await browser.newPage()
        await page2.goto('https://github.com')
        await browser.close()
    },450000)
})