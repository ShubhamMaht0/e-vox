let posts = [];
let imageDataUrl = null; // Store uploaded image as Data URL

function previewImage(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageDataUrl = e.target.result;
      const preview = document.getElementById('image-preview');
      preview.src = imageDataUrl;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

function addPost() {
  const content = document.getElementById('post-content').value.trim();
  if (!content && !imageDataUrl) return;

  // Get existing posts from localStorage or empty array
  let savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

  // Create new post object
  const newPost = {
    username: 'Student',
    avatar: 'S',
    datetime: new Date().toLocaleString(),
    likes: 0,
    comments: [],
    content: content,
    img: imageDataUrl,
  };

  // Add new post at beginning
  savedPosts.unshift(newPost);

  // Save updated posts array to localStorage
  localStorage.setItem('posts', JSON.stringify(savedPosts));

  // Clear inputs and image preview
  document.getElementById('post-content').value = '';
  document.getElementById('post-image').value = '';
  const preview = document.getElementById('image-preview');
  preview.style.display = 'none';
  preview.src = '';
  imageDataUrl = null;

  // Redirect to feed page
  window.location.href = 'feed.html';
}


function handleLike(index) {
  posts[index].likes++;
  renderPosts();
}

function handleComment(index) {
  const input = document.getElementById(`comment-input-${index}`);
  const text = input.value.trim();
  if (text) {
    posts[index].comments.push(text);
    input.value = '';
    renderPosts();
  }
}

function handleShare(index) {
  alert('Share functionality coming soon!');
}

function renderPosts() {
  const feed = document.getElementById('feed');
  feed.innerHTML = '';
  posts.forEach((post, i) => {
    feed.innerHTML += `
      <div class="post">
        <div class="post-header">
          <div class="avatar">${post.avatar}</div>
          <div>
            <div><strong>${post.username}</strong></div>
            <div class="post-meta">${post.datetime}</div>
          </div>
        </div>
        <div class="post-content">${post.content}</div>
        ${
          post.img
            ? `<img src="${post.img}" alt="Post Image">`
            : ''
        }
        <div class="post-actions">
          <button onclick="handleLike(${i})">&#10084; Like</button>
          <button onclick="handleShare(${i})">&#128257; Share</button>
        </div>
        <div class="likes">Likes: ${post.likes}</div>
        <div class="comments">Comments: ${post.comments.length}</div>
        <div class="comment-section">
          <input type="text" id="comment-input-${i}" placeholder="Add a comment..." />
          <button onclick="handleComment(${i})">Comment</button>
          <div class="comment-list">
            ${post.comments.map((c) => `<div class="comment">${c}</div>`).join('')}
          </div>
        </div>
      </div>
    `;
  });
}

// Initial render
renderPosts();
