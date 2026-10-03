console.log('DOM');

const linksWithDataUrl = document.querySelectorAll("a[data-url]");

if (linksWithDataUrl.length === 0) {
    console.log("Nie znaleziono linków z atrybutem data-url.");
}

linksWithDataUrl.forEach((element) => {
    const dataUrl  = element.getAttribute("data-url");
    element.setAttribute("href", dataUrl);
});