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

function myDayAsync(currentTime){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Час прокидатись?');

            if(currentTime < 7){
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
            resolve('bb');
        }, 1111);
    });
}

async function newDay(){
    try{
        const Day = await myDayAsync(7);
        console.log(Day);

        const awake = await getUp();
        console.log(awake);

        const yoga = await doYoga();
        console.log(yoga);

        let prepareBf =await prepareBreakfest();
        console.log(prepareBf);

        let eatBf = await eatBreakfest();
        console.log(eatBf);

        let jobRoad = await toJob();
        console.log(jobRoad);

        let work = await doJob();
        console.log(work);

        let dinner = await goDinner();
        console.log(dinner);

        let continueWork = await workAgain();
        console.log(continueWork);

        let home = await goHome();
        console.log(home);

        let supper = await eatSupper();
        console.log(supper);

        let study = await letStudy();
        console.log(study);

        let sleep = await goSleep();
        console.log(sleep);

    }catch (reason){
        console.warn(reason);
    }
}

newDay();