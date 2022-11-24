// const fs = require('fs')

// //callback es una instruccion que se ejecuta una vez que la funcion termina de hacer lo que tenia que hacer 
// //readFile toma dos parametros el primero es una ruta de acceso al archivo y el segundo es un callback que tiene dos parametros el primero es un error y el segundo es lol que e está dentro del archivo. en este caso lo que está dentro del archivo es un texto que dice 'hello world!' al escribir el archivo con writeFile, ubicamos el texto dentro de el archivo que se escribe como parametro al inicio del fs.writeFile(). el callback del writeFile es lo segundo que va a ejecutarse al terminar la primer instruccion que es crear el archivo y poner es esta caso una linea de código. luego se ejecuta la segunda insrtruccion que es todo lo que viene anidado al callback. en este caso es un console.log y una lectura mediante el fs.readFile() del archivo creado, este readFile tambien tiene un callback que maneja dos parametros el primer es un error y el segundo es el contenido del arhivo.


// const angel = {
//   name:'angel',
//   edad:34,
//   city: 'Buenos Aires'
// }
// const fede = {
//   name: 'defe',
//   edad: 20,
//   city: 'miami'
// }
// const file ='./package2.json'
  
// fs.writeFile(file, '',(err)=> {
//   err ? console.log('do not create file ') : console.log('file create successfully')
// })

// const mock = [] ;
// mock.push(angel)



// mock.push(fede)
// console.log(mock)

// fs.appendFile(file, JSON.stringify(mock), err => {
//   err? console.log('not do create file') : console.log('file create successfully')
// })



const element = [
  
guitar = {
  id:1,
  name: 'Fender Telecaster', 
  price: 2300,
  thumbnail:'https://tiendamia.com/ar/producto?amz=B07CXJSFTH&pName=Fender-Player-Telecaster-Electric-Guitar-Maple-Fingerboard-Buttercream'
},
pedal ={
  id:2,
  name:'JSH Morning Glory',
  price: 900,
  thumbnail: 'https://www.jhspedals.info/morning-glory-v4' 
},

amplifier = {
  id: 3,
  name: 'Vox AC -30',
  price: 3000,
  thumbnail: 'https://voxamps.com/es/producto/ac30-onetwelve/'
}


]


const search  =(array , num ) => {
  array   
}