const express = require('express');  
const bodyParser = require('body-parser');  
const path = require('path');  
const NodeCouchdb = require('node-couchdb');  
  
const couch = new NodeCouchdb({  
auth:{  
    user: 'admin',  
    password: 'admin'  
}  
});  


const dbName = 'suscriptores';
const viewUrl = '_design/all_s/_view/all';

couch.listDatabases().then(function(dbs){  
console.log(dbs);  
});  
  
const app = express();  
app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));  
app.use (bodyParser.json());  
app.use(bodyParser.urlencoded({extended: false}));  

app.get('/suscripciones', function(req,res){  
 couch.get(dbName, viewUrl).then(
     function(data, headers, status){
         console.log(data.data.rows);
        res.render('index',{
            suscriptores:data.data.rows
        });
     },
     function(err){
        res.send(err);
     });
});  

app.get('/suscripciones2', function(req,res){  
    couch.get(dbName, viewUrl).then(
        function(data, headers, status){
            console.log(data.data.rows);
           res.render('reporte2',{
               suscriptores:data.data.rows
           });
        },
        function(err){
           res.send(err);
        });
   });  

app.get('/home', function(req,res){  
    couch.get(dbName, viewUrl).then(
        function(data, headers, status){
            console.log(data.data.rows);
           res.render('home',{
               suscriptores:data.data.rows
           });
        },
        function(err){
           res.send(err);
        });
   });  


   app.get('/agregar', function(req,res){  
    couch.get(dbName, viewUrl).then(
        function(data, headers, status){
            console.log(data.data.rows);
           res.render('agregar',{
               suscriptores:data.data.rows
           });
        },
        function(err){
           res.send(err);
        });
   });    

   app.get('/cancelar', function(req,res){  
    couch.get(dbName, viewUrl).then(
        function(data, headers, status){
            console.log(data.data.rows);
           res.render('cancelar',{
               suscriptores:data.data.rows
           });
        },
        function(err){
           res.send(err);
        });
   });    

   app.get('/cancelar2', function(req,res){  
    couch.get(dbName, viewUrl).then(
        function(data, headers, status){
            console.log(data.data.rows);
           res.render('cancelar2',{
               suscriptores:data.data.rows
           });
        },
        function(err){
           res.send(err);
        });
   });    

app.listen(3000, function(){  
 console.log('Server is started on Port 3000');  
});  