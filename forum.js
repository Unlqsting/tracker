

read_posts();

//! create post
function createPost(data) {
    parsedData = JSON.parse(data);
    
    for (let i = 0; i < parsedData.length; i++) {
        let post = parsedData[i];
        let posted = '<div class="accessPost">' +
            '<div class="postTitle" id="postTitle">' +
                '<h3>' + post.postTitle + '</h3>' +
            '</div>' +
            '</div>';
        
        const newDiv = document.createElement("div");
        newDiv.classList.add("accessPost");
        const postContainer = document.getElementById("postContainer");
        postContainer.appendChild(newDiv);
        newDiv.innerHTML = posted;

        // Add click event listener to display modal window when post is clicked
        newDiv.addEventListener('click', function() {
          // ! set modal elements to variables
          const modalPostTitle = document.getElementById('modalPostTitle')
          const modalPostText = document.getElementById('modalPostText')
          

          //? display modal window as block element
          document.getElementById('postModal').style.display = "block";   
          
          //! set modal elements to post data. Value of input fields is set to the post title and content of the clicked post
          modalPostTitle.innerHTML = "Post Title: " + '<input type="text" name="updatedPostTitle" id="updatedPostTitle" value="' + post.postTitle + '">';
          modalPostText.innerHTML = "Post: " + '<input type="text" name="updatedPost" id="updatedPost" value="' + post.post + '">';
          
          updatedPostTitle = modalPostTitle.innerText;
          updatedPost = modalPostText.innerText;

          id = post.id; // Set id to the id of the clicked post

        });
    }
}



//! Display User Table, data is fetched from Backend Database
function read_posts() {
    $.getJSON('http://127.0.0.1:8086/api/forum/', function(data) {
        createPost(JSON.stringify(data));
        id = data.id;
    });
}

// ! update post
const updateButton = document.getElementById('updateButton');

updateButton.addEventListener('click', function() {
  // Get the updated post title and content from the input fields
  const updatedPostTitle = document.getElementById('updatedPostTitle').value;
  const updatedPost = document.getElementById('updatedPost').value;

  // Send a PUT request to the backend API to update the post with the new title and content
  fetch('http://127.0.0.1:8086/api/forum/update', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ postTitle: updatedPostTitle, post: updatedPost, id: id}),
  })
  .then(response => {
    if (response.ok) {
      // Reload the page to display the updated post
      window.location.reload();
      
    }
  });

});

// ! delete post
//predelete
const preDelButton = document.getElementById('preDelButton');
preDelButton.addEventListener('click', function() {
  document.getElementById('delModal').style.display = "flex";
  document.getElementById('postModal').style.display = "none";
});
//predelete

const delButton = document.getElementById('delButton');

delButton.addEventListener('click', function() {
  // Send a DELETE request to the backend API to delete the post
  fetch('http://127.0.0.1:8086/api/forum/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id: id}),
  })
  .then(response => {
    if (response.ok) {
      // Reload the page to display the updated post
      window.location.reload();
      
    }
  });
});
//

//! post modal stuff
const modal = document.getElementById("postModal");
const closeBtn = document.querySelector('#closeBtn')

// Close the modal window when the user clicks the close button or clicks outside the modal window
closeBtn.onclick = function() {
  modal.style.display = "none";

  //! reload page to reset modalTitle and modalPosttext to original values
  window.location.reload();
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//! delete modal stuff
const delModal = document.getElementById("delModal");
const closeDelModal = document.querySelector('#closeDelModal')

// Close the modal window when the user clicks the close button or clicks outside the modal window
closeDelModal.onclick = function() {
  delModal.style.display = "none";
}
