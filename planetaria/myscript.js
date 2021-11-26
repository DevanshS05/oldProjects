var can = document.getElementById("myCanvas2");
var ctx = can.getContext("2d");
var cann = document.getElementById("myCanvas1");
var ctxx = cann.getContext("2d");

var width = window.innerWidth;
var height = window.innerHeight;
var orbitcolor = "#b3b3b3";
can.width = width;
cann.width = width;
can.height = height;
cann.height = height;

//Declaring center coordinates
var xcenter = can.width / 2;
var ycenter = can.height / 2;

//descriping image sources for various planets
sunimg = "images/planet-images/sun-min.jpeg";
merimg = "images/planet-images/mercury-min.jpeg";
venimg = "images/planet-images/venus-min.jpeg";
earimg = "images/planet-images/earth-min.jpeg";
marimg = "images/planet-images/mars-min.jpeg";
jupimg = "images/planet-images/jupiter-min.jpeg";
satimg = "images/planet-images/saturn.png";
uraimg = "images/planet-images/uranus-min.jpeg";
nepimg = "images/planet-images/neptune-min.jpeg";
bg = "images/planet-images/galaxy-bg.jpg"
//describing descriptions for various planets
sundesc = "The Sun—the heart of our solar system—is a yellow dwarf star, a hot ball of glowing gases. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit.<br>Electric currents in the Sun generate a magnetic field that is carried out through the solar system by the solar wind—a stream of electrically charged gas blowing outward from the Sun in all directions";
merdesc = "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.<br>Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.";
vendesc = "Similar in size and structure to Earth, Venus has been called Earth's twin. These are not identical twins, however – there are radical differences between the two worlds.<br>Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of mostly sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though Mercury is closer to the Sun."
eardesc = "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. <br>While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.";
mardesc = "Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere.<br>Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape."
jupdesc = "Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium.<br>Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.";
satdesc = "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's.<br>Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.";
uradesc = "The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.<br>Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.​";
nepdesc="Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.<br>More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.";

