function aktywne(x){
      if(document.getElementById(x).style.outline){
        document.getElementById(x).style.outline = ""; 
        document.getElementById(x).style.color = "white";
      }
      else{  
        document.getElementById(x).style.outline = "1px solid #10ac84"; 
        document.getElementById(x).style.color = "#10ac84"; 
      }
}




function opiniuj(){

    var imie = document.getElementById("nazwa").value;
    var tresc = document.getElementById("tresc").value;
    var lista = document.getElementById("opinie");

    if(tresc && imie){
    lista.innerHTML += "<p class='opinia'>" + imie + ": " + tresc+ "</p>" 
    }




}