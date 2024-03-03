let describe_cities=(city:string,country="Pakistan")=>{
    return console.log(`${city} is in ${country}`);
    
}
// First time calling
describe_cities("Karachi")
//Second time calling
describe_cities("Punjab")
// third time calling
describe_cities("Los Angeles","USA")