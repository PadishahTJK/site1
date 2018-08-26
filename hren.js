var img = document.createElement("img");
img.src = "image.png";

src.appendChild(img);

//Function  Way

var img = new Image();
var div = document.getElementById('x');
 
 
img.onload = function() {
 
  div.innerHTML += '<img src="'+img.src+'" />'; 
 
};
 
 
img.src = 'image.jpg';


function test(){

}