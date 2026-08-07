/*==============================
        STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    }

    else {

        header.classList.remove("sticky");

    }

});


/*==============================
        SMOOTH SCROLL
==============================*/

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==============================
        SCROLL TO TOP
==============================*/

const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    }

    else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==============================
        ACTIVE NAV LINK
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*==============================
        FAQ ACCORDION
==============================*/

const questions = document.querySelectorAll(".question");

questions.forEach(question => {

    const answer = question.querySelector(".answer");

    question.querySelector("h3").onclick = () => {

        document.querySelectorAll(".answer").forEach(item => {

            if(item !== answer){

                item.style.display = "none";

            }

        });

        answer.style.display =
        answer.style.display === "block"
        ? "none"
        : "block";

    };

});


/*==============================
      COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".hero-info h2");

let started = false;

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero-info");

    if(!started && window.scrollY > hero.offsetTop-600){

        counters.forEach(counter=>{

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target/80;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.floor(count)+"+";

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText = target+"+";

                }

            }

            update();

        });

        started=true;

    }

});


/*==============================
        REVEAL ANIMATION
==============================*/

const reveals = document.querySelectorAll(

".service-card,.doctor-card,.testimonial,.feature-box,.about-image,.about-content"

);

function reveal(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


/*==============================
        HERO PARALLAX
==============================*/

const hero = document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

    hero.style.transform =
    `translateY(${window.scrollY*.25}px)`;

});


/*==============================
        BUTTON RIPPLE
==============================*/

document.querySelectorAll(".primary,.secondary").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});
/*=================================
        PRELOADER
=================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});


/*=================================
        MOUSE GLOW
=================================*/

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(glow){

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

}

});


/*=================================
        IMAGE TILT
=================================*/

document.querySelectorAll(".doctor-card,.service-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y/rect.height)-.5)*-10;

const rotateY=((x/rect.width)-.5)*10;

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


/*=================================
      FLOATING SHAPES
=================================*/

document.querySelectorAll(".shape").forEach((shape,index)=>{

let speed=(index+1)*0.12;

window.addEventListener("scroll",()=>{

shape.style.transform=
`translateY(${window.scrollY*speed}px)`;

});

});


/*=================================
        TYPING EFFECT
=================================*/

const typing=document.querySelector(".typing");

if(typing){

const text=typing.innerText;

typing.innerHTML="";

let i=0;

function type(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

}


/*==========================
      HAMBURGER MENU
==========================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector(".navv");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

    menu.innerHTML = nav.classList.contains("active") ? "✕" : "☰";

});