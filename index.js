
AOS.init({
    duration:1200,
})
//heart icon event
function iconHeart(event){
    const heart=event.target;
        if(heart.classList.contains('fa-regular')){
            heart.classList.add('fa-solid');
            heart.classList.remove('fa-regular');
        }
        else{
            heart.classList.add('fa-regular');
            heart.classList.remove('fa-solid');
        }
}
const hearts=document.querySelectorAll(".fa-heart");
hearts.forEach((heart)=>{
    heart.addEventListener("click",iconHeart);
});

