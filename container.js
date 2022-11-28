const fs = require('fs')
const express = require('express')
//array

const products = []

//objects

guitar = {
    id:1,
    name: 'Fender Telecaster', 
    price: 2300,
    thumbnail:'https://tiendamia.com/ar/producto?amz=B07CXJSFTH&pName=Fender-Player-Telecaster-Electric-Guitar-Maple-Fingerboard-Buttercream'
}
pedal ={
    id:2,
    name:'JSH Morning Glory',
    price: 900,
    thumbnail: 'https://www.jhspedals.info/morning-glory-v4' 
}

amplifier = {
    id: 3,
    name: 'Vox AC -30',
    price: 3000,
    thumbnail: 'https://voxamps.com/es/producto/ac30-onetwelve/'
}


class container {
    constructor(file){
    this.file = file
    }
    save(obj){
        fs.writeFile(this.file , JSON.stringify(obj, null, 2), err =>{
            err ? console.log(err) : fs.readFile(this.file , (err, data) => {
               if(err){
                console.log(err)
               }else{
              let array  = JSON.parse(data, null , 2)
                console.log(`the product ${array[array.length -1]} has identifier ${array[array.length-1].id}`)
                add(array , )
               }
           })
        })
    }
    getById(number){
       fs.readFile(this.file , (err, data) => {
        if(err){
            console.log(err)
        }else{
            let array = JSON.parse(data, null ,2)
          array.find(e => e.id===number ? console.log(e): null)
        }
       })
    }
    getAll(){
        fs.readFile(this.file, (err, data) => {
            err ? console.log(err) : data
        })
    }
    deleteById(number){
        
    
    }
  
    deleteAll(){
        fs.writeFile(this.file , ' ', err=> {
            err ?console.log(err) : console.log('delete all ')
        } )
    }
 
}
//instance

const mockProducts = new container('./mockProducts.txt')

//fileAdd


const add = (array, obj) => {
    array.push(obj)
  
}

const createFile = (file) =>{
    fs.writeFile(file ,'' , err => {
        err? console.log('error fatal') : console.log('created file')
    })
}

add(products , pedal)
add(products , guitar)
add(products , amplifier)






//express
const showExpress = JSON.stringify(products, null  ,2 )
const app  = express()



app.get('/products', (req , res) => {
  res.end(showExpress)
})

app.get('/productsRandom' , (req , res) => {
const products = JSON.parse(showExpress , null, 2 )
    for(let e of products){ 
        if(e.id === Math.round(Math.random()* 4)){
            res.end(JSON.stringify(e , null , 2))
        }
    }
})


const PORT = 8080

app.listen(PORT , () => {
    console.log('i´m ready for express')
})


