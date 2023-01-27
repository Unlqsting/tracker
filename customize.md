# Enter your information below in-order to update your user information

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Customization</title>
    {% include home.html %}
    <link rel="stylesheet" href="customize.css">
</head>

<body>
    <div class="customWrap">
        <div class="userData">
          <form action="createUser()">
            <label for="username">User Name</label><br>
            <input type="text" id="user" placeholder="Ex: Unlqsting"><br><br>
            <!--  -->
            <label for="cWeight">Current Weight</label><br>
            <input type="number" id="cWeight" placeholder="Enter weight in lbs" min="50"><br><br>
            <!--  -->
            <label for="gWeight">Goal weight</label><br>
            <input type="number" id="gWeight" placeholder="Enter weight in lbs" min="50"><br><br>
            <!--  -->
            <label for="age">Age</label><br>
            <input type="date" id="age" placeholder="Enter your age"><br><br>
            <!--  -->
            <input type="submit" value="Save">
          </form>             
        </div>
    </div>
    <button type="button" class="login-with-google-btn" >
      Sign in with Google
    </button> 
</body>

<script src="customize.js">
  
</script>
