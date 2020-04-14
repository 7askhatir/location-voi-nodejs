var x = 1;
slider(x);

function test(n) {
  slider(x += n);
}

function slider(n) {
  var photo = document.getElementsByClassName("mySlides");
  if (n > photo.length)
   {
     x = 1;
    }    
  if (n < 1)
   {
     x =photo.length;
    }
  for ( var i = 0; i < photo.length; i++)
   {
    photo[i].style.display = "none";  
   }
  
   photo[x-1].style.display = "block";  
  
}






