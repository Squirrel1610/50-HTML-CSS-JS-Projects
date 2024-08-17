const toggleBtn = document.getElementById('toggle');
const nav = document.querySelector('nav');

const toggleNav = () => {
    nav.classList.toggle('active');
}

toggleBtn.addEventListener('click', toggleNav);