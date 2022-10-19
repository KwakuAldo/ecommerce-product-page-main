const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    console.log("clicked menuBtn")
})

closeBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden')
    console.log("clicked closeBtn")
})