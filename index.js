const express = require("express");
const app = express();
const cors = require('cors');
const fs = require("fs");
// const http = require("http");

const PORT = 3000;

app.use(cors());
app.use(express.json());

let products = [
  {id: 1, name: 'Keyboard', price: 2500},
  {id: 2, name: 'Mouse', price: 1500}
]

app.get('/products', (req, res) => {
  res.status(200).json(products);
})

function render(request, response) {
  let url = request.url;
  url = url.endsWith("/") ? url : url + "/";
  let fileName = "view/";
  switch (url) {
    case "/":
      fileName += "index.html";
      break;
  }
  fs.readFile(fileName, (error, content) => {
    let ctype = { "Content-Type": "text/html" };
    if (!error) {
      response.writeHead(200, ctype);
      response.write(content);
    } else {
      response.writeHead(404, ctype);
      response.write(error.message);
    }
    return response.end();
  });
}

app.get("/", render); // รันหน้าแรก (index.html) จาก function render(request, response)

app.listen(PORT, () => {
  console.log(`Server กำลังรันอยู่ที่ http://localhost:${PORT}`);
});

// http.createServer(render).listen(PORT);
// console.log(`Server started on http://localhost:${PORT}/\nPress <Ctrl + C> to stop`);
