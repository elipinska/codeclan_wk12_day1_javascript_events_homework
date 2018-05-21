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

  const newEntry = {title: this.title.value,
    authorb: this.author.value,
    category: this.category.value,
    topic: this.topic.value
  };


  function isEmpty(formSubmission) {
   const result = false;
   for (let property in formSubmission) {
     if (formSubmission[property].length === 0) {
       return true
     }
   }
   return result;
  }

  if (isEmpty(newEntry)) {
    console.warn("You have an empty field");
  } else {
    for (let property in newEntry) {
      const newTableData = document.createElement('td');
      newTableData.textContent = newEntry[property];
      newTableRow.appendChild(newTableData);
    }

    resultsTable.appendChild(newTableRow);
    form.reset();

  }
event.preventDefault();

}
