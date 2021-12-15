document.addEventListener("scroll",(event) => {
    if(this.scrollY> 20){
        document.querySelector(".navbar").classList.add("sticky");
    }
    else{
        document.querySelector(".navbar").classList.remove("sticky");
    }
});