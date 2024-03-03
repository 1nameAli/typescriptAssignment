
function checkingUserName(currentUsers:string[],newUsers:string[]){
    // Lowring the current user
    let lowercurrentUsers:string[]=currentUsers.map(user=>user.toLowerCase())
    //    lowering the new user and checking the availibilty
    for(let user of newUsers){
        if(lowercurrentUsers.includes(user.toLowerCase())){
            console.log(`This username ${user} is not available Plz try another one `);
            
        }
        else{
            console.log(`This username ${user} is valid and you can use it `);
            
        }
        
    } 
}
let currentUsers=["Maha","RaNia","JaWeria","Mariyam","Wajiha"]
let newUsers:string[]=["Rania","Jaweria","Umer","Kanzul","Suleman"]
checkingUserName(currentUsers,newUsers)