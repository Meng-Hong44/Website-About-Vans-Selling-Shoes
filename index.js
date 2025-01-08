const menutoggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
// menutoggle.addEventListener('click', () => {
//     nav.style.display = 'block';
// });
const narv = 0;
if(nav==narv){
    menutoggle.addEventListener('click', () => {
        nav.style.display = 'none';
    });
    nav++;
}
else{
    menutoggle.addEventListener('click', () => {
        nav.style.display = 'block';

    });
}
AOS.init({
    duration:1200,
})