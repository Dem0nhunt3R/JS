//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.

let items = localStorage.getItem('items');
let item;
if (items) {
    item = JSON.parse(items);
    for (const itemElement of item) {
        document.write(`<h1>${itemElement.name}  ${itemElement.quantity} - ${itemElement.price}</h1>`);
        document.write(`<img src="${itemElement.url}" alt=""/>`);
        //     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
        document.write(`<button id="remover">remove it</button>`);
        let remover = document.getElementById('remover');
        remover.addEventListener('click',(ev) =>{
            ev.preventDefault();
            localStorage.removeItem('itemElement');
        })
    }
    document.write(`</div>`);

} else {
    console.log("It is empty now");
}
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
document.write(`<button >remove it all</button>`);
let button = document.getElementsByTagName('button')[0];
button.addEventListener("click", (ev) => {
    localStorage.clear();
})









