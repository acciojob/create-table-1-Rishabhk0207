let table = document.querySelector('#sampleTable');

function insert_Row() {
    //Write your code here
 let row = table.insertRow(0); // Insert a row at the top (index 0)
  let cell1 = row.insertCell(0); // Insert a cell at position 0
  let cell2 = row.insertCell(1); // Insert a cell at position 1
  
  cell1.textContent = 'New Cell 1';
  cell2.textContent = 'New Cell 2';
}
