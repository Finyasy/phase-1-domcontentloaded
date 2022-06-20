//write your code here
//Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"
document.addEventListener("DOMContentLoaded",function(){
    const elem = document.getElementById("text").textContent = "This is really cool!";
})