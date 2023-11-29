
var navbarContainer = document.getElementById("navbarbox");
var navbarXhr = new XMLHttpRequest();
navbarXhr.open("GET", "../htmlelements/navbar.html", true);
navbarXhr.onreadystatechange = function () {
    if (navbarXhr.readyState === 4 && navbarXhr.status === 200) {
        navbarContainer.innerHTML = navbarXhr.responseText;
    }
};
navbarXhr.send();

// Charger le footer
var footerContainer = document.getElementById("footerbox");
var footerXhr = new XMLHttpRequest();
footerXhr.open("GET", "../htmlelements/footer.html", true);
footerXhr.onreadystatechange = function () {
    if (footerXhr.readyState === 4 && footerXhr.status === 200) {
        footerContainer.innerHTML = footerXhr.responseText;
    }
};
footerXhr.send();


function toggleParagraphs(className) {
    var paragraphs = document.querySelectorAll('.' + className);
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.toggle('hidden-on-mobile');
    });
}