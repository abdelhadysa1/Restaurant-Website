const mobileNavElement = document.querySelector('.mobile-nav')
mobileNavElement.addEventListener('click', (e) => {
    const navElement = document.querySelector('nav')
    navElement.style.top === '-100%' ? navElement.style.top = '0' : navElement.style.top = '-100%'
})