 /************************************************************
 * RUTH & HERVÉ - SCRIPT MARIAGE LUXE
 ************************************************************/

/* =========================
   INVITATION PERSONNALISÉE
========================= */
const params = new URLSearchParams(window.location.search);
const guestName = params.get("nom");

const guestElement = document.getElementById("guestName");

if (guestName && guestElement) {
    guestElement.textContent = decodeURIComponent(guestName);
}

/* =========================
   OUVERTURE INVITATION
========================= */

const welcomeScreen = document.getElementById("welcome-screen");
const enterBtn = document.getElementById("enter-site");
const music = document.getElementById("backgroundMusic");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        // disparition du loader
        welcomeScreen.style.opacity = "0";

        setTimeout(() => {

            welcomeScreen.style.display = "none";

            // aller directement au programme
            document.getElementById("programme").scrollIntoView({
                behavior:"smooth"
            });

        },700);

        // lecture musique
        music.volume = 0.6;

        music.play().catch(()=>{});

        startScrollAnimations();

    });

}
/* =========================
   MUSIQUE TOGGLE
========================= */

const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {
    musicBtn.addEventListener("click", () => {

        if (music.paused) {
            music.play();
            musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        } else {
            music.pause();
            musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        }

    });
}

/* =========================
   NAVIGATION SCROLL LUXE
========================= */

function goPage(sectionId){

    const section = document.getElementById(sectionId);

    if(section){

        section.scrollIntoView({

            behavior:"smooth",
            block:"start"

        });

    }

}
/* =========================
   LIGHTBOX GALERIE
========================= */

function openImage(img) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

function closeImage() {

    const lightbox = document.getElementById("lightbox");
    if (lightbox) lightbox.style.display = "none";
}

/* =========================
   RSVP WHATSAPP
========================= */

function sendRSVP() {

    const name = document.getElementById("name")?.value;
    const status = document.getElementById("status")?.value;

    if (!name) {
        alert("Veuillez entrer votre nom");
        return;
    }

    const phone = "243997681830";

    const message =
`Bonjour,

Je suis ${name}.
Je confirme : ${status}
au mariage de Ruth & Hervé.

Merci.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

/* =========================
   SCROLL ANIMATIONS
========================= */

function startScrollAnimations() {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });

    }, {
        threshold: 0.15
    });

    sections.forEach(sec => {
        sec.classList.add("hidden");
        observer.observe(sec);
    });
}

/* =========================
   PÉTALES DE ROSES (OPTION LUXE)
========================= */

function createPetal() {

    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 5000);
}

setInterval(createPetal, 400);
function downloadInvitation() {
    const link = document.createElement("a");
    link.href = "images/invitation.jpg"; // ou PDF
    link.download = "Invitation_Ruth_Herve.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}