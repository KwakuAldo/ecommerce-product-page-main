const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const cartBtn = document.getElementById('cart-btn');
let itemQty = document.getElementById('item-quantity');
let count = 0;

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    console.log("clicked menuBtn")
})

closeBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden')
    console.log("clicked closeBtn")
})

addBtn.addEventListener('click', () => {
    count += 1;
    itemQty.innerText = count;
    console.log('plus 1')
})

removeBtn.addEventListener('click', () => {
    count -= 1;
    if (count < 0) {
    count = 0;
    }
    itemQty.innerText = count;
    console.log('minus 1')
    
})

cartBtn.addEventListener('click', () => {
    
})