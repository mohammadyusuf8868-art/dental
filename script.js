/*loading screen*/

window.addEventListener("load", () => {
    document.getElementById("loader").classList.add("hide");
});

/*for sound effect*/

const sound = document.getElementById("welcomeSound");

window.addEventListener("scroll", () => {
    sound.play();
}, { once: true });

document.addEventListener("pointerdown", () => {
    sound.play();
}, { once: true });

/*STICKY HEADER*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    }

    else {

        header.classList.remove("sticky");

    }

});


/*SMOOTH SCROLL*/

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


/*SCROLL TO TOP*/

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
/*Baloon Pop*/

const btn = document.getElementById("call");

btn.addEventListener("click", () => {
    btn.classList.remove("pop");

    void btn.offsetWidth;

    btn.classList.add("pop");
});



/*FAQ ACCORDION*/

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

/*REVEAL ANIMATION*/

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


/*HERO PARALLAX*/

const hero = document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

    hero.style.transform =
    `translateY(${window.scrollY*.25}px)`;

});
/*PRELOADER*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

/*IMAGE TILT*/

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


/*FLOATING SHAPES*/

document.querySelectorAll(".shape").forEach((shape,index)=>{

let speed=(index+1)*0.12;

window.addEventListener("scroll",()=>{

shape.style.transform=
`translateY(${window.scrollY*speed}px)`;

});

});

/*HAMBURGER MENU*/

const menu = document.querySelector(".menu");
const nav = document.querySelector(".navv");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

    menu.innerHTML = nav.classList.contains("active") ? "✕" : "☰";

});
/*homesound*/

document.getElementById("home").addEventListener("click", () => {
    document.getElementById("homesound").currentTime = 0;
    document.getElementById("homesound").play();
});

/*Aboutsound*/

document.getElementById("abouttt").addEventListener("click", () => {
    document.getElementById("aboutsound").currentTime = 0;
    document.getElementById("aboutsound").play();
});

/*Servicessound*/

document.getElementById("servicesss").addEventListener("click", () => {
    document.getElementById("servicessound").currentTime = 0;
    document.getElementById("servicessound").play();
});

/*Doctorssound*/

document.getElementById("doctorsss").addEventListener("click", () => {
    document.getElementById("doctorssound").currentTime = 0;
    document.getElementById("doctorssound").play();
});

/*testimonialssound*/

document.getElementById("testimonialsss").addEventListener("click", () => {
    document.getElementById("testimonialssound").currentTime = 0;
    document.getElementById("testimonialssound").play();
});
/*contactsound*/

document.getElementById("addresss").addEventListener("click", () => {
    document.getElementById("addressound").currentTime = 0;
    document.getElementById("addressound").play();
});

/*booksound*/
document.getElementById("bookk").addEventListener("click", () => {
    document.getElementById("booksound").currentTime = 0;
    document.getElementById("booksound").play();
});

/*Big screen*/

/*homesound*/

document.getElementById("home1").addEventListener("click", () => {
    document.getElementById("homesound1").currentTime = 0;
    document.getElementById("homesound1").play();
});

/*Aboutsound*/

document.getElementById("about1").addEventListener("click", () => {
    document.getElementById("aboutsound1").currentTime = 0;
    document.getElementById("aboutsound1").play();
});

/*Servicessound*/

document.getElementById("services1").addEventListener("click", () => {
    document.getElementById("servicessound1").currentTime = 0;
    document.getElementById("servicessound1").play();
});

/*Doctorssound*/

document.getElementById("doctors1").addEventListener("click", () => {
    document.getElementById("doctorssound1").currentTime = 0;
    document.getElementById("doctorssound1").play();
});

/*testimonialssound*/

document.getElementById("testimonials1").addEventListener("click", () => {
    document.getElementById("testimonialssound1").currentTime = 0;
    document.getElementById("testimonialssound1").play();
});
/*contactsound*/

document.getElementById("contact1").addEventListener("click", () => {
    document.getElementById("addressound1").currentTime = 0;
    document.getElementById("addressound1").play();
});

/*booksound*/
document.getElementById("book1").addEventListener("click", () => {
    document.getElementById("booksound1").currentTime = 0;
    document.getElementById("booksound1").play();
});



