interface Car {
    manufacture:string,
    model:string,
    [key:string]:any
}



let carInfo=(manufacture:string,model:string,...option:any[]):Car=>{
    let car={
        manufacture,
        model
    }
    for (let i= 0;i <option.length;i+=2) {
        let key=option[i]
        let value=option[i+1]
        car[key]=value
    }
    console.log(car);
    
    return car
}
carInfo("toyota","corolla","color","blue","year","2023")
