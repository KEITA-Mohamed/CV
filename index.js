
const target = document.getElementById("target");

let array = ["Bonjour, je suis Mohamed KEITA"]

let wordIndex = 0;

let letterIndex = 0;


const containerNavBar = document.getElementById("container-nav-header");

const hamburger = document.querySelector(".hamburger");

const textCompetence = document.querySelector(".text-competence");

const languageOne = document.querySelector(".language1");

const languageTwo = document.querySelector(".language2");

const languageThree = document.querySelector(".language3");

const languageFour = document.querySelector(".language4");

const presentation = document.querySelector(".presentation");

const formation = document.querySelector(".container-formation");

const contact = document.querySelector(".container-contact");

const savoirResponsive = document.querySelector(".responsive");

const savoirCode = document.querySelector(".code");

const savoirSeo = document.querySelector(".reseau");

const savoirIdea = document.querySelector(".idea");

const savoirTeam = document.querySelector(".team");

const savoirOutil = document.querySelector(".outil");

const disponibity = document.querySelector(".container-disponibiliter");

const headerHead = document.querySelector(".header-head");

const formulaire = document.getElementById("action");

const inputs = document.querySelectorAll('input[type="text"]');

const inputNom = document.getElementById("nom");

let nomSpan = document.querySelector(".nom-span");

const inputPrenom = document.getElementById("prenom");

let prenomSpan = document.querySelector(".prenom-span");

const inputEmail = document.getElementById("mail");

let emailSpan = document.querySelector(".email-span");



const creatLetter = ()=>{

    const letter = document.createElement("span");

    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex]
    letter.style.color ="white";

};

creatLetter();

setInterval(()=>{
    
    letterIndex++;
    creatLetter();
}, 100);




hamburger.addEventListener("click", ()=>{

    containerNavBar.classList.toggle("active");

});



window.addEventListener("scroll", ()=>{
    let levelscroll = (window.scrollY + window.innerHeight) / document.body.offsetHeight;//pour avoir la valeur total du scroll

    
    if(levelscroll > 0.28){

        textCompetence.style.transform = "none";
        textCompetence.style.opacity = 1;
    }

    if(levelscroll > 0.38){

        languageOne.style.opacity = 1;
        languageOne.style.transform ="none";
        languageThree.style.opacity = 1;
        languageThree.style.transform ="none";
    }

    if(levelscroll > 0.38){

        languageTwo.style.opacity = 1;
        languageTwo.style.transform ="none";
        languageFour.style.opacity = 1;
        languageFour.style.transform ="none";
    }

    if(levelscroll > 0.24){

        presentation.style.opacity = 1;
        presentation.style.transform = "none";
    }

    if(levelscroll > 0.75){

        formation.style.opacity = 1;
        formation.style.transform = "none";
    }

    if(levelscroll > 0.82){

        contact.style.opacity = 1;
        contact.style.transform = "none";
    }

    if(levelscroll > 0.50){

        savoirResponsive.style.transform = "none"
        savoirResponsive.style.opacity = 1

        savoirCode.style.transform = "none";
        savoirCode.style.opacity = 1;

        savoirSeo.style.transform = "none";
        savoirSeo.style.opacity = 1;

        savoirIdea.style.transform = "none";
        savoirIdea.style.opacity = 1;

        savoirTeam.style.transform = "none";
        savoirTeam.style.opacity = 1;

        savoirOutil.style.transform = "none";
        savoirOutil.style.opacity = 1;
    }


    if(levelscroll > 0.60){

        disponibity.style.transform = "none";
        disponibity.style.opacity = 1;
    }

    if(levelscroll > 0.27){
        headerHead.style.background = "white";
    }else{
        headerHead.style.background = "hsla(0, 28%, 95%, 0.473)";
    }
});

inputNom.addEventListener("input", (e)=>{

    if(e.target.value.length < 3 ){
        nomSpan.textContent = "Le nom doit faire minimum 3 caractères";

        
    }
    else{
        nomSpan.textContent = "";
    }
})

inputPrenom.addEventListener("input", (e)=>{

    if(e.target.value.length < 3 ){
        prenomSpan.textContent = "Le prenom doit faire minimum 3 caractères";

        
    }
    else{
        prenomSpan.textContent = "";
    }
})





formulaire.addEventListener("submit", (e) =>{

    e.preventDefault();


    if(inputNom && inputPrenom && inputEmail){
        const data = {
            inputNom,
            inputPrenom,
            inputEmail,
        };

        console.log(data);

        inputs.forEach((input) => (input.value = ""));

        nom = null;
        prenom = null;
        mail = null;
        
    }
})