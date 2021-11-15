const { Pool, Client } = require('pg')
var express = require('express')
var app = express()
const bodyParser = require("body-parser");
const router = express.Router()
//import { database } from 'pg/lib/defaults';
//import Database from './Database.js'
var d = require('./Database.js');
const http = require('http');
const { rows } = require('pg/lib/defaults');
//var a = require('./Database.js').User
const hostname = '127.0.0.1';
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//app.use("/", router)
/*const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  
  console.log("hvad sker der")
  //res.setHeader('Content-Type', 'text/plain');
  res.end();
  console.log("123")

});*/

var array = []

class User  {
    constructor(userid,name,email,password,dateofbirth,shareduserid){
        this.userid = userid
        this.name = name
        this.email = email
        this.password = password
        this.dateofbirth = dateofbirth
        this.shareduserid = shareduserid

    };
}

app.listen(3000, () => console.log("virk"))
//d.connectToDb()

connectToDb



function connectToDb() {
     
    pool.connect(function(err) {
      if(err) throw err;
      console.log("connected to db")
    })
    pool.end
} 
/*server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

app.post('/createUser/:name/:email/:password/:dateofbirth', async function(req,res){
    res.send(req.params)
    console.log(res.dateofbirth)
    console.log("abc")
    let name = req.params.name
    let email = req.params.email
    let password = req.params.password
    let dateofbirth = req.params.dateofbirth
   res.end( d.createUser(name,email,password,dateofbirth))})
  
  
   var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'user123',
    port: 5432,
  })


app.get("/getUser/:email",async function(req,res) {
 pool.query('SELECT * from usertable where email =$1' , [req.params.email],function (err, results)  {
        if(err){console.log("lortet virker ikke")}else 
        array = res.json(results.rows[0])
            console.log("abc")
         return  array  //res.json(results.rows[0])  //array 
      })
      console.log(array)
})


app.put("/updateUser/:password/:email",function(req,res) {
    pool.query("Update usertable set password = $1, email = $2 where email =$2", [req.params.password,req.params.email],function (err, results)  {
        if(err){
            console.log("lortet virker ikke")
            console.log()
            res.end
        
        }else 
        //console.log(results.rows[0])
        //client.end()
        //console.log(results)
       /*array = [results.rows[0].userid,results.rows[0].name,results.rows[0].email,results.rows[0].password,
        results.rows[0].dateofbirth, results.rows[0].shareduserid]
        */
        
        array = res.json(results.rows[0])

        //var user = new User());   
        //console.log(user)
        //console.log(array)

            console.log(results.rows[0])
            console.log("abc")
            res.end
         //return  array  //res.json(results.rows[0])  //array 
      })

})

app.post('/createWishlist/:userid/:name', function(req,res){
    res.send(req.params)
    //console.log(res.dateofbirth)
    console.log("abc")
    let name = req.params.name
    let userid = req.params.userid
    
    res.end( d.createWishlist(userid,name))


})

app.get("/getwishlists/:userid",async function(req,res) {
    pool.query('select * from wishlist join user_wishlist on wishlist.wishlistid ='
    +' user_wishlist.wishlistid where userid = $1' , [req.params.userid],function (err, results)  {
           if(err){console.log("lortet virker ikke")}else 
            array = results.rows
   
               console.log(array)
            return array + res.json(array)   //res.json(results.rows[0])  //array 
         })
         console.log(array)
   })


   app.post('/createwish/:name/:price/:link/:wishlistid', async function(req,res){
    res.send(req.params)
    console.log(res.dateofbirth)
    console.log("abc")
    let name = req.params.name
    let price = req.params.price
    let link = req.params.link
    let wishlistid = req.params.wishlistid
   res.end( d.createwish(name,price,link,wishlistid))})


   app.get("/getwishes",function () {
       
   })