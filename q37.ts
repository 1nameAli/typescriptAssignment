let make_shirts1=(size="Large",msg="I love typescript")=>{
    return console.log(`The size of the shirt will be ${size} and the msg will be ${msg} .`);
}
// By default large size and the msg
make_shirts1()
// Size will be medium
make_shirts1(size="Medium")
// Size will be small and the msg is different
make_shirts1(size="Small",msg="Jihad bin Nafs is the afzal Jihad")
