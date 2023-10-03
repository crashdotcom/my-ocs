


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
    const display = document.getElementById("display");
    let lightDark = 1;
    
    subButton.addEventListener("click",(event)=>{
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

    display.addEventListener("click",(event)=>{
        console.log("pressed button");
        if(lightDark > 0){
            document.documentElement.style.setProperty("--backgroundclr", "black");
            document.documentElement.style.setProperty("--txtclr", "rgb(218, 218, 218)");
            document.documentElement.style.setProperty("--linkhvr", "#1b1b1b");
            lightDark *=-1;
        }
        else{
            document.documentElement.style.setProperty("--backgroundclr", "rgb(218, 218, 218)");
            document.documentElement.style.setProperty("--txtclr","black");
            document.documentElement.style.setProperty("--linkhvr", "rgb(185, 178, 178)");
            lightDark *= -1;
        }
    })

});