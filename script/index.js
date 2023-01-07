const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const cart = document.getElementById('cart');
const cartElement = document.getElementById('cartEl')
const cartBtn = document.getElementById('cart-btn');
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
const thumbNail = document.querySelectorAll('.thumbnail img')
let cartNumber = document.getElementById('cart-number');
let itemCount = document.getElementById('item-quantity');
// const imageEl = Array.from(document.querySelectorAll('.product-images'))
// let currentImageIndex = 0;
// const lightBoxImageElement = document.querySelector('.light-box-img img')
// const prevBtn = document.querySelector('#prev-btn')
// const nextBtn = document.querySelector('#next-btn')

// const buttonContainer = document.querySelector('.visible');

//Lightbox slideshow
// prevBtn.addEventListener('click', () => {
//     currentImageIndex--;
//     if (currentImageIndex < 0) {
//         currentImageIndex = imageEl.length - 1;
//     }
//     lightBoxImageElement.src = imageEl[currentImageIndex].src;
// });

// nextBtn.addEventListener('click', () => {
//     currentImageIndex++;
//     if (currentImageIndex >= imageEl.length) {
//         currentImageIndex = 0;
//     }
//     lightBoxImageElement.src = imageEl[currentImageIndex].src;
// });


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

cart.addEventListener('click', () => {
    cartElement.classList.toggle('flex')
})

// Add to cart 
let toggle = false;
cartBtn.addEventListener('click', () => {
    console.log(cartNumber.innerText)
    cartNumber.innerText = itemCount.innerHTML
    count = 0
    itemCount.innerText = 0
    if (!toggle) {
        cartNumber.classList.add("flex");
        toggle = true;
    }
    console.log('added to cart');
});

// if (window.matchMedia("(min-width: 768px)").matches) {
//     cartNumber.classList.add("visible");
// }

slides.forEach((slider, indx) => {
    slider.style.transform = `translateX(${indx * 100}%)`
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


// show lightbox when image is clicked
function showLightbox(event) {
    lightboxImage.src = event.target.src;
    lightBox.classList.toggle("show");
    // btnPrev.style.display = "flex";
    // btnNext.style.display = "flex";
}

// hide lightbox when close button is clicked
function hideLightbox() {
    lightBox.classList.toggle("show");
}

slides.forEach(slide => slide.addEventListener("click", showLightbox));
thumbNail.forEach(thumbnail => thumbnail.addEventListener("click", showLightbox));
lightBoxBtnClose.addEventListener("click", hideLightbox);

if (window.innerWidth >= 768){
    showLightbox();
}

// Thumbnail opens original image when clicked
function changeImage(imageUrl) {
    document.getElementById('current-image').src = imageUrl
    document.getElementById('current-lightbox-image').src = imageUrl
}