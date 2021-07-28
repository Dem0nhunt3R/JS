// 1 - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
class User {
    id;
    name;
    username;
    email;
    address;
    phone;
    website;
    company;

    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

let user1 = new User(

        "1",
        "Leanne Graham",
        "Bret",
        "Sincere@april.biz",
         {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        "1-770-736-8031 x56442",
        "hildegard.org",
        {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
);
console.log(user1);

// 2-  Створити функцію конструктор / клас  який описує об'єкт тегу

class Attr {
    titleOfAttr;
    actionOfAttr;

    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

class Tagger {
    titleOfTag;
    action;
    attrs;

    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}


// let a = new Tagger("a",
//                     "Тег <\a> является одним из важных элементов HTML и предназначен для создания ссылок." +
//     " В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь." +
//     " Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки." +
//     " При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы." +
//     "Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа," +
//     " на который следует сделать ссылку. В качестве значения атрибута href используется адрес документа" +
//     " (URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход." +
//     " Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо от имени" +
//     " сайта или веб-страницы, где прописана ссылка. Относительные ссылки, как следует из их названия, построены" +
//     " относительно текущего документа или корня сайта.",
//     [new Attr("accesskey","Активация ссылки с помощью комбинации клавиш."),
//          new Attr("coords","Устанавливает координаты активной области.")])

// let div = new Tagger("div",
//                      "Элемент <\div> является блочным элементом и предназначен для выделения фрагмента документа" +
//     " с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей." +
//     " Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей," +
//     " а для тега добавить атрибут class или id с именем селектора."+
//     " Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки." +
//     " После него также добавляется перенос строки.",
//                     [new Attr("align","Задает выравнивание содержимого тега <\div>.")
//                     ]);

// let h1 = new Tagger("h1",
//                     "HTML предлагает шесть заголовков разного уровня, которые показывают относительную" +
//     " важность секции, расположенной после заголовка. Так, тег <\h1> представляет собой наиболее важный заголовок" +
//     " первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным." +
//     " По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания," +
//     " заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам," +
//     " они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке." +
//     " Кроме того, перед заголовком и после него добавляется пустое пространство.",
//                 [new Attr("align", "Определяет выравнивание заголовка.")]
//         );

// let span = new Tagger(
//     "span",
//     "Тег <\span> предназначен для определения строчных элементов документа." +
//     " В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть" +
//     " информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить" +
//     " цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста." +
//     " Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега" +
//     " добавить атрибут class или id с именем селектора.",
//     [new Attr("contenteditable","Сообщает, что элемент доступен для редактирования пользователем."),
//           new Attr("contextmenu","Устанавливает контекстное меню для элемента.")]);

// let input = new Tagger(
//     "input",
//     "Тег <\input> является одним из разносторонних элементов формы и позволяет создавать разные элементы" +
//     " интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания" +
//     " текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь" +
//     " контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер," +
//     " где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки" +
//     " данных с помощью клиентских приложений, например, скриптов на языке JavaScript."+
//     " Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать следующие элементы формы:" +
//     " текстовое поле (text), поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden)," +
//     " кнопка (button), кнопка для отправки формы (submit), кнопка для очистки формы (reset), поле для отправки файла" +
//     " (file) и кнопка с изображением (image). Для каждого элемента существует свой список атрибутов, которые определяют" +
//     " его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.",
//     [new Attr("accept","Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."),
//          new Attr("alt","Альтернативный текст для кнопки с изображением.")]
//     );
// console.log(input);

// let form = new Tagger(
//     "form",
//     "Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается" +
//     " за пределами <\form>, например, при создании её программно или по соображениям дизайна.",
//     [new Attr("-------","------")]);
// console.log(form);

// let option = new Tagger(
//     "option",
//     "Тег <\option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. " +
//     "Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью " +
//     "стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. " +
//     "Это также необходимо, когда к данным списка идет обращение через скрипты.",
//     [new Attr("disabled","Заблокировать для доступа элемент списка."),
//           new Attr("label","Указание метки пункта списка.")]);
// console.log(option);

// let select = new Tagger(
//             "select",
//             "Тег <\select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список" +
//     " с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега" +
//     " <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге" +
//     " <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который" +
//     " должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется" +
//     " поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.",
//             [new Attr("size","Количество отображаемых строк списка."),
//                   new Attr("tabindex","Определяет последовательность перехода между элементами при" +
//                                                          " нажатии на клавишу Tab")]);
// console.log(select);