/*anchor scrolling by click on li*/

/*getting li from nav*/
const firstNavLi = document.getElementsByTagName("li")[0];
const secondNavLi = document.getElementsByTagName("li")[1];
const thirdNavLi = document.getElementsByTagName("li")[2];
const fourthNavLi = document.getElementsByTagName("li")[3];
const fifthNavLi = document.getElementsByTagName("li")[4];
const sixthNavLi = document.getElementsByTagName("li")[5];

/*setting listener*/
firstNavLi.addEventListener("click", aboutAnchor);
secondNavLi.addEventListener("click", howtoplayAnchor);
thirdNavLi.addEventListener("click", charactersAnchor);
fourthNavLi.addEventListener("click", aboutAnchorM);
fifthNavLi.addEventListener("click", howtoAnchorM);
sixthNavLi.addEventListener("click", charactersAnchorM);

/*listener arguments*/
function aboutAnchor(){
const aboutSection = document.querySelector(".about-section").getBoundingClientRect();
window.scrollTo(aboutSection);
}
function howtoplayAnchor(){
const howtoplaySection = document.querySelector(".howtoplay-section").getBoundingClientRect();
window.scrollTo(howtoplaySection);
}
function charactersAnchor(){
const charactersSection = document.querySelector(".characters-section").getBoundingClientRect();
window.scrollTo(charactersSection);
}

/*getting backlinks from backlinks-section*/
const aboutBacklink = document.querySelector(".backlink1");
const skillsBacklink = document.querySelector(".backlink2");
const projectsBacklink = document.querySelector(".backlink3");


/*setting listener*/
aboutBacklink.addEventListener("click", aboutBack);
skillsBacklink.addEventListener("click", howtoplayBack);
projectsBacklink.addEventListener("click", charactersBack);

/*listener arguments*/
function aboutBack(){
const about = document.querySelector(".about-section").getBoundingClientRect();
window.scrollBy(about);
}

function howtoplayBack(){
const howtoplay = document.querySelector(".howtoplay-section").getBoundingClientRect();
window.scrollBy(howtoplay);
}

function charactersBack(){
const characters = document.querySelector(".characters-section").getBoundingClientRect();
window.scrollBy(characters);
}


/*mobile-scroll*/
function aboutAnchorM(){
const nav = document.getElementsByTagName("nav")[0].classList;
const bod = document.getElementsByTagName("body")[0];
const menuLi = document.querySelector(".hidden-menu-ul").classList;
const hiddenMenuClose = document.querySelector(".hidden-menu-container2");
const hiddenMenuOpen = document.querySelector(".hidden-menu-container");
const blockCalc = document.querySelector(".block-calc1").classList;

hiddenMenuClose.style.display = "none";
hiddenMenuOpen.style.display = "flex";

if (bod.style.overflow == "hidden"){
bod.style.overflow = "visible";
nav.remove("active-menu");
menuLi.remove("active-menu-li");
blockCalc.remove("block-calc1-active");
}
const aboutSection = document.querySelector(".about-section").getBoundingClientRect();
window.scrollTo(aboutSection);
}
function howtoAnchorM(){
const nav = document.getElementsByTagName("nav")[0].classList;
const bod = document.getElementsByTagName("body")[0];
const menuLi = document.querySelector(".hidden-menu-ul").classList;
const hiddenMenuClose = document.querySelector(".hidden-menu-container2");
const hiddenMenuOpen = document.querySelector(".hidden-menu-container");
const blockCalc = document.querySelector(".block-calc1").classList;

hiddenMenuClose.style.display = "none";
hiddenMenuOpen.style.display = "flex";

if (bod.style.overflow == "hidden"){
bod.style.overflow = "visible";
nav.remove("active-menu");
menuLi.remove("active-menu-li");
blockCalc.remove("block-calc1-active");
}

const howtoplaySection = document.querySelector(".howtoplay-section").getBoundingClientRect();
window.scrollTo(howtoplaySection);
}
function charactersAnchorM(){
const nav = document.getElementsByTagName("nav")[0].classList;
const bod = document.getElementsByTagName("body")[0];
const menuLi = document.querySelector(".hidden-menu-ul").classList;
const hiddenMenuClose = document.querySelector(".hidden-menu-container2");
const hiddenMenuOpen = document.querySelector(".hidden-menu-container");
const blockCalc = document.querySelector(".block-calc1").classList;

hiddenMenuClose.style.display = "none";
hiddenMenuOpen.style.display = "flex";

if (bod.style.overflow == "hidden"){
bod.style.overflow = "visible";
nav.remove("active-menu");
menuLi.remove("active-menu-li");
blockCalc.remove("block-calc1-active");
}
const charactersSection = document.querySelector(".characters-section").getBoundingClientRect();
window.scrollTo(charactersSection);
}

/*scroll reveal effect*/
ScrollReveal({
    reset: false,
    duration: 2500,
    distance: '60px',
    viewFactor: 0.4,
    afterReveal: myCallback,    
    delay: 400,
});

/*about-section*/
ScrollReveal().reveal('.about-section', { delay: 400, origin: 'top', viewFactor: 0});
ScrollReveal().reveal('.introdution-container', { delay: 600, origin: 'top' ,viewFactor: 0});
ScrollReveal().reveal('.card-button', { delay: 700, origin: 'bottom', viewFactor: 0});
ScrollReveal().reveal('.card1', { delay: 500, origin: 'bottom', viewFactor: 0});
ScrollReveal().reveal('.card2', { delay: 600, origin: 'left', viewFactor: 0});
ScrollReveal().reveal('.card3', { delay: 700, origin: 'bottom', viewFactor: 0});
ScrollReveal().reveal('.card4', { delay: 800, origin: 'left', viewFactor: 0});

/*howtoplay-section*/
ScrollReveal().reveal('.howtoplay-section', { delay: 400, origin: 'top'});
ScrollReveal().reveal('.preview-container', { delay: 600, origin: 'top'});
ScrollReveal().reveal('.video-icon', { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.bigcard1', { delay: 500, origin: 'top'});
ScrollReveal().reveal('.bigcard2', { delay: 700, origin: 'left'});
ScrollReveal().reveal('.bigcard3', { delay: 900, origin: 'bottom'});
ScrollReveal().reveal('.bigcard4', { delay: 1000, origin: 'left'});

/*characters-section*/
ScrollReveal().reveal('.characters-section', { delay: 400, origin: 'top'});
ScrollReveal().reveal('.characters-container', { delay: 600, origin: 'top'});
ScrollReveal().reveal('.story-button', { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.character1-info', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.character2-info', { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.character3-info', { delay: 900, origin: 'bottom'});
ScrollReveal().reveal('.character1', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.character2', { delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.character3', { delay: 700, origin: 'bottom'});

/*backlink-section*/
ScrollReveal().reveal('.backlink1', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.backlink2', { delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.backlink3', { delay: 800, origin: 'bottom'});

function myCallback (el) {
    el.removeAttribute('style');
    const html = document.getElementsByTagName('html')[0].classList;
    html.remove('sr');
}