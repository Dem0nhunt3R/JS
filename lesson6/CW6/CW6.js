// 0тримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => {
        console.log(value);
        let usersPostsDiv = document.getElementById('users-posts');
        for (const item of value) {
        let usersPost = document.createElement('div');
            usersPost.innerText = `User ${item.userId} posts: ${item.title}`;
            usersPost.style.margin = '5px';
            usersPostsDiv.append(usersPost);
            let detailsBtn = document.createElement('button');
            detailsBtn.innerText = "details";
            usersPost.append(detailsBtn);
            detailsBtn.onclick = function (){
                let commentBox = document.getElementById('comments-box');
                commentBox.innerText = `${item.body}`;
                usersPost.append(commentBox);
            }
        }
    })
