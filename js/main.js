// open and close aside (cart)

const cart_icon = document.querySelector(".icon_cart");
const aside = document.querySelector("aside");
const clos_cart = document.querySelector(".top_cart i");


cart_icon.addEventListener("click", openCart)


clos_cart.addEventListener("click", closeCart)



let all_product_json;
let product_cart = [];
let count_item = document.querySelector(".icon_cart span");
// functions


function openCart() {
    aside.classList.add("active");
}

function closeCart() {
    aside.classList.remove("active");
}





fetch('./js/items.json')
    .then(response => response.json())
    .then(data => {
        all_product_json = data;
        const products = document.querySelector(".products");
        data.forEach(product => {
            if (product.old_price) {

                const percent = Math.floor((product.old_price - product.price) / product.old_price * 100)

                products.innerHTML += `
                <div class="product swiper-slide">
                        <div class="icons">
                            <i class="fa-solid fa-cart-shopping"onclick="addToCart(${product.id},this)"></i>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-share"></i>
                        </div>
                        <span>${percent}%</span>
                        <div class="img_product">
                            <img src="${product.img}">
                            <img src="${product.img_hover}" class="img_hover">
                        </div>
                        <h3 class="name_product">
                            <a href="#">${product.name}</a>
                        </h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p>$${product.price}</p>
                            <p>$${product.old_price}</p>
                        </div>
                    </div>
                `
            }
        });
    })



// add item to cart 

const inCart = document.querySelector(".items_in_cart");



function addToCart(id, btn) {
    product_cart.push(all_product_json[id])
    btn.classList.add("active");

    console.log(product_cart);
    getItemsCart()

}

function getItemsCart() {
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
             <div class="item_cart">
                <img src="${product_cart[i].img}">
                <div>
                    <p>${product_cart[i].name}</p>
                    <span>$${product_cart[i].price}</span>
                </div>
               <button>
               <i class="fa-solid fa-trash" onclick="remove_from_cart(${i})"></i>
               </button> 
            </div>
        `
    }

    console.log(items_c);

    inCart.innerHTML = items_c
}


function remove_from_cart(index) {

    product_cart.splice(index, 1);
    console.log(product_cart);
    // inCart.innerHTML = "";
    getItemsCart();


    const addCartBtn = document.querySelectorAll(".fa-cart-shopping");
    console.log(addCartBtn);

    for (let i = 0; i < addCartBtn.length; i++) {

        addCartBtn[i].classList.remove("active")
        product_cart.forEach((element) => {
            if (element.id === i) {
                addCartBtn[i].classList.add("active")
            }
        })
    }
    console.log(addCartBtn);


}