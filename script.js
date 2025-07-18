// effet machine a ecrire
const texteSlogan = "🏢 Destination Courbevoie !";
let indexLettre = 0;

function ecrireMachine() {
    if (indexLettre < texteSlogan.length) {
        document.getElementById("slogan").textContent += texteSlogan.charAt(indexLettre);
        indexLettre++;
        setTimeout(ecrireMachine, 100);
    }
}

ecrireMachine();

//dark mode
function basculerMode() {
    document.body.classList.toggle("mode-sombre");
}

//aparition en slide
//selectionner les elements
const sectionAccueil = document.getElementById("section-accueil");

//Ajouter un ecouteur d'evenement lorsque on fait defiler la page
window.addEventListener("scroll", () => {
    //Recuperer la position de notre element par rapport a l'ecran
    const position = sectionAccueil.getBoundingClientRect();
    //verifier si le haut de la section est visible
    if (position.top < window.innerHeight - 100) {
        //ajouter la classe 'visible'
        sectionAccueil.classList.add("visible");
    }
});

//zoom sur l'image
const imageCourbevoie = document.getElementById("image-cadre");
//ajoute un effet de zoom
imageCourbevoie.addEventListener("mouseenter", () => {
    imageCourbevoie.style.transform = "scale(1.5)";
});

//remet l'image a sa taille normal
imageCourbevoie.addEventListener("mouseleave", () => {
    imageCourbevoie.style.transform = "scale(1)";
});

//animation sur le smiley
const smiley = document.getElementById("smiley")
let angleRotation = 0;
let direction = 1;

//lance une boucle toutes les 0,5s
setInterval(() => {
    //incremente ou decremente l'angle de rotation selon la direction
    angleRotation += direction * 0.5;
    
    //stopper si on depasse +5° ou -5°
    if (angleRotation > 5 || angleRotation < -5) {
        direction *= -1;
    }

    //applique la rotation du smiley
    smiley.style.transform = `rotate(${angleRotation}deg)`;
},50);