// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

// let nameInput = form.name;
// form.addEventListener('submit',(ev) =>{
//     let name = nameInput.value;
//     localStorage.setItem('name',name)
// });

// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.

let form2 = document.forms.market;
let items = [];

form2.addEventListener('submit',(ev) => {
    ev.preventDefault();
    const item = {
        name: form2.name.value,
        quantity: form2.quantity.value,
        price: form2.price.value,
        url: form2.url.value
    };
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    }
)


