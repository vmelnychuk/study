var canvas = null;
var ctx = null;
var frameRate = 10000/30;
var frame = 0;
var assets = ['img/0.png',
              'img/1.png',
              'img/2.png',
              'img/3.png',
              'img/4.png'];
var frames = [];

function setup() {
    var container = document.getElementById("container");
    canvas = document.createElement("canvas");
    container.appendChild(canvas);
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    for(var i = 0, len = assets.length; i < len; i++) {
        frames.push(new Image());
        frames[i].src = assets[i];
        frames[i].onload = onImageLoad;
    }
    setInterval(animate, frameRate);
};

function onImageLoad() {
    console.log("image loaded");
};

var animate = function() {
    //debugger;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frames[frame], 192, 192);
    frame = (frame + 1) % frames.length;
};

setup();