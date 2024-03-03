let show_magicians2=(list)=>{
    for(let i of list){
        console.log(i);
    }
    return list
}

let make_great1=(list)=>{
    let newMagicians:string[]=[]
    for (let magicians of list){
     newMagicians.push(magicians+"The great")
     console.log(newMagicians);
     
    }
    return newMagicians
}

let magiciansName2:string[]=["Zack King","Aroura the mystic","Nimbus The conjurer","Azure the wizard"]
make_great1(magiciansName2)
show_magicians2(magiciansName2)