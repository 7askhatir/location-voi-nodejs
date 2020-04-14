var express = require('express')
let app =express()
var fs= require('fs');
var path = require('path')
var bodyParser= require('body-parser')


   
app.use('/static',express.static('public'))

var urlencodedParcer=bodyParser.urlencoded({extended:false})
app.set('view engine','ejs')
var routes1=require('./routes/index');
app.use('/home',routes1);
var user =require('./routes/inscr');
app.use('/inscription',user);
var add=require('./routes/add-nodejs');
app.use('/add',add);

app.post("/inscription",urlencodedParcer, function(req, res,next) {
    fs.readFile('myjsonfile.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        else{
    data =JSON.parse(jsonString) ;
    data.push(req.body);
    dataUpdated=JSON.stringify(data);
    fs.writeFileSync('myjsonfile.json', dataUpdated );
    console.log('save')
    res.end();
        }
})




    res.redirect('/inscription')
});




app.post("/add",urlencodedParcer, function(req, res,next) {
    

    fs.readFile('Produit.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        else{
    data =JSON.parse(jsonString) ;
    var value=req.body;
    var id =Math.floor(Math.random() * 100000);
    var f={id:id,value}
    data.push(f);
    dataUpdated=JSON.stringify(data);
    fs.writeFileSync('Produit.json', dataUpdated );
    console.log('save')
    res.end();
    
        }      
    });res.redirect('/home') 
    
      
});
app.post("/sup",urlencodedParcer, function(req,res,next){
   var up=req.body.ID;
   var T=[]
   var test =false;
   var j ;
   var obj = JSON.parse(fs.readFileSync('Produit.Json', 'utf8'));
  for (let i = 0 ; i <obj.length; i++) {
      if(obj[i].id==up){
      test =true;
      j=i;
      
      break
}
     
  }
  if(test==true){
    
    fs.readFile('Produit.Json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
    data =JSON.parse(jsonString) ;
    data.splice(req.body.j,1);
    dataUpdated=JSON.stringify(data);
    fs.writeFileSync('Produit.Json', dataUpdated);
    res.end();

}) 

      
  
    res.redirect('/home') 
  }
  else{
      res.render('add',{ name:"votre ID n'existe Pas !!!!!!!" })
      res.redirect('/add') 

  }
 

   
   

})
app.post("/mod",urlencodedParcer, function(req,res,next){
    var up=req.body.ID;
    var T=[]
    var test =false;
    var j ;
    var obj = JSON.parse(fs.readFileSync('Produit.Json', 'utf8'));
   for (let i = 0 ; i <obj.length; i++) {
       if(obj[i].id==up){
       test =true;
       j=i;
       
       break
 }
      
   }
   if(test==true){
    var obj = JSON.parse(fs.readFileSync('Produit.Json', 'utf8'));
    res.render('add',{ T:obj[j] ,idd:j })
    // res.redirect('/add') 
   }
   else{
       res.render('add',{ name1:"votre ID n'existe Pas !!!!!!!" })
    //    res.redirect('/add') 
 
   }
 })

 app.post('/ok',urlencodedParcer, function(req,res,next){
    var id=req.body.id
    if (id==undefined){
        id=0
    }
    var obj = JSON.parse(fs.readFileSync('Produit.Json', 'utf8'));
    obj[id].value.prix=req.body.prix
    obj[id].value.module=req.body.module
    obj[id].value.Url=req.body.Url
    obj[id].value.version=req.body.version
    dataUpdated=JSON.stringify(obj);
    fs.writeFileSync('Produit.json', dataUpdated);

    res.redirect('/home')
 })






   


app.listen(8008)
