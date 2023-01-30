window.addEventListener('load', function () {

    // Header Bg Section
    let header = document.querySelector(".header");
    const functionChangeBgHeader = ()=> {
    if(document.documentElement.scrollTop >= 30) {
        header.classList.add("addColor");
    } else {
        header.classList.remove("addColor");
        // navList__linkSkills.classList.remove("active");
        // navList__linkAbout.classList.remove("active");
        // navList__linkProjects.classList.remove("active");
        // navList__linkContact.classList.remove("active");
        }   
    }
    window.addEventListener("scroll" , functionChangeBgHeader);
    
    let navBurguermenu__link__open = this.document.querySelector(".navBurguermenu__link--1");
    let navBurguermenu__link__close = this.document.querySelector(".navBurguermenu__link--2");
    let navBurguermenu__img__hamburguer = this.document.querySelector(".navBurguermenu__img__hamburguer");
    let navBurguermenu__img__close = this.document.querySelector(".navBurguermenu__img__close");
    let navList__movile = this.document.querySelector(".navList__movile");
    let main = this.document.querySelector(".main");
    let footer = this.document.querySelector(".footer");
    navBurguermenu__link__open.addEventListener('click', function () {
        setTimeout(() => {
            main.classList.add("active");
        }, 200)
        navList__movile.classList.add("active");
        footer.classList.add("active");
        navBurguermenu__img__hamburguer.classList.add("active");
        navBurguermenu__img__close.classList.add("active");
    })

    navBurguermenu__link__close.addEventListener('click', function () {
        setTimeout(() => {
            main.classList.remove("active");
        }, 200)
        navList__movile.classList.remove("active");
        footer.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navBurguermenu__img__close.classList.remove("active");
    })
})