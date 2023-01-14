const cartItem = document.querySelector('.cart-item')
    cart = document.querySelector('.cart')

const data = [
    {img: '../img/img1.jpg', carname: 'BMW', price: '50000', premium: 'premium Car'},
    {img: '../img/img2.jpg', carname: 'AUDI', price: '75000', premium: 'Past Car'},
    {img: '../img/img3.jpg', carname: 'HUNDAI', price: '56000', premium: 'Popular Car'},
    {img: '../img/img4.jpg', carname: 'MERC', price: '48000', premium: 'premium Car'},
]
cartItem.map((item) => {
    item.innerHTML = ` 
        <img src="${data.img}" alt="cart-img">
        <div class="content">
            <div class="row">
                <div class="details">
                    <span>${data.carname}</span>
                    <p>${data.premium}</p>
                </div>
                <div class="price">${data.price}</div>
            </div>
            <div class="buttons">
                <button class="cart-btn" id="btn-1">Add To cart</button>
                <button  id="btn-2">Buy Now</button>
            </div>
        </div>
    `

})