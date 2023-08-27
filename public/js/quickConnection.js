initializeButton();

function initializeButton() {
    const staticButton = document.getElementById("staticButton");
    const formContainer = document.getElementById("formContainer");

    staticButton.addEventListener("click", function (event) {
        event.stopPropagation();
        formContainer.classList.toggle("hidden");
        const img = staticButton.querySelector("img");
        if (formContainer.classList.contains("hidden")) {
            img.src = "/assets/phone-icon.png";
        } else {
            img.src = "/assets/close_icon.svg";
        }
    });

    document.addEventListener("click", function (event) {
        const target = event.target;
        if (!formContainer.contains(target) && target !== staticButton) {
            formContainer.classList.add("hidden");
            const img = staticButton.querySelector("img");
            img.src = "/assets/phone-icon.png";
        }
    });
}
