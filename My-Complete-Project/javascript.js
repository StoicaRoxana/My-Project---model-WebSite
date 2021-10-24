function myFunction() {
    var x = document.getElementById("hidden");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var y = document.getElementById("the-button");
    y.classList.toggle("rotate");
   

}


function rotateFunction(){

}
