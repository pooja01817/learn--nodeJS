const fs = require("fs");
const http = require("http");
const html = fs.readFileSync('./app.html', 'utf-8');
const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));
const path = require("path")


const server = http.createServer((request, response) => {
    let path = request.url;
    console.log(path);
    if (path === '/' || path === '/Home') {
      response.end(html.replace('{{%CONTENT%}}', 'Hello KMIT!'));
    } else if (path === '/Products') {
      const prodHTMLList = products.map(generateProductHTML).join('');
      response.end(html.replace('{{%CONTENT%}}', prodHTMLList));
      else {
      response.writeHead(404, {
        'Content-Type': 'text/html',
        'myHeader': 'Hello, error'
      });
      response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
    }
 }
  });
  
  server.listen(3000,'10.10.6.211', () => {
    console.log("Server is started.");
  });

  
