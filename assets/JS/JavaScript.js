//TO SHOW MENU WHEN CLICK ON MENU ICON
function showMenu() {
    document.getElementById('mobile-menu').classList.toggle('hide')
}
//TO CLOSE MOBILE MENU WHEN CLICK ANY OPTION
 const mobilemenu = document.querySelector('.mobile-menu')
 const menuLinks = document.querySelectorAll('.mobile-menu a[href^="#"]');

 menuLinks.forEach((menuLink) => {
     menuLink.addEventListener("click", showMenu)
 })


// TO APPEAR SECTION ABOUT
let appear = document.querySelector(".appear");
let desappearName = document.querySelector(".container-text")

function showScroll(){
    let scrollTop = document.documentElement.scrollTop;
    let heightAppear = appear.offsetTop;
    if( heightAppear - 400 < scrollTop){
        appear.style.opacity = 1;
        appear.classList.add("showUp");
    }
    if(heightAppear - 360 > scrollTop){
        appear.style.opacity = 0;
        appear.classList.add("desaparecer")
    }
}
window.addEventListener('scroll', showScroll)

// TO DESAPPEAR NAME IN HOME-SECTION
function hideName(){
    let scrollTop = document.documentElement.scrollTop;
    let heightAppear2 = desappearName.offsetTop;
    if( heightAppear2 - 40 < scrollTop){
        desappearName.style.opacity = 0;
        // desappearName.classList.add("hideUp");
    }
        if(heightAppear2 - 40 > scrollTop){
        desappearName.style.opacity = 1;
        // desappearName.classList.add("hideUp")
    }
}
window.addEventListener('scroll', hideName)




//  CAROUSEL
const longbox = document.querySelector('.long-box')
const point = document.querySelectorAll('.point')
point.forEach( ( eachPoint , i) => {
    // asignar un click a cada punto
    point[i].addEventListener('click',()=>{
        // guardar la posicion de ese punto
        let position = i
        // calculando el espacio que debe desplazarse el grande
        let operation = position * -25
        // movemos el grande
        longbox.style.transform = `translateX(${ operation }%)`
    // recorremos todos los puntos 
        point.forEach( (eachPoint, i)=>{
            point[i].classList.remove('active')
        })
        point[i].classList.add('active')
    })
})