let show_magicians1=(list)=>{
    for(let i of list){
        console.log(i);
    }
    return list
}
let make_great=(list)=>{
    for (let i in list){
      list[i]=list[i]+" The great"
    }
}

let magiciansName1:string[]=["Zack King","Aroura the mystic","Nimbus The conjurer","Azure the wizard"]
make_great(magiciansName1)
show_magicians1(magiciansName1)