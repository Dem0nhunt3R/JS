// 1 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function random() {
    let arr = [];
    for (let i = 0; i < 51; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}

// console.log(random());

// 2 - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
// function random2(b){
//     let arr = [];
//     for (let i = 0; i < b; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//     return arr;
// }
//
// console.log(random2(10));

// 3 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

random().sort((a, b) => a - b);

// 4 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

random().filter(a => a % 2 === 0);

// 5 - - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

// let array = random();
//
// function toStringer(arr,callback){
//     callback();
//     return arr;
// }
//
// let array2 = toStringer(array,function (){
//     for (let i = 0; i < array.length; i++) {
//         array[i]=array[i].toString();
//     }
// })
// console.log(array2);

// 6 - - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

// 7 створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArray = [];
userArray[0] = new User(4, 'Dima', 'Doma', 'DD@example@com', '123456789');
userArray[1] = new User(1, 'Dima2', 'Doma2', 'DD2@example@com', '123456789');
userArray[2] = new User(3, 'Dima3', 'Doma3', 'DD3@example@com', '123456789');
userArray[3] = new User(7, 'Dima4', 'Doma4', 'DD4@example@com', '123456789');
userArray[4] = new User(99, 'Dima5', 'Doma5', 'DD5@example@com', '123456789');
userArray[5] = new User(88, 'Dima6', 'Doma6', 'DD6@example@com', '123456789');
userArray[6] = new User(34, 'Dima7', 'Doma7', 'DD7@example@com', '123456789');
userArray[7] = new User(33, 'Dima8', 'Doma8', 'DD8@example@com', '123456789');
userArray[8] = new User(777, 'Dima9', 'Doma9', 'DD9@example@com', '123456789');
userArray[9] = new User(100, 'Dima10', 'Doma10', 'DD10@example@com', '123456789');

// 8 Взяти масив цей  User[] та: Відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
let array = userArray.filter(id=>id.id%2===0)
console.log(array);

array.sort((a,b) => a.id-b.id);
console.log(array);



