const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id"); // key is "id" value is user id
// on mount we want to use "id" as it is from localStorage

async function onSearchChange(event) {
  // console.log(event)
  const id = event.target.value; // event.target.value is user id
  renderPosts(id); // renderPosts is a function that takes user id as an argument
}

async function renderPosts(userId) {
  const posts = await fetch(
    // fetch is used to make a request to the server
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const postsData = await posts.json(); // postsData is an array of objects
  postListEl.innerHTML = postsData // postsData is an array of objects
    .map(
      // .map is used to iterate over array
      (post) => postHTML(post) // postHTML is a function that returns a string
    )
    .join(""); // .join is used to convert array to string
}

function postHTML(post) {
  return `<div class="post">
    <div class="post__title">${post.title}</div>
    <p class="post__body">${post.body}</p>
</div>`;
}

renderPosts(id);
