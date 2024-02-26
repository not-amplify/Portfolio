icons = document.getElementById("icbuttons");
home = document.getElementById("home");
night = document.getElementById("night");


spantags = document.querySelector(".names");
navitems = document.querySelector(".navitem");

function topbar() {
  icons.style.display = "flex";
  icons.style.alignItems = "left";
  icons.style.justifyItems = "left";
  night.innerHTML += '<span class="names">Night</span>';
};

topbar()