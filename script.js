let navbar=document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
};
window.onscroll = () => {
    navbar.classlist.remove("active");
};
