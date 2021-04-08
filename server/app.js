const http = require('http');
const fs = require('fs');
let tasks = require("../../../Day01/lab/todos.json");
const hostname = "127.0.0.2";
const port = 8090;


const server = http.createServer((request,response) =>{

    switch(request.url){
        case "/":
            let list = require("../../../Day01/lab/todos.json");
            response.setHeader("Content-type","text/html");
            response.statusCode = 200;
            response.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Main Page</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            </head>
            <body>
            <!-- Main Page  -->
            <div class="container">
                <!-- NavBar  -->
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../nature.html">Nature</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../quotes.html">Quotes</a>
                            </li>
            
                        </ul>
                    </div>
                </nav>
            
            </div>
            <div id="body">
            
            
            </div>
            <!-- Scripts and Styling  -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
            <!-- Script to Fetch Todos Tasks List   -->
            <script>
            var list =${JSON.stringify(list)};
            
            var todos =document.getElementById("body");
            var ul = document.createElement("ul");
            todos.appendChild(ul);
            
            for (var i = 0; i <= list.length; i++)
            {
                var li = document.createElement("li");  
            
                li.innerHTML = list[i].id;
                li.innerHTML = list[i].title;
                ul.appendChild(li);
            }
            </script>
            </body>
            </html>
            `);
            break;

        // nature page //
        case "/nature.html":
            const nature = fs.readFileSync("./nature.html");
            response.setHeader("content-type","text/html");
            response.statusCode = 200;
            response.end(nature);
            break;

        // nature photo one //
        case "/images/Nature/foresttb-l.jpg":
            response.setHeader("content-type","text/html");
            response.statusCode=200;
            const natureone = fs.readFileSync('./images/Nature/foresttb-l.jpg')
            response.end(natureone);
            break;

        // nature photo Two //
        case "/images/Nature/2-nature.jpg":
            response.setHeader("content-type","text/html");
            response.statusCode=200;
            const naturetwo = fs.readFileSync('./images/Nature/2-nature.jpg')
            response.end(naturetwo);
            break;




        // Quotes Page // 
        case "/quotes.html":
            const quotes = fs.readFileSync("./quotes.html");
            response.setHeader("content-type","text/html");
            response.statusCode = 200;
            response.end(quotes);
            break;

        // Quotes Photo One //
        case "/images/Quotes/Linus.jpg":
            response.setHeader("content-type","text/html");
            response.statusCode=200;
            const quoteone = fs.readFileSync('./images/Quotes/Linus.jpg')
            response.end(quoteone);
            break;

        // Quotes Photo Two //    
        case "/images/Quotes/2.jpg":
            response.setHeader("content-type","text/html");
            response.statusCode=200;
            const quotetwo = fs.readFileSync('./images/Quotes/2.jpg')
            response.end(quotetwo);
            break;



        // Error Page
        default:
            response.statusCode = 404;
            response.end("<h1> Page Not Found </h1>");
            break;
    }

});

// Server Listen // 
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
