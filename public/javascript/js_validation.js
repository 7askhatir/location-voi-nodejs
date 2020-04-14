var b_name =false;
var b_prenome =false;
var b_civile =false;
var b_email =false;
var b_email2 =false;
var b_pass =false;
var b_pass2 =false;


function select() {
    var x = document.getElementById("civilite").value;
  if( x!=0)
  {
    b_civile =true;
    document.getElementById("civilite").style="border-color: #3498db ";
  }
  else
  {
    b_civile =false;
    document.getElementById("civilite").style="border-color: red";
  }
  return b_civile;
}

function supprimer(txt_defaut, nom_controle){
    if(document.getElementById(nom_controle).value == txt_defaut)
    {
        document.getElementById(nom_controle).value='';
    }
    
      
}
function rempler(txt_defaut, nom_controle)
{
    if(document.getElementById(nom_controle).value =='' )
    {
        document.getElementById(nom_controle).value=txt_defaut;
    }
}

function envoyer(){
    if(b_name==true && b_prenome==true && b_civile==true  
         && b_email==true && b_email2==true && b_pass==true && b_pass2==true   )
         {
            document.getElementById("message").innerText="votre inscription et valide"
            document.getElementById("message").style="color:green;";

         }
         else{
            document.getElementById("message").innerText="la formolaire ne pas complet";
            document.getElementById("message").style="color:red;";
            
             



             }
         }
         

        function test(txt_defaut, nom_controle){
            var longeur =  document.getElementById(nom_controle).value.length;



                //    validation d email




            if(nom_controle == "mail_inscr" ||nom_controle== "mail2_inscr" )
            {
                if(document.getElementById(nom_controle).value.indexOf('@')==-1 ||document.getElementById(nom_controle).value.indexOf('.')==-1 
                || document.getElementById(nom_controle).value=="" || document.getElementById(nom_controle).value== txt_defaut  )
                {
                    document.getElementById(nom_controle).style="border-color:red;";
                    document.getElementById("message").innerText="votre email ne pas correct";
                    b_email=false;
                }
                else if(document.getElementById("mail_inscr").value  != document.getElementById("mail2_inscr").value )
                {
                    document.getElementById(nom_controle).style="border-color:red;";
                    document.getElementById("message").innerText="les deux email n'est pas identique";
                    b_email2=false;
                    b_email=false;
                }
                else
                {
                    document.getElementById(nom_controle).style="border-color:#3498db;";
                    b_email2=true;
                    b_email=true;
                    document.getElementById("message").innerText="";
                }

            }




            // validation de mode pass





            else if (nom_controle== "mp_inscr" ||nom_controle== "mp_conf")
            {
                if(document.getElementById("mp_inscr").value  != document.getElementById("mp_conf").value)
                {
                    document.getElementById(nom_controle).style="border-color:red;";
                    document.getElementById("message").innerText="les deux password n'est pas identique"; 
                    b_pass=false;
                    b_pass2=false;

                }
                else{
                    document.getElementById(nom_controle).style="border-color:#3498db;";
                    document.getElementById("message").innerText=""; 
                    b_pass=true;
                    b_pass2=true;

                }

            }
       
       
        
         else if(longeur < 4 || document.getElementById(nom_controle).value == txt_defaut )
        {
            document.getElementById(nom_controle).style="border-color: red";
            switch(nom_controle){
                case "nom" : b_name =false; 
                break;
                case "prenom" : b_prenome =false; 
                break;
                case "mail_inscr" : b_email =false; 
                break;
                case "mp_inscr" : b_pass =false; 
                break;
        }



        }
        else document.getElementById(nom_controle).style="border-color: #3498db";
        switch(nom_controle){
            case "nom" : b_name =true; 
            break;
            case "prenom" : b_prenome =true; 
            break;

        }
        }
       

   




        
        
       

    

        

