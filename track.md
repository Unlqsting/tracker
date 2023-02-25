<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Goals</title>
    <link rel="stylesheet" href="track.css">
  </head>
  <body>
    <main class="table">
      <section class="table_header">
        <h1>Workout Tracker</h1>
      </section>
      <section class="table_body">
        <form action="http://127.0.0.1:8086/api/user/create" method="post">

  <label for="Workout">Workout:</label><br>
  <input type="text" id="Workout" name="Workout" placeholder="What Workout?"><br>

  <label for="Sets">Sets:</label><br>
  <input type="text" id="Sets" name="Sets" placeholder="How many Sets?"><br><br>

  <label for="Reps">Reps:</label><br>
  <input type="text" id="Reps" name="Reps" placeholder="How many Reps?"><br><br>

  <input type="submit" value="Submit">
</form>
  <button onclick="addRow()">Add Row</button>
<table>
  <thead>
    <tr>
      <th> Workout </th>
      <th> Sets </th>
      <th> Reps </th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
</section>

  <script>
        function addRow() {
          // Get the table element
          var table = document.querySelector('table');

          // Create a new row
          var newRow = table.insertRow(-1);

          // Add cells to the new row
          var WorkoutCell = newRow.insertCell(0);
          var SetsCell = newRow.insertCell(1);
          var RepsCell = newRow.insertCell(2);

          // Get the values of the input fields
          var workoutValue = document.getElementById('Workout').value;
          var setsValue = document.getElementById('Sets').value;
          var repsValue = document.getElementById('Reps').value;

          // Set the cell values for the new row
          WorkoutCell.innerHTML = workoutValue;
          SetsCell.innerHTML = setsValue;
          RepsCell.innerHTML = repsValue;

          // Make a GET request to the API endpoint
          fetch('http://127.0.0.1:8086/api/user/workouts')
            .then(response => response.json())
            .then(data => {
              // Loop through the data and add rows to the table
              data.forEach(workout => {
                var row = table.insertRow(-1);
                var workoutCell = row.insertCell(0);
                var setsCell = row.insertCell(1);
                var repsCell = row.insertCell(2);
                workoutCell.innerHTML = workout.Workout;
                setsCell.innerHTML = workout.Sets;
                repsCell.innerHTML = workout.Reps;
              });
            })
            .catch(error => console.error(error));
        }
      </script>
  </main>
</body>
</html>
