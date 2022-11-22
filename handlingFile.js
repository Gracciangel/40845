

// en la clase container se busca crear metodos para que el archivo que se pasa como parametro pueda realizar diferentes acciones como 
// save(object)recibe un objeto lo guarda en el archivo y devuelve el id asignado
// getByid(number) recibe un id y devuelve el objeto con ese id o null si esta vacio
// getAll() devuelve un array con los objetos presentes en el archivo
// deleteById(numbre)elimina un objeto con el id traido por parámetro
// deleteAll()elimina todos los objetos presentes en el archivo

const fs = require('fs') ;

class container {
  constructor(file){
 this.file = file
  }
save(object){
  fs.writeFile(this.file ,JSON.stringify(object, null, 2), (err)=>{
    if(err){
      console.log('not can do write file')
    }else{
      console.log('good job')
    }
  } )
return object.id
}
}


  guitar ={
    id: 1,
    name: 'Fender telecaster',
    price: 1300,
    thumbnail: 'https://guitar.com/guides/essential-guide/vintage-fender-telecaster-buying-guide/'
  },
  pedal ={
    id: 2,
    name: 'Morning Glory JHS',
    price: 900,
    thumbnail:'https://www.nstuffmusic.com/p-97838-jhs-morning-glory-v4-overdrive-pedal.aspx'
  },
  amplifier ={
    id: 3 ,
    name: 'Vox ac 30', 
    price: 2300,
    thumbnail: 'http://blueaudiostore.com.ar/bas/home/4750-amplificador-de-guitarra-vox-ac30-c2-30w-combo-valvular.html'
  }
const mock  = new container('./mock.json')
mock.save(amplifier) //===> aca creo mediante la instancia de la clase un objeto en json pero solo el obj no el array 
//entendi  que la consigna dice que debo pushear en un array los objetos para poder luego mediante los metodos de la clase buscar por id. 