window.addEventListener('load', function () {

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
    navBurguermenu__link__open.addEventListener('click', function () {
        navBurguermenu__img__close.classList.add("active");
        navBurguermenu__img__hamburguer.classList.add("active");
        navList__movile.classList.add("active");
        herosubtitle.setAttribute("style","opacity: 0;");
    })

    navBurguermenu__link__close.addEventListener('click', function () {
        navBurguermenu__img__close.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navList__movile.classList.remove("active");
        herosubtitle.setAttribute("style","opacity: 1;");
    })

    let navList__menu__hero = document.querySelector(".navList__menu__hero");
    let navList__menu__portfolio = document.querySelector(".navList__menu__portfolio");
    let navList__menu__skills = document.querySelector(".navList__menu__skills");

    navList__menu__hero.addEventListener('click', function () {
        navBurguermenu__img__close.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navList__movile.classList.remove("active");
    })

    navList__menu__portfolio.addEventListener('click', function () {
        navBurguermenu__img__close.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navList__movile.classList.remove("active");
    })

    navList__menu__skills.addEventListener('click', function () {
        navBurguermenu__img__close.classList.remove("active");
        navBurguermenu__img__hamburguer.classList.remove("active");
        navList__movile.classList.remove("active");
    })

    /* More items */
    // portfolioContainer__more = this.document.querySelector(".portfolioContainer__more");
    // portfolioContainer__itemThird = this.document.querySelector(".portfolioContainer__item--third");
    // portfolioContainer__more.addEventListener("click", function () {
    //     portfolioContainer__more.style.setProperty("display", "none");
    //     portfolioContainer__itemThird.classList.add("active");
    // })

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
    // technique for this demo found here 
    // http://stackoverflow.com/questions/22003491/animating-canvas-to-look-like-tv-noise

    // const canvas = document.querySelector('canvas'),
    // ctx = canvas.getContext('2d')

    // canvas.width = canvas.height = 128

    // resize();
    // window.onresize = resize;

    // function resize() {
    // canvas.width = window.innerWidth * window.devicePixelRatio
    // canvas.height = window.innerHeight * window.devicePixelRatio
    // canvas.style.width = window.innerWidth + 'px'
    // canvas.style.height = window.innerHeight + 'px'
    // }

    // function noise(ctx) {

    // const w = ctx.canvas.width,
    // h = ctx.canvas.height,
    // iData = ctx.createImageData(w, h),
    // buffer32 = new Uint32Array(iData.data.buffer),
    // len = buffer32.length
    // let i = 0

    // for(; i < len;i++)

    // if (Math.random() < 0.05) buffer32[i] = 0xffffffff;

    // ctx.putImageData(iData, 0, 0);
    // }

    // (function loop() {
    // noise(ctx);
    // requestAnimationFrame(loop);
    // })();
})