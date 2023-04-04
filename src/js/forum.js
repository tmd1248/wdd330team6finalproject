import { loadHeaderFooter } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import { setLocalStorage } from "./utils.mjs";

examplethreads = [
    {
        title: "Indoor camping?",
        id: "0",
        content: "I love this sort of thing, but I'm also a homebody. can anyone recommend play tents to use for the indoors instead of having to be out with the bugs?",
        username: "citySlicker",
        comments: [
            {
                username: "Moderator",
                content: "You know the website name is Sleep Outside. right?"

            },
            {
                username: "citySlicker",
                content: "Yeah. So?"
            }
        ]
    },
    {
    title: "Pricepoints",
    id: "1",
    content: "Five hundred dollars for some of these tents?",
    username: "frugality",
    comments: [
        {
            username: "Moderator",
            content: "That is the suggested retail price."

        },
        {
            username: "frugality",
            content: "it's ridiculous."
        }
    ]
}
];
loadHeaderFooter();
if (getLocalStorage('threads')) {
    threads = getLocalStorage('threads');
 } else {
threads = examplethreads;
setLocalStorage('threads', threads);
 }
var orderedlist = document.querySelector('ol');
function addThread(thread) {
    var threadhtml = `
    <li class="row">
    <a href="./thread.html?${thread.id}">
    <h2 class="thread-title-mainpage">
        ${thread.title}
    </h2>
    <div class="bottom">
    <p id="content">
        ${thread.content}
    </p>
    <p class="info" id="Author"> 
        ${thread.username}
    </p>
    <p class="info" id="comments">${thread.comments.length} comments</p>
    </div>
    </a>
    </li>
    `
    orderedlist.insertAdjacentHTML('beforeend', threadhtml);

}
for (let thread of threads) {
    addThread(thread);
}
var postbutton = document.querySelector('button');
postbutton.addEventListener('click', function() {
    var replytext = document.querySelector('.replyarea');
    var usernametext = document.querySelector('.usernamearea');
    var threadnametext = document.querySelector('.threadnamearea');
    if (threadnametext.value.length != 0 && replytext.value.length != 0 && usernametext.value.length != 0) {
    var post = {
        title: threadnametext.value,
        id: threads.length,
        content: replytext.value, 
        username: usernametext.value,
        comments: []
    }
    threads.push(post);
    setLocalStorage('threads', threads);
    addThread(post);
    replytext.value = '';
    threadnametext.value = '';
} else {
  window.alert("All fields must be filled!")
}

})