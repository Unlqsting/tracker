# Athlete Stats

<p>Athlete API</p>

<table id = "result">
  <thead>
  <tr>
    <th>Age</th>
    <th>Weight</th>
    <th>Bench</th>
    <th>Squat</th>
    <th>Pullup</th>
    <th>Mile</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<p>Create API</p>

<form action="javascript:create_athlete()">
    <p><label>
       Age:
        <input type="text" name="Age" id="Age" required>
    </label></p>
    <p><label>
        Weight:
        <input type="text"  id="Weight" required>
    </label></p>
    <p><label>
        Bench:
        <input type="text"  id="Bench" required>
    </label></p>
     <p><label>
        Squat:
        <input type="text"  id="Squat" required>
    </label></p>
     <p><label>
        Pull-up:
        <input type="text" id="Pullup" required>
    </label></p>
     <p><label>
        Mile:
        <input type="text"  id="Mile" required>
    </label></p>
    <p>
        <button>Create</button>
    </p>
</form>

<script>
  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");
  // prepare URL's to allow easy switch from deployment and localhost
  const url = "https://lennsflask.duckdns.org/api/athlete"
  //const url = "http://172.19.104.182:8086/api/athlete"
  const create_fetch = url + '/create';
  const read_fetch = url + '/';

  // Load users on page entry
  read_athletes();


  // Display User Table, data is fetched from Backend Database
  function read_athletes() {
    // prepare fetch options
    const read_options = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
    };

    // fetch the data from API
    fetch(read_fetch, read_options)
      // response is a RESTful "promise" on any successful fetch
      .then(response => {
        // check for response errors
        if (response.status !== 200) {
            const errorMsg = 'Database read error: ' + response.status;
            console.log(errorMsg);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = errorMsg;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
            return;
        }
        // valid response will have json data
        response.json().then(data => {
            console.log(data);
            for (let row in data) {
              console.log(data[row]);
              add_row(data[row]);
            }
        })
    })
    // catch fetch errors (ie ACCESS to server blocked)
    .catch(err => {
      console.error(err);
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerHTML = err;
      tr.appendChild(td);
      resultContainer.appendChild(tr);
    });
  }

  function create_athlete(){
    //Validate Password (must be 6-20 characters in len)
    //verifyPassword("click");
    const body = {
        Age: document.getElementById("Age").value,
        Weight: document.getElementById("Weight").value,
        Bench: document.getElementById("Bench").value,
        Squat: document.getElementById("Squat").value,
        Pullup: document.getElementById("Pullup").value,
        Mile: document.getElementById("Mile").value
    };
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            'Authorization': 'Bearer my-token',
        },
    };

    // URL for Create API
    // Fetch API call to the database to create a new user
    fetch(create_fetch, requestOptions)
      .then(response => {
        // trap error response from Web API
        if (response.status !== 200) {
          const errorMsg = 'Database create error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
        }
        // response contains valid result
        response.json().then(data => {
            console.log(data);
            //add a table row for the new/created userid
            add_row(data);
        })
    })
  }

  function add_row(data) {
    const tr = document.createElement("tr");
    const Age = document.createElement("td");
    const Weight = document.createElement("td");
    const Bench = document.createElement("td");
    const Squat = document.createElement("td");
    const Pullup = document.createElement("td");
    const Mile = document.createElement("td");
  

    // obtain data that is specific to the API
    Age.innerHTML = data.Age; 
    Weight.innerHTML = data.Weight; 
    Bench.innerHTML = data.Bench;
    Squat.innerHTML = data.Squat; 
    Pullup.innerHTML = data.Pullup; 
    Mile.innerHTML = data.Mile; 
    

    // add HTML to container
    tr.appendChild(Age);
    tr.appendChild(Weight);
    tr.appendChild(Bench);
    tr.appendChild(Squat);
    tr.appendChild(Pullup);
    tr.appendChild(Mile);

    resultContainer.appendChild(tr);
  }

</script>



### Chart

