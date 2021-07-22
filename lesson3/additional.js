// 1 - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function calc1(arr1,arr2){
//     let arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         arr3[i]=arr1[i]+arr2[i]
//     }
//
//     return arr3;
// }
//
// document.write(calc1([1,1,1,1], [2,2,2,2]));

// 2 - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr = ['a', 'b', 'c'];
// for (let i = 1; i < 4 ; i++) {
//     arr.push(i);
// }
// console.log(arr);

// 3 - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr = [1, 2, 3];
//     let temp = arr.pop();
//     let temp2 = arr.shift();
//     arr.unshift(temp);
//     arr.push(temp2);
// console.log(arr);

// 4 - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1, 2, 3];
// arr.push(4,5,6);
// console.log(arr);

// 5 - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// 6 - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(0,3);
// console.log(arr);

// 7 - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2,3);
// console.log(arr);

// 8 - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3,2);
// arr.push(`a`,`b`,`c`,);
// console.log(arr);

// 9 - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0)
//         console.log(arr[i]);
// }

// 10 - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];
//
// for (let i = 0; i < arr1.length; i++) {
//     arr2[i]=arr1[i];
// }
// console.log(arr2);


// 11 - - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = ``;
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
// }
// console.log(str);

// 12 - - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let i = 0;
// let str = ``;
//  while(i<arr.length){
//      str += arr[i];
//      i++;
//  }
//
// console.log(str);

// 13 - - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let str = ``;
// let arr = [ 'a', 'b', 'c'];
// for(let args of arr){
//     if(args != arr[arr.length]){
//         str += args;
//     }
// }
// console.log(str);

// 14 - -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function sorter(arr, i) {
//     let temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//     return arr;
// }
//
// console.log(sorter([1, 2, 3, 4], 0));

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// function cutter(a) {
//     let arr
//     arr = a.split(' ');
//     arr = arr.filter(value => value !== ``);
//     arr = arr.join(' ');
//
//     return arr;
// }
// function cutter(a) {
//     return a.split(' ').filter(value => value !== ``).join(' ');
// }
//
// console.log(cutter(n1));
// console.log(cutter(n2));

// 15 - - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function sorter2(arr) {
    let count = 1;
    let del = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===0){
            del = arr.shift();;
            arr.push(del);
        }
        count++;
        if(count === arr.length)
            break;
    }
    return arr;
}

console.log(sorter2([0,0,0,0,0, 5]));