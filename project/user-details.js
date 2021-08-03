// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.

let user = JSON.parse(localStorage.getItem('users'));
console.log(user);
let userDiv = document.createElement('div');
userDiv.classList.add('userDivStyle');
let h1 = document.createElement('h1');
h1.innerText = `${user.name}, id: ${user.id}, username: ${user.username}`;
userDiv.append(h1);

let h2 = document.createElement('h2');
h2.innerText = `email: ${user.email}, phone number: ${user.phone}`;
userDiv.append(h2);

let addressDiv = document.createElement('div');
addressDiv.style.marginLeft = '10px';
addressDiv.innerText = 'Address:';
userDiv.append(addressDiv);

let pAddress = document.createElement('p');
pAddress.style.marginLeft = '20px';
pAddress.innerText = `city: ${user.address.city};\ngeo: lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng};\nstreet: ${user.address.street};
suite: ${user.address.suite};\nzipcode: ${user.address.zipcode}.`
addressDiv.append(pAddress);

let companyDiv = document.createElement('div');
companyDiv.style.marginLeft = '10px';
companyDiv.innerText = 'Company:';
userDiv.append(companyDiv);

let pCompany = document.createElement('p');
pCompany.style.marginLeft = '20px';
pCompany.innerText = `name: ${user.company.name};\nbs: ${user.company.bs};\ncatch phrase: ${user.company.catchPhrase}.`;
companyDiv.append(pCompany)
userDiv.append(companyDiv);

let postBtn = document.createElement('button');
postBtn.innerText = `Show posts of ${user.name}`;
postBtn.classList.add('postBtnStyle');

let postsBox = document.createElement('div');
postsBox.classList.add('postsBoxStyle')

postBtn.addEventListener('click', (ev) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(value => {
            postsBox.innerText = '';
            for (const item of value) {
                let postDiv = document.createElement('div');
                postDiv.classList.add('postDivStyle');
                postDiv.innerText = item.title;
                postsBox.append(postDiv);

                let postDetailsBtn = document.createElement('button');
                postDetailsBtn.innerText = 'post details';
                postDetailsBtn.style.marginLeft = '10px';
                postDetailsBtn.addEventListener('click', (ev) => {
                    document.location = 'post-details.html';
                    localStorage.setItem('post', JSON.stringify(item))
                })
                postDiv.append(postDetailsBtn);
            }
        });
    document.body.append(postsBox);
});

document.body.append(userDiv);
document.body.append(postBtn);




