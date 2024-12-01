window.addEventListener('load', function () {

    //Scroll Reveal 

    ScrollReveal({
        distance: '5px',
        // delay: 100,
    })

    ScrollReveal().reveal('.header', {origin: 'top'});
    ScrollReveal().reveal('.heroContent__General');
    ScrollReveal().reveal('#about', {origin: 'left'});
    ScrollReveal().reveal('.aboutContainer', {origin: 'left'});
    ScrollReveal().reveal('.portContainer');
    ScrollReveal().reveal('.portContainer__item--first', {origin: 'left'});
    ScrollReveal().reveal('.portContainer__item--second', {origin: 'right'});
    ScrollReveal().reveal('#skills', { origin: 'right' });
    ScrollReveal().reveal('.habContent', {origin: 'right'});
    ScrollReveal().reveal('#form');

    // Header Bg Section
    let header = document.querySelector(".header");
    const functionChangeBgHeader = () => {
        if (document.documentElement.scrollTop >= 30) {
            header.classList.add("addColor");
        } else {
            header.classList.remove("addColor");
            // navList__linkSkills.classList.remove("active");
            // navList__linkAbout.classList.remove("active");
            // navList__linkProjects.classList.remove("active");
            // navList__linkContact.classList.remove("active");
        }
    }
    window.addEventListener("scroll", functionChangeBgHeader);

    let navBurguermenu__link__open = this.document.querySelector(".navBurguermenu__link--1");
    let navBurguermenu__link__close = this.document.querySelector(".navBurguermenu__link--2");
    let navBurguermenu__img__hamburguer = this.document.querySelector(".navBurguermenu__img__hamburguer");
    let navBurguermenu__img__close = this.document.querySelector(".navBurguermenu__img__close");
    let navList__movile = this.document.querySelector(".navList__movile");
    let herosubtitle = this.document.querySelector(".herosubtitle");
    let heroContainer = this.document.querySelector(".heroContent__General__info--one");
    let form = this.document.getElementById("form");
    let footer = this.document.querySelector(".footer");
    let main = this.document.querySelector(".main");
    navList__movile.classList.add("translate");
    navBurguermenu__link__open.addEventListener('click', function () {
        navBurguermenu__img__close.classList.add("active");
        navBurguermenu__img__hamburguer.classList.add("active");
        navList__movile.classList.remove("translate");
        navList__movile.classList.add("active");
        herosubtitle.classList.add("active");
        heroContainer.classList.add("active");
        main.classList.add("active");
        footer.classList.add("active");
    })

    navBurguermenu__link__close.addEventListener('click', function () {
        navBurguermenu__img__close.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navList__movile.classList.remove("active");
        herosubtitle.classList.remove("active");
        heroContainer.classList.remove("active");
        footer.classList.remove("active");
        header.classList.remove("active");
        main.classList.remove("active");
        footer.classList.remove("active");
        navList__movile.classList.add("translate");
        // setTimeout(() => {
        // }, 700);
    })

    let navList__menu__hero = document.querySelector(".navList__menu__hero");
    let navList__menu__about = document.querySelector(".navList__menu__about");
    let navList__menu__portfolio = document.querySelector(".navList__menu__portfolio");
    let navList__menu__skills = document.querySelector(".navList__menu__skills");

    navList__menu__hero.addEventListener('click', function () {
        navBurguermenu__img__close.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navList__movile.classList.remove("active");
        heroContainer.classList.remove("active");
        about.classList.remove("active");
        port.classList.remove("active");
        skills.classList.remove("active");
        footer.classList.remove("active");
        form.classList.remove("active");
    })

    navList__menu__about.addEventListener('click', function () {
        navBurguermenu__img__close.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navList__movile.classList.remove("active");
        heroContainer.classList.remove("active");
        about.classList.remove("active");
        port.classList.remove("active");
        skills.classList.remove("active");
        footer.classList.remove("active");
        form.classList.remove("active");
    })

    navList__menu__portfolio.addEventListener('click', function () {
        navBurguermenu__img__close.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navList__movile.classList.remove("active");
        heroContainer.classList.remove("active");
        about.classList.remove("active");
        port.classList.remove("active");
        skills.classList.remove("active");
        form.classList.remove("active");
        footer.classList.remove("active");
    })

    navList__menu__skills.addEventListener('click', function () {
        navBurguermenu__img__close.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navList__movile.classList.remove("active");
        heroContainer.classList.remove("active");
        about.classList.remove("active");
        port.classList.remove("active");
        skills.classList.remove("active");
        form.classList.remove("active");
        footer.classList.remove("active");
    })

        // const ciber = document.querySelector(".ciber");
        // const Dweb = document.querySelector(".Dweb");
        // const Pweb1 = document.querySelector(".Pweb1");
        // const Pweb2 = document.querySelector(".Pweb2");
        // const Pweb3 = document.querySelector(".Pweb3");
        // const Pciber1 = document.querySelector(".Pciber1");
    
        // Pweb1.classList.add("active");
        // Pweb2.classList.add("active");
        // Pweb3.classList.add("active");
        // Pciber1.classList.remove("active");
    
        // ciber.addEventListener("click", function () {
        //     ciber.classList.add("active");
        //     Dweb.classList.remove("active");
        //     Pweb1.classList.remove("active");
        //     Pweb2.classList.remove("active");
        //     Pweb3.classList.remove("active");
        //     Pciber1.classList.add("active");
        // });
    
        // // Manejar clic en Dweb
        // Dweb.addEventListener("click", function () {
        //     ciber.classList.remove("active");
        //     Dweb.classList.add("active");
        //     Pweb1.classList.add("active");
        //     Pweb2.classList.add("active");
        //     Pweb3.classList.add("active");
        //     Pciber1.classList.remove("active");
        // });
    

    All = this.document.querySelector(".All");
    lenguages = this.document.querySelector(".lenguages");
    tools = this.document.querySelector(".tools");
    habContainer__all = this.document.querySelector(".habContainer__all");
    habContainer__lenguajes = this.document.querySelector(".habContainer__lenguajes");
    habContainer__utility = this.document.querySelector(".habContainer__utility");
    
    All.classList.add("active");
    lenguages.classList.remove("active");
    tools.classList.remove("active");
    habContainer__all.classList.remove("innactive");
    habContainer__lenguajes.classList.remove("active");
    habContainer__utility.classList.remove("active");

    All.addEventListener("click", function () {
        All.classList.add("active");
        lenguages.classList.remove("active");
        tools.classList.remove("active");
        habContainer__all.classList.remove("innactive");
        habContainer__lenguajes.classList.remove("active");
        habContainer__utility.classList.remove("active");
    })

    lenguages.addEventListener("click", function () {
        lenguages.classList.add("active");
        All.classList.remove("active");
        tools.classList.remove("active");
        habContainer__all.classList.add("innactive");
        habContainer__lenguajes.classList.add("active");
        habContainer__utility.classList.remove("active");
    })

    tools.addEventListener("click", function () {
        tools.classList.add("active");
        All.classList.remove("active");
        lenguages.classList.remove("active");
        habContainer__all.classList.add("innactive");
        habContainer__lenguajes.classList.remove("active");
        habContainer__utility.classList.add("active");
    })
})