/* ===== Typing Animation ===== */
var typed = new Typed(".typing", {
    strings: ["", "Online Appointment Service", "Health Tips", "Best Doctors", "Fast Response"],
    typedSpeed: 10,
    BackSpeed: 10,
    loop: true
})

/* ===== Aside ===== */
const nav = document.querySelector(".my-nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove('active');
        }
        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}


// ---------------------------------------------------------
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.getElementById(target).classList.add("active");
}

function updateNav(element) {
    const target = element.getAttribute("href").split("#")[1];

    for (let i = 0; i < totalNavList; i++) {
        const navLink = navList[i].querySelector("a");
        navLink.classList.remove("active");

        if (target === navLink.getAttribute("href").split("#")[1]) {
            navLink.classList.add("active");
        }
    }
}

// ---------------------------------------------------------



const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


// Moving on another page
document.querySelectorAll(".book-appointment").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    });
});

document.querySelectorAll(".choose-doctor").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    });
});


document.querySelectorAll(".show-login-form").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    });
});

// for dynamic cards of registered doctors
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('show-appointment-form')) {
        event.preventDefault();
        const sectionIndex = event.target.getAttribute('data-section-index');
        showSection(event.target);
        updateNav(event.target);
        removeBackSection();
        addBackSection(sectionIndex);
    }
});

// -----------------------------------------------------------------


// for admin registration form
function showModal() {
    document.querySelector('.overlay').classList.add('show-overlay');
    document.querySelector('.register-form').classList.add('show-register-form');
}

function closeModal() {
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector('.register-form').classList.remove('show-register-form');
}

var closeRegistration = document.querySelector('.close');
closeRegistration.addEventListener('click', closeModal);
// -------------------------------------------------------------------


// Setting date limit in calendar
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date-field").setAttribute("min", today);
document.getElementById("date-field").setAttribute("max", today);

