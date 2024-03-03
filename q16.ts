// question 16 part 1
 guest=["A.Hadi","Naveed","Zuhaib","Amjad","Junaid","Rashid"]
for(let i=0;i<guest.length;i++){
    let msg="Hey!,"+guest[i]+" I am inviting you to dinner."
    console.log(msg);
    }
    console.log("Hey I am inviting more friends because I have found a bigger dinner table");

// question 16 part 2
      guest=["A.Hadi","Naveed","Zuhaib","Amjad","Junaid","Rashid"]
       let GuestatBeginning="Majid"
       guest.unshift(GuestatBeginning)
   
for(let i=0;i<guest.length;i++){
    let msg=`Hey! ${guest[i]} I am inviting you to dinner.`
    console.log(msg);
    }
    

// question 16 part 3
 guest=["A.Hadi","Naveed","Zuhaib","Amjad","Junaid","Rashid"]
let GuestatMid="Abdul Haseeb"
let guestmidIndex=Math.floor(guest.length/2)
guest.splice(guestmidIndex,0,GuestatMid)
console.log(guest);

for(let i=0;i<guest.length;i++){
    let msg=`Hey! ${guest[i]} I am inviting you to dinner.`
    console.log(msg);
     }

// question 16 part 4
let Guestatend="Abdul Qadir"
guest.push(Guestatend)
console.log(guest)

    





    