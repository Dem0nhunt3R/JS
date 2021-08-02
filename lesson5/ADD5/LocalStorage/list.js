// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let deleteBtn = document.createElement('button');
deleteBtn.addEventListener('click',(ev)=>{
    localStorage.clear();
});
deleteBtn.innerText='delete cart';
document.body.append(deleteBtn);

let productsDiv = document.getElementsByClassName('products')[0];

let products = JSON.parse(localStorage.getItem('items'));

for (const product of products) {
    let count = 0;
    let productDiv = document.createElement('div');

    let productName = document.createElement('h1');
    productName.innerText = product.name;
    productDiv.append(productName);

    let productQuantityAndPrice = document.createElement('h2');
    productQuantityAndPrice.innerText = `1${product.quantity} - ${product.price}`;
    productDiv.append(productQuantityAndPrice);

    let productImage = document.createElement('img');
    productImage.src = product.url;
    productDiv.append(productImage);

    let deleteProductBtn = document.createElement('button');
    deleteProductBtn.innerText = 'delete';
    deleteProductBtn.onclick = function (ev) {
        let index = products.indexOf(product);
        products.splice(index,1);
        localStorage.setItem('items', JSON.stringify(products));
        deleteProductBtn.disabled = true;
    }
    productDiv.append(deleteProductBtn);

    productsDiv.append(productDiv);
}