class Planet {
  xpos;
  ypos;
  xposprev = 0;
  yposprev = 0;
  orbitradius;
  radius;
  theta;
  color;
  timeperiod;
  selected;
  rpf;
  image;
  text;
  constructor(a, b, c, d, e, f, g, h, i, j) {
    this.xpos = a;
    this.ypos = b;
    this.orbitradius = c;
    this.radius = d;
    this.theta = e;
    this.color = f;
    this.timeperiod = g;
    this.selected = h;
    this.image = i;
    this.text = j;

    this.rpf = (6 / this.timeperiod) * (Math.PI / 180);
  }
  renderPlanet() {
    ctx.clearRect(window.xcenter + this.xposprev - this.radius - 2, window.ycenter + this.yposprev - this.radius - 2, this.radius * 2 + 5, this.radius * 2 + 5);
    if (this.selected == true) {
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.beginPath();
      ctx.arc(window.xcenter + this.xpos, window.ycenter + this.ypos, this.radius + 1, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();

      ctx.fillStyle = "#ff5050";
      ctx.beginPath();
      ctx.arc(window.xcenter + this.xpos, window.ycenter + this.ypos, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();

    } else if (this.selected != true) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(window.xcenter + this.xpos, window.ycenter + this.ypos, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();
    }
  }
  updatePosition() {
    this.xposprev = this.xpos;
    this.yposprev = this.ypos;
    this.xpos = Math.cos(this.theta) * this.orbitradius;
    this.ypos = Math.sin(this.theta) * this.orbitradius;
    this.theta = this.theta + this.rpf;
  }
  drawOrbit() {
    ctxx.beginPath();
    ctxx.strokeStyle = window.orbitcolor;
    ctxx.lineWidth = 1;
    ctxx.arc(window.xcenter, window.ycenter, this.orbitradius, 0, Math.PI * 2, false);
    ctxx.stroke();
    ctxx.closePath();
  }
}

function populateStars(n) {
  for (var i = 0; i <= n; i++) {
    randx = Math.random() * can.width + 1;
    randy = Math.random() * can.height + 1;
    let starsize = Math.random();
    ctxx.beginPath();
    ctxx.fillStyle = "white";
    ctxx.arc(randx, randy, starsize, 0, Math.PI * 2, false);
    ctxx.fill();
    ctxx.closePath();
  }
}

function drawSun(size, largestorbit) {
  //Drawing the Sun
  ctxx.beginPath();
  ctxx.fillStyle = "rgba(255, 255,179,0.1)";
  ctxx.arc(window.xcenter, window.ycenter, size, 0, Math.PI * 2, false);
  ctxx.fill();
  ctxx.closePath();

  ctxx.beginPath();
  ctxx.fillStyle = "#ffff66";
  ctxx.arc(window.xcenter, window.ycenter, size / 2, 0, Math.PI * 2, false);
  ctxx.fill();
  ctxx.lineWidth = 10;
  ctxx.strokeStyle = "rgba(255, 153, 51,0.4)"
  ctxx.arc(window.xcenter, window.ycenter, size / 2.2, 0, Math.PI * 2, false);
  ctxx.stroke();
  ctxx.closePath();

  ctxx.beginPath();
  ctxx.lineWidth = 1;
  ctxx.fillStyle = "rgba(255,255,0,0.5)"
  ctxx.arc(window.xcenter, window.ycenter, size / 2.5, 0, Math.PI * 2, false);
  ctxx.fill();
  ctxx.closePath();

  //Drawing the solar range
  ctxx.beginPath();
  ctxx.fillStyle = "rgba(255,255,204,0.1)";
  ctxx.arc(window.xcenter, window.ycenter, largestorbit * 1.2, 0, Math.PI * 2, false);
  ctxx.fill();
  ctxx.closePath();
}

function deSelect() {
  Mercury.selected = false;
  Venus.selected = false;
  Earth.selected = false;
  Mars.selected = false;
  Jupiter.selected = false;
  Saturn.selected = false;
  Uranus.selected = false;
  Neptune.selected = false;
  //Clearing out the selected sun
  ctx.beginPath();
  ctx.clearRect((can.width/2)-22,(can.height/2)-22,45,45);
  ctx.closePath();
}

//Creating planet objects for each of the planets
let scalesize = 5;
let scaleradius = 20;
var Mercury = new Planet(0, 0, scaleradius * 2, scalesize * 0.8, 0, "#cccccc", 1.5, false, "none", "none");
var Venus = new Planet(0, 0, scaleradius * 3, scalesize * 1.5, 0, "#b82e8a", 3, false, "none", "none");
var Earth = new Planet(0, 0, scaleradius * 5, scalesize * 1.5, 0, "#77b300", 5, false, "none", "none");
var Mars = new Planet(0, 0, scaleradius * 7, scalesize * 1.25, 0, "#cc6600", 8, false, "none", "none");
var Jupiter = new Planet(0, 0, scaleradius * 10, scalesize * 2.5, 0, "#ff9933", 20, false, "none", "none");
var Saturn = new Planet(0, 0, scaleradius * 12, scalesize * 2.1, 0, "#ffcc00", 30, false, "none", "none");
var Uranus = new Planet(0, 0, scaleradius * 14, scalesize * 2, 0, "#4dc3ff", 60, false, "none", "none");
var Neptune = new Planet(0, 0, scaleradius * 16, scalesize * 2, 0, "#1a75ff", 80, false, "none", "none");


document.getElementById("sun-icon").addEventListener("click", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Sun"
  myimg = document.getElementById("main-img");
  myimg.setAttribute("src",window.sunimg);
  var mytxt = document.getElementById("text-container");
  mytxt.innerHTML = sundesc;
  ctx.beginPath();
  ctx.fillStyle="red";
  ctx.arc(can.width/2,can.height/2,20,0,Math.PI*2,false);
  ctx.fill();
  ctx.closePath();
});
document.getElementById("mercury-icon").addEventListener("click", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Mercury";
  Mercury.selected = true;
  myimg = document.getElementById("main-img");
  myimg.setAttribute("src",window.merimg);
  var mytxt = document.getElementById("text-container");
  mytxt.innerHTML = merdesc;
});
document.getElementById("venus-icon").addEventListener("click", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Venus";
  Venus.selected = true;
  myimg = document.getElementById("main-img");
  myimg.setAttribute("src",window.venimg);
  var mytxt = document.getElementById("text-container");
  mytxt.innerHTML = vendesc;
});
document.getElementById("earth-icon").addEventListener("click", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Earth";
  Earth.selected = true;
  myimg = document.getElementById("main-img");
  myimg.setAttribute("src",window.earimg);
  var mytxt = document.getElementById("text-container");
  mytxt.innerHTML = eardesc;
});
document.getElementById("mars-icon").addEventListener("click", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Mars";
  Mars.selected = true;
  myimg = document.getElementById("main-img");
  myimg.setAttribute("src",window.marimg);
  var mytxt = document.getElementById("text-container");
  mytxt.innerHTML = mardesc;
});
document.getElementById("jupiter-icon").addEventListener("click", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Jupiter";
  Jupiter.selected = true;
  myimg = document.getElementById("main-img");
  myimg.setAttribute("src",window.jupimg);
  var mytxt = document.getElementById("text-container");
  mytxt.innerHTML = jupdesc;
});
document.getElementById("saturn-icon").addEventListener("click", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Saturn";
  Saturn.selected = true;
  myimg = document.getElementById("main-img");
  myimg.setAttribute("src",window.satimg);
  var mytxt = document.getElementById("text-container");
  mytxt.innerHTML = satdesc;
});
document.getElementById("uranus-icon").addEventListener("click", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Uranus";
  Uranus.selected = true;
  myimg = document.getElementById("main-img");
  myimg.setAttribute("src",window.uraimg);
  var mytxt = document.getElementById("text-container");
  mytxt.innerHTML = uradesc;
});
document.getElementById("neptune-icon").addEventListener("click", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Neptune";
  Neptune.selected = true;
  myimg = document.getElementById("main-img");
  myimg.setAttribute("src",window.nepimg);
  var mytxt = document.getElementById("text-container");
  mytxt.innerHTML = nepdesc;
});

