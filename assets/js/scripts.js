
// Dropdown menu for selecting the city
$(document).ready(function() {
    $('.menu').dropit();
});


// Temporary remote origins 
var Oulu = ["Oulu", "https://raw.githubusercontent.com/iuuso/KV-challenge/master/content/oulu.html"];
var Tampere = ["Tampere", "https://raw.githubusercontent.com/iuuso/KV-challenge/master/content/tampere.html"];
var Turku = ["Turku", "https://raw.githubusercontent.com/iuuso/KV-challenge/master/content/turku.html"];

// var Oulu = "./content/oulu.html"; // <-- not tested, should work
// var Tampere = "./content/tampere.html";
// var Turku = "./content/turku.html";

// Oulu as a default value
var currentCity = "Oulu";

// Change the content according to the request
function changeCity(city) {
    $("#boxed-content").load(city[1]);
    console.log("Content changed to " + city[0]);
    changeBadgeCity(city[0]);

}

function changeBadgeCity(cityname) {
    document.getElementById("badgecity").innerHTML = cityname;
}