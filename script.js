document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next Previous Button

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail Image

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("imageslide");
    let thumb = document.getElementsByClassName("demo");
    let descriptionImage = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < thumb.length; i++) {
            thumb[i].className = thumb[i].className.replace("active","");
        }
        slides[slideIndex-1].style.display = "block";
        thumb[slideIndex-1].className += "active";
        descriptionImage.innerHTML = thumb[slideIndex-1].alt;
}
