// 1 створити функцію яка обчислює та повертає площу прямокутника висотою

// function squareRect(a,b){
//     return (a*b);
// }
// console.log(squareRect(2, 3));

// 2 створити функцію яка обчислює та повертає площу кола

// function squareCircle(a){
//     return 2*3.14*a;
// }
// console.log(squareCircle(4));

// 3 створити функцію яка обчислює та повертає площу циліндру

// function squareCylinder(r, h){
//     return 2*3.14*(r*r) + 2*3.14*r*h;
// }
//
// console.log(squareCylinder(3, 4));

// 4  створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function fx(a,b){
//     if (a>b){
//         document.write(a);
//         return b;
//     }
//     else{
//         document.write(b);
//         return a;
//     }
// }
// fx(4,9);

// 5 створити функцію яка  створює блок з текстом. Текст задати через аргумент

// function text(a){
//     document.write(`<div>
//     ${a}
//     </div>`);
// }
//
// text("sadasdasdasd");

// 6 створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(a){
//     document.write(`<ul>
//         <li>${a}</li>
//         <li>${a}</li>
//         <li>${a}</li>
//     </ul>`);
// }
// list("lorem");

// 7 створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list2(t,i){
//     for (let j = 0; j < i; j++) {
//         document.write(`<div>
//             <li>${t}</li>
//         </div>`)
//     }
//     document.write()
// }
//
// list2("sadsad", 5);

// 8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrayList(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<ul>
//             <li>${arr[i]}</li>
//         </ul>`)
//     }
// }
//
// arrayList(["wqewqe",21321321,324234,213123,true,false,false,"gogogo"]);