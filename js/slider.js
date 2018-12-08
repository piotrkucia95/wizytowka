var number = Math.floor(Math.random()*4) + 1;
        
function hidePicture(){
    $("#slider").fadeOut(2000);    
}
        
var timer1 = 0;
var timer2 = 0;   
        
function pictureSlider(){
        
    number++;
    if(number>4) number = 1;
    
    if(screen.width > 823){
        var plik = "<img src=\"img/slide" + number + ".jpg\"/>";
    } else {
        var plik = "<img src=\"img/slideS" + number + ".jpg\"/>";
    }
    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(2000);
            
    timer1 = setTimeout("pictureSlider()", 4500);
    timer2 = setTimeout("hidePicture()", 2500);
            
}