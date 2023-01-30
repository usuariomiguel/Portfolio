window.addEventListener('load', function () {
    let navBurguermenu__link = this.document.querySelector(".navBurguermenu__link");
    let navList__movile = this.document.querySelector(".navList__movile");
    let main = this.document.querySelector(".main");
    navBurguermenu__link.addEventListener('click', function () {
        navList__movile.classList.toggle("active");
        main.classList.toggle("active");
    })
})