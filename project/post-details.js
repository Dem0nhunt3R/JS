// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let post = JSON.parse(localStorage.getItem('post'));
console.log(post);

let commentsDiv = document.createElement('div');
commentsDiv.classList.add('commentsDivStyle');

let h2 = document.createElement('h2');
h2.innerText = `Post #${post.id} of user #${post.userId}`;

let h3 = document.createElement('h3');
h3.innerText = post.title;

let p = document.createElement('p');
p.innerText = post.body;

let commentsBtn = document.createElement('button');
commentsBtn.innerText = 'show the post\'s comments';
commentsDiv.append(h2, h3, p, commentsBtn);

let commentDiv = document.createElement('div');
commentDiv.classList.add('commentDivStyle');

commentsBtn.addEventListener('click', (ev) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(response => response.json())
        .then(value => {
            commentDiv.innerText = '';
            for (const item of value) {
                let pComment = document.createElement('p');
                pComment.classList.add('pCommentStyle');
                pComment.innerText = item.body;
                commentDiv.append(pComment);
            document.body.append(commentDiv);
            }
        })
})

document.body.append(commentsDiv);


