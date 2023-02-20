/*eslint-env browser*/
//Samruddhi Somwanshi
//Red ID: 828286661

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let employees = document.getElementById('employees');
let employeeCount = document.getElementById("empCount");


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
     e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employees.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExtension = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDept = row.insertCell(4);
    let cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm delete';
    deleteButton.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    employeeCount.textContent = count;
});

// DELETE EMPLOYEE

employees.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure, do you want to delete the record? This process cannot be undone.')) {
            let newRow  = e.target.parentNode.parentNode;
            employees.deleteRow(newRow .rowIndex);
            count--;
            employeeCount.textContent = count;
        }
    }
});
