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

// RUTA
app.get('/', (req, res) => {
    res.send('Eiteck Back - CRUD PACIENTE \n' +
            'Metodos Disponibles: \n'+
            '/listarDoc  | Obtenemos los doctores disponibles \n' +
            '/listar   | Obtenemos todos los pacientes');
});

// LISTAR DOCTORES
app.get('/listarDoc', (req, res) => {
    const sql = 'SELECT * FROM doctor';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});

// LISTAR PACIENTES
app.get('/listar', (req, res) => {
    const sql = 'SELECT * FROM paciente';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});


// VERIFICAR CONEXION
connection.connect(error => {
    if (error) throw error;
    console.log('Base dato corriendo sin problemas.');
});

app.listen(PORT, () => console.log(`Server levantado en el puerto ${PORT}`));