import {getNavbar, initializeLocalization} from './translation.js';

fetch("/components/navbar")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#navbar-placeholder").innerHTML = data;
    }).then(() => {
    let path = window.location.pathname;
    let currentPagePath = path.split("/").pop();
    const navbarLinks = document.querySelectorAll(".navbar__item a");

    for (let i = 0; i < navbarLinks.length; i++) {
        let link = navbarLinks[i];
        let href = link.getAttribute("href");

        if (href.indexOf(currentPagePath) !== -1 && link.className.toLowerCase() !== 'main__link') {
            link.classList.add("active");
            break;
        }
    }

    getNavbar();
    initializeLocalization();
});

if (window.location.pathname !== '/course/:id') {
    fetch("/components/balabaqsha")
        .then(response => response.text())
        .then(data => {
            document.querySelector("#balabaqsha-placeholder").innerHTML = data;
        }).then(() => {
        const ellipseDiv = document.getElementById("main__ellipse");
        if (window.location.pathname === "/course") {
            ellipseDiv.parentNode.removeChild(ellipseDiv);
        }
    });
}

fetch("/components/footer")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#footer").innerHTML = data;
    });

fetch("/components/quickConnection")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#quick-connection").innerHTML = data;
        const script = document.createElement("script");
        script.src = "/js/quickConnection.js";
        document.body.appendChild(script);
    });

if (window.location.pathname === '/') {
    fetch("/components/gallery")
        .then(response => response.text())
        .then(data => {
            document.querySelector("#gallery").innerHTML = data;
            const script = document.createElement("script");
            script.src = "/js/gallery.js";
            document.body.appendChild(script);
        });
}