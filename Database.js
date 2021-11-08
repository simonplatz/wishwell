const { Pool, Client } = require('pg')

class user  {
    constructor(userid,name,email,password,dateofbirth,shareduserid){
        this.userid = userid
        this.name = name
        this.email = email
        this.password = password
        this.dateofbirth = dateofbirth
        this.shareduserid = shareduserid

    };
    getUser( Email) {
        client.query('SELECT * from usertable where email =' +Email, (err, res) => {
            console.log(err, res)
            client.end()
            const user = new user(res.row.userid,res.row.name,res.row.email,res.row.password,res.row.dateofbirth, res.row.shareduserid);
            return user 
          })
      }

      createUser(name,email,password,dateofbirth){
          let values = [this.#createuserid, name, email,password,dateofbirth]
        client.query('Insert into usertable(userid, name, email, password,'
        +' dataofbirth, shareduserid) Values($1,$2,$3,$4,$5,$6)'
        , values, (err, res) => {
            console.log(err, res)
            client.end() 
        })
      }

      #createuserid(){
        let uuid =  Date.now() + math.floor(Math.random()*1000)
        return uuid.toString() }
}
const client = new Client({
    user: 'dbuser',
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 3211,
  })

  function connectToDb() {
      client.connect()
  }


  

  