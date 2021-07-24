// 1 - - створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(name, surname, email, phone, order) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clientArray = [];
clientArray[0] = new Client("Vasia", "Pupkin", "VS@gmail.com", "123456789", ["apple", "milk", "juice"]);
clientArray[1] = new Client("Vasia2", "Pupkin2", "VS2@gmail.com", "123456789", ["apple"]);
clientArray[2] = new Client("Vasia3", "Pupkin3", "VS3@gmail.com", "123456789", ["apple", "milk"]);
clientArray[3] = new Client("Vasia4", "Pupkin4", "VS4@gmail.com", "123456789", ["apple", "milk", "juice", "banana"]);
clientArray[4] = new Client("Vasia5", "Pupkin5", "VS5@gmail.com", "123456789", ["apple", "milk", "juice", "banana", "mango"]);
clientArray[5] = new Client("Vasia6", "Pupkin6", "VS6@gmail.com", "123456789", ["apple"]);
clientArray[6] = new Client("Vasia7", "Pupkin7", "VS7@gmail.com", "123456789", ["apple", "milk"]);
clientArray[7] = new Client("Vasia8", "Pupkin8", "VS8@gmail.com", "123456789", ["apple", "milk", "juice", "water", "cookies", "watermelon"]);
clientArray[8] = new Client("Vasia9", "Pupkin9", "VS9@gmail.com", "123456789", ["apple", "milk", "juice"]);
clientArray[9] = new Client("Vasia10", "Pupkin10", "VS10@gmail.com", "123456789", ["apple", "milk"]);
// console.log(clientArray);

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clientArray.sort((a, b) => a.order.length - b.order.length);
// console.log(clientArray);

// 2 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log("Їдемо зі швидкістю " + maxSpeed + "км на годину")
    }
    this.info = function () {
        console.log(model, manufacturer, year, maxSpeed, volume);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        return maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        return year + newValue;
    }
    this.addDriver = function (driver) {
        return driver;
    }
}

// let car = new Car("Cybertruck","Tesla Giga Factory", 2020, 300,"o_O");
// car.drive();
// car.info();
// car.maxSpeed = car.increaseMaxSpeed(100);
// car.year = car.changeYear(10);
// car.driver = car.addDriver({
//     name: "Nikita",
//     surname: "Naumenko"
// });

// 3 - - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class CarCreator {
//     model;
//     manufacturer;
//     year;
//     maxSpeed;
//     volume;
//
//     constructor(model, manufacturer, year, maxSpeed, volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive(){
//         console.log("Їдемо зі швидкістю "+`${this.maxSpeed}`+"км за годину.");
//     }
//     info() {
//         console.log(this.model + "\n" + this.manufacturer + "\n" + this.year + "\n" + this.maxSpeed + "\n" + this.volume);
//     }
//     increaseMaxSpeed(newSpeed){
//         return this.maxSpeed+newSpeed;
//     }
//     changeYear(newYear){
//         return this.year+newYear;
//     }
//     addDriver(driver){
//         return driver;
//     }
// }
// let car = new CarCreator("Cybertruck","Tesla Giga Factory", 2020, 300,"o_O");
//
// car.info();
// car.drive();
// car.increaseMaxSpeed(77).log;
// car.changeYear(13);
// car.driver = car.addDriver({
//     name: "Chelik",
//     surname: "Chelkovskiy"
// });

// 4 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    name;
    age;
    size;

    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = new Cinderella("Cinderella" + `${i + 1}`, 10 + i, 30 + i);
}


class Prince {
    name;
    age;
    slipper;

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
    search(cinders){
        return cinders.find(value => value.size===this.slipper)
    }
}

let prince = new Prince("Prince", 101, 36);

console.log(prince.search(arr));

for (const arrElement of arr) {
    if (arrElement === prince.search(arr))
        console.log("zaebalo s ney vozitsya=>"+arrElement.name);
}

