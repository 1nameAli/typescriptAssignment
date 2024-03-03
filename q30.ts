let userName=["eric","jhon","natasha","admin","a.basit"]
for (let i = 0; i < userName.length; i++) {
    if(userName[i]=="admin"){
        console.log("Hello admin,would you like to see status report");
    }
    else{
        console.log(`Hello ${userName[i]},thanks for logging in again `);   
    }
    
     }
