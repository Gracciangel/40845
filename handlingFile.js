const fs = require('fs')

class container {
  constructor(file){
    this.file = file
  }
save(object){
  fs.appendFile(JSON.stringify(object) , err=>{
    if(err){
      throw new Error('this object could´s not save in the specified route')
    }else{
      console.log('done!')
    }
  })
}
}

let persona ={
  id:1,
  name:'pepe',
  city:'Buenos Aires'
}
const file1 = new container('./info.txt');
file1.save(persona)
