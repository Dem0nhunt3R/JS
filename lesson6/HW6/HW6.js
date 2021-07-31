// 1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then( value => {console.log(value)});

// 2.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(value => {console.log(value);});