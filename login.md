<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In</title>
</head>
<body>
    <div class="logwrap">
        <div class="logbox">
            <h1>Log in</h1>
            <input type="email"  class="emailInp" placeholder="Enter your email">
            <br><br>
            <input type="password"  class="passInp" placeholder="Enter your password">
            <button onclick="login()">Log In</button>
        
        </div>
    </div>    
</body>

<style src="login.css">
    .logwrap {
        background-color: rgb(22, 22, 41);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vh;
        width: 100%;
        height: 100vh;
    }

    .logbox {
        width: 45vh;
        height: 55vh;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 5px 10px #313147;
    }

    input {
        width: 30vh;
        height: 5vh;
    }

    h1 {
        color: white;
    }

    button {
        background-color: white;
        color: black;
        width: 10vh;
        height: 5vh;
        align-self: flex-end;
        font-weight: 700;
        
    }

    button:hover {
        background-color: rgb(170, 170, 170);
        cursor: pointer;
    }
</style>

<script src="login.js"></script>
</html>