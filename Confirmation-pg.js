document.addEventListener("DOMContentLoaded", () => {
    const summaryData = JSON.parse(localStorage.getItem("summaryData"));
    if (summaryData) {
      // Load summary table data
      const summaryTable = document.getElementById("summaryTable");
      
      // Create and append table rows based on summaryData
      const rows = [
        ["Date", summaryData.date],
        ["Duration", summaryData.duration],
        ["SL Adults", summaryData.slAdultCount],
        ["SL Children", summaryData.slChildCount],
        ["Foreigner Adults", summaryData.foreignAdultCount],
        ["Foreigner Children", summaryData.foreignChildCount],
        ["Infants", summaryData.infantCount],
        ["Total Payable", summaryData.totalPayable.toFixed(2)]
      ];
  
      rows.forEach(row => {
        const newRow = summaryTable.insertRow();
        newRow.insertCell(0).textContent = row[0];
        newRow.insertCell(1).textContent = row[1];
      });
    }
  });
  