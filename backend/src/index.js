const express = require('express');
const routes = require('./routes');

const app = express();

const routes = express.Router();

app.use(express.json());
app.use(routes);
app.listen(3333);
/**
 * Rota / Recurso
 */
/**
 * Método HTTP:
 * GET: Buscar/listar um informação do back-end
 * POST: Cria um informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deleta um informação no back-end
 */
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?"(Filtrops, paginação)
 * Route Params: Parametro utilizados para indentificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar um usuario
 */
/**
 * Bancos de dados
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Mocrosoft SQL Server
 * NoSQL: MongoDB(facil de trabalhar)
 */
/**
 * Comunicação com o banco de dados
 * Drives: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */