window.addEventListener('load', function () {
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