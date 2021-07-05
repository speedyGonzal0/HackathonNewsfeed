const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();

var db = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'newsfeed'
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true}));


  app.post("/api/register", (req, res)=>{

    const userName = req.body.userName;
    const email = req.body.email;
    const pass = req.body.pass;

    var sql = 'SELECT * FROM users WHERE user_name = ?';
    db.query(sql, [userName], (err, results)=>{
        if(err) throw err;

        if(results.length > 0){
            res.redirect('/');
        }
        else{
            const sqlInsert = "INSERT INTO users(user_name, email, password) VALUES (?, ?, ?)"
            db.query(sqlInsert, [userName, email, pass], (err, results)=>{
                console.log(results);
            })
        }
    })
  });



  app.post('/api/login', (req, res)=>{
    const userName = req.body.userName;
    const pass = req.body.pass;

    var sql = "SELECT * FROM users WHERE user_name=? AND password=?";
    db.query(sql,[userName,pass], (err, results)=>{
        if(err){
            res.send({err: err})
        }

        if(results.length > 0){
            res.send(results);
        }
        else{
            res.send({message: "Wrong username/password!"})
        }
    } )
  })




  app.post("/api/postsubmit", (req, res)=>{

    const title = req.body.title;
    const body = req.body.postBody;

    const sqlInsertPost = "INSERT INTO posts(post_title, post_body) VALUES (?, ?)"
    db.query(sqlInsertPost, [title, body], (err, results)=>{
        console.log(results);
      })
  });







app.listen(3001, (req, res) => {
    console.log('Server Running...');
})