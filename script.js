let table = document.querySelector('#sampleTable');
let rowCount = 1;
function insert_Row() {
    //Write your code here
  let row = table.insertRow(0); // Insert new row at top

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.textContent = `New Cell1Row${rowCount} cell1`;
  cell2.textContent = `New Cell2Row${rowCount} cell2`;

  rowCount++; // Increment for next row
}
