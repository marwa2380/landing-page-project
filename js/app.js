
/**
 * Define Global Variables
 * */

const navbar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * */

//// build the navbar
function creatNav() {
	sections.forEach(function (element) {
            let list = document.createElement("li");
            list.classList.add("navbar__list__item");
            let sectionName = element.getAttribute("data-nav");
            let SectionId = element.getAttribute("id");
            list.innerHTML = `<a href="#${SectionId}" class="nav__hyperlink">${sectionName}</a>`;
            navbar.appendChild(list);
        });
}

window.addEventListener('load', creatNav())

// check if an element is in viewport or not

function Viewport(elem) {
	let dis = elem.getBoundingClientRect();

	return (
		dis.top >= -350 &&
		dis.left >= 0 &&
		dis.bottom <= (1.3 * window.innerHeight || document.documentElement.clientHeight) &&
		dis.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

// remove active class
function removeActiveS() {
    sections.forEach(function (element) {
            element.classList.remove("your-active-class", "active");
            element.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
        });
}

function removeActivelink() {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
    navbarAnchors.forEach(function (element) {
            element.classList.remove("active-nav");
        });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * */




// add active class to section
function activeSction(currentSection) {
    currentSection.classList.add("your-active-class", "active");
    currentSection.style.cssText = "background-color: lightRed;";

    removeActivelink();
    activateNavLinks(currentSection.getAttribute('id'));
}

function activateNavLinks(currentSectionId) {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");

        navbarAnchors.forEach(function (element) {
                if (element.getAttribute('href') == `#${currentSectionId}`) {
                    element.classList.add("active-nav");
                }
            });
}

// Scroll to anchor ID using scrollTO event
function scroll() {
    let Anchors = document.querySelectorAll(".nav__hyperlink");

    Anchors.forEach(function (elem) {
            elem.addEventListener("click", function (event) {
                event.preventDefault();

                document.querySelector(elem.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
}

/**
 * End Main Functions
 * Begin Events
 *
*/


// Scroll to section on click
scroll();

// Set active section
window.addEventListener('scroll', function (event) {
	event.preventDefault();
	    sections.forEach(function (element) {

            if (Viewport(element)) {
                removeActiveS();
                activeSction(element);

            } else if (window.scrollY == 0) {
                removeActiveS();
                removeActivelink();

            }
        }, false);
});

let scrollToTopBtn = document.getElementById("scrollToTopBtn")
let rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)