<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forum</title>
    <link rel="stylesheet" href="forum.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <div id="delModal" class="delModal">
        <span id="closeDelModal" class="close">&times;</span>
        <h1>Are you sure you want to delete this post?</h1>
        <button type="button" class="delButton" id="delButton">Delete post</button>
    </div>
    <h1>Posts</h1>
    <div class="posts" id="postContainer">
    </div>
    <div class="addWrap">
        <br><br>
        <br>
        <h1>Add a Topic</h1>
        <form method=post action="http://127.0.0.1:8086/api/forum/create">
            <input type="text" name="topic" id="topic" class="topic" size=40 maxlength=50 placeholder="Topic title">
            <P><strong>Post Text:</strong><br>
            <input type="text" id="postText" name="postText" class="postText" >
            <br>
            <button type="submit" class="topicSubmit" id="submitForm">Add Topic</button>
        <!--  -->
    <!-- </div> -->
    <div id="postModal" class="modal">
        <div class="modal-content">
            <span id="closebtn" class="close">&times;</span>
            <h3 id="modalPostTitle"></h3>
            <p id="modalPostText"></p>
            <button type="button" class="updateButton" id="updateButton">Update</button>
            <button type="button" class="preDelButton" id="preDelButton">Delete post</button>
        </div>
    </div>
<!--  -->
<!-- </body> -->
<script src="forum.js">


        