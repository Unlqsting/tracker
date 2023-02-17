<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forum</title>
    <link rel="stylesheet" href="forum.css">
</head>
<body>
    <div class="posts" id="postContainer"></div>
    <div class="addWrap">
        <br><br>
        <br>
        <h1>Add a Topic</h1>
        <form method=post action="http://127.0.0.1:8086/api/forum/create">
            <input type="text" name="topic" class="topic" size=40 maxlength=50 placeholder="Topic title">
            <P><strong>Post Text:</strong><br>
            <input type="text" name="postText" class="postText" >
            <button type="submit" class="topicSubmit">Add Topic</button>
        <!--  -->
    <!-- </div> -->
    <div id="postModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3 id="modalPostTitle"></h3>
            <p id="modalPostText"></p>
        </div>
    </div>
<!-- </body> -->
<script src="forum.js">
        