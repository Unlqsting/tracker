<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In</title>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
</head>
<body>
    <div class="logwrap">
        <div class="logbox">
            <h1>Log in</h1>
            <form class="logInform" method="post" action="http://127.0.0.1:8086/api/users/login">
            <!-- http://127.0.0.1:8086/api/users/create -->
                <input type="text" class="uid" name="uid" placeholder="Enter your username">
                <br><br>
                <!-- <input type="text" class="name" name="name" placeholder="Enter your name"> -->
                <br><br>
                <!-- <input type="password" name="password" class="passInp" placeholder="Enter your password"> -->
                <br>
                <br>
                <button type="submit">Log In</button>
                <br>
                <br>
                <a href="/signup">Don't have an account with us? Sign up here!</a>
                <div id="g_id_onload"
                    data-client_id="320731126416-u568ao23cjl9o6tmn26nv1a47v5aige2.apps.googleusercontent.com"
                    data-context="signin"
                    data-ux_mode="popup"
                    data-login_uri="http://localhost:4001/login"
                    data-auto_prompt="false">
                </div>
                <div class="g_id_signin"
                    data-type="standard"
                    data-shape="rectangular"
                    data-theme="filled_blue"
                    data-text="continue_with"
                    data-size="large"
                    data-logo_alignment="left">
                </div>
            </form>
        </div>
    </div>    
</body>
<script src=""></script>

<style>
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
        padding: 5px;
        
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
