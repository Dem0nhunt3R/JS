// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str );
console.log(typeof num );
console.log(typeof flag);
console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

let a1;
a1 = 2 * 12 + 10;
let a2;
a2 = (a1 - 10) / 2;
let a3;
a3 = (a1 - a2) * 3;
let a4;
a4 = a3 - a1 + 58;
let a5;
a5 = a4 / 30 * 29;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'kg';

// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.

let height = 23;
let width = 10;

let s = (height+width)*2;
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
let heightC = 10;
let dC = 4;
let rC = (dC/2);
let v = 3.14 * (rC ** rC) * heightC;

// console.log(parseInt(v));

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;
let k = Math.sqrt((n ** 2) + (m ** 2));
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2))
console.log(k);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//
// let str22 = 'Naumenko\nMykyta\nVyacheslavovych\n29\ncoding';
// alert(str22);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?';
// let concatenation = str1 + ' ' + str2 + ' ' + str3;
//
// document.write(concatenation);

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
 //   let str33 = "20";
// let a = 5;
// document.write(str + a + "<br/>"); 205 //a to String
// document.write(str - a + "<br/>"); NaN   //з числом і стрінгою aбо стрінгами можна використовувати тільки "+"
// document.write(str * "2" + "<br/>"); NaN //з числом і стрінгою aбо стрінгами можна використовувати тільки "+"
// document.write(str / 2 + "<br/>"); NaN   //з числом і стрінгою aбо стрінгами можна використовувати тільки "+"

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let num1 = parseInt(prompt('enter num-1'));
// let num2 = parseInt(prompt('enter num-2'));
// let sum = num1 + num2;
// alert(sum);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//
// let name = prompt('Enter your name');
// let lastname = prompt('Enter your last name');
// let age = prompt('Enter your age');
//
// alert(`Доброго вечора ${name } ${lastname}, мої вітання, що Вам ${age} `);

// 1. Три різних числа вводяться через prompt().
    // За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//
// let a = prompt('enter num 1');
// let b = prompt('enter num 2');
// let c = prompt('enter num 3');
//
// if (a > b && a > c) {
//     if (b > c)
//         alert(`${c}\n${b}\n${a}`);
//
//     else
//         alert(`${b}\n${c}\n${a}`);
//
// }
// else if (b > a && b > c){
//     if(a > c)
//         alert(`${c}\n${a}\n${b}`);
//     else
//         alert(`${a}\n${c}\n${b}`);
// }
// else if (c > a && c > b) {
//     if(b > a)
//         alert(`${a}\n${b}\n${c}`);
//     else
//         alert(`${b}\n${a}\n${c}`);
// }

// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt('enter a color')
//
// if(color == 'зелений')
//     alert('йди');
// else if(color == 'жовтий')
//     alert('почекай');
// else if(color == 'червоний')
//     alert('стій');
// else
//     alert('do anything');

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let color = prompt('enter a color');
let empty = confirm('Is road an empty?');

if(color == 'green'){
    if (empty)
        alert('You can pass');
    else
        alert ('wait for a road without a cars');
}else if(color == 'yellow'){
    if (empty)
        alert('wait anyway');
    else
        alert ('wait');
}else if(color == 'red'){
    if (empty)
        alert('stay anyway');
    else
        alert ('stay and wait');
}
else
    alert('do what you want')
