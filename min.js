document.onmousemove = animateCircles;
var colors = ["red","yellow","green"];
//  var circle = document.querySelector(".circle")
function animateCircles(event){
  var circle = document.createElement("div");
  circle.setAttribute("class","circle");
  document.body.appendChild(circle);

  var color = colors[Math.floor(Math.random()*colors.length)];
  circle.style.borderColor = color;

  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  

  circle.style.transition =  'all .5s linear .1s';
  
  circle.style.left = circle.offsetLeft -20+'px';
  circle.style.top = circle.offsetTop -20+'px';

  circle.style.width = '40px';
  circle.style.height = '40px';
  circle.style.borderRadius = '0px';
  circle.style.borderWidth = '5px';
  circle.style.opacity = 0;
  // circle.style.borderRadius= '0px';

}
