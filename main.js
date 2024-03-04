var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//create an empty array
var images = [];
images.length = 5;

for (var i = 1; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'image(' + i.toString() +').png';
}

var i = 0;
setInterval(function(){
    i++;
    if (i >= 5){
        i = 1;
    }
    c.drawImage(images[i],100,100,1000,1000);
}, 1000)
