const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const response = await page.goto('http://15.0.0.122:9980/loleaflet/dist/loleaflet.html?file_path=file:///opt/online/test/data/test.docx')
  if(response.status() == 200) {
    fs.appendFileSync('report.json', Date() + " - Success : " + response.status() + "\n");
  }else{
    fs.appendFileSync('report.json', Date() + " - Error : " + response.status() + "\n");
  }
  await page.waitFor(5000);
  // await page.screenshot({path:'example.png'});

  await browser.close();
})();