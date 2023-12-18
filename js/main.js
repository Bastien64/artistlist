

// FOOTER SUR MOBILE
function toggleParagraphs(className) {
    var paragraphs = document.querySelectorAll('.' + className);
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.toggle('hidden-on-mobile');
    });
}


// PAGINATION DE ARTISTEPAGINATION.HTML
function showPage(pageNumber, suffix = '') {
    var albumPages = document.querySelectorAll('.album-page' + suffix);
    albumPages.forEach(function (page) {
        page.style.display = 'none';
    });

    document.getElementById('page' + pageNumber + suffix).style.display = 'block';
} 


