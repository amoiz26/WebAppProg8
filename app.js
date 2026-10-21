const http = require('http')    //Pull in a useful node package
                                //Try http.
const hostname = '127.0.0.1'    //Local host
const port = 3001               //Not assigned

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/plain') //Set the mime type
      res.end('Fun fact: My name is Abdul Moiz, and I am a Computer Science student who enjoys learning new technologies, programming, and building creative projects.')    //Close the response and provide content
    }                           //No return needed, we modified the res object we got
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})