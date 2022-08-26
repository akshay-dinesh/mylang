const postBtnEl = document.getElementById("postComment");
const commentEl = document.getElementById("comment");
const commentListEl = document.getElementById("commentList");
let commentArray = [];

// Function that checks and pushes the comment into an array of objects
function setup() {
  postBtnEl.addEventListener("click", function () {
    if (commentEl.value != "" && commentEl.value != null) {
      commentArray.push({
        comment: commentEl.value,
      });
      commentListEl.innerHTML = renderList(commentArray);
      commentEl.value = "";
    }
  });

  // Function that renders list of comments
  function renderList(item) {
    console.log(item);
    let list = "";
    for (let i = 0; i < item.length; i++) {
      list += `<li id='comment'>${item[i].comment}</li>`;
    }
    return list;
  }
}
