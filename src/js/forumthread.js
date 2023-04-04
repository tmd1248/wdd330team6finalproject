import { loadHeaderFooter } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import { setLocalStorage } from "./utils.mjs";

loadHeaderFooter();

var threads = getLocalStorage('threads');
var id = window.location.search.slice(1);
var thread = threads.find(t => t.id == id);
title = document.querySelector(".Thread-title");
var titlehtml = `
  <h1>${thread.title}</h1>
  <p class="info">${thread.content}</p>
  <p class="info" id="Author">${thread.username}</p>
`
title.insertAdjacentHTML('beforeend', titlehtml);
orderedList = document.querySelector("ol");
for(let comment of thread.comments) {
addComment(comment);
}
function addComment(comment) {
    var commenthtml = `
    <div class="comment">
    <p id="content">
      ${comment.content}
  </p>
  <p class="info" id="Author"> 
      ${comment.username}
  </p>
  </div>
    `
  orderedList.insertAdjacentHTML('beforeend', commenthtml);
}
var postbutton = document.querySelector('button');
postbutton.addEventListener('click', function() {
var replytext = document.querySelector('.replyarea');
var usernametext = document.querySelector('.usernamearea');
if (replytext.value.length != 0 && usernametext.value.length != 0) {
var post = {
    content: replytext.value, 
    username: usernametext.value,
}
thread.comments.push(post);
setLocalStorage('threads', threads);
addComment(post);
replytext.value = '';
} else {
window.alert("All fields must be filled!")
}

})