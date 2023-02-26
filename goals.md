<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Goals</title>
    <link rel="stylesheet" href="goals.css">
    <link rel="oogabooga">
</head>
<body>
  <main class = "table"> 
      <section class="table_header">
        <h1>Goals</h1>
        </section>
      <section class="table_body">
        <table>
          <thead>
            <tr>
              <th> id </th>
              <th> Goal </th>
              <th> Difficulty </th>
              <th> Date </th>
            <tbody>
              <tr>
                <td> 1 </td>
                <td> Bench 135 </td>
                <td> 7 </td>
                <td> 2/25/2023</td>
              </tr>
              <tr>
                <td> 2 </td>
                <td> Squat 225 </td>
                <td> 8 </td>
                <td> 2/25/2023</td>
              </tr>
            </tbody>


  <script>
function addRow() {
  // Get the table element
  var table = document.querySelector('table');

  // Create a new row
  var newRow = table.insertRow(-1);

  // Add cells to the new row
  var idCell = newRow.insertCell(0);
  var goalCell = newRow.insertCell(1);
  var diffCell = newRow.insertCell(2);
  var dateCell = newRow.insertCell(3);

  // Set the cell values for the new row
  idCell.innerHTML = table.rows.length - 1;
  goalCell.innerHTML = document.getElementById('goal').value;
  diffCell.innerHTML = document.getElementById('diff').value;
  dateCell.innerHTML = new Date().toLocaleDateString(); // Use current date
}

// fetch('http://localhost:8086/api/sport/')
//   .then((response) => response.json())
//   .then((data) => this.addRow())


// function makeRow() {
//   post res
// }
    </script>



 
<form action="http://127.0.0.1:8086/api/sport/create" method="post">
    <label for="goal">Goal:</label><br>
    <input type="text" id="goal" name="goal" placeholder="enter your goal"><br>
    <!--  -->
    <label for="difficulty">Difficulty:</label><br>
    <input type="text" id="diff" name="diff" placeholder="enter difficulty (1-10)"><br><br>
    <!--  -->
    <input type="submit" value="Submit">

</form> 
<br>
<br>
<button onclick="addRow()">Add Row</button>



