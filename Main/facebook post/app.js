
function setBackground() {
    
    var postBackground=document.getElementById("post-background");
    postBackground.style.backgroundImage='url(' + event.target.src +')'
    console.log(event.target.src)

}
function changeColor(){
    console.log(event.target.value)
    var textArea=document.getElementById("text-area");
    textArea.style.color=event.target.value

}
function changeStyle() {
    var textArea=document.getElementById("text-area");
    var  type=event.target.innerText;
if(type==="B") {
    if (textArea.style.fontWeight==="bold") {
        textArea.style.fontWeight="normal"
        event.target.style.backgroundColor= "#fff"
    }
    else{
        textArea.style.fontWeight="bold"
        event.target.style.backgroundColor="grey"
    }
}
if(type==="I") {
    if (textArea.style.fontStyle==="italic") {
        textArea.style.fontStyle="normal"
        event.target.style.backgroundColor= "#fff"
    }
    else{
        textArea.style.fontStyle="italic"
        event.target.style.backgroundColor="grey"
    }
}

if(type==="U") {
    if (textArea.style.textDecoration==="underline") {
        textArea.style.textDecoration="none"
        event.target.style.backgroundColor= "#fff"
    }
    else{
        textArea.style.textDecoration="underline"
        event.target.style.backgroundColor="grey"
    }
}

}
function changeFontSize(){
    var textArea=document.getElementById("text-area");
    textArea.style.fontSize=event.target.value + "px"
}


