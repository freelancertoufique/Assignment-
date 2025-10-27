const header = document.querySelector("#header");
const navigation = document.querySelectorAll(".navlist");
const menuHandle = document.querySelector("#menu")

// making header stiky

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    };
});

// for navigating navbars 
navigation.forEach(item => {
    item.addEventListener("click", () => {
        navigation.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

menuHandle.addEventListener("click", () => {
    const navItem = document.querySelector(".navItem")
    navItem.classList.toggle("active")

})