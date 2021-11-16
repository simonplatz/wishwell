const { Pool, Client } = require('pg')
var express = require('express')
var app = express()
const bodyParser = require("body-parser");
const router = express.Router()
//import { database } from 'pg/lib/defaults';
//import Database from './Database.js'
var d = require('./Database.js');
var passwordHash = require('./PasswordHash')
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


var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'user123',
    port: 5432,
  })

connectToDb()
testCheckPassword()

var callback1 = function (data) {
    return data
}
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
    let password = passwordHash.hashPassword(req.params.password)
    let dateofbirth = req.params.dateofbirth
   res.end( d.createUser(name,email,password,dateofbirth))})
  
  

function testCheckPassword() {
    
    console.log(checkPassword('email@hotmail.com', 'password'))
    //console.log(array)
}


function createwish(name, price, link, wishlistid){

    pool.query('SELECT * from usertable where email =$1'
    , [name,price,link,wishlistid], (err, res) => {
        console.log(err, res)
        //client.end() 
    })

  }
async function  checkPassword(email, password1, callback1) {
    pool.query('SELECT * from usertable where email =$1' , [email],(err, results) => {
        if(err){console.log("lortet virker ikke")}else

        if(passwordHash.comparePassword(password1, results.rows[0].password)){
        array = results.rows[0]
            //console.log('true  det viker altså'+results.rows[0].password)
            console.log(array)
         return callback1(true) //true 
        } else {
        array = results.rows[0]
            console.log('password matcher ikke') 
            return false
        }
    })


} 

app.get("/getUser/:email",async function(req,res) {
await pool.query('SELECT * from usertable where email =$1' , [req.params.email],function (err, results)  {
        if(err){console.log("lortet virker ikke")}else 
        array = results.rows
            console.log("abc")
         return  array   + res.json(array)  //array 
      })
   console.log(array)
})


app.put("/updateUser/:password/:email/:dateofbirth",function(req,res) {
    pool.query("Update usertable set password = $1, email = $2, dataofbirth =$3 where email =$2", [req.params.password,req.params.email,req.params.dateofbirth],function (err, results)  {
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
   await pool.query('select * from wishlist join user_wishlist on wishlist.wishlistid ='
    +' user_wishlist.wishlistid where userid = $1' , [req.params.userid],function (err, results)  {
           if(err){console.log("lortet virker ikke")}else 
            array = results.rows
   
               console.log(array)
            return array + res.json(array)   //res.json(results.rows[0])  //array 
         })
         console.log(array)
   })
   app.get("/getwishlist/:wishlistid",async function(req,res) {
   await pool.query('select * from wishlist join user_wishlist on wishlist.wishlistid ='
    +' user_wishlist.wishlistid where wishlist.wishlistid = $1' , [req.params.wishlistid],function (err, results)  {
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


   app.get("/getwishes/:wishlistid",async function (req,res) {
   await pool.query('select * from wish where wishlistid = $1' , [req.params.wishlistid],function (err, results)  {
           if(err){console.log("lortet virker ikke")}else 
            array = results.rows
   
               console.log(array)
            return array + res.json(array)   //res.json(results.rows[0])  //array 
         })
         console.log(array)
   })

   app.get("/getwish/:wishid",async function (req,res) {
   await pool.query('select * from wish where wishid = $1' , [req.params.wishid],function (err, results)  {
           if(err){console.log("lortet virker ikke")}else 
            array = results.rows
   
               console.log(array)
            return array + res.json(array)   //res.json(results.rows[0])  //array 
         })
         console.log(array)
   })

   
app.put("/deleteUser/:email",function(req,res) {
    pool.query("Update usertable set email = $1, deleted = true where email =$2", [req.params.email],function (err, results)  {
        if(err){
            console.log("lortet virker ikke")
        }else 
        array = res.json(results.rows[0])
            console.log(results.rows[0])
            console.log("abc")
            res.end
      })

})

app.put("/updateWishlist/:name/:wishlistid",function(req,res) {
    pool.query("Update wishlist set name = $1 where wishlistid =$2", [req.params.name,req.params.wishlistid],function (err, results)  {
        if(err){
            console.log("lortet virker ikke")
            console.log()
            res.end
        
        }else 
    
        
        array = res.json(results.rows[0])


            console.log(results.rows[0])
            console.log("abc")
            res.end
        
      })

})

app.put("/updateWish/:name/:wishid/:link/:price",function(req,res) {
    pool.query("Update wishlist set name = $1, link = $2, price = $3 where wishlistid =$2"
    , [req.params.name,req.params.link,req.params.price,req.params.wishlistid],function (err, results)  {
        if(err){
            console.log("lortet virker ikke")
            console.log()
            res.end
        
        }else 
    
        
        array = res.json(results.rows[0])


            console.log(results.rows[0])
            console.log("abc")
            res.end
        
      })

})

app.post("/shareWishlist/:shareduserid/:wishlistid", function (req,res) {
    pool.query("insert into shared(shareduserid,wishlistid) values($1,$2)",[req.params.shareduserid,req.params.wishlistid],function (err,results) {
        console.log(err, res)
        //client.end() 
    })
})