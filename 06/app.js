console.log('DOM');

const buttons = document.querySelectorAll("button");

if (buttons.length > 0) {
    console.log(buttons);
    buttons.forEach((element) => {
        element.addEventListener("click", callbackFunction);
    });
}

function callbackFunction(event) {
    console.log("clicked");
    event.currentTarget.innerText = "clicked";
    event.currentTarget.removeEventListener("click", callbackFunction);
}