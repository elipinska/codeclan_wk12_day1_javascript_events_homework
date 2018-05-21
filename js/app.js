document.addEventListener('DOMContentLoaded', () => {

  const savedItems = document.getElementById('savedItems');

  const resultsTable = document.createElement('table');
  const tableHeadings = ['Title', 'Author', 'Category', 'Topic'];
  resultsTable.setAttribute("id", "resultsTable");

  tableHeadings.forEach((heading) => {
    const newHeading = document.createElement('th');
    newHeading.textContent = heading;
    resultsTable.appendChild(newHeading);
  });

  savedItems.appendChild(resultsTable);

  const form = document.getElementById('form');

  form.addEventListener('submit', handleSubmission);

});

function handleSubmission(event) {
  const resultsTable = document.getElementById('resultsTable');

  const newTableRow = document.createElement('tr');
  const newEntry = [this.title.value, this.author.value, this.category.value, this.topic.value];

  console.log(newEntry);

  newEntry.forEach((field)=> {
    const newTableData = document.createElement('td');
    newTableData.textContent = field;
    newTableRow.appendChild(newTableData);
  });

  resultsTable.appendChild(newTableRow);
  event.preventDefault();
}
