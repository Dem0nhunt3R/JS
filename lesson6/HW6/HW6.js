// 1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then( value => {
//         console.log(value);
//         for (const item of value) {
//             let count = 0;
//             let div = document.createElement('div');
//             let h2 = document.createElement('h2');
//             let p = document.createElement('p');
//
//             h2.innerText = `${item.title}`;
//             p.innerText = `${item.body}`;
//
//             div.append(h2,p);
//             document.body.append(div);
//             console.log(count++);
//         }
//     });

// 2.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(value => {console.log(value);
//         let div = document.createElement('div');
//         for (const item of value) {
//             let count = 0;
//             let h2 = document.createElement('h2');
//             let p = document.createElement('p');
//
//             h2.innerText = `${item.name}`;
//             div.append(h2);
//
//             p.innerText = `${item.body}`;
//             div.append(p);
//             div.style.marginBottom = '15px';
//
//             document.body.append(div);
//             console.log(count++);;
//         }
//     });