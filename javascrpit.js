
document.getElementById("myButton").onclick=function(){
if(document.getAnimations("myCheckBox").checked){
 console.log("you are subscribed!");
}
else{
    console.log("you are NOT subscribed!");
}
}