const { Pool, Client } = require('pg')
module.exports = {connectToDb, createUser, createWishlist, createwish}

//import { Pool, Client } from 'pg'
var array =[]
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
 function createUser(name,email,password,dateofbirth){
    let values = [createuserid(), name, email,password,dateofbirth, createSharedUserId()]
    console.log(values)
    pool.query('Insert into usertable(userid, name, email, password,'
    +' dataofbirth, shareduserid) Values($1,$2,$3,$4,$5,$6)'
    , values, (err, res) => {
        console.log(err, res)
        //client.end() 
    })
  }
var pool = new Pool({
    user: 'wishwell',
    host: 'localhost',
    database: 'wishwell_data',
    password: 'wishwellisgreat',
    port: 5432,
  })

   function connectToDb() {
     
      pool.connect(function(err) {
        if(err) throw err;
        console.log("connected to db")
      })
      pool.end
  } 

  function createuserid(){
    let uuid =  (Date.now() + Math.floor(Math.random()*100)).toString()
    return uuid }
  function createSharedUserId() {
    let uuid = Math.floor(Math.random()*10000)+Math.floor(Math.random()*10000)+ Math.floor(Math.random()*10000)
    return uuid
  }
  function createwishlistid() {
    let uuid = (Date.now() + Math.floor(Math.random()*555)).toString()
    return uuid
  }
  function createid() {
    let id = Math.floor(Math.random()*10000)+Math.floor(Math.random()*10000)+ Math.floor(Math.random()*10000)
    return id
  }

  function createWishlist(userid,name){
    let wishlistid = createwishlistid()
    let id = createid().toString()
    let values = [userid, name, wishlistid , createid()]
    console.log(values)

    console.log("$2",values)
    pool.query('Insert into wishlist(name, wishlistid  ) Values($1,$2)'
    , [name,wishlistid], (err, res) => {
        console.log(err, res)
        //client.end() 
    })
    pool.query('Insert into user_wishlist(id, userid, wishlistid) Values($1,$2,$3)'
    , [id,userid,wishlistid], (err, res) => {
        console.log(err, res)
        //client.end() 
      })


  }

  function createwish(name, price, link, wishlistid, pictureLink, desc, manufacturer){

    pool.query('Insert into wish(name,price,link, wishlistid, pictureLink, description, manufacturer  ) Values($1,$2,$3,$4, $5,$6,$7)'
    , [name,price,link,wishlistid, pictureLink,desc,manufacturer], (err, res) => {
        console.log(err, res)
        //client.end() 
    })

  }


  function  updateName(name, email){
        client.query('Update usertable set name = $name where email = $email',name, email, (err,res)=>{})
      }


  
