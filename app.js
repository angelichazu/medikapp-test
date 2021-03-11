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
        'Metodos Disponibles: \n' +
        '/listarDoc  | Obtenemos los doctores disponibles \n' +
        '/listar   | Obtenemos todos los pacientes \n' + 
        '/agregar  | Es un metodo POST para agregar pacientes \n' +
        '/agregarDoc |Es un metodo POST para agregar doctores \n' +
        '/listar/:id  | Obtenemos el paciente por ID');
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


// AGREGAR DOCTOR

app.post('/agregarDoc', (req, res) => {
    const sql = 'INSERT INTO doctor SET ?';

    const doctorObj = {
        nombre: req.body.nombre,
        especialidad: req.body.especialidad
    };

    connection.query(sql, doctorObj, error => {
        if (error) throw error;
        res.send('Doctor creado!');
    });
});


// AGREGAR PACIENTE

app.post('/agregar', (req, res) => {
    const sql = 'INSERT INTO paciente SET ?';

    const pacienteObj = {
        id_doctor: req.body.id_doctor,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    };

    connection.query(sql, pacienteObj, error => {
        if (error) throw error;
        res.send('Paciente creado!');
    });
});


//LISTAR PACIENTE POR ID

app.get('/listar/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM paciente WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
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