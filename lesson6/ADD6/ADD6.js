// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(value => {
        // console.log(value);
        for (const users of value) {
            let userDiv = document.getElementById('users-box');
            let userName = document.createElement('div');
            userName.innerText = `${users.name} `;
            userDiv.append(userName);
            let postsBtn = document.createElement('button');
            postsBtn.innerText = "posts";
            userName.append(postsBtn);
            postsBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${users.id}/posts`)
                    .then(response => response.json())
                    .then(value => {
                        // console.log(value);
                        let postsBox = document.getElementById('posts-box');
                        postsBox.innerText = '';
                        for (const userPosts of value) {
                            // console.log(userPosts);
                            let liPost = document.createElement('li');
                            liPost.innerText = `${userPosts.title}`
                            postsBox.append(liPost);
                            let commentsBtn = document.createElement('button');
                            commentsBtn.innerText = "comments";
                            liPost.append(commentsBtn);
                            commentsBtn.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${userPosts.id}/comments`)
                                    .then(response => response.json())
                                    .then(value => {
                                        console.log(value);
                                        let commentBox = document.getElementById('comments-box');
                                        commentBox.innerText = '';
                                        for (const postComments of value) {
                                            // console.log(postComments);
                                            let liComment = document.createElement('li');
                                            liComment.innerText = `${postComments.body}`;
                                            commentBox.append(liComment);
                                        }
                                    })
                            }
                        }
                    })
            }
        }
    })