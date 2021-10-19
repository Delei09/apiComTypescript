import mysql from 'mysql'

export  const conexao = mysql.createConnection({
    host : 'localhost' ,
    port : 3306,
    password : 'root' ,
    database : 'agendaPetshop' ,
    user : 'root'
})