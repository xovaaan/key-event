let text = document.querySelector("textarea");
text.addEventListener("keydown", function(){
    console.log("keydown");
})
text.addEventListener("keypress", function(){
    console.log("keypress");
})
text.addEventListener("keyup", function(e){
    console.log(e.code);
})