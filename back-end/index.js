//config database conection
const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'admin',       // Usuário do PostgreSQL
    host: 'localhost',         // Endereço do PostgreSQL
    database: 'contextUsersProject',     // Nome do banco de dados
    password: 'admin123',     // Senha do usuário
    port: 5432,
});

const app = express();
app.use(express.json());

// Testando a conexão
app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao consultar dados', error);
        res.status(500).send('Erro no servidor');
    }
});

app.post('/users', async (req, res) => {
    try {
        const result = await pool.query(
            'INSERT INRO users (id,email,senha,data_cadastro) VALUES ($1, $2, $3, $4) RETURNING *', 
            [
                '1abc2', 
                'jessicasilva.js1314@gmail.com', 
                'admin123', 
                '09/10/2024'
            ]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao inserir usuário', error);
        res.status(500).send('Erro no servidor');
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});