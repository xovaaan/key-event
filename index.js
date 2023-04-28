let text = document.querySelector("textarea");
text.addEventListener("keyup", function(){
    console.log("keyup");
})
text.addEventListener("keypress", function(){
    console.log("keypress");
})
text.addEventListener("keydown", function(e){
    if(e.repeat){
        alert("do not repeat")
    }
})