const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// CONFIGURACION DE BASE DE DATOS

const connection = mysql.createConnection({
    host: 'mysql-22986-0.cloudclusters.net',
    port: '22986',
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
        '/agregar  | Es un metodo POST para agregar pacientes - Usar Body\n' +
        '/agregarDoc |Es un metodo POST para agregar doctores - Usar Body\n' +
        '/listar/:id  | Obtenemos el paciente por ID \n' +
        '/eliminar/:id  | Eliminamos el paciente mediante el ID \n' +
        '/modificar/:id  | Metodo para modificar paciente - Campos a modificar: Nombre - Telfono - Direccion');
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


// ELIMINAR PACIENTE

app.delete('/eliminar/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM paciente WHERE id= ${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        res.send('Paciente eliminado');
    });
});


// MODIFICAR PACIENTE

app.put('/modificar/:id', (req, res) => {
    const { id } = req.params;
    const {nombre, telefono, direccion } = req.body;
    var sql = `UPDATE paciente SET nombre = '${nombre}', telefono='${telefono}', direccion='${direccion}' WHERE id =${id}`;
    
    if (nombre != null) {
        if (telefono != null) {
            if (direccion != null) {
                res.send('SI FUNCIONA');
                sql = `UPDATE paciente SET nombre = '${nombre}', telefono='${telefono}', direccion='${direccion}' WHERE id =${id}`;
            } else {
                sql = `UPDATE paciente SET nombre = '${nombre}', telefono='${telefono}' WHERE id =${id}`;
            }
        } else if (direccion != null) {
            sql = `UPDATE paciente SET nombre = '${nombre}', direccion='${direccion}' WHERE id =${id}`;
        } else {
            sql = `UPDATE paciente SET nombre = '${nombre}' WHERE id =${id}`;
        }
    } else if (telefono != null) {
        if (direccion != null) {
            sql = `UPDATE paciente SET telefono='${telefono}', direccion='${direccion}' WHERE id =${id}`;
        } else {
            sql = `UPDATE paciente SET telefono='${telefono}' WHERE id =${id}`;
        }
    } else if (direccion != null) {
        sql = `UPDATE paciente SET direccion='${direccion}' WHERE id =${id}`;
    }

    
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Paciente modificado!');
    });
});
 

// VERIFICAR CONEXION
connection.connect(error => {
    if (error) throw error;
    console.log('Base dato corriendo sin problemas.');
});

app.listen(PORT, () => console.log(`Server levantado en el puerto ${PORT}`));