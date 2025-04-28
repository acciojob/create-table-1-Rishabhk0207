let table = document.querySelector('#sampleTable');

function insert_Row() {
    //Write your code here
  let row= document.createElement('tr');
  let col= document.createElement('td');
  col.textContent ='New Cell1';
  row.appendChild(col);
  let col1= document.createElement('td');
  col1.textContent= 'New Cell2';
  row.appendChild(col1);

  tbody.insertBefore(row, tbody.firstChild);
}
