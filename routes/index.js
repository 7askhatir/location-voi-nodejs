var express =require('express');
var router =express.Router();
var fs =require('fs')
var app=express()

router.get('/',function(req,res,next){
   
   var obj = JSON.parse(fs.readFileSync('Produit.Json', 'utf8'));
   var ld=[]
   var cc=[]
  for (let i = 0 ; i <obj.length; i++) {
      ld[i]=obj[i]
     
      
  }
   res.render('index',{ vd:ld })

 
 
       
    
    
})



module.exports=router;