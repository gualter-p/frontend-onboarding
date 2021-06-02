const getMenu = _ => {
    var el = document.getElementById("navbar");
    if (el.className === "navbar") {
        el.className += "-responsive";
    } else {
        el.className = "navbar";
    }
}