const express = require("express");
const app = express();
const fs = require("fs");
// const http = require("http");

const PORT = 3000;

app.use(express.json());

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
