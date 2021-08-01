let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let usersAddress= [];

for (const userAddress of users) {
    let address = userAddress.address;
    usersAddress.push(address);
}

console.log(usersAddress);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
let usersBox = document.getElementById('users-box');

// for (const user of users) {
//     let userDiv = document.createElement('div');
//     userDiv.innerText = `Name: ${user.name}, age: ${user.age}, status: ${user.status}, address: ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}`;
//     usersBox.append(userDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     let userNameDiv = document.createElement('div');
//     userNameDiv.innerText = `${user.name}`;
//     usersBox.append(userNameDiv);
//
//     let userAgeDiv = document.createElement('div');
//     userAgeDiv.innerText = `${user.age}`;
//     usersBox.appendChild(userAgeDiv);
//
//     let userStatusDiv = document.createElement('div');
//     userStatusDiv.innerText = `${user.status}`;
//     usersBox.appendChild(userStatusDiv);
//
//     let userAddressDiv = document.createElement('div');
//     userAddressDiv.style.marginBottom = '15px';
//     userAddressDiv.innerText = `Address: city - ${user.address.city}, country - ${user.address.country}, street - ${user.address.street}, houseNumber - ${user.address.houseNumber}`;
//     usersBox.appendChild(userAddressDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {
    let userNameDiv = document.createElement('div');
    userNameDiv.innerText = `Name: ${user.name}`;
    usersBox.append(userNameDiv);

    let userAgeDiv = document.createElement('div');
    userAgeDiv.innerText = `Age: ${user.age}`;
    usersBox.appendChild(userAgeDiv);

    let userStatusDiv = document.createElement('div');
    userStatusDiv.innerText = `Status: ${user.status}`;
    usersBox.appendChild(userStatusDiv);

    let userAddressDiv = document.createElement('div');
    userAddressDiv.style.marginBottom = '15px';
    usersBox.appendChild(userAddressDiv);

    let city = document.createElement('div');
    city.innerText = `City: ${user.address.city}`;
    userAddressDiv.append(city);

    let country = document.createElement('div');
    country.innerText = `Country: ${user.address.country}`;
    userAddressDiv.append(country);

    let street = document.createElement('div');
    street.innerText = `Street: ${user.address.street}`;
    userAddressDiv.append(street);

    let houseNumber = document.createElement('div');
    houseNumber.innerText = `House number: ${user.address.houseNumber}`;
    userAddressDiv.append(houseNumber);
}