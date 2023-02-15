

read_users();

//! create post
function createPost(data) {
    parsedData = JSON.parse(data);
    
    for (let i = 0; i < parsedData.length; i++) {
        let post = parsedData[i];
        let posted = '<div class="accessPost">' +
            '<div class="postTitle">' +
                '<h3>' + post.postTitle + '</h3>' +
            '</div>' +
            '<div class="postBody">' +
                '<p>' + post.post + '</p>' +
            '</div>' +
            '</div>';
        
        const newDiv = document.createElement("div");
        newDiv.classList.add("accessPost");
        const postContainer = document.getElementById("postContainer");
        postContainer.appendChild(newDiv);
        newDiv.innerHTML = posted;

        // Add click event listener to display modal window when post is clicked
        newDiv.addEventListener('click', function() {
        document.getElementById('postModal').style.display = "block";
        document.getElementById('modalPostTitle').innerHTML = post.postTitle;
        document.getElementById('modalPostText').innerHTML = post.post;
        });
    }
  }

  //! Display User Table, data is fetched from Backend Database
function read_users() {
    $.getJSON('http://127.0.0.1:8086/api/forum/', function(data) {
        createPost(JSON.stringify(data));
    });
}

// ! modal stuff
const modal = document.getElementById("postModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Close the modal window when the user clicks the close button or clicks outside the modal window
closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
    