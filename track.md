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
<form id="myForm" action="https://lennsflask.duckdns.org/api/user/create" method="post">

  <label for="Workout">Workout:</label><br>
  <input type="text" id="Workout" name="Workout" placeholder="What Workout?"><br>

  <label for="Sets">Sets:</label><br>
  <input type="text" id="Sets" name="Sets" placeholder="How many Sets?"><br><br>

  <label for="Reps">Reps:</label><br>
  <input type="text" id="Reps" name="Reps" placeholder="How many Reps?"><br><br>

  <input type="submit" value="Submit">

<script>
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submit behavior
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.send(formData);
  });
</script>
</form>
  <button onclick="create_row()">Add Row</button>
<table id = "result">
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

  function add_row(data) {
    const tr = document.createElement("tr");
    const Workout = document.createElement("th");
    const Reps = document.createElement("th");
    const Sets = document.createElement("th");

    Workout.innerHTML = data.Workout; 
    Sets.innerHTML = data.Sets; 
    Reps.innerHTML = data.Reps;

    tr.appendChild(Workout);
    tr.appendChild(Sets);
    tr.appendChild(Reps);

    resultContainer.appendChild(tr);
  }

  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");
  // prepare URL's to allow easy switch from deployment and localhost
  const url = "https://lennsflask.duckdns.org/api/user"
  const create_fetch = url + '/create';
  const read_fetch = url + '/';

  read_users();

  function read_users() {
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

    function create_row(){
    //Validate Password (must be 6-20 characters in len)
    //verifyPassword("click");
    const body = {
        Workout: document.getElementById("Workout").value,
        Sets: document.getElementById("Sets").value,
        Reps: document.getElementById("Reps").value,
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
          const th = document.createElement("th");
          td.innerHTML = errorMsg;
          th.appendChild(th);
          resultContainer.appendChild(th);
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
      </script>
  </main>
</body>
</html>


  </section>

  </div>
  </body>
</html>