const http = require('http')

const server = http.createServer((request , response) => {
    const hour = new Date().getHours()
    response.end()
})


const PORT = 8080 ;
server.listen(PORT , ()=> {
    console.log(`i´m ready ${PORT}`)
})