const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const cartBtn = document.getElementById('cart-btn');
let itemQty = document.getElementById('item-quantity');
let count = 0;
const slides = document.querySelectorAll('.slide')
let curSlide = 0
const nextSlide = document.querySelector('.btn-next');
const prevSlide = document.querySelector('.btn-prev');
let maxSlide = slides.length -1


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
    /* To prevent the counter from going below zero */
    if (count < 0) {
    count = 0;
    }
    itemQty.innerText = count;
    console.log('minus 1')
    
})

cartBtn.addEventListener('click', () => {
    
})

slides.forEach((slider, indx) => {
    slider.style.transform = `translateX(${indx * 100}%)`
})

nextSlide.addEventListener('click', function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++
    }
    console.log('next')
    slides.forEach((slider, indx) => {
        slider.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    })
})

prevSlide.addEventListener('click', function () {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--
    }
    console.log('previous')
    slides.forEach((slider, indx) => {
        slider.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    })
})