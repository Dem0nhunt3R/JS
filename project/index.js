// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

let usersBox = document.getElementById('users-box');
usersBox.classList.add('usersBoxStyle');
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(value => {
        for (const user of value) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userStyle');
            let userInfo = document.createElement('p');
            userInfo.classList.add('pInfo');

            let detailsFormBtn = document.createElement('button');

            userInfo.innerText = `name: ${user.name}, ID ${user.id}`;
            userDiv.append(userInfo);
            detailsFormBtn.innerText = 'to details';
            detailsFormBtn.addEventListener('click', (ev) => {
                location.href = `user-details.html?user=${JSON.stringify(user)}`
            })
            userDiv.append(detailsFormBtn);
            usersBox.append(userDiv);
        }
    })

