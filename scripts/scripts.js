document.addEventListener("scroll",(event) => {
    if(this.scrollY> 20){
        document.querySelector(".navbar").classList.add("sticky");
    }
    else{
        document.querySelector(".navbar").classList.remove("sticky");
    }
});

let menuBtn =document.querySelector(".menu-btn");

menuBtn.addEventListener("click",(event) => {
    document.querySelector(".navbar .menu").classList.toggle("active");

});

let navLink = document.querySelectorAll(".nav-link");

navLink.forEach((item)=>{
    item.addEventListener("click",(event)=>{
        document.querySelector(".navbar .menu").classList.remove("active");
    });
});