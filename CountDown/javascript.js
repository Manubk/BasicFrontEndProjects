const endDate = "30 march 2023 02:00 pm";

document.getElementById("end-date").innerText = endDate;


// function to countdown
function countDate(){
const elements = document.getElementsByTagName("input");
const end = new Date(endDate);
const now = new Date();
//value in milliseconds -> converted to seconds
const diff = (end - now)/1000 ;

if(diff < 0)
 return;
 console.log("mill -> "+diff/24/60/60);

//  calculating Days
 elements[0].value = Math.floor(diff/24/60/60);
//  claculating Hours
 elements[1].value = Math.floor((diff/3600)%24);
//  calculating minuts
 elements[2].value = Math.floor((diff/60)%60)
//  calculating seconds
 elements[3].value = Math.floor(diff%60);
}

setInterval(() => {countDate()},1000);