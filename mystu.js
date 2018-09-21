const puppeteer = require('puppeteer');
const url1='https://my.stu.edu.cn/v3/';
(async () => {
    const browser = await puppeteer.launch({
        executablePath: 'D:/汕大课表/任务/puppeteer/chrome-win32/chrome.exe',
        headless: false,
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    try{
        console.time();
        await page.goto('https://sso.stu.edu.cn/login;jsessionid=3BF2DE3632351778AFC23F6DD05BAE38.tomcat51?service=https%3A%2F%2Fmy.stu.edu.cn%2Fv3%2F');
        //const url1= page.url();

        await page.type('#username','17jhxu');
        await page.type('#password','Jh1515451232');
        await page.click('#login');
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