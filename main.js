var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000);
} 




function dodawanie(x, y){
    
    document.getElementById("zamowienie").innerHTML += y + " - " + x+" zł <br>";
    

    var rob = document.getElementById("zaplata").innerHTML;
    
    ostatnie = Number(rob) + parseFloat(x);
    document.getElementById("zaplata").innerHTML = ostatnie.toFixed(2);
    
}




var glicz = document.getElementById("guzik-licz");
glicz.addEventListener("click",function() {
    document.getElementById("wynik").innerHTML = "";
    var liczba1 = document.getElementById("odleglosc").value;

if(liczba1){
    if (liczba1 <= 3){
        var koszt = "Darmowa dostawa";
    }
    else if (liczba1 >= 3 && liczba1 <= 10){
        var koszt = "Koszt wynosi 5zł";
    }
    else if (liczba1 > 10 && liczba1 <=50){
        var koszt = "Koszt wynosi 10zł";
    }
    else if (liczba1 > 50){
        var koszt = "Za daleko od pizzeri";
    }
    document.getElementById("wynik").innerHTML = "<p id='koszt'>" + koszt + "</p>";
}
})

function wysuwanie(){
    document.getElementById("odleglosc").value = "";
    document.getElementById("liczenie").style.visibility = "visible";
        if(document.getElementById("liczenie").style.opacity = "0"){
        document.getElementById("liczenie").style.opacity = "1";
    }
}

function wygasz() {
    
    document.getElementById("liczenie").style.visibility = "hidden";
    document.getElementById("liczenie").style.opacity = "0";
    document.getElementById("koszt").style.opacity = "0";
}


function dodawanie(x, y){
    
    document.getElementById("zamowienie").innerHTML += y + " - " + x+"&nbsp;zł <br>";
    

    var rob = document.getElementById("zaplata").innerHTML;
    
    ostatnie = Number(rob) + parseFloat(x);
    document.getElementById("zaplata").innerHTML = ostatnie.toFixed(2);
    
}

