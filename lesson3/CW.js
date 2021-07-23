// 1 - створити функцію яка приймає масив та виводить його

// function writeArray(arr){
//     console.log((arr));
// }
//
// writeArray([1,2,3,4,5,6,7,8,9])

// 2 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min(a, b, c) {
//     if (a < b && a < c)
//         return a;
//     else if (b < a && b < c)
//         return b;
//     else
//         return c;
// }
//
// console.log(min(333, 444, 555));

//3 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a, b, c) {
//     if (a > b && a > c)
//         return a;
//     else if (b > a && b > c)
//         return b;
//     else
//         return c;
// }
//
// console.log(max(-1.2, -1, 0));

// 4 - створити функцію яка повертає найбільше число з масиву

// function arrMax(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i])
//             max = arr[i];
//     }
//     return max;
// }
//
// console.log(arrMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 5 - створити функцію яка повертає найменьше число з масиву

// function arrMin(arr){
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(min >  arr[i])
//             min = arr[i];
//     }
//     return min;
// }
//
// console.log(arrMin([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 6 - - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function arrSum(arr){
//     let sum = 0;
//     for (let i = 0; i <arr.length ; i++) {
//         sum+=arr[i];
//     }
//     return sum;
// }
//
// console.log(arrSum([7, 7, 7]));

// 7 - - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function average(arr){
//     let a =0;
//     for (let i = 0; i < arr.length; i++) {
//         a+=arr[i];
//     }
//     return a/arr.length;
// }
//
// console.log(average([2, 2, 2, 3, 3]));

// 8 - створити функцію яка заповнює масив рандомними числами

// function random(arr){
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(100*Math.random());
//     }
//     return arr;
// }
// let arr = [];
// console.log(random(arr));

// Спочатку прочитав перший рядок, потім зробив, і в кінці побачив :D -
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// 9 - - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
    // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function returner(list){
    let arr = [];
    let keys = [];
    for (const listItems of list) {
        arr.push(Object.keys(listItems))
    }

    for (const arrElements of arr) {
        for (const arrElement of arrElements) {
            keys.push(arrElement)
        }
    }
    return keys;
}

let arr = [{name: 'Dima', age: 13}, {model: 'Camry'} , {aggg: 222}];
console.log(returner(arr));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function returner2(list){
    let arrays = [];
    let values = [];

    for (const listItems of list) {
        arrays.push(Object.values(listItems))
    }

    for (const valuess of arrays) {
        for (const value of valuess) {
            values.push(value)
        }
    }
    return values
}

let arr2 = [{name: 'Dima'}, {age: 13}, {model: 'Camry'} , {aggg: 222}];
console.log(returner2(arr2));