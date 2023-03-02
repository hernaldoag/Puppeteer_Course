const puppeteer = require('puppeteer')

describe.only(' Waiting methods II', () => {
    it('Must show the different typs of waits', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewPort: null
            
        })
        
        const page = await browser.newPage()
        await page.goto('http://platzi.com', {waitUntil : 'networkidle0'} )

       // await page.waitForXPath('//*[@id="home-student-new"]/div/header/nav/div[1]/div/a/div/figure[2]/img')
        await page.waitForXPath('//*[@id="home-public"]/div/div[1]/header/nav/div[1]/div/a/div/figure[2]/img')
        //explicit wait
        await page.goto('https://demoqa.com/modal-dialogs', {waitUntil : 'networkidle2'} )

        await page.waitForSelector('#showSmallModal', { visible:true} )
        await browser.close()
    },350000)
})