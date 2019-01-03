window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult =
        document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        //menu er nu skjult - ændre menu til burger
        document.querySelector("#menuknap").textContent = "🍔";
    } else {
        //menu er nu vist - ændre menu til x
        document.querySelector("#menuknap").textContent = "✖";
    }

}
