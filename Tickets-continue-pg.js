let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;


//Srilankan adult//
document.getElementById("decrease1").onclick=function(){

  if(count1>0) {
    count1-=1
  }
    document.getElementById("Countlbl1").innerHTML=count1;
    document.getElementById("SLA").innerHTML= count1+ "";
        document.getElementById("charges1").innerHTML=count1*4+"USD";
    return count1;
}
document.getElementById("increase1").onclick=function(){
   
    count1+=1;
    document.getElementById("Countlbl1").innerHTML=count1;
    document.getElementById("SLA").innerHTML=count1+ "";
        document.getElementById("charges1").innerHTML=count1*4+"USD";

    return count1
}


//Srilankan child//
document.getElementById("decrease2").onclick=function(){
  if(count2>0){
    count2-=1}
    document.getElementById("Countlbl2").innerHTML=count2;
    document.getElementById("SLC").innerHTML=count2+ "";
    document.getElementById("charges2").innerHTML=count2*2+"USD";
}
document.getElementById("increase2").onclick=function(){
  count2+=1;
  document.getElementById("Countlbl2").innerHTML=count2;
  document.getElementById("SLC").innerHTML=count2+ "";
  document.getElementById("charges2").innerHTML=count2*2+"USD";
}

//Forigen Adults//
document.getElementById("decrease3").onclick=function(){
  if(count3>0){
    count3-=1}
    document.getElementById("Countlbl3").innerHTML=count3;
    document.getElementById("FA").innerHTML=count3+ "";
    document.getElementById("charges3").innerHTML=count3*10+"USD";
}
document.getElementById("increase3").onclick=function(){
  count3+=1;
  document.getElementById("Countlbl3").innerHTML=count3;
  document.getElementById("FA").innerHTML=count3+ "";
    document.getElementById("charges3").innerHTML=count3*10+"USD";
}

//Forigen Child//
document.getElementById("decrease4").onclick=function(){
  if(count4>0){
    count4-=1}
    document.getElementById("Countlbl4").innerHTML=count4;
    document.getElementById("FC").innerHTML=count4+ "";
    document.getElementById("charges4").innerHTML=count4*5+"USD";
    
}
document.getElementById("increase4").onclick=function(){
  count4+=1;
  document.getElementById("Countlbl4").innerHTML=count4;
  document.getElementById("FC").innerHTML=count4+ "";
    document.getElementById("charges4").innerHTML=count4*5+"USD";
}

//Infaunt//
document.getElementById("decrease5").onclick=function(){
  if(count5>0){
    count5-=1}
    document.getElementById("Countlbl5").innerHTML=count5;
    document.getElementById("I").innerHTML=count5+ "";
    document.getElementById("charges5").innerHTML="0USD";
}
document.getElementById("increase5").onclick=function(){
  count5+=1;
  document.getElementById("Countlbl5").innerHTML=count5;
  document.getElementById("I").innerHTML=count5+ "";
    document.getElementById("charges5").innerHTML="0USD";
}



// Get references to elements
const dateInput = document.getElementById("date");
const durationSelect = document.getElementById("duration");
const summaryTable = document.getElementById("summaryTable");
const summaryDate = document.getElementById("summaryDate");
const summaryTime = document.getElementById("summaryTime");
const summaryDuration = document.getElementById("summaryDuration");
const summaryTickets = document.getElementById("summaryTickets");
const summaryTotal = document.getElementById("summaryTotal");

// Guests and their prices
const prices = {
  "Foreigner Adult": { price: 10, peakPrice: 13 },
  "Foreigner Child": { price: 5, peakPrice: 8 },
  "Srilankan Adult": { price: 4, peakPrice: 6 },
  "Srilankan Child": { price: 2, peakPrice: 3 },
  "Infant": { price: 0 }
};

// Initial ticket counts
let ticketCounts = {
  "Foreigner Adult": 0,
  "Foreigner Child": 0,
  "Srilankan Adult": 0,
  "Srilankan Child": 0,
  "Infant": 0
};

