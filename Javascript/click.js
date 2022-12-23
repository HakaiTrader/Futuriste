const nav = document.querySelector('header nav i');
const menuNav = document.querySelector('.menu');
const li = document.querySelectorAll('.menu-ul .menu-li')

nav.addEventListener('click', function(){

    menuNav.style.opacity = '1';
})

menuNav.addEventListener('mouseleave', function () { 

    menuNav.style.opacity = '0';
 })

 for (let index = 0; index < li.length; index++) {
    const menuclick = li[index];
    menuclick.addEventListener('click', function () { 
      menuNav.style.opacity ='0';
     })
    
}

const observer = new IntersectionObserver(handleIntersect, {rootMargin: '50%'})
console.log(observer);
observer.observe(documenet.querySelector('.infinite-marker'))

function handleIntersect(entries) {
    
}