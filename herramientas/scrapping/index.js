const puppeteer = require('puppeteer');

(async ()=> {
    console.log('Iniciando...');
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    console.log('Navegador abierto');
    console.log('Cargando página...');
    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });
    console.log('Página cargada');
     //browser.close();
     console.log(titulo1);
})();