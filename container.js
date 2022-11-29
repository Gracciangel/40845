const fs = require('fs')
const express = require('express')
//array

const products = []

//objects

guitar = {
    id:0,
    name: 'Fender Telecaster', 
    price: 2300,
    thumbnail:'https://tiendamia.com/ar/producto?amz=B07CXJSFTH&pName=Fender-Player-Telecaster-Electric-Guitar-Maple-Fingerboard-Buttercream'
}
pedal ={
    id:1,
    name:'JSH Morning Glory',
    price: 900,
    thumbnail: 'https://www.jhspedals.info/morning-glory-v4' 
}

amplifier = {
    id: 2,
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
            err ? console.log(err) : console.log(JSON.parse(data, null ,2))
        })
    }
    deleteById(number){
        
    
    }
  
    deleteAll(){
        fs.writeFile(this.file , ' ', err=> {
            err ?console.log(err) : console.log('delete all ')
        } )
    }
    showTotalProducts(){
       app.get('/products' , (req, res) => {
        fs.readFile(this.file , (err, data) => {
            err ? console.log(err) : res.end(data)
        })
       })
    }
    randomProducts(){
        app.get('/productsrandom' , (req, res )=> {
            fs.readFile(this.file , (err, data) => {
                if (!err){
                    const num = parseInt(Math.random()*3)
                    const product = JSON.parse(data, null ,2) ; 
                    product.find(e  => {
                        num === e.id ? res.end(JSON.stringify(e, null ,2)) : 'error'
                    })
                }
            })
        })
    }
 
}
//instance

const mockProducts = new container('./mockProducts.txt') ;


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

    mockProducts.save(products)
//express


const app  = express()

mockProducts.showTotalProducts()
mockProducts.randomProducts()

    app.get('/', (req , res) => {
    res.end('<h1><a href="/products">PRODUCTS</a></h1> <h1><a href="/productsrandom">PRODUCTOS RANDOM</a></h1>')
    })


    const PORT = 8080

    app.listen(PORT , () => {
        console.log('i´m ready')
    })
