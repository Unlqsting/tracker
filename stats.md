# Athlete Stats

### Liav
<style>
    .stats {
        width: 400px;
    }
</style>

<table id="statTable">
    <tr>
        <td>Date</td>
        <td>Age</td>
        <td>Weight</td>
        <td>Height</td>
        <td>Bench</td>
        <td>Squat</td>
        <td>Pull-Up</td>
        <td>Mile</td>
    </tr>
     <tr>
        <td>01/12/23</td>
        <td></td>
        <td>130</td>
        <td></td>
        <td>120</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
     <tr>
        <td>01/11/23</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>225</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>01/05/23</td>
        <td>16</td>
        <td>125</td>
        <td>5'6</td>
        <td>115</td>
        <td>215</td>
        <td>21</td>
        <td>6:42</td>
    </tr>
</table>


## Add New Max
<table class="stats">
    <tr>
        <th><label for="date">Date</label></th>
        <th><label for="age">Age</label></th>
        <th><label for="weight">Weight</label></th>
        <th><label for="height">Height</label></th>
    </tr>
    <tr>
        <td><input type="text" name="date" id="date" required></td>
        <td><input type="text" name="age" id="age" required></td>
        <td><input type="text" name="weight" id="weight" required></td>
        <td><input type="text" name="height" id="height" required></td>
    </tr>
     <tr>
        <th><label for="hours">New Squat Max</label></th>
        <th><label for="bench">New Bench Max</label></th>
        <th><label for="pullup">New Pull-Up Max</label></th>
        <th><label for="pullup">New Mile Time</label></th>
    </tr>
    <tr>
        <td><input type="text" name="squat" id="squat" required></td>
        <td><input type="text" name="bench" id="bench" required></td>
        <td><input type="text" name="pullup" id="pullup" required></td>
        <td><input type="text" name="mile" id="mile" required></td>
    </tr>
    <tr>
        <td ><button onclick="create_Entry()">Add</button></td>
        <td ><button onclick="create_Entry()">Add</button></td>
        <td ><button onclick="create_Entry()">Add</button></td>
        <td ><button onclick="create_Entry()">Add</button></td>
    </tr>
</table>

## Remove an entry
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
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  cell1.innerHTML = document.getElementById("date").value;
  cell2.innerHTML = document.getElementById("age").value;
  cell3.innerHTML = document.getElementById("weight").value;
  cell4.innerHTML = document.getElementById("height").value;
  cell5.innerHTML = document.getElementById("bench").value;
  cell6.innerHTML = document.getElementById("squat").value;
  cell7.innerHTML = document.getElementById("pullup").value;
  cell8.innerHTML = document.getElementById("mile").value;
}

function delete_Entry() {
    var table = document.getElementById("statTable");
    document.getElementsByTagName("tr")[document.getElementById("num").value].remove();
}

</script>

# Optimal Exersizes

## Bench Press
### Engages Chest, Triceps, Core

![]({{site.baseurl}}/images/home.png "https://github.com/Unlqsting/tracker") 

## Squat
### Engages Hamstrings, Quads, Calves, Core

![]({{site.baseurl}}/images/home.png "https://github.com/Unlqsting/tracker") 

## Pull-Up
### Engages Lats, Traps, Biceps, Core

![]({{site.baseurl}}/images/home.png "https://github.com/Unlqsting/tracker") 

## Mile
### Cardio, Heart and Lung Health

![]({{site.baseurl}}/images/home.png "https://github.com/Unlqsting/tracker") 