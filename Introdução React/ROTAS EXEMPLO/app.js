import express from 'express';

const app = express();

app.get('/home', (req, res) => {
    res.send('home GET')
});
app.post('/cadastro', (req, res) => {
    res.send('Cadastro  GET')
});
app.put('/atualizar', (req, res) => {
    res.send('atualizar GET')
});
app.delete('/deletar', (req, res) => {
    res.send('deletar GET')
});

app.listen(3000, '127.0.0.1', () => {
    console.log('ta rodando!')
});