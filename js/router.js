const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/testApi": "/pages/testApi.html",
    "/replays": "/pages/replays.html",
    "/categories": "/pages/categories.html"
};

const routesJS = {
    "/testApi": "js/testApi.js",
    "/replays": "js/replays.js",
    "/categories": "js/categories.js"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    //Ajout de l'html
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
}

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

handleLocation()

const navlink = document.querySelectorAll('.navlink')
const essai = document.querySelector('.essai')

navlink.addEventListener('click', handleLocation);
essai.addEventListener('click', handleLocation);