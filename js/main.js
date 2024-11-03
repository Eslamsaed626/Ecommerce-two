// open and close aside (cart)

const cart_icon = document.querySelector(".icon_cart");
const aside = document.querySelector("aside");
const clos_cart = document.querySelector(".top_cart i");


cart_icon.addEventListener("click",openCart)


clos_cart.addEventListener("click",closeCart)




// functions


function openCart(){
    aside.classList.add("active");
}

function closeCart(){ 
    aside.classList.remove("active");
}