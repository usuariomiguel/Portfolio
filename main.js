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

    let navBurguermenu__link = this.document.querySelector(".navBurguermenu__link");
    let navList__movile = this.document.querySelector(".navList__movile");
    let main = this.document.querySelector(".main");
    navBurguermenu__link.addEventListener('click', function () {
        setTimeout(() => {
            main.classList.toggle("active");
        }, 200)
        navList__movile.classList.toggle("active");
    })
})