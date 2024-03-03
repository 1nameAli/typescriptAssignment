// question 17 part 1
guest=["Majid","A.Hadi","Naveed","Abdul Haseeb","Zuhaib","Amjad","Junaid","Rashid","Abdul Qadir"]
// console.log(`Hey Friends I can only invite only two of you `);


// question 17 part 2

for(let i=guest.length;i>2;i--){
   let removedGuest=guest.pop()
    console.log(`Sorry boy ${removedGuest} I can't invite you for dinner`);
    }

//question 17 part 3 
    console.log(`${guest} You are still invited`);

    // question 17 part 4
    guest.pop()
    guest.pop()
    console.log("Guests after dinner :",guest);
    


    
    