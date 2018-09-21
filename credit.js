const puppeteer = require('puppeteer');
//const {TimeoutError} = require('puppeteer/Errors');
const url1='http://credit.stu.edu.cn/portal/STUMainPage.aspx';
(async () => {
    const browser = await puppeteer.launch({
        executablePath: 'D:/汕大课表/任务/puppeteer/chrome-win32/chrome.exe',
        headless: true,
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    try{
        console.time();
        await page.goto('http://credit.stu.edu.cn/english/setlocale.aspx?locale=zh-cn');
        await page.type('#txtUserID','17jhxua');
        await page.type('#txtUserPwd','Jh1515451232');
        await page.click('#btnLogon');
        await page.waitFor(500);
        const urlAfter = page.url();
        console.log(urlAfter);
        if(urlAfter==url1){
            console.log('登录成功');
        }
        else{
            console.log('登录失败');
        }
        console.timeEnd();
    }catch(e){
        console.log('网络请求失败');
        await browser.close();
    }
    await browser.close();
})();