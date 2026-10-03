console.log('DOM');

const element = document.querySelector(".comments__item.comments__item--newest");

if (element !== null) {
    const dataInfoElements = element.querySelectorAll("[data-info]");
    console.log(dataInfoElements.length);
} else {
    console.log(0);
}
