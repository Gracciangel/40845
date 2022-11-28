const express =  require('express')

app = express()

app.get('/', function(req , resp) {
    resp.send('<h1 style="color: blue", "font-family=arial">hello world!</h1>')
})

const PORT = 8080 ;

app.listen(PORT , () => {
    console.log('i´m ready')
})
let count = 0  ;
app.get('/visit' ,(req , resp)=> {
 count++   
resp.end(`<h1>hola sos el visitante n° ${count}</h1>`)
})