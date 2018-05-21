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

  const newTableRow = document.createElement('tr');

  const newEntry = {title: this.title.value,
    author: this.author.value,
    category: this.category.value,
    topic: this.topic.value
  };


  if (isEmpty(newEntry)) {
    warning.textContent = "Please complete marked fields."
  } else {
    warning.textContent = "";
    for (let property in newEntry) {
      removeBorder(property);
      const newTableData = document.createElement('td');
      newTableData.textContent = newEntry[property];
      newTableRow.appendChild(newTableData);
    }

    resultsTable.appendChild(newTableRow);
    form.reset();


  }
event.preventDefault();

}


function isEmpty(formSubmission) {
 let result = false;
 for (let property in formSubmission) {
   if (formSubmission[property].length === 0) {
     addBorder(property);
     result = true;
   }
 }
 return result;
}

function addBorder(element) {
  document.getElementById(element).style.border = "thin dotted red";
}

function removeBorder(element) {
  document.getElementById(element).style.border = "none";
}