//Adding the event handlers()
document.getElementById("sun-icon").addEventListener("mouseover", function() {
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Sun"
});
document.getElementById("mercury-icon").addEventListener("mouseover", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Mercury";
  Mercury.selected = true;
});
document.getElementById("venus-icon").addEventListener("mouseover", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Venus";
  Venus.selected = true;
});
document.getElementById("earth-icon").addEventListener("mouseover", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Earth";
  Earth.selected = true;
});
document.getElementById("mars-icon").addEventListener("mouseover", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Mars";
  Mars.selected = true;
});
document.getElementById("jupiter-icon").addEventListener("mouseover", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Jupiter";
  Jupiter.selected = true;
});
document.getElementById("saturn-icon").addEventListener("mouseover", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Saturn";
  Saturn.selected = true;
});
document.getElementById("uranus-icon").addEventListener("mouseover", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Uranus";
  Uranus.selected = true;
});
document.getElementById("neptune-icon").addEventListener("mouseover", function() {
  deSelect();
  icontext = document.getElementById("icon-text");
  icontext.innerHTML = "Neptune";
  Neptune.selected = true;
});

 //Adding the event handlers to remove selection when unhovered
 document.getElementById("sun-icon").addEventListener("mouseout", function() {
    deSelect();
 });
document.getElementById("mercury-icon").addEventListener("mouseout", function() {
 if(Mercury.selected==false){
   deSelect();
 }
});
document.getElementById("venus-icon").addEventListener("mouseout", function() {
  if(Venus.selected==false){
    deSelect();
  }
});
document.getElementById("earth-icon").addEventListener("mouseout", function() {
  if(Earth.selected==false){
    deSelect();
  }
});
document.getElementById("mars-icon").addEventListener("mouseout", function() {
  if(Mercury.selected==false){
    deSelect();
  }
});
document.getElementById("jupiter-icon").addEventListener("mouseout", function() {
  if(Jupiter.selected==false){
    deSelect();
  }
});
document.getElementById("saturn-icon").addEventListener("mouseout", function() {
  if(Saturn.selected==false){
    deSelect();
  }
});
document.getElementById("uranus-icon").addEventListener("mouseout", function() {
  if(Uranus.selected==false){
    deSelect();
  }
});
document.getElementById("neptune-icon").addEventListener("mouseout", function() {
  if(Neptune.selected==false){
    deSelect();
  }
});


//Starting the main program
populateStars(can.width * 2);
drawSun(scalesize * 7, Neptune.orbitradius);
Mercury.drawOrbit();
Venus.drawOrbit();
Earth.drawOrbit();
Mars.drawOrbit();
Jupiter.drawOrbit();
Saturn.drawOrbit();
Uranus.drawOrbit();
Neptune.drawOrbit();

setInterval(function() {
  Mercury.updatePosition();
  Mercury.renderPlanet();
  Venus.updatePosition();
  Venus.renderPlanet();
  Earth.updatePosition();
  Earth.renderPlanet();
  Mars.updatePosition();
  Mars.renderPlanet();
  Jupiter.updatePosition();
  Jupiter.renderPlanet();
  Saturn.updatePosition();
  Saturn.renderPlanet();
  Uranus.updatePosition();
  Uranus.renderPlanet();
  Neptune.updatePosition();
  Neptune.renderPlanet();
}, 50);
