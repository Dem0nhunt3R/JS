//1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let str1  = 'hello';
let str2  = 'owu';
let str3  = 'com';
let str4  = 'ua';
let str5  = '1';
let int1  = 1;
let int2  = 10;
let int3  = -999;
let int4  = 123;
let float = 3.14;
let float2= 2.7;
let int5  = 16;
let bool1 = true;
let bool2 = false;

// 2 Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(str1  );
console.log(str2  );
console.log(str3  );
console.log(str4  );
console.log(str5  );
console.log(int1  );
console.log(int2  );
console.log(int3  );
console.log(int4  );
console.log(float );
console.log(float2);
console.log(int5  );
console.log(bool1 );
console.log(bool2 );

document.write(`${str1}`);
document.write(`<div> ${str2  }</div>`);
document.write(`<div> ${str3  }</div>`);
document.write(`<div> ${str4  }</div>`);
document.write(`<div> ${str5  }</div>`);
document.write(`<div> ${int1  }</div>`);
document.write(`<div> ${int2  }</div>`);
document.write(`<div> ${int3  }</div>`);
document.write(`<div> ${int4  }</div>`);
document.write(`<div> ${float }</div>`);
document.write(`<div> ${float2}</div>`);
document.write(`<div> ${int5  }</div>`);
document.write(`<div> ${bool1 }</div>`);
document.write(`<div> ${bool2 }</div>`);

alert(str1);
alert(str2  );
alert(str3  );
alert(str4  );
alert(str5  );
alert(int1  );
alert(int2  );
alert(int3  );
alert(int4  );
alert(float );
alert(float2);
alert(int5  );
alert(bool1 );
alert(bool2 );

// 3- Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.

str1  = 'Hello';
str2  = 'world';
str3  = 'Java';
str4  = 'is';
str5  = 'the';
int1  = 1;
int2  = 2;
int3  = 3;
int4  = 4;
float = 2.3;
float2= 3.2;
int5  = 29;
bool1 = false;
bool2 = true;

// 4   Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(str1  );
console.log(str2  );
console.log(str3  );
console.log(str4  );
console.log(str5  );
console.log(int1  );
console.log(int2  );
console.log(int3  );
console.log(int4  );
console.log(float );
console.log(float2);
console.log(int5  );
console.log(bool1 );
console.log(bool2 );

document.write(`<div>${str1  }</div>`)
document.write(`<div>${str2  }</div>`)
document.write(`<div>${str3  }</div>`)
document.write(`<div>${str4  }</div>`)
document.write(`<div>${str5  }</div>`)
document.write(`<div>${int1  }</div>`)
document.write(`<div>${int2  }</div>`)
document.write(`<div>${int3  }</div>`)
document.write(`<div>${int4  }</div>`)
document.write(`<div>${float }</div>`)
document.write(`<div>${float2}</div>`)
document.write(`<div>${int5  }</div>`)
document.write(`<div>${bool1 }</div>`)
document.write(`<div>${bool2 }</div>`)

alert(str1  );
alert(str2  );
alert(str3  );
alert(str4  );
alert(str5  );
alert(int1  );
alert(int2  );
alert(int3  );
alert(int4  );
alert(float );
alert(float2);
alert(int5  );
alert(bool1 );
alert(bool2 );

// 5 - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

let firstName = `Mykyta`;
let middleName = `Vyacheslavovych`;
let lastName = `Naumenko`;

let fullName = firstName + ` ` + middleName + ` `  + lastName;
// alert(fullName);

// 6 - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

let name = prompt (`my name`);
let my_name = name;
let surName = prompt (`my surName`);
let my_surName = surName;
let age = prompt(`my age`);
let my_age = age;

// 7  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
alert(`Вітаю` +' '+my_name + ` ` +my_surName+`. `+`Тобі `+ my_age+' років');

// 8 - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 9 Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
console.log((5 < 6));
console.log(5 > 6);
console.log(5 == 6);
console.log(5 >= 6);
console.log(10 == 10);
console.log(10 <= 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 != 10);
console.log(123 === '123');
console.log(123 == '123');