<table id="statTable">
    <tr id = "row 1">
        <td>Date</td>
        <td>Age</td>
        <td>Weight</td>
        <td>Bench</td>
        <td>Squat</td>
        <td>Pull-Up</td>
        <td>Mile</td>
    </tr>
    <tr>
      <td>02/02/23</td>
        <td></td>
        <td>135</td>
        <td>130</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
     <tr>
        <td>01/12/23</td>
        <td></td>
        <td>130</td>
        <td>120</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
     <tr>
        <td>01/11/23</td>
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
    <tr>
        <td><input type="text" name="date" id="date" required></td>
    <tr>
        <td ><button onclick="create_Entry()">Add Entry to Chart</button></td>
    </tr>
    <tr>
        <th><label for="age">Age</label></th>
        <th><label for="weight">Weight</label></th>
        <th><label for="Bench">New Bench Max</label></th>
    </tr>
    <tr>
        <td><input type="text" name="age" id="age" required></td>
        <td><input type="text" name="weight" id="weight" required></td>
        <td><input type="text" name="bench" id="bench" required></td>
    </tr>
    <tr>
        <td ><button onclick="create_Entry()">Add Record</button></td>
        <td ><button onclick="create_Entry()">Add Record</button></td>
        <td ><button onclick="create_Entry()">Add Record</button></td>
    </tr>
    </tr>
        <th><label for="squat">New Squat Max</label></th>
        <th><label for="pullup">New Pull-Up Max</label></th>
        <th><label for="mile">New Mile Time</label></th>
    </tr>
    <tr>
        <td><input type="text" name="squat" id="squat" required></td>
        <td><input type="text" name="pullup" id="pullup" required></td>
        <td><input type="text" name="mile" id="mile" required></td>
    </tr>
    <tr>
        <td ><button onclick="record_Entry()">Add Record</button></td>
        <td ><button onclick="create_Entry()">Add Record</button></td>
        <td ><button onclick="create_Entry()">Add Record</button></td>
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
  cell1.innerHTML = document.getElementById("date").value;
  cell2.innerHTML = document.getElementById("age").value;
  cell3.innerHTML = document.getElementById("weight").value;
  cell4.innerHTML = document.getElementById("bench").value;
  cell5.innerHTML = document.getElementById("squat").value;
  cell6.innerHTML = document.getElementById("pullup").value;
  cell7.innerHTML = document.getElementById("mile").value;
}