// Event listeners for increase and decrease buttons
document.querySelectorAll(".Guests button").forEach((button, index) => {
  button.addEventListener("click", () => {
    const guestType = Object.keys(ticketCounts)[index];
    if (button.id.startsWith("increase")) {
      ticketCounts[guestType]++;
    } else if (button.id.startsWith("decrease")) {
      if (ticketCounts[guestType] > 0) {
        ticketCounts[guestType]--;
      }
    }
    updateSummary();
  });
});



// Calculate the total payable based on user selections
function calculateTotal() {
  // Retrieve selected values
  const selectedDate = document.getElementById("date").value;
  const selectedDuration = document.getElementById("duration").value;
  const slAdultCount = parseInt(document.getElementById("Countlbl1").textContent);
  const slChildCount = parseInt(document.getElementById("Countlbl2").textContent);
  const foreignAdultCount = parseInt(document.getElementById("Countlbl3").textContent);
  const foreignChildCount = parseInt(document.getElementById("Countlbl4").textContent);
  const infantCount = parseInt(document.getElementById("Countlbl5").textContent);

  // Calculate charges based on selected counts
  const slAdultCharge = slAdultCount * (selectedDuration === "4" ? 6 : 4);
  const slChildCharge = slChildCount * (selectedDuration === "4" ? 3 : 2);
  const foreignAdultCharge = foreignAdultCount * (selectedDuration === "4" ? 13 : 10);
  const foreignChildCharge = foreignChildCount * (selectedDuration === "4" ? 8 : 5);

  // Calculate total payable
  const totalPayable = slAdultCharge + slChildCharge + foreignAdultCharge + foreignChildCharge;

  // Update summary table
  document.getElementById("summaryDate").textContent = selectedDate;
  document.getElementById("summaryTime").textContent = document.getElementById("duration").options[document.getElementById("duration").selectedIndex].text;
  document.getElementById("summaryDuration").textContent = selectedDuration;
  document.getElementById("summaryTickets").textContent = `${slAdultCount} SL Adults, ${slChildCount} SL Children, ${foreignAdultCount} Foreigner Adults, ${foreignChildCount} Foreigner Children, ${infantCount} Infants`;
  document.getElementById("summaryTotal").textContent = totalPayable;

  // Store values in local storage
  const summaryData = {
    date: selectedDate,
    duration: selectedDuration,
    slAdultCount,
    slChildCount,
    foreignAdultCount,
    foreignChildCount,
    infantCount,
    totalPayable
  };
  localStorage.setItem("summaryData", JSON.stringify(summaryData));
}

// Handle count changes for guests
function handleCountChange(btnId, lblId, change) {
  const countLabel = document.getElementById(lblId);
  let count = parseInt(countLabel.textContent);
  count = Math.max(0, count + change); // Ensure count is not negative
  countLabel.textContent = count;
  calculateTotal();
}

// Add event listeners for count change buttons
document.getElementById("increase1").addEventListener("click", () => handleCountChange("increase1", "Countlbl1", 1));
document.getElementById("decrease1").addEventListener("click", () => handleCountChange("decrease1", "Countlbl1", -1));
// Similar listeners for other guest types...

// Handle date and duration changes
document.getElementById("date").addEventListener("change", calculateTotal);
document.getElementById("duration").addEventListener("change", calculateTotal);

// Initial calculation on page load
calculateTotal();

// To retrieve data from local storage and pre-fill the page
document.addEventListener("DOMContentLoaded", () => {
  const summaryData = JSON.parse(localStorage.getItem("summaryData"));
  if (summaryData) {
    document.getElementById("date").value = summaryData.date;
    document.getElementById("duration").value = summaryData.duration;
    document.getElementById("Countlbl1").textContent = summaryData.slAdultCount;
    document.getElementById("Countlbl2").textContent = summaryData.slChildCount;
    document.getElementById("Countlbl3").textContent = summaryData.foreignAdultCount;
    document.getElementById("Countlbl4").textContent = summaryData.foreignChildCount;
    document.getElementById("Countlbl5").textContent = summaryData.infantCount;
    calculateTotal(); // Update summary table
  }
});





