const fs = require('fs')

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
                console.log(`the product ${array[array.length -1].name} has identifier ${array[array.length-1].id}`)
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
            err ? console.log(err) : console.log(JSON.parse(data,null,2))
        })
    }
    deleteById(number){
        
    }
  
    deleteAll(){
        fs.writeFile(this.file, '' , err => {
            err? console.log(err) : console.log('delete all ')
        })
    }
}


const mockProducts = new container('./mockProducts.json')

const add = (array, obj) => {
    array.push(obj)
    setTimeout(()=>{
        console.log(`the object ${JSON.stringify(obj.name)} was added to products `)
    }, 500)
}


const createFile = (file) =>{
    fs.writeFile(file , '', err => {
        err? console.log('error fatal') : console.log('created file')
    })
}