function record_Entry() {
  var table = document.getElementById("recordTable");
  var column = table.insertColumn(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  cell1.innerHTML = document.getElementById("age").value;
  cell2.innerHTML = document.getElementById("weight").value;
  cell3.innerHTML = document.getElementById("height").value;
  cell4.innerHTML = document.getElementById("bench").value;
  cell5.innerHTML = document.getElementById("squat").value;
  cell6.innerHTML = document.getElementById("pullup").value;
  cell7.innerHTML = document.getElementById("mile").value;
}

function delete_Entry() {
    document.getElementById("statTable").deleteRow((document.getElementById("num").value));
}

</script>

# Optimal Exersizes

## Bench Press
### Engages Chest, Triceps, Core

![]({{site.baseurl}}/images/bench.png "https://github.com/Unlqsting/tracker") 

## Squat
### Engages Hamstrings, Quads, Calves, Core

![]({{site.baseurl}}/images/squat.png "https://github.com/Unlqsting/tracker") 

## Pull-Up
### Engages Lats, Traps, Biceps, Core

![]({{site.baseurl}}/images/pullup.png "https://github.com/Unlqsting/tracker") 

## Mile
### Cardio, Heart and Lung Health

![]({{site.baseurl}}/images/mile.png "https://github.com/Unlqsting/tracker") 

<style>
    /* generated by rouge http://rouge.jneen.net/ original base16 by Chris Kempson (https://github.com/chriskempson/base16)
*/
    @import url("https://fonts.googleapis.com/css?family=Lato:300italic,700italic,300,700");
    .highlight table td { padding: 5px; }

    .highlight table pre { margin: 0; }

    .highlight, .highlight .w { color: #d0d0d0; }

    .highlight .err { color: #151515; background-color: #ac4142; }

    .highlight .c, .highlight .cd, .highlight .cm, .highlight .c1, .highlight .cs { color: #888; }

    .highlight .cp { color: #f4bf75; }

    .highlight .nt { color: #f4bf75; }

    .highlight .o, .highlight .ow { color: #d0d0d0; }

    .highlight .p, .highlight .pi { color: #d0d0d0; }

    .highlight .gi { color: #90a959; }

    .highlight .gd { color: #ac4142; }

    .highlight .gh { color: #6a9fb5; font-weight: bold; }

    .highlight .k, .highlight .kn, .highlight .kp, .highlight .kr, .highlight .kv { color: #aa759f; }

    .highlight .kc { color: #d28445; }

    .highlight .kt { color: #d28445; }

    .highlight .kd { color: #d28445; }

    .highlight .s, .highlight .sb, .highlight .sc, .highlight .sd, .highlight .s2, .highlight .sh, .highlight .sx, .highlight .s1 { color: #90a959; }

    .highlight .sr { color: #75b5aa; }

    .highlight .si { color: #8f5536; }

    .highlight .se { color: #8f5536; }

    .highlight .nn { color: #f4bf75; }

    .highlight .nc { color: #f4bf75; }

    .highlight .no { color: #f4bf75; }

    .highlight .na { color: #6a9fb5; }

    .highlight .m, .highlight .mf, .highlight .mh, .highlight .mi, .highlight .il, .highlight .mo, .highlight .mb, .highlight .mx { color: #90a959; }

    .highlight .ss { color: #90a959; }

    html { background: #6C7989; background: #6C7989 linear-gradient(#6C7989, #434B55) fixed; height: 100%; }

    .wrapper { width: 740px; margin: 0 auto; background: #DEDEDE; border-radius: 8px; box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px, rgba(0, 0, 0, 0.45) 0 3px 10px; }

    header, section, footer { display: block; }

    a { color: #069; text-decoration: none; }

    p { margin: 0 0 20px; padding: 0; }

    strong { color: #222; font-weight: 700; }

    header { border-radius: 8px 8px 0 0; background: #C6EAFA; background: linear-gradient(#DDFBFC, #C6EAFA); position: relative; padding: 15px 20px; border-bottom: 1px solid #B2D2E1; }
    header h1 { margin: 0; padding: 0; font-size: 24px; line-height: 1.2; color: #069; text-shadow: rgba(255, 255, 255, 0.9) 0 1px 0; }
    header.without-description h1 { margin: 10px 0; }
    header p { margin: 0; color: #61778B; width: 300px; font-size: 13px; }
    header p.view { display: none; font-weight: 700; text-shadow: rgba(255, 255, 255, 0.9) 0 1px 0; -webkit-font-smoothing: antialiased; }
    header p.view a { color: #06c; }
    header p.view small { font-weight: 400; }
    header ul { margin: 0; padding: 0; list-style: none; position: absolute; z-index: 1; right: 20px; top: 20px; height: 38px; padding: 1px 0; background: #5198DF; background: linear-gradient(#77B9FB, #3782CD); border-radius: 5px; box-shadow: inset rgba(255, 255, 255, 0.45) 0 1px 0, inset rgba(0, 0, 0, 0.2) 0 -1px 0; width: auto; }
    header ul:before { content: ''; position: absolute; z-index: -1; left: -5px; top: -4px; right: -5px; bottom: -6px; background: rgba(0, 0, 0, 0.1); border-radius: 8px; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 0, inset rgba(255, 255, 255, 0.7) 0 -1px 0; }
    header ul li { width: 79px; float: left; border-right: 1px solid #3A7CBE; height: 38px; }
    header ul li.single { border: none; }
    header ul li + li { width: 78px; border-left: 1px solid #8BBEF3; }
    header ul li + li + li { border-right: none; width: 79px; }
    header ul a { line-height: 1; font-size: 11px; color: #fff; color: rgba(255, 255, 255, 0.8); display: block; text-align: center; font-weight: 400; padding-top: 6px; height: 40px; text-shadow: rgba(0, 0, 0, 0.4) 0 -1px 0; }
    header ul a strong { font-size: 14px; display: block; color: #fff; -webkit-font-smoothing: antialiased; }

    section { padding: 15px 20px; font-size: 15px; border-top: 1px solid #fff; background: linear-gradient(#fafafa, #DEDEDE 700px); border-radius: 0 0 8px 8px; position: relative; }

    h1, h2, h3, h4, h5, h6 { color: #222; padding: 0; margin: 0 0 20px; line-height: 1.2; }

    p, ul, ol, table, pre, dl { margin: 0 0 20px; }

    h1, h2, h3 { line-height: 1.1; }

    h1 { font-size: 28px; }

    h2 { color: #393939; }

    h3, h4, h5, h6 { color: #494949; }

    blockquote { margin: 0 -20px 20px; padding: 15px 20px 1px 40px; font-style: italic; background: #ccc; background: rgba(0, 0, 0, 0.06); color: #222; }

    img { max-width: 100%; }

    code, pre { font-family: Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal; color: #333; font-size: 12px; overflow-x: auto; }

    pre { padding: 20px; background: #3A3C42; color: #f8f8f2; margin: 0 -20px 20px; }
    pre code { color: #f8f8f2; }
    li pre { margin-left: -60px; padding-left: 60px; }

    table { width: 100%; border-collapse: collapse; }

    th, td { text-align: left; padding: 5px 10px; border-bottom: 1px solid #aaa; }

    dt { color: #222; font-weight: 700; }

    th { color: #222; }

    small { font-size: 11px; }

    hr { border: 0; background: #aaa; height: 1px; margin: 0 0 20px; }

    kbd { background-color: #fafbfc; border: 1px solid #c6cbd1; border-bottom-color: #959da5; border-radius: 3px; box-shadow: inset 0 -1px 0 #959da5; color: #444d56; display: inline-block; font-size: 11px; line-height: 10px; padding: 3px 5px; vertical-align: middle; }

    footer { width: 640px; margin: 0 auto; padding: 20px 0 0; color: #ccc; overflow: hidden; }
    footer a { color: #fff; font-weight: bold; }
    footer p { float: left; }
    footer p + p { float: right; }

    @media print, screen and (max-width: 740px) { body { padding: 0; }
    .wrapper { border-radius: 0; box-shadow: none; width: 100%; }
    footer { border-radius: 0; padding: 20px; width: auto; }
    footer p { float: none; margin: 0; }
    footer p + p { float: none; } }
    @media print, screen and (max-width: 580px) { header ul { display: none; }
    header p.view { display: block; }
    header p { width: 100%; } }
    @media print { header p.view a small:before { content: 'at https://github.com/'; } }
    /* "row style" is flexible size and aligns pictures in center */
    .row { align-items: center; display: flex; }

    /* "column style" is one-third of the width with padding */
    .column { flex: 33.33%; padding: 5px; }

    
    .stats {
        width: 400px;
    }
</style>

