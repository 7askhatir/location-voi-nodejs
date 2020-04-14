var X= document.getElementsByClassName("reservation")[0];
function close1(){

    X.style="visibility: hidden;";
   
 
 }
 function reserver_maintent()
 {
  X.style="visibility: visible;";
 
 }
 function link(){
    
     window.location.href="\inscription";
     
 }
 function valide_reserver(){
     

  
 }
 function reserver_mnt(){
       var firstDat = new Date(document.getElementById('data_2').value);
       var lastDat = new Date(document.getElementById('data_3').value); 
       var permer = new Date(document.getElementById('data_1').value);
       var o = document.getElementById('per');    
       var nowDate = new Date(Date.now());
       var periode = (lastDat - firstDat) / (3600*1000*24);
       
       var annee_day = nowDate.getFullYear();
       var annee_permer = permer.getFullYear();
       var nowpermer = (annee_day - annee_permer );
       if( nowpermer> 2){

       

       if(periode > 0){
                  document.getElementById('txtt').value= "  " +"Vous avez reserver cette voiture "+ " "+periode + "J";

       }
       else{
        document.getElementById('txtt').value="Votre date de departe Et inncorect !!!!!!";
        document.getElementById('txtt').value.style="color-text:red;";
       
       }
    }
    else {
        document.getElementById('txtt').value="Votre Permer et n'est  depacer 2 ans  ";

    }
 }