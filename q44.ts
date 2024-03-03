let sandwhichItems=(...items)=>{
     console.log("Lets make sandwhich with the provided items ");
    for(let item of items){
        console.log("-",item)
}
    console.log("Your sandwhich is ready\n");
    
    
}
sandwhichItems("jam" ,"bread", "sauce","sugar")
sandwhichItems("nutela" ,"bread", "melted choclate","sugar")
sandwhichItems("egg" ,"bread", "black peper","salt")