//getting figure and caption
var pic = document.getElementById('pic');
var cap = document.getElementById('caption');
//getting forward/back buttons
var prev = document.getElementById('prev');
var next = document.getElementById('next');
//creating counter to track clicks
var count = 1;


//Returning different pictures based on a number (which will represent where we are in slideshow)
function picture(num) {
  if (num===1){
    return "https://www.indiewire.com/wp-content/uploads/2021/02/The_Snoopy_Show_Photo_010101.jpg?w=3000&h=2000&crop=1";
  } else if (num===2) {
    return "https://images6.fanpop.com/image/photos/37800000/The-Charlie-Brown-and-Snoopy-Show-charlie-brown-37878679-640-480.png";
  } else if (num===3) {
    return "https://www.animationconnection.com/assets/artwork/1657326263-615-1498-the-legal-beagle-vs-judge-lucy.jpg"
  } else if (num===4) {
    return "https://woomagazine.com.br/wp-content/uploads/2021/01/Snoopy-e-Sua-Turma-1024x576.jpg";
  } else /*(num===5)*/ {
    return "https://images.squarespace-cdn.com/content/566a4af357eb8d3974390587/1454649027381-BAPYULLINQE7H785WBHW/MLC-18-DogGoneCommercial-LtdEdCel.jpg?content-type=image%2Fjpeg";
  }
};
//Returning different corresponding captions based on a number
function caption(num) {
  if (num===1){
    return "Snoopy the Aviator";
  } else if (num===2) {
    return "Snoopy in the Field";
  } else if (num===3) {
    return "Snoopy Legal Aid";
  } else if (num===4) {
    return "Snoopy the Helicopter";
  } else /*(num===5)*/ {
    return "Snoopy in the Holidays";
  }
};


//Sets the correct picture and caption based on value of count 
function slide() {
  for (var i=1; i<=5; i++) {
    if (i===count) {
      pic.setAttribute('src', picture(count));
      cap.innerHTML = caption(count);
    }
  }
}


//Adjusts value of count with every back click and then gets corresponding "slide"
prev.addEventListener("click", function() {
  count--;
  if (count===0) {
    count=5
  }
  slide();
});
//Adjusts value of count with every forward click and then gets corresponding "slide"
next.addEventListener("click", function() {
  count++;
  if (count===6) {
    count=1
  }
  slide();
});


//Ups value of count and gets corresponding "slide" to cycle automatically 
setInterval(function() {
    count++
    if (count===6) {
        count=1;
    }
    pic.setAttribute('src', picture(count));
    cap.innerHTML = caption(count);
}, 5000);