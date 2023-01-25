# Liav
<table id="statTable">
    <tr>
        <td>Date</td>
        <td>Weight</td>
        <td>Height</td>
        <td>Bench</td>
        <td>Squat</td>
    </tr>
     <tr>
        <td>01/12/23</td>
        <td>130</td>
        <td></td>
        <td>120</td>
        <td></td>
    </tr>
     <tr>
        <td>01/11/23</td>
        <td></td>
        <td></td>
        <td></td>
        <td>225</td>
    </tr>
    <tr>
        <td>01/05/23</td>
        <td>125</td>
        <td>5'6</td>
        <td>115</td>
        <td>215</td>
    </tr>
</table>


# Add New Max
<table>
    <tr>
        <th><label for="date">Date</label></th>
        <th><label for="weight">New Weight</label></th>
        <th><label for="height">New Height</label></th>
        <th><label for="bench">New Bench Max</label></th>
        <th><label for="hours">New Squat Max</label></th>
    </tr>
    <tr>
        <td><input type="text" name="date" id="date" required></td>
        <td><input type="text" name="weight" id="weight" required></td>
        <td><input type="text" name="height" id="height" required></td>
        <td><input type="text" name="bench" id="bench" required></td>
        <td><input type="text" name="squat" id="squat" required></td>
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
  var table = document.getElementById("statTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = document.getElementById("date").value;
  cell2.innerHTML = document.getElementById("weight").value;
  cell3.innerHTML = document.getElementById("height").value;
  cell4.innerHTML = document.getElementById("bench").value;
  cell5.innerHTML = document.getElementById("squat").value;
}

function delete_Entry() {
    var table = document.getElementById("statTable");
    document.getElementsByTagName("tr")[document.getElementById("num").value].remove();
}

</script>