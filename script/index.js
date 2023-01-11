const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const cart = document.getElementById('cart');
const cartElement = document.getElementById('cartEl')
const emptyCartMsg = document.getElementById('cart-empty');
const cartBtn = document.getElementById('cart-btn');
const clearCart = document.getElementById('clear-cart');
let itemQty = document.getElementById('item-quantity');
let count = 0;
const slides = document.querySelectorAll('.slide')
let curSlide = 0
const prevSlide = document.querySelector('.btn-prev');
const nextSlide = document.querySelector('.btn-next');
let maxSlide = slides.length -1
const lightBox = document.querySelector('#lightBox')
const lightBoxSlides = document.querySelectorAll('.slide img')
const lightboxImage = lightBox.querySelector("img");
const lightBoxBtnClose = lightBox.querySelector('.light-box-close')
let lightBoxOpen = false
const thumbNail = document.querySelectorAll('.thumbnail img')
let cartNumber = document.getElementById('cart-number');
let itemCount = document.getElementById('item-quantity');
let price = 125
let totalPrice = document.getElementById('total-price');
let qtyCounter = document.getElementById('qty-multiplier');
const cartContent1 = document.getElementById('hide-when-cart-empty-1')
const cartContent2 = document.getElementById('hide-when-cart-empty-2')
let currentImage = 0;
const imageUrls = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
];

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
})

// Listen for a click on the document (anywhere on the page)
document.addEventListener('click', event => {
    // If the click was not on the menuBtn or the nav element, hide the nav element
    if (!menuBtn.contains(event.target) && !nav.contains(event.target)) {
        nav.classList.add('hidden');
    }
});

closeBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden')
})

//Item quantity counter increment
addBtn.addEventListener('click', () => {
    count += 1;
    itemQty.innerText = count;
})

//Item quantity counter decrement
removeBtn.addEventListener('click', () => {
    count -= 1;
    /* To prevent the counter from going below zero */
    if (count < 0) {
    count = 0;
    }
    itemQty.innerText = count;
    console.log('minus 1')
    
})

// Add to cart 
let toggle = false;
cartBtn.addEventListener('click', () => {
    cartNumber.innerText = itemCount.innerText
    count = 0
    itemCount.innerText = 0
    if (!toggle) {
        cartNumber.classList.add("flex");
        toggle = true;
    }
});

// Opens cart content on click
cart.addEventListener('click', () => {
    if (parseInt(cartNumber.innerText) === 0 || cartNumber.innerText === '') {
        emptyCartMsg.innerText = "Your Cart is empty."
        emptyCartMsg.classList.remove('hidden')
        cartElement.classList.remove('justify-evenly')
    } else {
        cartElement.classList.add('justify-center')
        cartContent1.classList.add('flex')
        cartContent2.classList.add('flex')
        emptyCartMsg.classList.add('hidden')
    }
    cartElement.classList.toggle('flex')

    qtyCounter.innerText = cartNumber.innerText
    totalPrice.innerText = price * qtyCounter.innerText
    let formattedTotalPrice = "$" + totalPrice.innerText
    totalPrice.innerText = formattedTotalPrice
})

// Clears cart content on click
clearCart.addEventListener('click', () => {
    cartContent1.classList.remove('flex')
    cartContent2.classList.remove('flex')
    emptyCartMsg.classList.add('block')
    cartElement.classList.remove('justify-evenly')
    cartNumber.classList.remove('flex')
})

// Listen for a click on the document (anywhere on the page)
document.addEventListener('click', event => {
    // If the click was not on the cart element, hide it
    if (!cart.contains(event.target) && !cartElement.contains(event.target)) {
        cartElement.classList.remove('flex');
    }
});

// Slideshow for the product
slides.forEach((slider, indx) => {
    slider.style.transform = `translateX(${indx * 100}%)`
})

prevSlide.addEventListener('click', function () {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--
    }
    slides.forEach((slider, indx) => {
        slider.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    })
})

nextSlide.addEventListener('click', function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++
    }
    slides.forEach((slider, indx) => {
        slider.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    })
})


// show lightbox when image is clicked
function showLightbox(event) {
    lightboxImage.src = event.target.src;
    lightBox.classList.toggle("show");
    lightBoxOpen = true
}

//slideshow for lightbox
document.getElementById('current-lightbox-image').src = currentImage
//updates image based on current image index
function updateImage() {
    document.getElementById('current-lightbox-image').src = imageUrls[currentImage]
}
// Next and previous buttons for the lightbox
document.getElementById('prev-btn').addEventListener('click', function () {
    currentImage = (currentImage + imageUrls.length - 1) % imageUrls.length;
    updateImage();
});

document.getElementById('next-btn').addEventListener('click', function () {
    currentImage = (currentImage + 1) % imageUrls.length;
    updateImage();
});

// hide lightbox when close button is clicked
function hideLightbox() {
    lightBox.classList.toggle("show");
    lightBoxOpen = false;
}

slides.forEach(slide => slide.addEventListener("click", showLightbox));
// thumbNail.forEach(thumbnail => thumbnail.addEventListener("click", showLightbox));
lightBoxBtnClose.addEventListener("click", hideLightbox);

// Deactivate the lightbox on small screens
if (window.innerWidth >= 768){
    showLightbox();
}

// Thumbnail opens original image when clicked
function changeImage(imageUrl) {
    document.getElementById('current-image').src = imageUrl
    if (lightBoxOpen) {
    }
}