<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forum</title>
    <link rel="stylesheet" href="forum.css">
</head>
<body>
    <div class="addWrap">
        <h1>Add a Topic</h1>
        <form method=post action="http://127.0.0.1:8086/api/forum/create">
<!--  -->
            <!-- <input type="text" class="topicOwner" size=40 maxlength=150 placeholder="Enter your email address">
            <br><br> -->
<!--  -->
            <input type="text" name="topic" class="topic" size=40 maxlength=50 placeholder="Topic title">
            <!--  -->
            <P><strong>Post Text:</strong><br>
            <input type="text" name="postText" class="postText" >
            <!--  -->
            <button type="submit" class="topicSubmit">Add Topic</button>
        </form>
    </div>
    <!--  -->
</body>
</html>