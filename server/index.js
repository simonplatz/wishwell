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
const port = 4000;
require('dotenv').config()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.listen(4000, () => console.log("virk"))
//d.connectToDb()


var pool = new Pool({
    user: process.env.username,
    host: 'localhost',
    database: process.env.dbName,
    password: process.env.password,
    port: 5432,
  })

connectToDb()
testCheckPassword()

function callback1 (data) {
    return data
}
function connectToDb() {
     
    pool.connect(function(err) {
      if(err) throw err;
      console.log("connected to db")
    })
    pool.end
} 

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
    
    console.log(checkPassword('email@hotmail.com', 'password', callback1))
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

app.put("/deleteWishlist/:wishlistid/",function(req,res) {
	pool.query("DELETE from wish wish.wherelistid = $1", [req.params.wishlistid.toString()], function (err, results) {
		if(err) {
			console.log(err)
		}})
	

    pool.query("DELETE from wishlist where wish.wishlistid = $1", [req.params.wishlistid.toString()],function (err, results)  {
        if(err){
            console.log("lortet virker ikke")
		console.log(err)
            res.end()
        
        } else 
            res.end()
	})
})


app.put("/deleteWish/:wishid/",function(req,res) {
	pool.query("DELETE from wish where wish.wishid = $1", [req.params.wishid], function (err, results) {
		if(err) {
			console.log(err)
			res.end()
		}
		else {
			res.end()

	}})
	

})


app.get("/getUser/:email",async function(req,res) {
await pool.query('SELECT * from usertable where email =$1' , [req.params.email],function (err, results)  {
        if(err){
		console.log("lortet virker ikke")
		return "error"

	}else 
        array = results.rows
            console.log("abc")
         return  array   + res.json(array)  //array 
      })
   console.log(array)
})


app.put("/updatePassword/:newpassword/:userid/",function(req,res) {
    pool.query("update usertable set password = $1 where userid =$2", [req.params.newpassword,req.params.userid],function (err, results)  {
        if(err){
            console.log("lortet virker ikke")
            res.end()
        
        } else 
            res.end()
	})
})

app.put("/updateEmail/:email/:userid/",function(req,res) {
    pool.query("update usertable set email =$1 where userid =$2", [req.params.email,req.params.userid],function (err, results)  {
        if(err){
            console.log("lortet virker ikke")
            res.end()
        
        } else 
            res.end()
	})
})

app.put("/updateBirth/:dateofbirth/:userid", function(req,res) {
	const birthString = req.params.dateofbirth.toString()
	console.log(birthString)
    pool.query("update usertable set dataofbirth = $1 where userid = $2", [birthString, req.params.userid], function (err, results)  {
        if(err){
            console.log("lortet virker ikke")
		console.log(err)
            res.end()
        
        } else 
            res.end()
	})
})

app.put("/updateName/:name/:userid", function(req,res) {
    pool.query("update usertable set name = $1 where userid = $2", [req.params.name,req.params.userid],function (err, results)  {
	console.log("name " + req.params.name)
	console.log("id " + req.params.userid)
        if(err){
            console.log("lortet virker ikke")
		res.end()
	} else 
	    res.end()
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
    +' user_wishlist.wishlistid where userid = $1', [req.params.userid], function (err, results)  {
           if(err){
		   console.log(err)
		   console.log("lortet virker ikke")

	   }else 
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

   app.post('/createwish/', async function(req,res){
    res.send(req.params)
    console.log(req.body)
    let name = req.body.name
    let price = req.body.price
    let link = req.body.link
    let wishlistid = req.body.wishlistid
    let picturelink = req.body.picturelink
	   let description = req.body.description
	   let manufacturer = req.body.manufacturer
   res.end( d.createwish(name,price,link,wishlistid, picturelink, description, manufacturer))})



   app.get("/getwishes/:wishlistid",async function (req,res) {
   await pool.query('select * from wish where wish.wishlistid = $1' , [req.params.wishlistid],function (err, results)  {
           if(err){
		   console.log(err) 
		   console.log("lortet virker ikke")
	   }else  {

            array = results.rows
   
               console.log(array)
            return array + res.json(array)   //res.json(results.rows[0])  //array 
         }})
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
            res.end()
        
        }else 
            res.end()
        
      })

})

app.put("/updateWish/",function(req,res) {

    let name = req.body.name
    let price = req.body.price
    let link = req.body.link
    let wishid = req.body.wishid
    let picturelink = req.body.picturelink
	   let description = req.body.description
	   let manufacturer = req.body.manufacturer


console.log(req.body)

    pool.query("Update wish set name = $1, link = $2, price = $3, picturelink = $5, description = $6, description = $7,  where wishid = $4"
    , [name,link,price,wishid, picturelink, description, manufacturer],function (err, results)  {
        if(err){
            console.log("lortet virker ikke")
            console.log()
            res.end()
        
        }else 
            res.end()
      })

})

app.post("/shareWishlist/:shareduserid/:wishlistid", function (req,res) {
    pool.query("insert into shared(shareduserid,wishlistid) values($1,$2)",[req.params.shareduserid,req.params.wishlistid],function (err,results) {
        console.log(err, res)
        //client.end() 
    })
})

app.get('/getSharedwishlists/:shareduserid', function (req,res) {
    pool.query("select * from shared where shareduserid = $1",[req.params.shareduserid],function (err,results) {
        console.log(err, res)
        //client.end()


        array = results.rows
   
               console.log(array)
            return array + res.json(array) 
        
})
})
