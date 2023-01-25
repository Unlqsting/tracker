<table id="gymTable">
    <tr>
        <td>Athlete</td>
        <td>Target Muscle Group</td>
        <td>Exercises</td>
        <td>Gym Location</td>
        <td>Time in Gym (Hours)</td>
    </tr>
    <tr>
        <td>Liav</td>
        <td>Legs</td>
        <td>3x12 Leg Press, 3x12 Squat, 3x14 Calf Raise, Hip Thrusters</td>
        <td>LA Fitness</td>
        <td>10 Hours</td>
    </tr>
    <tr>
        <td>Noor</td>
        <td>Chest</td>
        <td>3x12 Bench Press, 3x12 Chest Press, 3x30 Band Pushup, 3x12 Dumbell Incline Bench Press</td>
        <td>24 Hour Fitness</td>
        <td>12 hours</td>
    </tr>
</table>


# Add an entry
<table>
    <tr>
        <th><label for="athlete">Athlete</label></th>
        <th><label for="muscle">Muscle Group</label></th>
        <th><label for="exercise">Exercise</label></th>
        <th><label for="location">Gym Location</label></th>
        <th><label for="hours">Hours in the Gym</label></th>
    </tr>
    <tr>
        <td><input type="text" name="athlete" id="athlete" required></td>
        <td><input type="text" name="muscle" id="muscle" required></td>
        <td><input type="text" name="exercise" id="exercise" required></td>
        <td><input type="text" name="location" id="location" required></td>
        <td><input type="text" name="hours" id="hours" required></td>
        <td ><button onclick="create_Entry()">Add</button></td>
    </tr>
</table>

# Remove an entry
<table>
    <tr>
        <th><label for="num">Entry Number to Remove</label></th>
    </tr>
    <tr>
        <td><input type="number" name="num" id="num" required></td>
        <td ><button onclick="delete_Entry()">Delete</button></td>
    </tr>
</table>

<script>
function create_Entry() {
  var table = document.getElementById("gymTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = document.getElementById("athlete").value;
  cell2.innerHTML = document.getElementById("muscle").value;
  cell3.innerHTML = document.getElementById("exercise").value;
  cell4.innerHTML = document.getElementById("location").value;
  cell5.innerHTML = document.getElementById("hours").value;
}

function delete_Entry() {
    var table = document.getElementById("gymTable");
    document.getElementsByTagName("tr")[document.getElementById("num").value].remove();
}

</script>