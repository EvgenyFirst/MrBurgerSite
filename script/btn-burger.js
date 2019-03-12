let content = document.getElementById("content1")
let show = document.getElementById("showContent1")
let hide = document.getElementById("hideC")

show.addEventListener("click", () => {
    content.style.display = "block" 

    document.documentElement.style.overflow = 'hidden'

})

hide.addEventListener("click", () => {
    content.style.display = "none"

    document.documentElement.style.overflow = 'auto';
    
})

// Кнопка бургера
function openNav() { 
 
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("navtaner").style.display = "flex";
 
} 
 
function closeNav() { 
 
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navtaner").style.display = "none";
 
}