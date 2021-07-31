// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

// 1-Підйом
// 2-Йога
// 3-Приготування сніданку
// 4-Сніданок
// 5-Дорога на роботу
// 6-Робота до обіду
// 7-Обід
// 8-Робота після обіду
// 9-Дорога додому
// 10-Вечеря
// 11-Лекція
// 12-Сон

function myDay(time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Час прокидатись?');

            if(time < 7){
                reject('Ще посплю!');
            }
            else{
                resolve('Вже встаю!');
            }
        }, 1356);
    });
}

function getUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Доброго ранку');
            resolve('Де мій килимок?');
        }, 2000);
    });
}

function doYoga() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Вмикаю додаток');
            resolve('Цитати великих майстрів йоги');
        }, 1300);
    });
}

function prepareBreakfest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Вмикаю плиту');
            resolve('Сніданок готовий');
        }, 1500);
    });
}

function eatBreakfest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Каша,салат,сир');
            resolve('ням-ням');
        }, 1800);
    });
}

function toJob() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Заводжу машину');
            resolve('Заходжу в офіс');
        }, 1200);
    });
}

function doJob() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Відкриваю ноут');
            resolve('Клавіатура димить');
        }, 100);
    });
}

function goDinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Знову в пузату?');
            resolve('Так собі їдло');
        }, 999);
    });
}

function workAgain() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Може поїхати в ЦО?');
            resolve('Закриваю ноут :D');
        }, 500);
    });
}

function goHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Затори....');
            resolve('Привіт, кохана');
        }, 439);
    });
}

function eatSupper(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('Що на вечерю?');
            resolve('допив коктейль');
        }, 777);
    });
}

function letStudy(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Вмикаю зум');
            resolve('Став розумнішим(мабуть :D)');
        },891);
    });
}

function goSleep(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Почистив зуби?');
            console.log('Надобраніч')
            resolve();
        }, 1111);
    });
}

myDay(7)
    .then(value => {
        console.log(value);
        return getUp();
    })
    .then(value => {
        console.log(value);
        return doYoga();
    })
    .then(value => {
        console.log(value);
        return prepareBreakfest();
    })
    .then(value => {
        console.log(value);
        return eatBreakfest();
    })
    .then(value => {
        console.log(value);
        return toJob();
    })
    .then(value => {
        console.log(value);
        return doJob();
    })
    .then(value => {
        console.log(value);
        return goDinner();
    })
    .then(value => {
        console.log(value);
        return workAgain();
    })
    .then(value => {
        console.log(value);
        return goHome();
    })
    .then(value => {
        console.log(value);
        return eatSupper();
    })
    .then(value => {
        console.log(value);
        return letStudy();
    })
    .then(value => {
        console.log(value);
        return goSleep();
    })
    .catch(reason => {
        console.log('*****************************');
        console.log(reason);
        console.log('*****************************');
    })
