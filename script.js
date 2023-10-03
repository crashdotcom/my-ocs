


// class Msg{
//     constructor(nameIn, messageIn){
//         this.name = nameIn;
//         this.message = messageIn;
//         this.next = null;
//     }
// }

// class Comm{
//     constructor(headIn){
//         this.head = headIn;
//         this.cur = headIn;
//     }
// }

// function addMessage(){
//     if(!commList){
//         commList = new Msg(userName.value, message.value);
//         return;
//     }
//     let temp = new Msg(userName.value, message.value);
//     commList.next = temp;
// }

// commList = null;

// subButton.addEventListener("click",addMessage);
document.addEventListener("DOMContentLoaded", (event) => {
    const subButton = document.getElementById("submitButton");
    const message = document.getElementById("messageSubmission")
    const userName = document.getElementById("nameSubmission")
    const commSection = document.getElementById("commSection");
    
    subButton.addEventListener("click",(event)=>{
        console.log(userName.value == "");
        if(message.value != ""){
            temp = document.createElement("li");
            if(userName.value != ""){
                text = document.createTextNode(`${userName.value} says: ${message.value}`);
            }
            else{
                text = document.createTextNode(`Anonymous says: ${message.value}`);
            }
            temp.appendChild(text);
            commSection.append(temp);
            message.value = "";
            userName.value = "";
        }
    });
});