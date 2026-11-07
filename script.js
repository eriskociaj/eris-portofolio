/* =========================================
   1. SURVIVING THE CAGE SLIDESHOW
========================================= */

const stcSlideshow = document.querySelector(".stc-slideshow");

if (stcSlideshow) {

    const slides = stcSlideshow.querySelectorAll(".stc-slide");

    const previousButton = stcSlideshow.querySelector(".stc-prev");

    const nextButton = stcSlideshow.querySelector(".stc-next");

    const counter = stcSlideshow.querySelector(".stc-current");

    let currentSlide = 0;


    // Display the selected screenshot
    function showSlide(index) {

        // Hide the current screenshot
        slides[currentSlide].classList.remove("active");

        // Calculate the next screenshot
        currentSlide = (index + slides.length) % slides.length;

        // Display the new screenshot
        slides[currentSlide].classList.add("active");

        // Update the counter
        counter.textContent = currentSlide + 1;

    }


    // Previous screenshot
    previousButton.addEventListener("click", function () {

        showSlide(currentSlide - 1);

    });


    // Next screenshot
    nextButton.addEventListener("click", function () {

        showSlide(currentSlide + 1);

    });

}


/* =========================================
   2. SCROLL ANIMATIONS
========================================= */

// Select the elements we want to animate
const animatedElements = document.querySelectorAll(
    ".section-heading, .about-content, .education-card, .project-card, .skill-card, .contact-content"
);


// Check if the browser supports IntersectionObserver
if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    // Stop observing after the animation
                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    // Observe each selected element
    animatedElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

}


/* =========================================
   3. ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll("main section[id]");

const navigationLinks = document.querySelectorAll(".navbar nav a");


function updateNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


// Update navigation when scrolling
window.addEventListener("scroll", updateNavigation);


// Set the correct active link when the page loads
updateNavigation();


/* =========================================
   4. CURRENT YEAR IN FOOTER
========================================= */

const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.textContent =
        "Designed and built by Eris Kociaj · " +
        new Date().getFullYear();

}
