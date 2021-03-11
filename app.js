const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// CONFIGURACION DE BASE DE DATOS

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'angel',
    password: 'angel4317',
    database: 'Medikapp'
  });


// Rutas
app.get('/', (req, res) => {
    res.send('CRUD Paciente');
});

// Verificar 

connection.connect(error => {
    if(error) throw error;
    console.log('Base de datos funcionando');
});

app.listen(PORT, ()=> console.log ('Server funcionando en el puerto: ${PORT}'));